// `vite build --ssr` natijasidan bosh ekran HTML'ini olib dist/index.html'dagi
// #root ichiga joylaydi, so'ng vaqtinchalik SSR build'ni o'chiradi.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const ssrDir = resolve('dist-ssr');
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

const file = resolve('dist/index.html');
const html = readFileSync(file, 'utf8');
const placeholder = '<div id="root"></div>';
if (!html.includes(placeholder)) throw new Error('dist/index.html: #root topilmadi');

writeFileSync(file, html.replace(placeholder, () => `<div id="root" data-prerendered>${render()}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender: bosh ekran dist/index.html ga yozildi');
