import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `Someone sets a jar of seawater on the porch rail and forgets it. By dusk the jar has made its own small moon. Nothing in it is in a hurry. The tide will come back for the jar the way a shelf waits for a book left open, face down, mid-page.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
