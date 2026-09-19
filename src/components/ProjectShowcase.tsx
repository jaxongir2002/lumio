import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const { t, isLight } = useApp();

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.works.categories.all },
    { id: 'branding-ui', label: t.works.categories.brandingUi },
    { id: 'design-system', label: t.works.categories.designSystem },
    { id: 'web-app', label: t.works.categories.webApp },
    { id: 'ecommerce', label: t.works.categories.ecommerce },
    { id: 'creative-tech', label: t.works.categories.creativeTech }
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t.works.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.works.title}
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              {t.works.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Categories */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-neutral-800/80 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-neutral-500 hidden sm:inline">
              {t.works.showingCount} {filteredProjects.length} {t.works.caseStudiesCount}
            </span>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.12 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onClick={() => onSelectProject(project)}
                className="group bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg"
              >
                {/* Image Cover Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Interactive Sandbox Available Pill */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 backdrop-blur border border-neutral-700/80 text-[11px] font-mono text-emerald-400">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      {t.works.liveSandbox}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                          {project.client}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-white group-hover:text-neutral-200 transition-colors mt-0.5">
                          {project.title}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-black group-hover:bg-white transition-all flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 mt-3 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Metrics Banner */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-800/80 text-xs">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-neutral-800/60 p-2.5 rounded-xl border border-neutral-700/60">
                        <span className="text-[10px] font-mono text-neutral-500 block truncate">
                          {m.label}
                        </span>
                        <span className="font-mono font-semibold text-white text-xs block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.deliverables.slice(0, 3).map((del, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-neutral-800 text-[11px] font-mono text-neutral-300 border border-neutral-700"
                      >
                        {del}
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="text-[11px] font-mono text-neutral-500 pl-1">
                        +{project.deliverables.length - 3} {t.works.more}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

