import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sliders,
  Eye,
  EyeOff,
  Sparkles,
  Volume2,
  VolumeX,
  Layers,
  Palette,
  Check,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Grid
} from 'lucide-react';
import { Project } from '../types';

interface SandboxProps {
  project: Project;
}

export const InteractiveShowcaseSandbox: React.FC<SandboxProps> = ({ project }) => {
  const type = project.interactiveDemo.type;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 overflow-hidden relative shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-800 text-xs text-neutral-300 font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE INTERACTIVE ENGINE
          </div>
          <h4 className="text-xl font-display font-semibold text-white tracking-tight">
            {project.interactiveDemo.title}
          </h4>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            {project.interactiveDemo.description}
          </p>
        </div>
        <div className="text-xs text-neutral-500 font-mono self-start sm:self-auto bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
          React 19 • Zero-Lag
        </div>
      </div>

      {type === 'lumio-grid' && <LumioGridSandbox />}
      {type === 'verve-cards' && <VerveCardsSandbox />}
      {type === 'kroma-tokens' && <KromaTokensSandbox />}
      {type === 'aura-atelier' && <AuraAtelierSandbox />}
      {type === 'aether-sound' && <AetherSoundSandbox />}
    </div>
  );
};

/* --- 1. LUMIO GRID & MONOGRAM SANDBOX (Inspired by user's uploaded logo) --- */
const LumioGridSandbox: React.FC = () => {
  const [columns, setColumns] = useState<number>(3);
  const [themeMode, setThemeMode] = useState<'monochrome' | 'stone' | 'blueprint'>('monochrome');
  const [letterSpacing, setLetterSpacing] = useState<number>(12);
  const [arcRotation, setArcRotation] = useState<number>(0);

  const themeStyles = {
    monochrome: {
      bg: 'bg-neutral-950',
      border: 'border-neutral-800',
      text: 'text-neutral-100',
      sub: 'text-neutral-400',
      accent: '#ffffff',
      gridLines: 'border-neutral-900'
    },
    stone: {
      bg: 'bg-[#181816]',
      border: 'border-[#2e2d28]',
      text: 'text-[#ece7df]',
      sub: 'text-[#a39f93]',
      accent: '#d4af37',
      gridLines: 'border-[#262420]'
    },
    blueprint: {
      bg: 'bg-[#0b1320]',
      border: 'border-[#1e3048]',
      text: 'text-[#d6e5ff]',
      sub: 'text-[#7d9cc7]',
      accent: '#38bdf8',
      gridLines: 'border-[#14233a]'
    }
  }[themeMode];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/60 text-xs">
        <div>
          <label className="text-neutral-400 block mb-1 font-mono">COLUMNS: {columns}</label>
          <div className="flex gap-2">
            {[2, 3, 4].map((col) => (
              <button
                key={col}
                onClick={() => setColumns(col)}
                className={`flex-1 py-1.5 rounded text-center transition-all ${
                  columns === col ? 'bg-white text-black font-semibold' : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {col} Cols
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-neutral-400 block mb-1 font-mono">THEME PALETTE</label>
          <div className="flex gap-2">
            {(['monochrome', 'stone', 'blueprint'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setThemeMode(mode)}
                className={`flex-1 py-1.5 rounded capitalize transition-all ${
                  themeMode === mode ? 'bg-white text-black font-semibold' : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-neutral-400 block mb-1 font-mono">TRACKING: {letterSpacing}px</label>
          <input
            type="range"
            min="4"
            max="24"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full accent-white cursor-pointer mt-1"
          />
        </div>
      </div>

      {/* Live Canvas Area */}
      <div className={`${themeStyles.bg} border ${themeStyles.border} rounded-xl p-8 sm:p-12 transition-colors duration-500 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px]`}>
        {/* Architectural Background Grid */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-25">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`border-r ${themeStyles.gridLines} h-full`} />
          ))}
        </div>

        {/* Interactive Monogram Logo (Based on Lumio user asset) */}
        <div className="relative z-10 flex flex-col items-center text-center cursor-pointer group select-none" onClick={() => setArcRotation((r) => r + 45)}>
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-6">
            {/* Geometric Monogram L and harmonic arc matching official logo */}
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current overflow-visible" style={{ color: themeStyles.accent }}>
              {/* Semicircular Harmonic Arc */}
              <motion.path
                d="M 36 22 C 54 10, 84 20, 84 48 C 84 72, 68 82, 56 82"
                fill="none"
                strokeWidth="4.5"
                strokeLinecap="round"
                animate={{ rotate: arcRotation }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                style={{ transformOrigin: '50% 50%' }}
              />
              {/* Geometric 'L' Stem & Base */}
              <path
                d="M 28 28 L 28 82 L 54 82"
                fill="none"
                strokeWidth="6.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
            <span className="absolute -bottom-2 text-[10px] font-mono text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to rotate arc
            </span>
          </div>

          {/* Editorial Monogram Text */}
          <h3
            className={`font-display font-medium text-2xl sm:text-3xl tracking-[0.4em] uppercase ${themeStyles.text} transition-all`}
            style={{ letterSpacing: `${letterSpacing}px` }}
          >
            L U M I O
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <span className={`w-8 h-[1px] ${themeStyles.sub} bg-current opacity-40`} />
            <span className={`text-[11px] font-mono uppercase tracking-[0.3em] ${themeStyles.sub}`}>
              PORTFOLIO ARCHIVE
            </span>
            <span className={`w-8 h-[1px] ${themeStyles.sub} bg-current opacity-40`} />
          </div>
        </div>

        {/* Dynamic Architectural Grid Elements */}
        <div className={`w-full mt-10 grid gap-4 transition-all duration-300 relative z-10`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
          {Array.from({ length: columns }).map((_, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${themeStyles.border} bg-neutral-900/40 backdrop-blur text-left hover:border-neutral-500 transition-colors`}
            >
              <span className={`text-[10px] font-mono ${themeStyles.sub} block mb-1`}>
                SPACE NODE 0{idx + 1}
              </span>
              <p className={`text-xs font-display font-medium ${themeStyles.text}`}>
                {idx === 0 ? 'Negative Space & Scale' : idx === 1 ? 'Structural Monoline' : 'Harmonic Ratios'}
              </p>
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>RATIO: 1.618</span>
                <span>F-STOP: 2.8</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- 2. VERVE 3D CARDS & TELEMETRY SANDBOX --- */
const VerveCardsSandbox: React.FC = () => {
  const [privacyMask, setPrivacyMask] = useState(false);
  const [cardTheme, setCardTheme] = useState<'emerald' | 'cyan' | 'platinum'>('emerald');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Figma Organization Seats', amount: -280.0, time: '2 mins ago', icon: '🎨' },
    { id: 2, title: 'Client Wire: Lumio Atelier', amount: +18500.0, time: '1 hour ago', icon: '⚡' },
    { id: 3, title: 'AWS Cloud Engine Ingress', amount: -64.2, time: '3 hours ago', icon: '☁️' }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const cardThemes = {
    emerald: {
      gradient: 'from-emerald-950/90 via-neutral-900 to-emerald-900/50',
      border: 'border-emerald-500/40',
      accent: 'text-emerald-400',
      glow: 'shadow-[0_0_40px_rgba(16,185,129,0.15)]'
    },
    cyan: {
      gradient: 'from-cyan-950/90 via-neutral-900 to-cyan-900/50',
      border: 'border-cyan-500/40',
      accent: 'text-cyan-400',
      glow: 'shadow-[0_0_40px_rgba(6,182,212,0.15)]'
    },
    platinum: {
      gradient: 'from-neutral-800 via-neutral-900 to-neutral-700/60',
      border: 'border-neutral-400/50',
      accent: 'text-neutral-200',
      glow: 'shadow-[0_0_40px_rgba(255,255,255,0.1)]'
    }
  }[cardTheme];

  const currencySymbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const balance = privacyMask ? '••••••••' : `${currencySymbol}142,890.50`;

  const handleSimulatePayment = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTimeout(() => {
      const newTx = {
        id: Date.now(),
        title: 'Studio Coffee & Nitro Brew',
        amount: -14.5,
        time: 'Just now',
        icon: '☕'
      };
      setTransactions((prev) => [newTx, ...prev.slice(0, 3)]);
      setIsProcessing(false);
    }, 450);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* 3D Tactile Card View */}
      <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between text-xs">
          <div className="flex gap-2">
            {(['emerald', 'cyan', 'platinum'] as const).map((theme) => (
              <button
                key={theme}
                onClick={() => setCardTheme(theme)}
                className={`px-3 py-1 rounded-full capitalize font-mono text-[11px] border transition-all ${
                  cardTheme === theme
                    ? 'bg-neutral-800 border-white text-white'
                    : 'border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPrivacyMask(!privacyMask)}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            {privacyMask ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="font-mono text-[11px]">{privacyMask ? 'Hidden' : 'Visible'}</span>
          </button>
        </div>

        {/* Physical 3D Card Simulation */}
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 4, rotateX: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`aspect-[1.586/1] w-full rounded-2xl p-6 bg-gradient-to-br ${cardThemes.gradient} border ${cardThemes.border} ${cardThemes.glow} flex flex-col justify-between relative overflow-hidden cursor-pointer`}
        >
          {/* Shimmer light effect */}
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-neutral-700/50 flex items-center justify-center font-display font-bold text-white text-sm">
                V
              </div>
              <span className="font-display font-semibold tracking-wider text-white text-sm">VERVE BLACK</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-red-500/80 -mr-2" />
              <div className="w-6 h-6 rounded-full bg-amber-400/80" />
            </div>
          </div>

          <div className="relative z-10 my-auto">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Available Balance</span>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-white tracking-tight mt-0.5">
              {balance}
            </div>
          </div>

          <div className="flex items-end justify-between relative z-10 text-xs font-mono">
            <div>
              <span className="text-[9px] text-neutral-400 uppercase block">Card Holder</span>
              <span className="text-neutral-200 tracking-wider">ELENA & ALEX • SYNERGY</span>
            </div>
            <div>
              <span className="text-[9px] text-neutral-400 uppercase block">Expires</span>
              <span className="text-neutral-200">09/29</span>
            </div>
          </div>
        </motion.div>

        {/* Currency Pill Switcher */}
        <div className="flex items-center justify-between bg-neutral-900/60 px-4 py-2.5 rounded-xl border border-neutral-800 text-xs font-mono">
          <span className="text-neutral-400">DENOMINATION:</span>
          <div className="flex gap-2">
            {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-2.5 py-1 rounded text-[11px] ${
                  currency === curr ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Telemetry & Micro-feed */}
      <div className="lg:col-span-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
            <span className="text-xs font-mono text-neutral-400">TELEMETRY STREAM</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
              60 FPS ACTIVE
            </span>
          </div>

          <div className="space-y-2.5 mt-4">
            <AnimatePresence initial={false}>
              {transactions.map((tx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{tx.icon}</span>
                    <div>
                      <p className="font-medium text-neutral-200">{tx.title}</p>
                      <span className="text-[10px] font-mono text-neutral-500">{tx.time}</span>
                    </div>
                  </div>
                  <span
                    className={`font-mono font-medium ${
                      tx.amount > 0 ? 'text-emerald-400' : 'text-neutral-300'
                    }`}
                  >
                    {tx.amount > 0 ? '+' : ''}
                    {currencySymbol}
                    {Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={handleSimulatePayment}
          disabled={isProcessing}
          className="w-full mt-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
        >
          {isProcessing ? (
            <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-black border-t-transparent" />
          ) : (
            <Sparkles className="w-3.5 h-3.5" />
          )}
          <span>{isProcessing ? 'Routing Fast Wire...' : 'Simulate Micro-Transaction'}</span>
        </button>
      </div>
    </div>
  );
};

/* --- 3. KROMA DESIGN SYSTEM TOKEN ENGINE --- */
const KromaTokensSandbox: React.FC = () => {
  const [accentColor, setAccentColor] = useState<'indigo' | 'emerald' | 'amber' | 'rose'>('indigo');
  const [radiusMode, setRadiusMode] = useState<'sharp' | 'soft' | 'pill'>('soft');
  const [toggleState, setToggleState] = useState(true);
  const [textValue, setTextValue] = useState('Production Design Token System');

  const accents = {
    indigo: { hex: '#6366f1', text: 'text-indigo-400', bg: 'bg-indigo-600', ring: 'ring-indigo-500' },
    emerald: { hex: '#10b981', text: 'text-emerald-400', bg: 'bg-emerald-600', ring: 'ring-emerald-500' },
    amber: { hex: '#f59e0b', text: 'text-amber-400', bg: 'bg-amber-600', ring: 'ring-amber-500' },
    rose: { hex: '#f43f5e', text: 'text-rose-400', bg: 'bg-rose-600', ring: 'ring-rose-500' }
  }[accentColor];

  const radiusClass = radiusMode === 'sharp' ? 'rounded-none' : radiusMode === 'soft' ? 'rounded-xl' : 'rounded-full';

  return (
    <div className="space-y-6">
      {/* Token Control Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 text-xs">
        <div>
          <span className="text-neutral-400 block mb-2 font-mono">TOKEN: --color-primary-accent</span>
          <div className="flex gap-2">
            {(['indigo', 'emerald', 'amber', 'rose'] as const).map((color) => (
              <button
                key={color}
                onClick={() => setAccentColor(color)}
                className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 capitalize transition-all ${
                  accentColor === color ? 'bg-neutral-800 text-white ring-1 ring-white/30' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor:
                      color === 'indigo' ? '#6366f1' : color === 'emerald' ? '#10b981' : color === 'amber' ? '#f59e0b' : '#f43f5e'
                  }}
                />
                <span className="font-mono text-[11px]">{color}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-neutral-400 block mb-2 font-mono">TOKEN: --border-radius-scale</span>
          <div className="flex gap-2">
            {(['sharp', 'soft', 'pill'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setRadiusMode(mode)}
                className={`flex-1 py-1.5 rounded-lg capitalize font-mono text-[11px] transition-all ${
                  radiusMode === mode ? 'bg-white text-black font-semibold' : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {mode} ({mode === 'sharp' ? '0px' : mode === 'soft' ? '12px' : '999px'})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reactive Component Preview using Active Tokens */}
      <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-800/80">
          <span>COMPILED OUTPUT TARGET</span>
          <span className="text-neutral-300">var(--kroma-theme)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Dynamic Button */}
          <button
            className={`py-3 px-5 text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${accents.bg} ${radiusClass}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Primary Action CTA</span>
          </button>

          {/* Dynamic Input */}
          <div className="relative">
            <input
              type="text"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              className={`w-full bg-neutral-900 border border-neutral-700 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:${accents.ring} transition-all ${radiusClass}`}
            />
          </div>

          {/* Dynamic Switch & Badge */}
          <div className="flex items-center justify-between p-2.5 bg-neutral-900/60 border border-neutral-800 rounded-lg">
            <span className="text-xs text-neutral-300 font-mono">Dark State</span>
            <button
              onClick={() => setToggleState(!toggleState)}
              className={`w-11 h-6 p-0.5 transition-colors duration-200 ease-in-out cursor-pointer ${
                toggleState ? accents.bg : 'bg-neutral-800'
              } ${radiusClass}`}
            >
              <div
                className={`w-5 h-5 bg-white shadow-sm transform transition duration-200 ease-in-out ${
                  toggleState ? 'translate-x-5' : 'translate-x-0'
                } ${radiusMode === 'sharp' ? 'rounded-none' : 'rounded-full'}`}
              />
            </button>
          </div>
        </div>

        {/* Live CSS Token Code Output */}
        <div className="bg-[#09090b] p-3 rounded-lg border border-neutral-800/80 text-[11px] font-mono text-neutral-400 overflow-x-auto">
          <span className="text-neutral-500">// Generated CSS Token Output:</span>
          <br />
          <span className="text-indigo-300">:root</span> {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-neutral-300">--color-accent:</span>{' '}
          <span className="text-emerald-400">{accents.hex}</span>;
          <br />
          &nbsp;&nbsp;<span className="text-neutral-300">--radius-surface:</span>{' '}
          <span className="text-amber-400">{radiusMode === 'sharp' ? '0px' : radiusMode === 'soft' ? '12px' : '9999px'}</span>;
          <br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

/* --- 4. AURA ATELIER INTERACTIVE CUSTOMIZER --- */
const AuraAtelierSandbox: React.FC = () => {
  const [material, setMaterial] = useState<'walnut' | 'travertine' | 'clay'>('walnut');
  const [ambientLight, setAmbientLight] = useState<number>(65);
  const [added, setAdded] = useState(false);

  const materials = {
    walnut: {
      name: 'Smoked Walnut Finish',
      texture: 'bg-[#2b231d]',
      textColor: 'text-amber-200',
      price: '$1,280',
      badge: 'FSC Certified Solid Hardwood'
    },
    travertine: {
      name: 'Tuscan Travertine Stone',
      texture: 'bg-[#e2ded2]',
      textColor: 'text-neutral-900',
      price: '$1,650',
      badge: 'Honed Natural Porous Marble'
    },
    clay: {
      name: 'Raw Terracotta & Olive Clay',
      texture: 'bg-[#5c5044]',
      textColor: 'text-orange-200',
      price: '$990',
      badge: 'Hand-thrown Ceramic Glaze'
    }
  }[material];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Visual Mock Showcase */}
      <div
        className="md:col-span-7 rounded-xl p-8 flex flex-col justify-between min-h-[300px] transition-all duration-700 relative overflow-hidden"
        style={{
          backgroundColor: material === 'travertine' ? '#222220' : '#141416',
          filter: `brightness(${ambientLight}%)`
        }}
      >
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-neutral-400 tracking-wider">AURA COLLECTION 2025</span>
          <span className="px-2.5 py-1 rounded bg-black/40 backdrop-blur text-white text-[11px] font-mono">
            {materials.badge}
          </span>
        </div>

        {/* Minimal Geometric Furniture Silhouette */}
        <div className="my-auto flex flex-col items-center justify-center py-6">
          <div
            className={`w-32 h-32 sm:w-40 sm:h-40 rounded-2xl transition-all duration-500 shadow-2xl flex items-center justify-center relative overflow-hidden border border-white/20`}
            style={{
              backgroundColor:
                material === 'walnut' ? '#3d2e24' : material === 'travertine' ? '#d8d2c3' : '#6b5443'
            }}
          >
            {/* Grain detail */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise" />
            <div className="text-center p-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 block">
                ATELIER PIECE
              </span>
              <span className="font-display font-bold text-lg text-white block mt-1">NO. 08</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs border-t border-white/10 pt-3">
          <span className="font-display text-white font-medium">{materials.name}</span>
          <span className="font-mono text-white font-semibold text-sm">{materials.price}</span>
        </div>
      </div>

      {/* Material & Lighting Controls */}
      <div className="md:col-span-5 bg-neutral-900/60 p-5 rounded-xl border border-neutral-800 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-xs font-mono text-neutral-400 block mb-2">SELECT FINISH / MATERIAL</span>
          <div className="space-y-2">
            {(['walnut', 'travertine', 'clay'] as const).map((mat) => (
              <button
                key={mat}
                onClick={() => {
                  setMaterial(mat);
                  setAdded(false);
                }}
                className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                  material === mat ? 'bg-neutral-800 border-white text-white' : 'border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full border border-white/30"
                    style={{
                      backgroundColor:
                        mat === 'walnut' ? '#3d2e24' : mat === 'travertine' ? '#d8d2c3' : '#6b5443'
                    }}
                  />
                  <span className="text-xs capitalize font-medium">{mat} Edition</span>
                </div>
                {material === mat && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
              <span>AMBIENT GALLERY LUX:</span>
              <span>{ambientLight}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="110"
              value={ambientLight}
              onChange={(e) => setAmbientLight(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>
        </div>

        <button
          onClick={() => setAdded(true)}
          className={`w-full py-2.5 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
            added ? 'bg-emerald-500 text-black' : 'bg-white text-black hover:bg-neutral-200'
          }`}
        >
          {added ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          <span>{added ? 'Reserved in Bag' : 'Add Custom Piece to Inquiry'}</span>
        </button>
      </div>
    </div>
  );
};

/* --- 5. AETHER AUDIO LAB (REAL BROWSER SYNTHESIS) --- */
const AetherSoundSandbox: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(0.15);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const notes = [
    { label: 'Harmonic Alpha', freq: 432, desc: '432 Hz Healing Resonance' },
    { label: 'Solfeggio Frequency', freq: 528, desc: '528 Hz DNA / Transformation' },
    { label: 'Spatial Pulse', freq: 639, desc: '639 Hz Harmonic Connection' },
    { label: 'Upper Horizon', freq: 852, desc: '852 Hz Pure Awakening' }
  ];

  const playTone = (freq: number, label: string) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Smooth attack & release
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.45);

      setIsPlaying(label);
      setTimeout(() => {
        setIsPlaying(null);
      }, 1400);
    } catch {
      // Audio context fallback if blocked
      setIsPlaying(label);
      setTimeout(() => setIsPlaying(null), 1000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Synthesizer Waveform Visualizer */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
        {/* Animated Sound Wave Graphic */}
        <div className="w-full flex items-center justify-center gap-1.5 h-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-violet-400' : 'bg-neutral-700'
              }`}
              animate={{
                height: isPlaying
                  ? [12, Math.sin(i * 0.5) * 48 + 24, 12]
                  : 8 + Math.sin(i * 0.4) * 12
              }}
              transition={{
                repeat: Infinity,
                duration: isPlaying ? 0.6 : 2.5,
                delay: i * 0.03
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs font-mono text-neutral-400">
          <Volume2 className="w-3.5 h-3.5 text-violet-400" />
          <span>{isPlaying ? `EMITTING ${isPlaying.toUpperCase()}` : 'CLICK ANY FREQUENCY TO SYNTHESIZE'}</span>
        </div>
      </div>

      {/* Note Trigger Dials */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {notes.map((note) => (
          <button
            key={note.freq}
            onClick={() => playTone(note.freq, note.label)}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              isPlaying === note.label
                ? 'bg-violet-950/70 border-violet-500 text-white shadow-lg shadow-violet-950/40'
                : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-semibold">{note.freq} Hz</span>
              <span className="text-[10px] text-neutral-500 font-mono">SINE</span>
            </div>
            <p className="text-xs font-display font-medium text-neutral-200">{note.label}</p>
            <span className="text-[10px] text-neutral-500 block mt-1">{note.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
