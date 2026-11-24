import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "Hail a certified Plant Whisperer who arrives within the hour to read your fern its horoscope, mist it with artisanal rainwater, and leave a five-star review of its aura — $49 a visit, fern not included.";

function main(): void {
  try {
    if (ENTRY.length < 1 || ENTRY.length > 240) {
      console.error("entry length out of bounds: " + ENTRY.length);
      return;
    }
    const outDir = process.env.OUTPUT_DIR || "/output";
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
    console.log("wrote entry (" + ENTRY.length + " chars)");
  } catch (err) {
    console.error("failed to write entry:", err);
  }
}

main();
