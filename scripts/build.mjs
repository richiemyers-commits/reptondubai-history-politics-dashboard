import { cp, mkdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = join(root, "dist");
const entries = ["index.html", "_redirects", "src", "public"];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of entries) {
  const source = join(root, entry);
  const target = join(dist, entry);
  const sourceStat = await stat(source);
  await cp(source, target, { recursive: sourceStat.isDirectory() });
}

console.log("Production build created in dist/");
