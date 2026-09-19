import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  blur?: boolean;
  once?: boolean;
  scale?: boolean;
  id?: string;
}

/**
 * High-end cinematic scroll reveal wrapper with cubic-bezier easing,
 * optional subtle blur dissipation, and directional entry.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.75,
  direction = 'up',
  distance = 36,
  blur = true,
  once = true,
  scale = false,
  id
}) => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const transform = getInitialTransform();

  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        x: transform.x,
        y: transform.y,
        scale: scale ? 0.96 : 1,
        filter: blur ? 'blur(8px)' : 'blur(0px)'
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}
      viewport={{ once, amount: 0.18 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Apple / bespoke studio easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // e.g. -40 to 40 px
  direction?: 'vertical' | 'horizontal';
}

/**
 * Parallax element that shifts smoothly as its container moves through viewport.
 */
export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  className = '',
  speed = 40,
  direction = 'vertical'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [-speed, speed]);
  const x = useTransform(smoothProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={direction === 'vertical' ? { y } : { x }}>
        {children}
      </motion.div>
    </div>
  );
};

interface ScrollStaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

/**
 * Container that orchestrates staggered child entrance on scroll.
 */
export const ScrollStaggerContainer: React.FC<ScrollStaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className = '', yOffset = 28 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, filter: 'blur(6px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/**
 * Animated number counter triggered on scroll intersection
 */
export const ScrollCounter: React.FC<CounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = ease * target;
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
};
