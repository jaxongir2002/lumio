import { Language, Translations } from './i18n/translations';

export const SITE_URL = 'https://lumio.mvendor.uz';

const LANGS: Language[] = ['uz', 'ru', 'en'];

/** Har bir tilning o'z manzili bor: o'zbekcha — `/`, qolganlari — `/?lang=ru|en`. */
export const languageUrl = (lang: Language) =>
  lang === 'uz' ? `${SITE_URL}/` : `${SITE_URL}/?lang=${lang}`;

export const languageFromUrl = (): Language | null => {
  const lang = new URLSearchParams(window.location.search).get('lang');
  return LANGS.includes(lang as Language) ? (lang as Language) : null;
};

const setMeta = (selector: string, content: string) => {
  document.head.querySelector(selector)?.setAttribute('content', content);
};

/**
 * Tanlangan tilni manzil satriga yozadi va sarlavha, description, canonical
 * hamda Open Graph teglarini o'sha tilga moslaydi — Google har bir til
 * versiyasini alohida sahifa sifatida ko'radi.
 */
export const applySeo = (lang: Language, t: Translations) => {
  const url = new URL(window.location.href);
  if (lang === 'uz') url.searchParams.delete('lang');
  else url.searchParams.set('lang', lang);
  window.history.replaceState(window.history.state, '', url);

  document.title = t.seo.title;
  setMeta('meta[name="description"]', t.seo.description);
  setMeta('meta[property="og:title"]', t.seo.title);
  setMeta('meta[property="og:description"]', t.seo.description);
  setMeta('meta[property="og:url"]', languageUrl(lang));
  setMeta('meta[property="og:locale"]', t.seo.ogLocale);
  setMeta('meta[name="twitter:title"]', t.seo.title);
  setMeta('meta[name="twitter:description"]', t.seo.description);
  document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', languageUrl(lang));
};
