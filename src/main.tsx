import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Build vaqtida #root ichiga o'zbekcha bosh ekran yozilgan (scripts/prerender.mjs).
// O'zbekcha foydalanuvchida React o'sha HTML'ni qayta ishlatadi (hydrate) — sarlavha
// qayta chizilmaydi va LCP JS'ni kutmaydi. Boshqa tilda prerender yashirin
// (index.html dagi skript), shuning uchun oddiy render qilib, keyin belgini olamiz.
const prerendered = container.hasAttribute('data-prerendered');
const otherLanguage = document.documentElement.classList.contains('hide-prerender');

if (prerendered && !otherLanguage) {
  hydrateRoot(container, app);
} else {
  flushSync(() => createRoot(container).render(app));
  container.removeAttribute('data-prerendered');
}
