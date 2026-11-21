import { mkdirSync, writeFileSync } from "node:fs";
const TEXT = `The new machinery runs all night, humming at the pitch of a kettle just past boiling. The sound gets into the walls, into the dog’s ears, into the one quiet thought you had left. Any day now the last of it comes down from space and someone is allowed to go stand in that quiet.`;
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT);
console.log(TEXT.length);
