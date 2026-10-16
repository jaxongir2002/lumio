import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Build vaqtida bosh ekranni (o'zbekcha, tungi tema) statik HTML'ga aylantiradi —
 * brauzer JS yuklanishini kutmay sarlavhani darhol chizadi. Lazy bo'limlar bu
 * yerda bo'sh qoladi va brauzerda yuklanadi. Qarang: scripts/prerender.mjs
 */
export const render = () => renderToString(<App />);
