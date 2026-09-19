import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Figma,
  Sliders,
  CheckCircle2,
  Copy,
  Check,
  Maximize2,
  Eye,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

export const DesignToCodeInspector: React.FC = () => {
  const { t } = useApp();
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeComponent, setActiveComponent] = useState<'button' | 'card' | 'navbar'>('card');
  const [copiedCode, setCopiedCode] = useState(false);

  // Component spec data
  const specs = {
    card: {
      name: 'Interactive Glass Metric Card',
      figmaTokens: {
        dimensions: '380px × 240px',
        padding: '24px (space-6)',
        radius: '16px (radius-xl)',
        background: 'rgba(18, 19, 23, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropBlur: '16px',
        typography: 'Syne 24px SemiBold / JetBrains Mono 12px'
      },
      reactCode: `// Production React 19 + Tailwind
<motion.div
  whileHover={{ y: -4, scale: 1.01 }}
  className="p-6 rounded-2xl bg-[#121317]/85 border border-white/10 backdrop-blur-md shadow-2xl transition-all"
>
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs text-neutral-400">FPS TELEMETRY</span>
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
  </div>
  <div className="mt-4 text-3xl font-display font-semibold text-white">
    59.98 <span className="text-xs font-mono text-neutral-400 font-normal">FPS</span>
  </div>
</motion.div>`
    },
    button: {
      name: 'Magnetic Kinetic Pill Button',
      figmaTokens: {
        dimensions: 'Auto × 44px',
        padding: '12px 24px (2x horizontal)',
        radius: '9999px (full pill)',
        fill: '#FFFFFF (Surface Primary)',
        textStyle: 'Inter Display 13px SemiBold tracking +0.02em',
        shadow: '0 10px 25px -5px rgba(255, 255, 255, 0.12)'
      },
      reactCode: `// Production Kinetic Spring Component
<motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
  className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold tracking-wide flex items-center gap-2 shadow-lg cursor-pointer"
>
  <span>Launch Project</span>
  <ArrowRight className="w-3.5 h-3.5" />
</motion.button>`
    },
    navbar: {
      name: 'Adaptive Responsive Header Bar',
      figmaTokens: {
        dimensions: '100% × 64px',
        padding: '0 32px',
        borderBottom: '1px solid #262626',
        layout: 'Flex space-between, align center',
        blurEffect: 'Background Blur 20px, Saturate 180%'
      },
      reactCode: `// Responsive Island Header
<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-neutral-800/80 px-6 py-3 flex items-center justify-between">
  <LumioLogo size="sm" showSubtitle={false} />
  <nav className="flex items-center gap-6 font-mono text-xs">
    <a href="#works" className="text-neutral-400 hover:text-white transition-colors">Works</a>
    <a href="#contact" className="px-3.5 py-1.5 rounded-full bg-white text-black font-semibold">Initiate</a>
  </nav>
</header>`
    }
  };

  const currentSpec = specs[activeComponent];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(10, Math.min(rect.width - 10, e.clientX - rect.left));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(10, Math.min(rect.width - 10, touch.clientX - rect.left));
    setSliderPosition((x / rect.width) * 100);
  };

  const copyCode = () => {
    navigator.clipboard?.writeText(currentSpec.reactCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="inspector" className="py-24 border-t border-neutral-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                {t.inspector.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.inspector.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
                {t.inspector.description}
              </p>
            </div>

            {/* Component Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
              {(['card', 'button', 'navbar'] as const).map((tab) => {
                const label = tab === 'card' ? t.inspector.cardTab : tab === 'button' ? t.inspector.buttonTab : t.inspector.navbarTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveComponent(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                      activeComponent === tab
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* The Split Stage */}
        <ScrollReveal direction="up" distance={35} delay={0.15} scale={true}>
          <div className="rounded-2xl border border-neutral-800 bg-[#0f1013] overflow-hidden shadow-2xl">
          {/* Top Bar with Labels */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-800 bg-neutral-900/80 text-xs font-mono">
            <div className="flex items-center gap-2 text-indigo-400">
              <Figma className="w-3.5 h-3.5" />
              <span>{t.inspector.figmaSpecsLeft}</span>
            </div>
            <div className="text-neutral-500 hidden sm:block">
              {t.inspector.dragDivider}
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>{t.inspector.reactCodeRight}</span>
            </div>
          </div>

          {/* Interactive Comparison Canvas */}
          <div
            className="relative h-[420px] sm:h-[460px] select-none cursor-ew-resize overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Background: CODE Side (Alex) */}
            <div className="absolute inset-0 bg-[#0c0d10] p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE COMPILED DOM & TYPESCRIPT
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyCode();
                    }}
                    className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-[11px] font-mono text-neutral-300 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy JSX'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-black/70 border border-neutral-800 text-[11px] sm:text-xs font-mono text-emerald-300/90 overflow-x-auto leading-relaxed">
                  <code>{currentSpec.reactCode}</code>
                </pre>
              </div>

              {/* Rendered live interactive component preview */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500">LIVE RENDERED PREVIEW:</span>
                {activeComponent === 'card' && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-neutral-900/90 border border-white/10 shadow-xl max-w-xs flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                      100
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Lighthouse Score</div>
                      <div className="text-[10px] text-neutral-400 font-mono">0ms First Input Delay</div>
                    </div>
                  </motion.div>
                )}

                {activeComponent === 'button' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Inspect Token</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                )}

                {activeComponent === 'navbar' && (
                  <div className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>LUMIO 60fps Island</span>
                  </div>
                )}
              </div>
            </div>

            {/* Foreground: FIGMA Side (Elena) clipped by sliderPosition */}
            <div
              className="absolute inset-y-0 left-0 bg-[#15161b] border-r border-indigo-500/80 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-[1000px] sm:w-[1200px] h-full p-6 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    FIGMA VARIABLE TOKENS & BLUEPRINTS
                  </div>

                  {/* Token Inspector grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                    {Object.entries(currentSpec.figmaTokens).map(([k, v]) => (
                      <div key={k} className="p-3 rounded-xl bg-neutral-900/90 border border-indigo-500/20 text-xs">
                        <span className="text-[10px] font-mono text-indigo-300 block uppercase">{k}</span>
                        <span className="font-mono text-white text-xs mt-0.5 block truncate">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Blueprints with measurement rulers */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-4 text-xs font-mono text-indigo-300">
                  <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/60">
                    Vector Node Snapping: 8pt Grid
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/60">
                    W3C Design Token JSON Parity
                  </span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border-2 border-neutral-900 pointer-events-auto cursor-ew-resize">
                <Sliders className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bottom Metric Strip */}
          <div className="p-4 bg-neutral-900/50 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-neutral-400">
            <div>
              <span className="text-neutral-500 block">{t.inspector.designSync}</span>
              <span className="text-white font-semibold">{t.inspector.designSyncVal}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">{t.inspector.parityRate}</span>
              <span className="text-emerald-400 font-semibold">{t.inspector.parityRateVal}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">{t.inspector.motionEngine}</span>
              <span className="text-indigo-400 font-semibold">{t.inspector.motionEngineVal}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">{t.inspector.revisionCycles}</span>
              <span className="text-amber-400 font-semibold">{t.inspector.revisionCyclesVal}</span>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
