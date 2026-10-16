import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// Build vaqtida #root ichiga o'zbekcha bosh ekran yozilgan (scripts/prerender.mjs).
// Uni React o'zi almashtiradi; boshqa tildagi foydalanuvchida esa prerender
// yashirilgan bo'ladi (index.html dagi skript) — shu sababli belgi faqat React
// birinchi marta chizib bo'lgandan keyin olib tashlanadi.
flushSync(() => {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
container.removeAttribute('data-prerendered');
