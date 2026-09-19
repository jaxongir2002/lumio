import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Lock, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

/** Skrinshoti yo'q loyihalar uchun fon gradientlari */
const ACCENT_GRADIENTS: Record<Project['accent'], string> = {
  indigo: 'from-indigo-500/25 via-indigo-900/10 to-transparent',
  emerald: 'from-emerald-500/25 via-emerald-900/10 to-transparent',
  sky: 'from-sky-500/25 via-sky-900/10 to-transparent',
  amber: 'from-amber-500/25 via-amber-900/10 to-transparent',
  rose: 'from-rose-500/25 via-rose-900/10 to-transparent',
  violet: 'from-violet-500/30 via-fuchsia-900/15 to-transparent'
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const { t } = useApp();

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.works.categories.all },
    { id: 'landing', label: t.works.categories.landing },
    { id: 'crm-pos', label: t.works.categories.crmPos },
    { id: 'web-app', label: t.works.categories.webApp }
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t.works.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.works.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                {t.works.description}
              </p>
            </div>

            <div className="font-mono text-xs text-neutral-500 whitespace-nowrap">
              {t.works.showing} {filteredProjects.length} {t.works.cases}
            </div>
          </div>
        </ScrollReveal>

        {/* Kategoriya filtri */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black border-white font-semibold shadow-sm'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Loyihalar to'ri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const copy = t.projects[project.id];

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:border-neutral-600 transition-colors flex flex-col"
                >
                  {/* Muqova */}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="relative block w-full aspect-[16/10] overflow-hidden bg-neutral-950 cursor-pointer"
                    aria-label={`${project.title} — ${t.works.viewCase}`}
                  >
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        loading="lazy"
                        width={1600}
                        height={1000}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${ACCENT_GRADIENTS[project.accent]} flex flex-col items-center justify-center gap-3`}
                      >
                        <span className="font-display text-2xl sm:text-3xl font-medium text-white/90 tracking-tight px-6 text-center">
                          {project.title}
                        </span>
                        {project.confidential && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-neutral-300">
                            <Lock className="w-3 h-3" />
                            {t.works.confidential}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur border border-white/10 text-[10px] font-mono text-neutral-200">
                        {project.client} · {project.year}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </button>

                  {/* Mazmun */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-display font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-neutral-500">{copy.tagline}</p>

                    {/* Metrikalar */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-800"
                        >
                          <div className="text-sm font-mono font-bold text-white truncate">
                            {m.value}
                          </div>
                          <div className="mt-0.5 text-[10px] text-neutral-500 leading-tight">
                            {t.metricLabels[m.label] ?? m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stek */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/60 text-[10px] font-mono text-neutral-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-semibold text-white hover:text-neutral-300 flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        {t.works.viewCase}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-neutral-500 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          {t.works.liveSite}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
