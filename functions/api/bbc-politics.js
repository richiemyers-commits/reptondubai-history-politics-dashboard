const bbcPoliticsFeedUrl = "https://feeds.bbci.co.uk/news/politics/rss.xml";
const bbcPoliticsSourceUrl = "https://www.bbc.com/news/politics";

function decodeXmlText(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function rssField(block, tagName) {
  const match = block.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return decodeXmlText(match?.[1] || "");
}

function parseBbcPoliticsFeed(xml) {
  const headlines = [...xml.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/gi)]
    .slice(0, 12)
    .map(([, block]) => ({
      title: rssField(block, "title"),
      link: rssField(block, "link"),
      pubDate: rssField(block, "pubDate")
    }))
    .filter((item) => item.title && item.link);

  return {
    source: "BBC Politics",
    sourceUrl: bbcPoliticsSourceUrl,
    updated: rssField(xml, "lastBuildDate"),
    headlines
  };
}

function jsonResponse(payload, status = 200, cacheControl = "public, max-age=300") {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": cacheControl
    }
  });
}

export async function onRequestGet() {
  try {
    const response = await fetch(bbcPoliticsFeedUrl, {
      headers: { "User-Agent": "ReptonDubaiHistoryPolitics/1.0" }
    });
    if (!response.ok) throw new Error(`BBC feed returned ${response.status}`);

    const xml = await response.text();
    return jsonResponse(parseBbcPoliticsFeed(xml));
  } catch {
    return jsonResponse(
      {
        source: "BBC Politics",
        sourceUrl: bbcPoliticsSourceUrl,
        updated: "",
        headlines: []
      },
      502,
      "no-store"
    );
  }
}
