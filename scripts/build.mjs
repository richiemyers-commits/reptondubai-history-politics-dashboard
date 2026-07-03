import { cp, mkdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = join(root, "dist");
const entries = ["index.html", "_headers", "src", "public"];
const appRoutes = [
  "/ks3-history",
  "/year-7-history",
  "/year-8-history",
  "/year-9-history",
  "/igcse-history",
  "/igcse-history/year-9-into-10",
  "/gcse-history-advice",
  "/sixth-form",
  "/a-level-history",
  "/a-level-history/reading-list",
  "/a-level-politics",
  "/ib-history",
  "/skills-revision",
  "/enrichment",
  "/university-careers",
  "/university-politics-reading-list",
  "/parents",
  "/ask-abe"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of entries) {
  const source = join(root, entry);
  const target = join(dist, entry);
  const sourceStat = await stat(source);
  await cp(source, target, { recursive: sourceStat.isDirectory() });
}

for (const route of appRoutes) {
  const routeDirectory = join(dist, route.replace(/^\//, ""));
  await mkdir(routeDirectory, { recursive: true });
  await cp(join(dist, "index.html"), join(routeDirectory, "index.html"));
}

console.log("Production build created in dist/");
