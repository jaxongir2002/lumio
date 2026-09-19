import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FOUNDERS } from '../data/portfolioData';
import { CheckCircle2, Zap, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

export const DualCraftSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'elena' | 'alex'>('both');
  const { t, language } = useApp();

  return (
    <section id="duo" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {t.duo.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.duo.title}
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              {t.duo.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Filter Pills */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {t.duo.filterBoth}
            </button>
            <button
              onClick={() => setActiveTab('elena')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'elena'
                  ? 'bg-indigo-500 text-white font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {t.duo.filterElena}
            </button>
            <button
              onClick={() => setActiveTab('alex')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'alex'
                  ? 'bg-emerald-500 text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {t.duo.filterAlex}
            </button>
          </div>
        </ScrollReveal>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDERS.map((founder, idx) => {
            const isDesign = founder.discipline === 'design';
            const isHidden = (activeTab === 'elena' && !isDesign) || (activeTab === 'alex' && isDesign);

            if (isHidden) return null;

            // Translated details for Elena and Alex
            const name = isDesign ? t.duo.elenaName : t.duo.alexName;
            const role = isDesign ? t.duo.elenaRole : t.duo.alexRole;
            const bio = isDesign ? t.duo.elenaBio : t.duo.alexBio;
            const leadTitle = isDesign ? t.duo.leadDesigner : t.duo.leadArchitect;

            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: isDesign ? -30 : 30, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isDesign
                    ? 'bg-neutral-900 border-indigo-950/60 hover:border-indigo-700/40'
                    : 'bg-neutral-900 border-emerald-950/60 hover:border-emerald-700/40'
                }`}
              >
                <div>
                  {/* Top Bar with Discipline Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover border border-neutral-700"
                      />
                      <div>
                        <h3 className="text-xl font-display font-semibold text-white">
                          {name}
                        </h3>
                        <span className="text-xs text-neutral-400 block mt-0.5">
                          {role}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider ${
                        isDesign
                          ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/40'
                          : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/40'
                      }`}
                    >
                      {leadTitle}
                    </span>
                  </div>

                  <p className="text-sm font-display italic text-neutral-200 mb-4">
                    "{founder.tagline}"
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {bio}
                  </p>

                  {/* Core Superpowers */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                      {t.duo.superpowers}:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {founder.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 flex-shrink-0 ${
                              isDesign ? 'text-indigo-400' : 'text-emerald-400'
                            }`}
                          />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools Stack & Socials */}
                <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {founder.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-[11px] font-mono text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    {founder.socials.dribbble && (
                      <a href={founder.socials.dribbble} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        Dribbble ↗
                      </a>
                    )}
                    {founder.socials.github && (
                      <a href={founder.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        GitHub ↗
                      </a>
                    )}
                    {founder.socials.twitter && (
                      <a href={founder.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        Twitter ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Synergy Workflow Feature Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display font-semibold text-lg text-white">
              {t.duo.whyHireTitle}
            </h4>
            <p className="text-xs text-neutral-400 max-w-2xl">
              {t.duo.whyHireDesc}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{t.duo.directSlack}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>{t.duo.zeroScopeCreep}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

