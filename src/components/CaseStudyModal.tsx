import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Layers,
  Code2,
  TrendingUp,
  Quote,
  Copy,
  Check,
  Cpu,
  Palette,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';
import { InteractiveShowcaseSandbox } from './InteractiveShowcaseSandbox';
import { useApp } from '../context/AppContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectForInquiry: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectForInquiry
}) => {
  const [activeLens, setActiveLens] = useState<'design' | 'code'>('design');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const { t } = useApp();

  if (!project) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-neutral-900 border border-neutral-800 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-neutral-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/90 sticky top-0 z-20 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white" />
              <div>
                <span className="text-[11px] font-mono uppercase text-neutral-400">
                  {project.client} • {project.year}
                </span>
                <h3 className="text-base sm:text-lg font-display font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            {/* Tagline & Impact Metrics Banner */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl font-display font-light text-neutral-100 leading-relaxed">
                {project.tagline}
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-mono text-neutral-400">{m.label}</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xl sm:text-2xl font-mono font-bold text-white">
                        {m.value}
                      </span>
                      {m.change && (
                        <span className="text-xs font-mono text-emerald-400 flex items-center">
                          <TrendingUp className="w-3 h-3 mr-0.5 inline" /> {m.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Live Component Sandbox */}
            <div>
              <InteractiveShowcaseSandbox project={project} />
            </div>

            {/* Dual Lens Inspector: Design vs Engineering */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-800">
                <div>
                  <h4 className="font-display font-semibold text-lg text-white">
                    {t.caseStudy.dualLensTitle}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {t.caseStudy.dualLensDesc}
                  </p>
                </div>

                {/* Switcher Pills */}
                <div className="flex bg-neutral-800 p-1 rounded-xl border border-neutral-700 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveLens('design')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeLens === 'design'
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>{t.caseStudy.designLens}</span>
                  </button>
                  <button
                    onClick={() => setActiveLens('code')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeLens === 'code'
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{t.caseStudy.engineeringLens}</span>
                  </button>
                </div>
              </div>

              {/* Design Perspective */}
              {activeLens === 'design' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="p-5 rounded-xl bg-neutral-800/60 border border-neutral-700/80 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.caseStudy.visualSpec}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-mono block">{t.caseStudy.typographyHierarchy}:</span>
                      <p className="text-sm font-medium text-neutral-200 mt-0.5">
                        {project.designSpecs.typography}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-mono block">{t.caseStudy.gridAlignment}:</span>
                      <p className="text-sm text-neutral-300 mt-0.5">
                        {project.designSpecs.gridSystem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-mono block">{t.caseStudy.rationale}:</span>
                      <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                        {project.designSpecs.artDirection}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-neutral-800/60 border border-neutral-700/80 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{t.caseStudy.paletteTitle}</span>
                      <span className="text-neutral-500">{project.designSpecs.figmaComponentsCount} Figma Tokens</span>
                    </div>

                    <div className="space-y-2">
                      {project.designSpecs.palette.map((swatch) => (
                        <div
                          key={swatch.hex}
                          onClick={() => copyHex(swatch.hex)}
                          className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className="w-5 h-5 rounded-md border border-white/20 shadow-sm"
                              style={{ backgroundColor: swatch.hex }}
                            />
                            <span className="text-xs text-neutral-200 font-medium">{swatch.name}</span>
                          </div>
                          <div className="flex items-center gap-1 font-mono text-xs text-neutral-400 group-hover:text-white">
                            <span>{swatch.hex}</span>
                            {copiedHex === swatch.hex ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Engineering Perspective */}
              {activeLens === 'code' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="p-5 rounded-xl bg-neutral-800/60 border border-neutral-700/80 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.caseStudy.architectureStack}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.codeSpecs.stack.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-mono block">Engineered Architecture:</span>
                      <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                        {project.codeSpecs.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-neutral-800/60 border border-neutral-700/80 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{t.caseStudy.benchmarks}</span>
                      <span className="text-emerald-400">100% Production Score</span>
                    </div>

                    <div className="space-y-2">
                      {project.codeSpecs.performance.map((perf, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs"
                        >
                          <span className="text-neutral-400 font-mono">{perf.metric}</span>
                          <span className="font-mono font-semibold text-emerald-400">{perf.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-neutral-400 block mb-1">{t.caseStudy.milestones}:</span>
                      <ul className="space-y-1 text-xs text-neutral-300">
                        {project.codeSpecs.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-400 text-xs">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Testimonial Quote if available */}
            {project.testimonial && (
              <div className="p-6 rounded-xl bg-neutral-800/40 border border-neutral-700/60 relative">
                <Quote className="w-8 h-8 text-neutral-600/60 absolute top-4 right-4" />
                <p className="text-sm sm:text-base font-display italic text-neutral-200 pr-8">
                  "{project.testimonial.quote}"
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-semibold text-white font-display">
                    {project.testimonial.author}
                  </span>
                  <span className="text-xs text-neutral-500">•</span>
                  <span className="text-xs text-neutral-400">
                    {project.testimonial.role}, {project.testimonial.company}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-neutral-400 text-center sm:text-left">
              {t.caseStudy.lookingSimilar}
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
              >
                {t.caseStudy.closeView}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onSelectForInquiry(project.title);
                }}
                className="flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>{t.caseStudy.requestSimilar}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

