// public/design va public/projects ichidagi rasmlarning haqiqiy o'lchamlarini
// src/data/imageSizes.json ga yozadi. <img> ga width/height berish uchun kerak —
// brauzer rasm yuklanmasdan oldin joy ajratadi (Lighthouse: "unsized images").
// `npm run build` dan oldin avtomatik ishlaydi (prebuild).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIRS = ['design', 'projects'];

function size(buf) {
  // PNG: IHDR
  if (buf.readUInt32BE(0) === 0x89504e47) return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  // WebP: VP8 / VP8L / VP8X
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
    if (chunk === 'VP8L') {
      const b = buf.readUInt32LE(21);
      return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1];
    }
    if (chunk === 'VP8X') return [buf.readUIntLE(24, 3) + 1, buf.readUIntLE(27, 3) + 1];
  }
  // JPEG: SOFn marker
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
      }
      i += 2 + len;
    }
  }
  return null;
}

const out = {};
for (const dir of DIRS) {
  for (const file of readdirSync(join('public', dir)).sort()) {
    const dims = size(readFileSync(join('public', dir, file)));
    if (dims) out[`/${dir}/${file}`] = { width: dims[0], height: dims[1] };
  }
}
writeFileSync('src/data/imageSizes.json', JSON.stringify(out, null, 2) + '\n');
console.log(`imageSizes.json: ${Object.keys(out).length} ta rasm`);
