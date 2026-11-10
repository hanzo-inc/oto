// TypeScript / Bun / Node 22+ example for Oto (音)
// Run: HANZO_API_KEY=... bun run examples/generate.ts

import { writeFileSync } from "node:fs";

const apiKey = process.env.HANZO_API_KEY;
if (!apiKey) throw new Error("Set HANZO_API_KEY");

const prompt = process.argv[2] ?? "Heavy leather boots walking across wet cobblestone in a narrow courtyard";

const res = await fetch("https://api.hanzo.ai/v1/audio/foley", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "oto",
    prompt: prompt,
  }),
});

if (!res.ok) {
  throw new Error(`oto failed (${res.status}): ${await res.text()}`);
}

const buf = Buffer.from(await res.arrayBuffer());
const outPath = "/tmp/oto.wav";
writeFileSync(outPath, buf);
console.log(`Saved ${buf.byteLength} bytes to ${outPath}`);
