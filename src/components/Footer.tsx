import React from 'react';
import { ArrowUp, MessageCircle, Phone, Mail, Github, MapPin } from 'lucide-react';
import { CONTACT, DESIGN_CASES } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

/** Dizayn bo'limi faqat rasm qo'shilganda ko'rinadi */
const hasDesignWork = DESIGN_CASES.some((c) => c.images.length > 0);

export const Footer: React.FC = () => {
  const { t } = useApp();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sectionLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.works, href: '#works' },
    ...(hasDesignWork ? [{ label: t.design.badge, href: '#design' }] : []),
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="border-t border-neutral-800/80 bg-[#08090a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brend */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <svg width={24} height={24} viewBox="0 0 100 100" fill="none" className="text-white" aria-hidden="true">
                  <path
                    d="M 36 22 C 54 10, 84 20, 84 48 C 84 72, 68 82, 56 82"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 28 28 L 28 82 L 54 82"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <span className="font-display font-light text-sm tracking-[0.35em] uppercase text-white">
                L U M I O
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              {t.footer.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-neutral-500">
              <MapPin className="w-3.5 h-3.5" />
              <span>{CONTACT.location}</span>
            </div>
          </div>

          {/* Bo'limlar */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
              {t.footer.explore}
            </h3>
            <ul className="space-y-2.5">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
              {t.footer.connect}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>E-mail</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Pastki qator */}
        <div className="mt-14 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <span>
            © {new Date().getFullYear()} LUMIO. {t.footer.rights}
          </span>

          <div className="flex items-center gap-4">
            <span>{t.footer.madeIn}</span>
            <button
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
