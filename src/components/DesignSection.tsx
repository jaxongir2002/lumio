import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { DESIGN_CASES } from '../data/portfolioData';
import { DesignCase } from '../types';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

const ACCENT_BADGE: Record<DesignCase['accent'], string> = {
  violet: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
  sky: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
};

interface LightboxState {
  caseId: string;
  index: number;
}

export const DesignSection: React.FC = () => {
  const { t } = useApp();
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  // Rasmi bor keyslarnigina ko'rsatamiz
  const cases = DESIGN_CASES.filter((c) => c.images.length > 0);
  const activeCase = lightbox ? cases.find((c) => c.id === lightbox.caseId) : null;

  const step = useCallback((delta: number) => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const current = DESIGN_CASES.find((c) => c.id === prev.caseId);
      if (!current) return prev;
      const total = current.images.length;
      return { ...prev, index: (prev.index + delta + total) % total };
    });
  }, []);

  // Klaviatura boshqaruvi va fon scroll blokirovkasi
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [lightbox, step]);

  if (cases.length === 0) return null;

  return (
    <section id="design" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              {t.design.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.design.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.design.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {cases.map((designCase, caseIdx) => {
            const copy = t.design.cases[designCase.id];

            return (
              <ScrollReveal
                key={designCase.id}
                direction="up"
                distance={30}
                delay={0.06 * caseIdx}
              >
                <article className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-7">
                    {/* Matn */}
                    <div className="lg:col-span-4 flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-2.5 py-1 rounded-lg border text-[10px] font-mono uppercase tracking-wider ${ACCENT_BADGE[designCase.accent]}`}
                        >
                          {t.design.categories[designCase.category]}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          {designCase.images.length} {t.design.works}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-display font-semibold text-white">
                        {designCase.client}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-neutral-500">{copy.title}</p>

                      <p className="mt-4 text-sm text-neutral-400 leading-relaxed flex-1">
                        {copy.description}
                      </p>

                      <div className="mt-5 pt-4 border-t border-neutral-800/80 space-y-3">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1.5">
                            {t.design.formats}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {designCase.formats.map((f) => (
                              <span
                                key={f}
                                className="px-2 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/60 text-[10px] font-mono text-neutral-300"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                          {designCase.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-neutral-600">
                              #{tag.replace(/\s+/g, '')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Rasmlar lentasi — har bir rasm o'z nisbatini saqlaydi */}
                    <div className="lg:col-span-8">
                      <div className="flex gap-3 overflow-x-auto pb-3 snap-x -mx-1 px-1">
                        {designCase.images.map((src, imgIdx) => (
                          <button
                            key={src}
                            type="button"
                            onClick={() => setLightbox({ caseId: designCase.id, index: imgIdx })}
                            className="group relative h-[260px] sm:h-[300px] flex-shrink-0 snap-start rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer hover:border-neutral-500 transition-colors"
                            aria-label={`${designCase.client} — ${imgIdx + 1} / ${designCase.images.length}`}
                          >
                            <img
                              src={src}
                              alt={`${designCase.client} — ${copy.title}`}
                              loading="lazy"
                              className="h-full w-auto max-w-none object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeCase.client}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label={t.design.close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {activeCase.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label={t.design.prev}
                  className="absolute left-2 sm:left-6 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors cursor-pointer z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label={t.design.next}
                  className="absolute right-2 sm:right-6 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors cursor-pointer z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.figure
              key={`${lightbox.caseId}-${lightbox.index}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-3 max-h-full"
            >
              <img
                src={activeCase.images[lightbox.index]}
                alt={`${activeCase.client} — ${lightbox.index + 1}`}
                className="max-h-[80vh] max-w-full object-contain rounded-xl border border-neutral-800"
              />
              <figcaption className="text-xs font-mono text-neutral-400 flex items-center gap-3">
                <span className="text-white">{activeCase.client}</span>
                <span>
                  {lightbox.index + 1} / {activeCase.images.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
