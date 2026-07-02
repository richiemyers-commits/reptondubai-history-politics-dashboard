import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const root = process.env.STATIC_ROOT ? resolve(projectRoot, process.env.STATIC_ROOT) : projectRoot;
const port = Number(process.env.PORT || 4173);
const bbcPoliticsFeedUrl = "https://feeds.bbci.co.uk/news/politics/rss.xml";
const bbcPoliticsSourceUrl = "https://www.bbc.com/news/politics";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".txt": "text/plain; charset=utf-8"
};

function safePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  return join(root, normalized === "/" ? "index.html" : normalized);
}

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
  const items = [...xml.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/gi)]
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
    headlines: items
  };
}

async function sendBbcPolitics(response) {
  try {
    const feedResponse = await fetch(bbcPoliticsFeedUrl, {
      headers: { "User-Agent": "ReptonDubaiHistoryPolitics/1.0" }
    });
    if (!feedResponse.ok) throw new Error(`BBC feed returned ${feedResponse.status}`);

    const xml = await feedResponse.text();
    const payload = parseBbcPoliticsFeed(xml);
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    });
    response.end(JSON.stringify(payload));
  } catch {
    response.writeHead(502, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    });
    response.end(
      JSON.stringify({
        source: "BBC Politics",
        sourceUrl: bbcPoliticsSourceUrl,
        updated: "",
        headlines: []
      })
    );
  }
}

createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    if (requestUrl.pathname === "/api/bbc-politics") {
      await sendBbcPolitics(response);
      return;
    }

    const filePath = safePath(request.url || "/");
    const data = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream"
    });
    response.end(data);
  } catch {
    const data = await readFile(join(root, "index.html"));
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(data);
  }
}).listen(port, () => {
  console.log(`Repton History & Politics preview running at http://localhost:${port}`);
});
