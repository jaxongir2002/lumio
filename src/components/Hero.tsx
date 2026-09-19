import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Terminal } from 'lucide-react';
import { LumioLogo } from './LumioLogo';
import { useApp } from '../context/AppContext';

interface HeroProps {
  onExploreWorks: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorks, onContactClick }) => {
  const { t, isLight } = useApp();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 120, damping: 26, restDelta: 0.001 });

  // Kinetic scroll-driven parallax offsets
  const yText = useTransform(smoothY, [0, 700], [0, -70]);
  const yBadge = useTransform(smoothY, [0, 700], [0, 35]);
  const yBanner = useTransform(smoothY, [0, 700], [0, -25]);
  const opacityHero = useTransform(smoothY, [0, 650], [1, 0.35]);
  const gridY = useTransform(smoothY, [0, 700], [0, 50]);

  return (
    <section id="hero" ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background Architectural Grid Lines with Scroll Parallax */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 px-4 sm:px-6 lg:px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-neutral-700/40 h-full" />
          ))}
        </div>
      </motion.div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-indigo-950/20 via-neutral-800/15 to-transparent blur-[140px] pointer-events-none" />

      <motion.div style={{ opacity: opacityHero }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & Action with Scroll Parallax */}
          <motion.div style={{ y: yText }} className="lg:col-span-8">
            {/* Studio Discipline Header Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {t.hero.elenaBadge}
                </span>
                <span className="text-neutral-600 font-sans">+</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {t.hero.alexBadge}
                </span>
              </div>

              <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                {t.hero.duoStudio}
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.08]">
                {t.hero.title}
              </h1>

              <p className="mt-6 text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                onClick={onContactClick}
                className="px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-xl hover:shadow-black/10 active:scale-95 cursor-pointer"
              >
                <span>{t.hero.bookCall}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWorks}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-600 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.exploreWorks}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Monogram Interactive Badge with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ y: yBadge }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-md flex flex-col items-center text-center group hover:border-neutral-600 transition-all">
              {/* Top Pill */}
              <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.hero.interactiveMonogram}</span>
              </div>

              {/* Animated LumioLogo Component */}
              <LumioLogo
                size="lg"
                animated={true}
                interactive={true}
                variant={isLight ? 'light' : 'dark'}
                showSubtitle={true}
              />

              {/* Micro specs below */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 w-full flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>{t.hero.estYear}</span>
                <span className="text-white font-semibold">{t.hero.duoStudioBadge}</span>
                <span className="text-indigo-400">{t.hero.clickToRedraw}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Duality Showcase Banner (Design Specs vs Code Specs) with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ y: yBanner }}
          className="mt-16 sm:mt-24 p-5 sm:p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80 text-xs">
            {/* Design side */}
            <div className="space-y-2 md:pr-4">
              <div className="flex items-center gap-2 font-mono text-neutral-400">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span className="uppercase tracking-wider">{t.hero.designExcellence}</span>
              </div>
              <p className="text-neutral-300 leading-relaxed font-sans text-xs">
                {t.hero.designExcellenceDesc}
              </p>
            </div>

            {/* Development side */}
            <div className="space-y-2 pt-4 md:pt-0 md:px-4">
              <div className="flex items-center gap-2 font-mono text-neutral-400">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="uppercase tracking-wider">{t.hero.codeIntegrity}</span>
              </div>
              <p className="text-neutral-300 leading-relaxed font-sans text-xs">
                {t.hero.codeIntegrityDesc}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-2 pt-4 md:pt-0 md:pl-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 font-mono text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="uppercase tracking-wider">{t.hero.synergyAdvantage}</span>
              </div>
              <p className="text-neutral-300 leading-relaxed font-sans text-xs">
                {t.hero.synergyAdvantageDesc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating subtle scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex items-center justify-center"
        >
          <button
            onClick={onExploreWorks}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800/80 text-[11px] font-mono text-neutral-400 hover:text-white hover:border-neutral-700 transition-all cursor-pointer group"
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400"
            />
            <span>{t.hero.exploreWorks}</span>
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

