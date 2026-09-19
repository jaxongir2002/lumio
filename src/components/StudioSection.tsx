import React from 'react';
import { Code2, Palette, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

const ROLES = [
  { id: 'dev', icon: Code2, accent: 'emerald' as const },
  { id: 'design', icon: Palette, accent: 'indigo' as const }
];

const ACCENTS = {
  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
};

export const StudioSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="studio" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {t.studio.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.studio.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.studio.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Ikki yo'nalish */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ROLES.map((role, idx) => {
            const copy = t.studio.roles[role.id];
            const Icon = role.icon;

            return (
              <ScrollReveal key={role.id} direction="up" distance={30} delay={0.1 + idx * 0.1}>
                <div className="h-full p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${ACCENTS[role.accent]}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-display font-semibold text-white">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {copy.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-neutral-800/80 space-y-2.5 flex-1">
                    {copy.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-start gap-2.5 text-xs font-mono text-neutral-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Afzalliklar */}
        <ScrollReveal direction="up" distance={30} delay={0.3}>
          <div className="mt-6 p-7 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
            <h3 className="text-sm font-display font-semibold text-white mb-5">
              {t.studio.advantagesTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.studio.advantages.map((advantage) => (
                <div key={advantage} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-300 leading-snug">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
