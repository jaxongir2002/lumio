import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { LumioLogo } from './LumioLogo';
import { useApp } from '../context/AppContext';
import { STATS } from '../data/portfolioData';

interface HeroProps {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryCta, onSecondaryCta }) => {
  const { t, isLight } = useApp();

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 120, damping: 26, restDelta: 0.001 });

  const yText = useTransform(smoothY, [0, 700], [0, -60]);
  const yBadge = useTransform(smoothY, [0, 700], [0, 30]);
  const gridY = useTransform(smoothY, [0, 700], [0, 50]);
  const opacityHero = useTransform(smoothY, [0, 650], [1, 0.4]);

  const years = STATS.find((s) => s.id === 'years');
  const projects = STATS.find((s) => s.id === 'projects');

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Arxitektural grid chiziqlari */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 px-4 sm:px-6 lg:px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-neutral-700/40 h-full" />
          ))}
        </div>
      </motion.div>

      <div className="absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-indigo-950/20 via-neutral-800/15 to-transparent blur-[140px] pointer-events-none" />

      <motion.div
        style={{ opacity: opacityHero }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chap ustun: sarlavha va harakatlar */}
          <motion.div style={{ y: yText }} className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.hero.studioLabel}</span>
              </div>
            </motion.div>

            {/* Sarlavha animatsiyasiz: u LCP elementi, shaffoflikdan chiqishini kutsa
                PageSpeed natijasi tushadi */}
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.08]">
                {t.hero.title}{' '}
                <span className="text-neutral-500">{t.hero.titleAccent}</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onPrimaryCta}
                className="px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-xl active:scale-95 cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSecondaryCta}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-600 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Qisqa faktlar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
            >
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80">
                <div className="text-2xl font-display font-semibold text-white">
                  {years?.value}
                  {years?.suffix}
                </div>
                <div className="mt-1 text-[11px] font-mono text-neutral-400 leading-snug">
                  {t.hero.facts.years}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80">
                <div className="text-2xl font-display font-semibold text-white">
                  {projects?.value}
                  {projects?.suffix}
                </div>
                <div className="mt-1 text-[11px] font-mono text-neutral-400 leading-snug">
                  {t.hero.facts.projects}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80">
                <div className="flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-display font-semibold">UZ</span>
                </div>
                <div className="mt-1 text-[11px] font-mono text-neutral-400 leading-snug">
                  {t.hero.facts.location}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* O'ng ustun: brend monogrammasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ y: yBadge }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-md flex flex-col items-center text-center group hover:border-neutral-600 transition-all">
              <LumioLogo
                size="lg"
                animated={true}
                interactive={true}
                variant={isLight ? 'light' : 'dark'}
                showSubtitle={true}
              />

              <div className="mt-8 pt-6 border-t border-neutral-800/80 w-full flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>{t.nav.available}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
