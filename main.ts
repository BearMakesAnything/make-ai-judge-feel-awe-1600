import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `The heat lets go all at once, the way a held breath does, and the evening turns blue and ordinary and enormous. Crickets start up in the field like they have been waiting for permission. Somebody you like is in the next room, reading. Nobody needs you for an hour.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
