import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig, type Plugin} from 'vite';

/**
 * Build'da asosiy CSS'ni index.html ichiga <style> qilib joylaydi — alohida
 * so'rov render'ni bloklamaydi (PageSpeed: "render-blocking requests").
 */
function inlineCss(): Plugin {
  return {
    name: 'lumio-inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = Object.values(bundle).find((f) => f.fileName === 'index.html');
      if (!html || html.type !== 'asset') return;
      let source = String(html.source);
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue;
        const tag = new RegExp(`<link rel="stylesheet"[^>]*href="/${file.fileName}"[^>]*>`);
        if (!tag.test(source)) continue;
        source = source.replace(tag, () => `<style>${String(file.source)}</style>`);
        delete bundle[file.fileName];
      }
      // Bosh ekran shriftlari (sarlavha va matn, lotin) JS kutmasdan yuklana boshlasin
      const preloads = Object.keys(bundle)
        .filter((name) => /\/(syne|plus-jakarta-sans)-latin-wght-normal-[^/]+\.woff2$/.test(name))
        .map((name) => `<link rel="preload" href="/${name}" as="font" type="font/woff2" crossorigin>`)
        .join('\n    ');
      if (preloads) source = source.replace('</title>', `</title>\n    ${preloads}`);
      html.source = source;
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), inlineCss()],
    resolve: {
      alias: {
        '@': import.meta.dirname,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
