// One Star, Written in Sap — make.fun bounty u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
// The joke: a human relocates the plant "closer to the light" and parks it
// on top of the fridge, directly under a hot bulb, so the leaves crisp —
// while the same human posts a photo captioned "thriving plant dad".
// The review's bite is the gap between the caption and the plant's
// actual condition: the owner is proud of a rescue that is really a
// slow roast, and the plant gets one star to say so. 154 characters
// against a 279-character ceiling.
// The program below only guards the bounty rules and writes the line
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally),
// with no trailing newline at the end of the file.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "One star. He moved me 'closer to the light' — on top of the fridge, where my leaves crisp under the bulb while he captions the photo 'thriving plant dad'.";

// The ceiling comes from the bounty rules: one line, 1–279 characters.
const MAX_CHARS = 279;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

function problemsWithLength(value: string): string[] {
  const found: string[] = [];
  const n = charCount(value);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-279 characters, got ${n}`);
  }
  return found;
}

function problemsWithLineBreaks(value: string): string[] {
  const found: string[] = [];
  if (value.includes("\n") || value.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(value: string): string[] {
  const found: string[] = [];
  if (value.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (value !== value.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(value: string): string[] {
  return [
    ...problemsWithLength(value),
    ...problemsWithLineBreaks(value),
    ...problemsWithWhitespace(value),
  ];
}

function main(): void {
  const problems = collectProblems(TEXT);
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
}

main();
