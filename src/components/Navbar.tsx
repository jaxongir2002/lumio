import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NavbarProps {
  onNavigateToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.works, href: '#works' },
    { label: t.nav.inspector, href: '#inspector' },
    { label: t.nav.duo, href: '#duo' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0d0e]/85 backdrop-blur-md border-b border-neutral-800/80 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official LUMIO Logo with animated monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden group-hover:border-neutral-500 transition-all">
              <svg
                width={26}
                height={26}
                viewBox="0 0 100 100"
                fill="none"
                className="overflow-visible text-white group-hover:scale-105 transition-transform"
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
              <span className="text-[8px] font-mono tracking-[0.25em] text-neutral-400 uppercase mt-1">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Switcher & Action */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher (EN / RU) */}
            <div className="flex items-center p-1 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-neutral-800 text-white font-semibold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  language === 'ru'
                    ? 'bg-neutral-800 text-white font-semibold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Переключить на русский язык"
              >
                RU
              </button>
            </div>

            {/* Live Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.available}</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onNavigateToContact}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language Quick Switch */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 font-semibold"
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#0c0d0e]/95 backdrop-blur-xl border-b border-neutral-800 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.nav.available}</span>
                </div>

                {/* Language switch */}
                <div className="flex items-center p-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 rounded ${language === 'en' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`px-2 py-0.5 rounded ${language === 'ru' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
                  >
                    RU
                  </button>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-display font-medium text-neutral-200 hover:text-white py-2 border-b border-neutral-900"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full mt-2 py-3 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>{t.nav.requestProposal}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

