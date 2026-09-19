import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCcw,
  Sparkles,
  Eye,
  Sliders,
  Copy,
  Check,
  Compass,
  Layers,
  Info
} from 'lucide-react';
import { LumioLogo } from './LumioLogo';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

export const InteractiveBrandStage: React.FC = () => {
  const { t, isLight } = useApp();
  const colorMode = isLight ? 'light' : 'dark';
  const [showBlueprints, setShowBlueprints] = useState(true);
  const [replayCount, setReplayCount] = useState(0);
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [arcTension, setArcTension] = useState(48);

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const rawSvgCode = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Semicircular Harmonic Arc -->
  <path d="M 36 22 C 54 10, 84 20, 84 48 C 84 72, 68 82, 56 82" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Geometric 'L' Stem & Base -->
  <path d="M 28 28 L 28 82 L 54 82" stroke="currentColor" stroke-width="6.5" stroke-linecap="square"/>
</svg>`;

  const copySvg = () => {
    navigator.clipboard?.writeText(rawSvgCode);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  return (
    <section id="brand-stage" className="py-24 border-t border-neutral-800/80 bg-[#0c0d0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                {t.brandStage.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.brandStage.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
                {t.brandStage.description}
              </p>
            </div>

            {/* Interactive Control Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Blueprint Grid Toggle */}
              <button
                onClick={() => setShowBlueprints(!showBlueprints)}
                className={`px-3.5 py-2 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  showBlueprints
                    ? 'bg-indigo-950/80 border-indigo-700/60 text-indigo-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{showBlueprints ? t.brandStage.specsOn : t.brandStage.specsOff}</span>
              </button>

              {/* Replay Animation */}
              <button
                onClick={() => setReplayCount((c) => c + 1)}
                className="px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.brandStage.replayDraw}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* The Interactive Stage */}
        <ScrollReveal direction="up" distance={36} delay={0.12} scale={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Canvas */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`lg:col-span-8 rounded-3xl border transition-colors duration-500 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center p-8 overflow-hidden shadow-2xl ${
              colorMode === 'dark'
                ? 'bg-[#0b0c0e] border-neutral-800'
                : 'bg-[#fafafa] border-neutral-300 text-black'
            }`}
          >
            {/* Background Grid Lines when in Blueprint mode */}
            {showBlueprints && (
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="w-full h-full grid grid-cols-12 grid-rows-12">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div
                      key={i}
                      className={`border-r border-b ${
                        colorMode === 'dark' ? 'border-neutral-800/40' : 'border-neutral-300/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3D Tilting Monogram Showcase */}
            <motion.div
              key={replayCount}
              animate={{
                rotateX: -mousePosition.y * 14,
                rotateY: mousePosition.x * 14
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative z-10 flex flex-col items-center select-none"
            >
              <div className="relative">
                {/* SVG Monogram with Dynamic Stroke Animation */}
                <svg
                  width={240}
                  height={240}
                  viewBox="0 0 100 100"
                  fill="none"
                  className="overflow-visible"
                >
                  {/* Blueprint construction guides if enabled */}
                  {showBlueprints && (
                    <g opacity={colorMode === 'dark' ? 0.35 : 0.45}>
                      {/* Bounding box */}
                      <rect x="20" y="16" width="68" height="72" stroke="#6366f1" strokeWidth="0.75" strokeDasharray="2 2" />
                      {/* Golden ratio circular arc guide */}
                      <circle cx="56" cy="48" r="32" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="3 3" />
                      {/* Angle ray */}
                      <line x1="28" y1="82" x2="84" y2="28" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 2" />
                    </g>
                  )}

                  {/* Semicircular Harmonic Arc */}
                  <motion.path
                    d={`M 36 22 C 54 10, 84 20, 84 ${arcTension} C 84 72, 68 82, 56 82`}
                    stroke={colorMode === 'dark' ? '#ffffff' : '#000000'}
                    strokeWidth={4.5}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
                    }}
                  />

                  {/* Geometric 'L' Stem & Base */}
                  <motion.path
                    d="M 28 28 L 28 82 L 54 82"
                    stroke={colorMode === 'dark' ? '#ffffff' : '#000000'}
                    strokeWidth={6.5}
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
                    }}
                  />

                  {/* Anchor Nodes (Specs Mode) */}
                  {showBlueprints && (
                    <g>
                      <circle cx="28" cy="28" r="2" fill="#6366f1" />
                      <circle cx="28" cy="82" r="2.5" fill="#6366f1" />
                      <circle cx="54" cy="82" r="2" fill="#6366f1" />
                      <circle cx="36" cy="22" r="2" fill="#ec4899" />
                      <circle cx="84" cy={arcTension} r="2" fill="#ec4899" />
                      <circle cx="56" cy="82" r="2" fill="#ec4899" />
                    </g>
                  )}
                </svg>
              </div>

              {/* Wordmark Typography */}
              <div className="flex flex-col items-center mt-6">
                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`font-display font-light text-4xl sm:text-5xl uppercase tracking-[0.45em] pl-[0.45em] ${
                      colorMode === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    L U M I O
                  </motion.h1>

                  {/* Underline beneath the L */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className={`h-[1.5px] w-6 absolute -bottom-1 left-3 origin-left ${
                      colorMode === 'dark' ? 'bg-white' : 'bg-black'
                    }`}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`mt-4 flex items-center justify-center gap-3 font-mono text-xs sm:text-sm tracking-[0.45em] uppercase ${
                    colorMode === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  <span className={`w-4 h-[1px] ${colorMode === 'dark' ? 'bg-neutral-600' : 'bg-neutral-400'}`} />
                  <span className="pl-[0.45em]">PORTFOLIO</span>
                  <span className={`w-4 h-[1px] ${colorMode === 'dark' ? 'bg-neutral-600' : 'bg-neutral-400'}`} />
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Floating Pill with Telemetry */}
            <div
              className={`absolute bottom-5 left-6 right-6 flex items-center justify-between text-[11px] font-mono p-3 rounded-xl border backdrop-blur-md ${
                colorMode === 'dark'
                  ? 'bg-neutral-900/80 border-neutral-800 text-neutral-400'
                  : 'bg-white/80 border-neutral-300 text-neutral-600 shadow'
              }`}
            >
              <span>GYRO PERSPECTIVE: X: {Math.round(mousePosition.x * 100)}° Y: {Math.round(mousePosition.y * 100)}°</span>
              <span className="hidden sm:inline">VECTOR TYPE: SCALABLE HERMITE CURVE</span>
              <button
                onClick={copySvg}
                className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedSvg ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSvg ? 'Copied SVG' : 'Copy Vector SVG'}</span>
              </button>
            </div>
          </div>

          {/* Side Specifications & Interactive Modifiers */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono text-neutral-400">DESIGN SPECIFICATION</span>
                <span className="text-xs font-mono text-indigo-400">TOKEN V2.4</span>
              </div>

              {/* Real-time arc tension slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">ARC GEOMETRIC TENSION:</span>
                  <span className="text-white font-semibold">{arcTension}px</span>
                </div>
                <input
                  type="range"
                  min="32"
                  max="64"
                  value={arcTension}
                  onChange={(e) => setArcTension(Number(e.target.value))}
                  className="w-full accent-white bg-neutral-800 rounded-lg cursor-pointer h-1.5"
                />
              </div>

              {/* Typography specs */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">PRIMARY STEM:</span>
                  <span className="text-white">6.5px Clean Square Miter</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">HARMONIC ARC:</span>
                  <span className="text-white">4.5px Round Cap Curve</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">LETTER TRACKING:</span>
                  <span className="text-white">+0.45em Spatial Air</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">COLOR CONTRAST:</span>
                  <span className="text-emerald-400">21:1 WCAG AAA Compliant</span>
                </div>
              </div>

              {/* Rationale Quote */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-400 font-sans leading-relaxed">
                <p>
                  <strong className="text-white font-medium">{t.brandStage.rationaleAuthor}:</strong> "{t.brandStage.rationaleQuote}"
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <div className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 block">{t.brandStage.needIdentity}</span>
                <span className="text-sm font-semibold text-white block mt-0.5">{t.brandStage.craftSystem}</span>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{t.brandStage.inquireBtn}</span>
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
