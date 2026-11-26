// Five Seconds to Explain the Glass
// The single sentence a house cat would say in the five seconds after
// sweeping a glass off the table. No apology, no confession — just the
// most convincing case the cat can make for itself.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The glass was empty, the table was dusty, and gravity had already filed its request — I was only the paw that signed it, and the rug needed watering anyway.";

// The gate is 1–200 characters; refuse to write an out-of-range line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
