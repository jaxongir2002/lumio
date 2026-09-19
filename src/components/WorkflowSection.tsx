import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS, TESTIMONIALS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { t, language } = useApp();

  const stepsRu = [
    {
      step: '01',
      title: 'Дизайн-тезис и визуальный вектор',
      discipline: 'Графический дизайн (Елена)',
      description: 'Мы разрабатываем креативную концепцию, типографическую шкалу, палитру и визуальную идентичность в Figma с математической точностью.',
      deliverable: 'Figma Design System Tokens, UI Kit, Архитектура макетов'
    },
    {
      step: '02',
      title: 'Инженерный каркас и архитектура',
      discipline: 'Фронтенд-разработка (Алекс)',
      description: 'Параллельно строим основу на React 19, строгую типизацию TypeScript, тему Tailwind и аппаратный анимационный движок Motion.',
      deliverable: 'Репозиторий GitHub, Сборка Vite, Токены стилей'
    },
    {
      step: '03',
      title: 'Синхронизация и кинетическая физика',
      discipline: 'Совместная синергия',
      description: 'Елена и Алекс совместно калибруют микровзаимодействия, кривые Безье, кастомные курсоры и реактивные физические эффекты без потери качества.',
      deliverable: 'Интерактивный Stage, 60fps анимации, A/B превью'
    },
    {
      step: '04',
      title: 'Оптимизация Core Web Vitals и релиз',
      discipline: 'Фронтенд & Арт-дирекшн',
      description: 'Глубокая оптимизация производительности (Lighthouse 99+), аудит доступности WCAG AAA, интеграция SEO-тегов и деплой на Edge CDN.',
      deliverable: 'Production деплой, Документация, Гарантия поддержки'
    }
  ];

  const steps = language === 'ru' ? stepsRu : WORKFLOW_STEPS;

  return (
    <section id="process" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {t.process.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.process.title}
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              {t.process.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Step Timeline */}
        <ScrollReveal direction="up" distance={35} delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Step Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  activeStep === idx
                    ? 'bg-neutral-900 border-white/40 shadow-lg'
                    : 'bg-neutral-900/50 border-neutral-800/70 hover:border-neutral-700 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${
                      activeStep === idx ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h4
                      className={`text-sm sm:text-base font-display font-semibold ${
                        activeStep === idx ? 'text-white' : 'text-neutral-300'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500 block mt-0.5">
                      {step.discipline}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    activeStep === idx ? 'text-white translate-x-1' : 'text-neutral-600'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Step Detailed Canvas */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-xl">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400">
                  {t.process.stageOf} {steps[activeStep].step} / 04
                </span>
                <span className="text-xs font-mono text-neutral-500 bg-neutral-800/80 px-3 py-1 rounded-lg border border-neutral-700">
                  {t.process.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Deliverable Callout */}
              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                  {t.process.artifacts}
                </span>
                <p className="text-xs font-medium text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{steps[activeStep].deliverable}</span>
                </p>
              </div>
            </div>

            {/* Bottom Progress Tracker */}
            <div className="pt-8 border-t border-neutral-800/80 mt-8 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>{t.process.dualSprint}</span>
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStep ? 'w-8 bg-white' : 'w-2 bg-neutral-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Client Testimonials Carousel / Grid */}
        <ScrollReveal direction="up" distance={30} delay={0.2}>
          <div className="pt-12 border-t border-neutral-800/80">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {t.process.testimonialsBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mt-1">
                {t.process.testimonialsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((tItem, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800/80 flex flex-col justify-between space-y-6 shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-6 h-6 text-neutral-600" />
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-900/50">
                        {tItem.stat}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                      "{tItem.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/80">
                    <img
                      src={tItem.avatar}
                      alt={tItem.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                    />
                    <div>
                      <h5 className="text-xs font-display font-semibold text-white">
                        {tItem.author}
                      </h5>
                      <span className="text-[11px] text-neutral-500 block">
                        {tItem.role}, {tItem.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

