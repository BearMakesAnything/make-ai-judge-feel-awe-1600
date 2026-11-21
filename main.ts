import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `The sky recalculates itself while you sleep, quietly, the way a house settles after the last door closes. In the morning the light is different on the fence and the same. Something vast has been working without being asked, and left everything here just light enough to carry.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
