import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 100 100"
                  fill="none"
                  className="overflow-visible text-white"
                >
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
              <div className="flex flex-col">
                <span className="font-display font-light text-sm tracking-[0.35em] uppercase text-white leading-none pl-1">
                  L U M I O
                </span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-neutral-500 uppercase mt-1">
                  PORTFOLIO
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-sans">
              {t.footer.description}
            </p>

            <div className="pt-2 font-mono text-[11px] text-neutral-500">
              <span>{t.footer.location}: </span>
              <span className="text-neutral-300">{t.footer.locationVal}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider block">
              {t.footer.explore}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#works" className="hover:text-white transition-colors">
                  {t.footer.works}
                </a>
              </li>
              <li>
                <a href="#inspector" className="hover:text-white transition-colors">
                  {t.footer.inspector}
                </a>
              </li>
              <li>
                <a href="#duo" className="hover:text-white transition-colors">
                  {t.footer.duo}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {t.footer.pipeline}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.footer.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider block">
              {t.footer.connect}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Dribbble (Elena)</span>
                  <span className="text-[10px] text-neutral-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>GitHub (Alex)</span>
                  <span className="text-[10px] text-neutral-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://figma.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Figma Community</span>
                  <span className="text-[10px] text-neutral-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Twitter / X</span>
                  <span className="text-[10px] text-neutral-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-neutral-600">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-neutral-500 mt-6 md:mt-0">
              React 19 • Motion • Tailwind
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <span>© {new Date().getFullYear()} LUMIO Portfolio. {t.footer.rights}</span>
          <div className="flex items-center gap-6">
            <span>{t.footer.designBy}</span>
            <span>•</span>
            <span>{t.footer.codeBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

