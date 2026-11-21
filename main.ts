import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `Andromeda rests above the shed like a thumbprint on a window, and every light in it left before the shed was built. Nothing in your hands has to arrive tonight. The light has traveled this long; it can wait while you set the page down.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
