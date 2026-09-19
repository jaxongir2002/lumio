import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useApp();

  const faqsEn: FaqItem[] = [
    {
      category: 'COLLABORATION',
      question: 'Why hire a designer + developer duo instead of a traditional agency?',
      answer:
        'Traditional agencies bill you for account managers, project managers, and junior interns who pass files back and forth with loss of fidelity. With LUMIO, you work directly with Elena (Graphic Lead) and Alex (Frontend Lead). Handoff friction is zero because design tokens and React components are architected synchronously from day one.'
    },
    {
      category: 'IP & DELIVERABLES',
      question: 'Who owns the Figma files, design tokens, and source code?',
      answer:
        'You do—100%. Upon final delivery, full intellectual property and commercial copyright transfer to you. You receive clean Figma variables, vector monograms, typography hierarchy guides, and production Git repositories with full CI/CD deployment scripts.'
    },
    {
      category: 'TIMELINES & SPRINTS',
      question: 'What does a typical sprint timeline look like?',
      answer:
        'Our focused sprints typically span 2 to 6 weeks. Week 1: Brand identity, wireframes, and design token architecture. Week 2: High-fidelity artboards and reactive component scaffolding. Week 3: Interactive micro-animations, WebGL shaders, and API integration. Week 4: Performance audit (100/100 Core Web Vitals) and launch orchestration.'
    },
    {
      category: 'TECH STACK',
      question: 'What technologies and frameworks do you build with?',
      answer:
        'Elena designs exclusively in Figma with strict variable token mapping, vector bezier drafting, and fluid typography curves. Alex builds production web applications in modern React 19, Next.js, Vite, TypeScript, Tailwind CSS, Motion physics, and WebGL/Three.js when immersive 3D is required.'
    },
    {
      category: 'REVISIONS & FEEDBACK',
      question: 'How do you handle revisions and client check-ins?',
      answer:
        'We communicate directly with you through a private Slack or Discord channel. Instead of static PDF presentations, we share live staging URLs where you can test interactive components in real time. Revisions are incorporated iteratively throughout the active sprint.'
    },
    {
      category: 'POST-LAUNCH',
      question: 'Do you offer ongoing retainer support or design system maintenance?',
      answer:
        'Yes. After launch, clients can secure quarterly advisory retainers for continuous feature rollouts, seasonal design campaigns, or design system governance as their engineering team scales.'
    }
  ];

  const faqsRu: FaqItem[] = [
    {
      category: 'КОЛЛАБОРАЦИЯ',
      question: 'Почему стоит нанять дуэт дизайнера и разработчика вместо агентства?',
      answer:
        'В традиционных агентствах вы платите за аккаунт-менеджеров и стажеров, теряя качество на каждом этапе передачи макетов. В LUMIO вы работаете напрямую с Еленой (арт-дирекшн) и Алексом (фронтенд-архитектура). Трение нулевое: токены Figma и компоненты React проектируются синхронно с первого дня.'
    },
    {
      category: 'IP И АРТЕФАКТЫ',
      question: 'Кому принадлежат файлы Figma, дизайн-токены и исходный код?',
      answer:
        'Вам на 100%. При передаче проекта все коммерческие права переходят к вам: вы получаете аккуратную библиотеку переменных Figma, векторные монограммы, сетку типографики и чистый Git-репозиторий со скриптами развертывания.'
    },
    {
      category: 'ТАЙМЛАЙНЫ И СПРИНТЫ',
      question: 'Как выглядит типичный спринт разработки?',
      answer:
        'Наши сфокусированные спринты длятся от 2 до 6 недель: Неделя 1 — бренд-платформа, сетка и токены. Неделя 2 — чистовые артборды и реактивный каркас компонентов. Неделя 3 — микровзаимодействия, шейдеры и интеграция API. Неделя 4 — аудит скорости (Core Web Vitals 99+) и релиз.'
    },
    {
      category: 'ТЕК-СТЕК',
      question: 'На каких технологиях и инструментах вы работаете?',
      answer:
        'Елена создает айдентику и интерфейсы исключительно в Figma с системной привязкой токенов. Алекс пишет код на React 19, Next.js, Vite, TypeScript, Tailwind CSS, Motion и Three.js/WebGL при необходимости интерактивного 3D.'
    },
    {
      category: 'ПРАВКИ И СВЯЗЬ',
      question: 'Как устроены правки и обратная связь?',
      answer:
        'Мы общаемся напрямую через закрытый Slack или Telegram канал. Вместо статичных презентаций мы делимся интерактивными ссылками на стенды, где вы можете протестировать живой интерфейс прямо в браузере.'
    },
    {
      category: 'ПОДДЕРЖКА',
      question: 'Предоставляете ли вы поддержку после запуска?',
      answer:
        'Да. После запуска клиенты могут зафиксировать ежеквартальный retainer-пакет для масштабирования функций, запуска сезонных кампаний и развития дизайн-системы.'
    }
  ];

  const faqs = language === 'ru' ? faqsRu : faqsEn;

  return (
    <section id="faq" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
              {t.faq.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.faq.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              {t.faq.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-neutral-900 border-neutral-700/80 shadow-lg'
                    : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-medium text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-neutral-300 font-sans leading-relaxed border-t border-neutral-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <ScrollReveal direction="up" distance={20} delay={0.15}>
          <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
            <div>
              <div className="text-sm font-semibold text-white">{t.faq.customQuestion}</div>
              <div className="text-xs text-neutral-400 mt-0.5">
                {t.faq.customDesc}
              </div>
            </div>
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
            >
              <span>{t.faq.askBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

