import React from 'react';
import { STATS } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { ScrollReveal, ScrollCounter } from './ScrollAnimations';

export const StatsSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="stats" className="py-24 border-t border-neutral-800/80 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-950/20 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {t.stats.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.stats.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.stats.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={30} delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight">
                  <ScrollCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="mt-2 text-xs text-neutral-400 leading-snug">
                  {t.stats.items[stat.id]}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
