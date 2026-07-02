import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const ignoredDirectories = new Set([".git", "dist", "node_modules", "outputs", "work"]);
const textExtensions = new Set(["", ".css", ".html", ".js", ".json", ".md", ".mjs", ".toml", ".txt"]);
const suspiciousPatterns = [
  { label: "AWS access key", pattern: /AKIA[0-9A-Z]{16}/ },
  { label: "GitHub token", pattern: /gh[pousr]_[A-Za-z0-9_]{30,}/ },
  { label: "Private key", pattern: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/ },
  {
    label: "Assigned secret-like value",
    pattern: /\b(api[_-]?key|client[_-]?secret|password|secret|token)\b\s*[:=]\s*["'][^"']{8,}["']/i
  }
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)));
    } else if (textExtensions.has(extname(entry.name))) {
      files.push(absolutePath);
    }
  }

  return files;
}

const findings = [];

for (const file of await walk(root)) {
  const fileStat = await stat(file);
  if (fileStat.size > 1_000_000) continue;

  const content = await readFile(file, "utf8");
  for (const check of suspiciousPatterns) {
    if (check.pattern.test(content)) {
      findings.push(`${relative(root, file)}: ${check.label}`);
    }
  }
}

if (findings.length) {
  console.error("Possible secrets found:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log("No likely secrets found in text project files.");
