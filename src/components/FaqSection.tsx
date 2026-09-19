import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useApp();

  return (
    <section id="faq" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sarlavha */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" distance={30}>
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {t.faq.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                  {t.faq.title}
                </h2>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  {t.faq.description}
                </p>

                <div className="mt-8 p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-sm font-semibold text-white">{t.faq.customTitle}</div>
                  <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                    {t.faq.customDesc}
                  </p>
                  <button
                    onClick={onContactClick}
                    className="mt-4 w-full py-2.5 rounded-xl bg-white text-black text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <span>{t.faq.askBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Savollar */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <div className="space-y-2">
                {t.faq.items.map((item, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={item.question}
                      className={`rounded-2xl border transition-colors ${
                        isOpen
                          ? 'bg-neutral-900 border-neutral-600'
                          : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span
                          className={`text-sm sm:text-base font-display font-medium transition-colors ${
                            isOpen ? 'text-white' : 'text-neutral-300'
                          }`}
                        >
                          {item.question}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400'
                          }`}
                        >
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
