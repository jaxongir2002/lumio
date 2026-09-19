import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LumioLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  interactive?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  className?: string;
}

export const LumioLogo: React.FC<LumioLogoProps> = ({
  size = 'md',
  animated = true,
  interactive = false,
  variant = 'auto',
  showSubtitle = true,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  // Dimension presets
  const dimensions = {
    sm: { svgSize: 36, viewBox: '0 0 100 100', strokeL: 6, strokeArc: 4, textClass: 'text-xs tracking-[0.25em]', subClass: 'text-[7px]' },
    md: { svgSize: 52, viewBox: '0 0 100 100', strokeL: 6.5, strokeArc: 4.5, textClass: 'text-sm tracking-[0.3em]', subClass: 'text-[9px]' },
    lg: { svgSize: 120, viewBox: '0 0 100 100', strokeL: 6.5, strokeArc: 4.5, textClass: 'text-2xl tracking-[0.35em]', subClass: 'text-xs' },
    xl: { svgSize: 220, viewBox: '0 0 100 100', strokeL: 6.5, strokeArc: 4.5, textClass: 'text-4xl tracking-[0.4em]', subClass: 'text-sm' }
  };

  const dim = dimensions[size];

  // Colors based on variant
  const strokeColor = variant === 'light' ? '#000000' : variant === 'dark' ? '#ffffff' : 'currentColor';
  const textColor = variant === 'light' ? 'text-black' : variant === 'dark' ? 'text-white' : 'text-current';

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className} ${interactive ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => interactive && setReplayKey((k) => k + 1)}
    >
      {/* SVG Monogram */}
      <motion.div
        key={replayKey}
        animate={interactive && isHovered ? { scale: 1.05, rotateZ: 2 } : { scale: 1, rotateZ: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative flex items-center justify-center"
      >
        <svg
          width={dim.svgSize}
          height={dim.svgSize}
          viewBox={dim.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Subtle glow aura when interactive */}
          {interactive && isHovered && (
            <circle
              cx="50"
              cy="48"
              r="40"
              fill="white"
              fillOpacity="0.06"
              filter="blur(16px)"
            />
          )}

          {/* Semicircular Harmonic Arc (Top Right curve) */}
          {/* Starts at (36, 22), sweeps over (68, 12), down through (84, 46) to (58, 80) */}
          <motion.path
            d="M 36 22 C 54 10, 84 20, 84 48 C 84 72, 68 82, 56 82"
            stroke={strokeColor}
            strokeWidth={dim.strokeArc}
            strokeLinecap="round"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={{
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
            }}
          />

          {/* Geometric 'L' Stem & Base */}
          <motion.path
            d="M 28 28 L 28 82 L 54 82"
            stroke={strokeColor}
            strokeWidth={dim.strokeL}
            strokeLinecap="square"
            strokeLinejoin="miter"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={{
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
            }}
          />

          {/* Decorative geometric anchor node on hover */}
          {interactive && isHovered && (
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              cx="28"
              cy="28"
              r="2.5"
              fill={strokeColor}
            />
          )}
        </svg>
      </motion.div>

      {/* Typography: L U M I O */}
      <div className="flex flex-col items-center mt-2.5">
        <div className="relative">
          <motion.h1
            initial={animated ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`font-display font-light uppercase text-center ${dim.textClass} ${textColor} pl-[0.3em]`}
          >
            L U M I O
          </motion.h1>

          {/* Subtle line under L as seen in original logo */}
          <motion.div
            initial={animated ? { scaleX: 0 } : false}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`h-[1px] ${variant === 'light' ? 'bg-black' : 'bg-white'} w-4 absolute -bottom-1 left-2 origin-left`}
          />
        </div>

        {/* Subtitle: — P O R T F O L I O — */}
        {showSubtitle && (
          <motion.div
            initial={animated ? { opacity: 0, y: 3 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`font-mono text-neutral-400 mt-2 flex items-center justify-center gap-2 ${dim.subClass} tracking-[0.35em] uppercase`}
          >
            <span className="w-3 h-[1px] bg-neutral-600 inline-block" />
            <span className="pl-[0.35em]">PORTFOLIO</span>
            <span className="w-3 h-[1px] bg-neutral-600 inline-block" />
          </motion.div>
        )}
      </div>
    </div>
  );
};
