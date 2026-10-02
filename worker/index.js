import { getNewsResponse, newsSources } from './news.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      if (!newsSources[url.pathname]) return Response.json({ error: 'Not found' }, { status: 404 });
      if (request.method !== 'GET') return Response.json({ error: 'Method not allowed' }, { status: 405, headers: { Allow: 'GET' } });
      const cache = globalThis.caches?.default;
      const key = new Request(url.origin + url.pathname);
      if (cache) {
        const cached = await cache.match(key);
        if (cached) return cached;
      }
      const response = await getNewsResponse(url.pathname);
      if (response.ok && cache && ctx?.waitUntil) ctx.waitUntil(cache.put(key, response.clone()));
      return response;
    }
    return env.ASSETS.fetch(request);
  }
};
