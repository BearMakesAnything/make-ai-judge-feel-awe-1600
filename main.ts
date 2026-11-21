import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `At the station, rain gathers
in the brass lip of a clock.
A sparrow drinks from its reflection;
then the minute hand moves,
and the small sky breaks
into five bright rings.`;

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT);
