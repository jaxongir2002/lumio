import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal, ScrollCounter } from './ScrollAnimations';

interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  avatarText: string;
  headline: string;
  quote: string;
  metric: string;
  metricLabel: string;
  tags: string[];
}

export const SocialProofSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, language } = useApp();

  const testimonialsEn: Testimonial[] = [
    {
      id: '1',
      client: 'Marcus Vance',
      role: 'Co-Founder & CEO',
      company: 'Verve Financial',
      avatarText: 'MV',
      headline: 'Replaced a 12-person agency with Elena & Alex. Shipped in 3 weeks.',
      quote:
        'Traditional design agencies take two months just to schedule handoff meetings. With LUMIO, Elena was crafting the geometric token system while Alex was already writing the reactive 60fps WebGL shaders in React. Our Series A seed launch converted at 4.8% on day one.',
      metric: '+320%',
      metricLabel: 'Inbound Conversion Rate',
      tags: ['Fintech Web App', 'Figma Tokens', 'React 19']
    },
    {
      id: '2',
      client: 'Sora Takahashi',
      role: 'Creative Director',
      company: 'Aura Living Furniture Atelier',
      avatarText: 'ST',
      headline: 'Uncompromising editorial elegance with 99+ Core Web Vitals.',
      quote:
        'Luxury design is usually killed by sluggish frontend execution. LUMIO is the first studio that treated our typography, spatial whitespace, and imagery with architectural reverence while maintaining sub-100ms interaction latency worldwide.',
      metric: '99.8',
      metricLabel: 'Lighthouse Performance Score',
      tags: ['Luxury E-Commerce', 'Editorial Typography', 'Global CDN']
    },
    {
      id: '3',
      client: 'Dr. Julian Morales',
      role: 'VP of Product Architecture',
      company: 'Synthetix Bio Labs',
      avatarText: 'JM',
      headline: 'Zero friction from design artboard to production pull requests.',
      quote:
        'Having a dedicated graphic designer and a senior frontend architect working as a unified brain is an unfair competitive advantage. Every component they touched felt mathematically intentional, robustly typed, and fluid to touch.',
      metric: '18 Days',
      metricLabel: 'Concept-to-Production Launch',
      tags: ['Design System', 'TypeScript', 'Motion Physics']
    }
  ];

  const testimonialsRu: Testimonial[] = [
    {
      id: '1',
      client: 'Маркус Вэнс',
      role: 'Сооснователь & CEO',
      company: 'Verve Financial',
      avatarText: 'MV',
      headline: 'Заменили агентство из 12 человек дуэтом Елены и Алекса. Запустились за 3 недели.',
      quote:
        'Традиционные дизайн-агентства тратят два месяца только на бесконечные согласования. В LUMIO Елена проектировала систему дизайн-токенов, пока Алекс уже писал реактивные 60fps WebGL-шейдеры на React. Конверсия посевного раунда составила 4.8% в первый день.',
      metric: '+320%',
      metricLabel: 'Рост входящей конверсии',
      tags: ['Fintech Web App', 'Figma Tokens', 'React 19']
    },
    {
      id: '2',
      client: 'Сора Такахаси',
      role: 'Креативный директор',
      company: 'Aura Living Furniture Atelier',
      avatarText: 'ST',
      headline: 'Бескомпромиссная редакторская элегантность с 99+ Core Web Vitals.',
      quote:
        'Люксовый дизайн часто страдает от медленного фронтенда. LUMIO — первая студия, которая отнеслась к типографике, воздуху и медиа с архитектурным трепетом, сохранив задержку взаимодействия менее 100мс по всему миру.',
      metric: '99.8',
      metricLabel: 'Оценка производительности Lighthouse',
      tags: ['Luxury E-Commerce', 'Editorial Typography', 'Global CDN']
    },
    {
      id: '3',
      client: 'Д-р Джулиан Моралес',
      role: 'Вице-президент по архитектуре продукта',
      company: 'Synthetix Bio Labs',
      avatarText: 'JM',
      headline: 'Ноль трения от артборда в Figma до релизного пул-реквеста.',
      quote:
        'Выделенный графический дизайнер и старший фронтенд-архитектор как единый мозг — это мощнейшее конкурентное преимущество. Каждый компонент математически выверен, надежно типизирован и плавен в анимациях.',
      metric: '18 Дней',
      metricLabel: 'Срок запуска от концепта до продакшена',
      tags: ['Design System', 'TypeScript', 'Motion Physics']
    }
  ];

  const testimonials = language === 'ru' ? testimonialsRu : testimonialsEn;
  const current = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="proof" className="py-24 border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              {t.proof.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.proof.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.proof.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Showcase Card */}
        <ScrollReveal direction="up" distance={36} delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Quote Card */}
          <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-12 relative flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-mono font-bold text-xs text-white">
                    {current.avatarText}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{current.client}</h3>
                    <p className="text-xs text-neutral-400 font-mono">
                      {current.role} • <span className="text-neutral-300">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 space-y-4"
                >
                  <h4 className="text-xl sm:text-2xl font-display font-medium text-white leading-snug">
                    "{current.headline}"
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                    {current.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls & Tags */}
            <div className="pt-8 mt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[11px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-neutral-400"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-neutral-500 px-2">
                  {activeIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-neutral-400"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Key Metric & Studio Guarantee Card */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            {/* Real Metric Highlight */}
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex-1 flex flex-col justify-center shadow-lg">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block">
                {t.proof.measuredValue}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3"
                >
                  <div className="text-5xl sm:text-6xl font-display font-bold text-white tracking-tight">
                    {current.metric}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-2">
                    {current.metricLabel}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Why Founders Choose LUMIO */}
            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3 shadow-lg">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                {t.proof.lumioStandard}
              </span>
              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{t.proof.standardPoint1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{t.proof.standardPoint2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{t.proof.standardPoint3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Live Animated Scroll Metrics Banner */}
        <ScrollReveal direction="up" distance={30} delay={0.25}>
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                <ScrollCounter target={320} prefix="+" suffix="%" />
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Inbound Conversion Lift
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-bold text-emerald-400">
                <ScrollCounter target={99} suffix=".8" />
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Average Lighthouse Score
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-bold text-indigo-400">
                <ScrollCounter target={18} suffix="d" />
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Sprint Concept-to-Prod
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-bold text-amber-400">
                <ScrollCounter target={100} suffix="%" />
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Figma-to-React Fidelity
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

