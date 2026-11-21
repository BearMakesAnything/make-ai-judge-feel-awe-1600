import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `The moon draws the tide across the dark, though no shore can see the whole journey. On the windowsill, a glass of water catches one small piece of sky. The night is wide enough to hold both.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
