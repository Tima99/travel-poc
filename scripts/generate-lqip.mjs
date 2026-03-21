import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const urls = [
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
  "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg",
  "https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg",
  "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
  "https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg",
];

const placeholders = {};

for (const url of urls) {
  const sourceFile = path.join(
    os.tmpdir(),
    "lqip-src-" + Math.random().toString(36).slice(2) + ".jpg",
  );
  const tmpFile = path.join(
    os.tmpdir(),
    "lqip-" + Math.random().toString(36).slice(2) + ".jpg",
  );

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to download image: " + url);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(sourceFile, buffer);

  execFileSync(
    ffmpegPath,
    [
      "-y",
      "-i",
      sourceFile,
      "-vf",
      "scale=24:-1:flags=lanczos,boxblur=2:1",
      "-frames:v",
      "1",
      "-q:v",
      "18",
      tmpFile,
    ],
    { stdio: "ignore" },
  );

  const base64 = fs.readFileSync(tmpFile).toString("base64");
  fs.unlinkSync(sourceFile);
  fs.unlinkSync(tmpFile);
  placeholders[url] = "data:image/jpeg;base64," + base64;
}

const output = JSON.stringify(placeholders, null, 2);
fs.writeFileSync("scripts/lqip-output.json", output);
console.log(output);
