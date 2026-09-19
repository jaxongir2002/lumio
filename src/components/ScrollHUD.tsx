import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUp, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Waypoint {
  id: string;
  labelEn: string;
  labelRu: string;
  num: string;
}

const WAYPOINTS: Waypoint[] = [
  { id: 'hero', labelEn: 'Intro', labelRu: 'Интро', num: '01' },
  { id: 'brand-stage', labelEn: 'Brand Mark', labelRu: 'Монограмма', num: '02' },
  { id: 'works', labelEn: 'Works', labelRu: 'Проекты', num: '03' },
  { id: 'inspector', labelEn: 'Parity Inspector', labelRu: 'Инспектор', num: '04' },
  { id: 'duo', labelEn: 'The Duo', labelRu: 'Дуэт', num: '05' },
  { id: 'proof', labelEn: 'Impact', labelRu: 'Результаты', num: '06' },
  { id: 'process', labelEn: 'Pipeline', labelRu: 'Процесс', num: '07' },
  { id: 'faq', labelEn: 'FAQ', labelRu: 'Вопросы', num: '08' },
  { id: 'blog', labelEn: 'Insights', labelRu: 'Статьи', num: '09' },
  { id: 'contact', labelEn: 'Inquiry', labelRu: 'Заявка', num: '10' }
];

export const ScrollHUD: React.FC = () => {
  const { language, isLight } = useApp();
  const { scrollY, scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Ultra-fluid spring for top progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001
  });

  // Track active section and scroll percentage
  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    const unsubscribeScroll = scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 450);
    });

    const handleScrollWaypoint = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = WAYPOINTS.length - 1; i >= 0; i--) {
        const wp = WAYPOINTS[i];
        const el = document.getElementById(wp.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(wp.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollWaypoint, { passive: true });
    handleScrollWaypoint();

    return () => {
      unsubscribeProgress();
      unsubscribeScroll();
      window.removeEventListener('scroll', handleScrollWaypoint);
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentWp = WAYPOINTS.find((w) => w.id === activeSection) || WAYPOINTS[0];
  const activeLabel = language === 'ru' ? currentWp.labelRu : currentWp.labelEn;

  // Kinetic Parallax Ambient Aura
  const orbY1 = useTransform(scrollYProgress, [0, 1], [-50, 450]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [100, -350]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      {/* 1. Kinetic Top Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2.5px] bg-neutral-900/40">
        <motion.div
          style={{ scaleX }}
          className="h-full origin-left bg-gradient-to-r from-indigo-500 via-purple-400 to-emerald-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
        />
      </div>

      {/* 2. Kinetic Background Ambient Parallax Lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <motion.div
          style={{ y: orbY1, rotate: orbRotate }}
          className="absolute -top-32 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-transparent blur-[130px]"
        />
        <motion.div
          style={{ y: orbY2 }}
          className="absolute top-1/2 -left-40 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-600/10 via-cyan-600/5 to-transparent blur-[140px]"
        />
      </div>

      {/* 3. Floating Kinetic Scroll Capsule (Bottom Right Desktop & Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto select-none">
        {/* Expanded Waypoint Matrix (toggleable) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`p-3 rounded-2xl backdrop-blur-xl border shadow-2xl mb-1 flex flex-col gap-1 w-52 ${
                isLight
                  ? 'bg-white/95 border-neutral-200 text-neutral-800'
                  : 'bg-neutral-950/95 border-neutral-800 text-neutral-200'
              }`}
            >
              <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono text-neutral-400 uppercase tracking-wider border-b border-neutral-800/40 mb-1">
                <span>{language === 'ru' ? 'Секции страницы' : 'Page Waypoints'}</span>
                <span>{scrollPercent}%</span>
              </div>
              <div className="max-h-60 overflow-y-auto pr-1 space-y-0.5">
                {WAYPOINTS.map((wp) => {
                  const isActive = activeSection === wp.id;
                  const label = language === 'ru' ? wp.labelRu : wp.labelEn;
                  return (
                    <button
                      key={wp.id}
                      onClick={() => {
                        scrollToSection(wp.id);
                        setIsExpanded(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-indigo-500/15 text-indigo-400 font-semibold border border-indigo-500/30'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[10px] opacity-60">{wp.num}</span>
                        <span className="truncate">{label}</span>
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Main Dynamic Capsule */}
        <div className="flex items-center gap-2">
          {/* Scroll progress & active section pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-xl border shadow-xl cursor-pointer transition-all duration-300 group ${
              isLight
                ? 'bg-white/90 border-neutral-300/80 hover:border-neutral-400 text-neutral-800'
                : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700 text-neutral-200'
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
            title={language === 'ru' ? 'Навигация по разделам' : 'Toggle Waypoint Navigation'}
          >
            <Compass className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xs font-mono font-medium flex items-center gap-1.5">
              <span className="text-neutral-500 text-[10px]">{currentWp.num}</span>
              <span className="max-w-[85px] sm:max-w-none truncate">{activeLabel}</span>
            </span>

            {/* Micro percentage dial */}
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-neutral-800/80 text-neutral-400 border border-neutral-700/60">
              {scrollPercent}%
            </span>
          </motion.div>

          {/* Smooth Back-to-Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.7, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.7, x: 10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-white text-black hover:bg-neutral-200 shadow-xl active:scale-90 transition-transform cursor-pointer flex items-center justify-center"
                title={language === 'ru' ? 'Наверх' : 'Back to Top'}
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 stroke-[2.5]" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
