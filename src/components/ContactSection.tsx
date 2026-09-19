import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Copy, Check, Mail, Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface ContactSectionProps {
  /** Xizmat yoki tarif kartasidan kelgan oldindan tanlov */
  prefillService?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillService }) => {
  const { t, language } = useApp();

  const [service, setService] = useState<string>(t.contact.serviceOptions[0]);
  const [budget, setBudget] = useState<string>(t.contact.budgetOptions[0]);
  const [timeline, setTimeline] = useState<string>(t.contact.timelineOptions[1]);
  const [formData, setFormData] = useState({ name: '', contact: '', company: '', message: '' });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Til almashtirilganda tanlovlar yangi tildagi variantlarga ko'chiriladi
  useEffect(() => {
    setService((prev) => {
      const idx = t.contact.serviceOptions.indexOf(prev);
      return idx >= 0 ? prev : t.contact.serviceOptions[0];
    });
    setBudget((prev) => (t.contact.budgetOptions.includes(prev) ? prev : t.contact.budgetOptions[0]));
    setTimeline((prev) =>
      t.contact.timelineOptions.includes(prev) ? prev : t.contact.timelineOptions[1]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // Xizmat yoki tarif kartasi bosilganda formani oldindan to'ldirish
  useEffect(() => {
    if (!prefillService) return;
    const match = t.contact.serviceOptions.find(
      (opt) => opt.toLowerCase() === prefillService.toLowerCase()
    );
    if (match) setService(match);
    setSubmitted(false);
  }, [prefillService, t.contact.serviceOptions]);

  const buildBrief = () => {
    const lines = [
      `${t.contact.summaryService}: ${service}`,
      `${t.contact.summaryBudget}: ${budget}`,
      `${t.contact.summaryTimeline}: ${timeline}`,
      '',
      `${formData.name}${formData.company ? ` — ${formData.company}` : ''}`,
      formData.contact,
      '',
      formData.message
    ];
    return lines.filter((l) => l !== undefined).join('\n');
  };

  const handleTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard?.writeText(buildBrief());
      setCopiedBrief(true);
    } catch {
      // Clipboard bloklangan bo'lsa ham Telegram baribir ochiladi
    }
    window.open(CONTACT.telegram, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`LUMIO — ${service}`);
    const body = encodeURIComponent(buildBrief());
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(CONTACT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const optionClass = (selected: boolean) =>
    `p-3 rounded-xl text-xs font-mono transition-all text-center border cursor-pointer ${
      selected
        ? 'bg-neutral-800 text-white border-white font-semibold'
        : 'bg-neutral-800/60 text-neutral-400 border-neutral-700 hover:text-white hover:border-neutral-500'
    }`;

  const inputClass =
    'w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors';

  return (
    <section id="contact" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Forma */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="bg-neutral-900 border border-neutral-800/90 rounded-2xl p-6 sm:p-9 shadow-xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-white">
                        {t.contact.successTitle}
                      </h3>
                      <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
                        {t.contact.successDesc.replace('{name}', formData.name.trim() || '👋')}
                      </p>
                      {copiedBrief && (
                        <p className="text-xs font-mono text-emerald-400 mt-3">
                          {t.contact.copiedBrief}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setCopiedBrief(false);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer shadow-md"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleTelegram} className="space-y-7">
                    {/* Xizmat */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                        {t.contact.serviceLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {t.contact.serviceOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setService(opt)}
                            className={`px-3.5 py-2 rounded-xl text-xs transition-all cursor-pointer border ${
                              service === opt
                                ? 'bg-white text-black font-semibold border-white'
                                : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Byudjet */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                        {t.contact.budgetLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {t.contact.budgetOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setBudget(opt)}
                            className={optionClass(budget === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Muddat */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                        {t.contact.timelineLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {t.contact.timelineOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setTimeline(opt)}
                            className={optionClass(timeline === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Aloqa ma'lumotlari */}
                    <div className="space-y-4 pt-5 border-t border-neutral-800/80">
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                        {t.contact.detailsLabel}
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder={t.contact.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                        />
                        <input
                          type="text"
                          required
                          placeholder={t.contact.contactPlaceholder}
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <input
                        type="text"
                        placeholder={t.contact.companyPlaceholder}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                      />

                      <textarea
                        rows={4}
                        required
                        placeholder={t.contact.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                      >
                        <Send className="w-4 h-4" />
                        <span>{t.contact.telegramBtn}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleEmail}
                        className="sm:w-auto px-6 py-4 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{t.contact.emailBtn}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Xulosa va to'g'ridan-to'g'ri aloqa */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="space-y-4">
                {/* So'rov xulosasi */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <span className="text-xs font-mono text-neutral-400">
                      {t.contact.summaryTitle}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-neutral-500">{t.contact.summaryService}:</span>
                      <span className="text-white text-right">{service}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-neutral-800/60">
                      <span className="text-neutral-500">{t.contact.summaryBudget}:</span>
                      <span className="text-white font-semibold">{budget}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-neutral-800/60">
                      <span className="text-neutral-500">{t.contact.summaryTimeline}:</span>
                      <span className="text-white text-right">{timeline}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 space-y-2.5">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                      {t.contact.includedTitle}
                    </span>
                    {t.contact.included.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-neutral-300 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* To'g'ridan-to'g'ri aloqa */}
                <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 space-y-3 shadow-lg">
                  <span className="text-xs font-mono text-neutral-500 block">
                    {t.contact.orWrite}
                  </span>

                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 hover:border-neutral-500 transition-colors group"
                  >
                    <MessageCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">
                      {CONTACT.telegramHandle}
                    </span>
                  </a>

                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 hover:border-neutral-500 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">
                      {CONTACT.phone}
                    </span>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60">
                    <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-xs text-neutral-200 truncate flex-1">
                      {CONTACT.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      aria-label={t.contact.copy}
                      className="text-neutral-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
