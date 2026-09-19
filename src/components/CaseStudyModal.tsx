import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Lock, ArrowUpRight, Cpu, TrendingUp } from 'lucide-react';
import { Project } from '../types';
import { useApp } from '../context/AppContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscuss: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onDiscuss
}) => {
  const { t } = useApp();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape bilan yopish + fon scroll'ini bloklash
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const copy = project ? t.projects[project.id] : null;

  return (
    <AnimatePresence>
      {project && copy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900 border border-neutral-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-neutral-200"
          >
            {/* Sarlavha paneli */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur sticky top-0 z-10">
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase text-neutral-500 block truncate">
                  {project.client} · {project.year}
                </span>
                <h3 className="text-base sm:text-lg font-display font-semibold text-white truncate">
                  {project.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label={t.modal.close}
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tana */}
            <div className="overflow-y-auto flex-1">
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full object-cover object-top max-h-72 border-b border-neutral-800"
                />
              )}

              <div className="p-6 sm:p-8 space-y-8">
                {/* Tavsif */}
                <div className="space-y-3">
                  <p className="text-lg font-display font-light text-neutral-100 leading-relaxed">
                    {copy.tagline}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{copy.description}</p>
                </div>

                {project.confidential && (
                  <div className="flex items-start gap-2.5 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
                    <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 leading-relaxed">
                      {t.modal.confidentialNote}
                    </span>
                  </div>
                )}

                {/* Natijalar */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-display font-semibold text-white">
                      {t.modal.results}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-4 rounded-xl bg-neutral-800/60 border border-neutral-700/70"
                      >
                        <div className="text-xl font-mono font-bold text-white">{m.value}</div>
                        <div className="mt-1 text-[11px] text-neutral-400 leading-snug">
                          {t.metricLabels[m.label] ?? m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Texnologiyalar */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-sm font-display font-semibold text-white">
                      {t.modal.stack}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pastki panel */}
            <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-900/95 backdrop-blur flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-neutral-400 hidden sm:block">
                {t.modal.discussTitle}
              </span>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-xs font-medium text-neutral-200 hover:text-white hover:border-neutral-500 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t.modal.visitSite}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => onDiscuss(project.title)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>{t.modal.discussBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
