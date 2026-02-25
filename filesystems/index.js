import fs from "fs";

const data = fs.readFileSync("notes.txt", "utf-8");

console.log(data);
