import fs from "fs";

const redeableStream = fs.createReadStream("./article.txt", {
  highWaterMark: 10,
});

redeableStream.on("readable", () => {
  try {
    process.stdout.write(`[${redeableStream.read()}]`);
  } catch (error) {}
});

redeableStream.on("end", () => {
  console.log("Done");
});
