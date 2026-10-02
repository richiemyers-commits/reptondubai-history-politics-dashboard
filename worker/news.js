export const newsSources = {
  '/api/bbc-politics': { name: 'BBC Politics', url: 'https://www.bbc.com/news/politics', feed: 'https://feeds.bbci.co.uk/news/politics/rss.xml', kind: 'rss' },
  '/api/cnn-politics': { name: 'CNN Politics', url: 'https://www.cnn.com/politics', kind: 'html' }
};

export function decodeText(value = '') {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (match, code) => {
      const n = code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : parseInt(code, 10);
      return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : match;
    })
    .replace(/&(amp|quot|apos|lt|gt|nbsp|rsquo|lsquo|rdquo|ldquo|ndash|mdash);/g, (_, key) => ({amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ',rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“',ndash:'–',mdash:'—'})[key])
    .replace(/\s+/g, ' ').trim();
}

function field(block, tag) {
  return decodeText(block.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1] || '');
}

function safeLink(value, source) {
  try {
    const url = new URL(value, source.url);
    const host = url.hostname.toLowerCase();
    const permitted = source.kind === 'rss' ? ['bbc.co.uk', 'bbc.com'] : ['cnn.com'];
    return url.protocol === 'https:' && permitted.some(domain => host === domain || host.endsWith('.' + domain)) ? url.href : '';
  } catch { return ''; }
}

export function parseHeadlines(text, source, now = Date.now()) {
  let items = [];
  if (source.kind === 'rss') {
    items = [...text.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map(([, block]) => ({
      title: field(block, 'title'), link: safeLink(field(block, 'link'), source), pubDate: field(block, 'pubDate'), dateOnly: false
    }));
  } else {
    for (const [, attrs, content] of text.matchAll(/<a\b([^>]*?)>([\s\S]*?)<\/a\s*>/gi)) {
      const title = content.match(/<span\b[^>]*class=["'][^"']*\bcontainer__headline-text\b[^"']*["'][^>]*>([\s\S]*?)<\/span>/i)?.[1];
      const href = attrs.match(/\bhref=["']([^"']+)["']/i)?.[1];
      if (!title || !href) continue;
      const link = safeLink(decodeText(href), source);
      const date = link.match(/\/(\d{4})\/(\d{2})\/(\d{2})\/politics\//);
      if (!date) continue;
      items.push({ title: decodeText(title), link, pubDate: `${date[1]}-${date[2]}-${date[3]}T00:00:00Z`, dateOnly: true });
    }
  }
  const seen = new Set();
  return items.filter(item => {
    const date = Date.parse(item.pubDate);
    if (!item.title || !item.link || seen.has(item.link) || !Number.isFinite(date) || date < now - 45 * 86400000 || date > now + 86400000) return false;
    seen.add(item.link);
    item.title = item.title.slice(0, 300);
    return true;
  }).slice(0, 12);
}

export async function getNewsResponse(path, fetcher = fetch, now = Date.now()) {
  const source = newsSources[path];
  if (!source) return Response.json({ error: 'News source not found.' }, { status: 404 });
  try {
    const response = await fetcher(source.feed || source.url, {
      headers: { 'User-Agent': 'ReptonDubaiPoliticsHeadlines/1.0', Accept: source.kind === 'rss' ? 'application/rss+xml, application/xml, text/xml' : 'text/html' },
      signal: AbortSignal.timeout(12000)
    });
    if (!response.ok) throw Error('Source unavailable');
    const headlines = parseHeadlines(await response.text(), source, now);
    if (!headlines.length) throw Error('No current headlines');
    return Response.json({ source: source.name, sourceUrl: source.url, updated: new Date(now).toISOString(), headlines }, {
      headers: { 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' }
    });
  } catch {
    return Response.json({ source: source.name, sourceUrl: source.url, updated: '', headlines: [], error: 'Headlines are temporarily unavailable. Open the publisher for its latest coverage.' }, {
      status: 502, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }
    });
  }
}
