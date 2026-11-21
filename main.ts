import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `An old lighthouse turns through the fog, its patient beam touching empty water, then the sleeping harbor, then empty water again. Beyond the bay, stars keep their quiet appointments. Nothing here needs to hurry; the sea keeps carrying the dark away.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
