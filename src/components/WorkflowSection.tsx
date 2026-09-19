import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEP_IDS } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useApp();

  const steps = WORKFLOW_STEP_IDS.map((id, idx) => ({
    id,
    number: String(idx + 1).padStart(2, '0'),
    ...t.process.steps[id]
  }));

  const current = steps[activeStep];

  return (
    <section id="process" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {t.process.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.process.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.process.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={35} delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bosqichlar ro'yxati */}
            <div className="lg:col-span-5 space-y-2">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                      isActive
                        ? 'bg-neutral-900 border-neutral-600'
                        : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                    }`}
                  >
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-white text-black'
                          : 'bg-neutral-800 text-neutral-500'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-display font-medium text-sm transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-400'
                      }`}
                    >
                      {step.title}
                    </span>
                    {isActive && (
                      <ArrowRight className="w-4 h-4 text-neutral-500 ml-auto flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Faol bosqich tafsiloti */}
            <div className="lg:col-span-7">
              <div className="h-full p-7 sm:p-9 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col h-full"
                  >
                    <span className="text-xs font-mono text-neutral-500">
                      {t.process.stage} {current.number} / {String(steps.length).padStart(2, '0')}
                    </span>

                    <h3 className="mt-3 text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                      {current.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed flex-1">
                      {current.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-neutral-800">
                      <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                        {t.process.deliverable}
                      </span>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-200 leading-snug">
                          {current.deliverable}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
