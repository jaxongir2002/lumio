import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface ContactSectionProps {
  initialProjectInquiry?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectInquiry }) => {
  const { t, language } = useApp();

  const availableServicesEn = [
    'Brand Identity & Monograms',
    'Design System & Figma Tokens',
    'Full-Stack Digital Flagship',
    'Interactive 3D / WebGL Motion',
    'Frontend Architecture Audit',
    'E-Commerce Experience'
  ];

  const availableServicesRu = [
    'Айдентика и брендинг',
    'Дизайн-системы и токены Figma',
    'Фулстек веб-платформа и сайт',
    'Интерактивный 3D / WebGL Motion',
    'Аудит фронтенд-архитектуры',
    'Премиальный E-Commerce'
  ];

  const availableServices = language === 'ru' ? availableServicesRu : availableServicesEn;

  const [services, setServices] = useState<string[]>([
    initialProjectInquiry ? availableServices[2] : availableServices[0]
  ]);
  const [budgetTier, setBudgetTier] = useState<string>('$15,000 – $30,000');
  const [timeline, setTimeline] = useState<string>(
    language === 'ru' ? '4–6 Недель (Q3)' : '4–6 Weeks (Q3)'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: initialProjectInquiry
      ? language === 'ru'
        ? `Здравствуйте, Елена и Алекс! Нам очень понравился проект ${initialProjectInquiry}, хотим обсудить создание нашего продукта.`
        : `Hi Elena and Alex, we loved your work on ${initialProjectInquiry} and would love to collaborate on a new project.`
      : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const budgetOptions = [
    '$8,000 – $15,000',
    '$15,000 – $30,000',
    '$30,000 – $60,000',
    '$60,000+'
  ];

  const timelineOptions = language === 'ru' ? [
    'Срочно (2 недели)',
    '4–6 Недель (Q3)',
    '8–12 Недель (Q4)',
    'Гибкое исследование'
  ] : [
    'Immediate (Next 2 Weeks)',
    '4–6 Weeks (Q3)',
    '8–12 Weeks (Q4)',
    'Flexible Exploration'
  ];

  const toggleService = (svc: string) => {
    if (services.includes(svc)) {
      if (services.length > 1) {
        setServices(services.filter((s) => s !== svc));
      }
    } else {
      setServices([...services, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText('hello@lumiodesign.studio');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.contact.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.contact.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Inquiry Builder & Live Scope Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="bg-neutral-900 border border-neutral-800/90 rounded-2xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
                    {t.contact.successDesc.replace('{name}', formData.name || 'там')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300 max-w-md mx-auto flex items-center justify-between">
                  <span>Direct Studio Desk:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white">hello@lumiodesign.studio</span>
                    <button onClick={copyEmail} className="hover:text-white transition-colors cursor-pointer">
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer shadow-md"
                >
                  {t.contact.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Services selection */}
                <div>
                  <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                    {t.contact.servicesLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((svc) => {
                      const isSelected = services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`px-3.5 py-2 rounded-xl text-xs transition-all cursor-pointer border flex items-center gap-2 ${
                            isSelected
                              ? 'bg-white text-black font-semibold border-white shadow-sm'
                              : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? 'bg-black' : 'bg-neutral-500'
                            }`}
                          />
                          <span>{svc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Tier */}
                <div>
                  <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                    {t.contact.budgetLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetTier(b)}
                        className={`p-3 rounded-xl text-xs font-mono transition-all text-center border cursor-pointer ${
                          budgetTier === b
                            ? 'bg-neutral-800 text-white border-white font-semibold'
                            : 'bg-neutral-800/80 text-neutral-400 border-neutral-700 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Timeline */}
                <div>
                  <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                    {t.contact.timelineLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setTimeline(opt)}
                        className={`p-3 rounded-xl text-xs font-mono transition-all text-center border cursor-pointer ${
                          timeline === opt
                            ? 'bg-neutral-800 text-white border-white font-semibold'
                            : 'bg-neutral-800/80 text-neutral-400 border-neutral-700 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Client Details */}
                <div className="space-y-4 pt-4 border-t border-neutral-800/80">
                  <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                    {t.contact.detailsLabel}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                </button>
              </form>
            )}
              </div>
            </ScrollReveal>
          </div>

          {/* Dynamic Scope Summary & Studio Contract Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="space-y-6">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono text-neutral-400">{t.contact.scopeReceipt}</span>
                <span className="text-xs font-mono text-emerald-400">{t.contact.activeConfig}</span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block">{t.contact.selectedDiscipline}:</span>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {services.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                  <span className="text-neutral-500">{t.contact.investmentTier}:</span>
                  <span className="text-white font-semibold">{budgetTier}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                  <span className="text-neutral-500">{t.contact.timelineWindow}:</span>
                  <span className="text-white">{timeline}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                  <span className="text-neutral-500">{t.contact.leadAssignment}:</span>
                  <span className="text-indigo-400">Elena & Alex (Dual Lead)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-300">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                  {t.contact.inclusionsTitle}:
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Direct private channel with both founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>100% Figma tokens to production React code parity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>100/100 Core Web Vitals performance guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Full intellectual property & source code transfer</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-xs font-mono text-neutral-500 block">{t.contact.preferEmail}</span>
                <span className="text-sm font-medium text-white block mt-0.5">hello@lumiodesign.studio</span>
              </div>
              <button
                onClick={copyEmail}
                className="px-3.5 py-2 rounded-xl bg-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? t.contact.copied : t.contact.copy}</span>
              </button>
            </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

