import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight, Info } from 'lucide-react';
import { PRICING_TIERS } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const { t } = useApp();

  return (
    <section id="pricing" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.pricing.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.pricing.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {PRICING_TIERS.map((tier, idx) => {
            const copy = t.pricing.tiers[tier.id];

            return (
              <ScrollReveal key={tier.id} direction="up" distance={30} delay={0.1 + idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className={`relative h-full p-7 rounded-2xl border flex flex-col ${
                    tier.featured
                      ? 'bg-neutral-900 border-neutral-600 shadow-2xl'
                      : 'bg-neutral-900/50 border-neutral-800'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-semibold uppercase tracking-wider">
                      {t.pricing.popular}
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-display font-semibold text-white">{copy.name}</h3>
                    <p className="mt-1 text-xs font-mono text-neutral-500">{copy.note}</p>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-xs font-mono text-neutral-500">{t.pricing.from}</span>
                    <span className="text-4xl font-display font-semibold text-white tracking-tight">
                      ${tier.priceFrom}
                    </span>
                  </div>

                  <ul className="mt-7 space-y-3 flex-1">
                    {copy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onSelectTier(t.contact.serviceOptions[tier.inquiryIndex])}
                    className={`mt-8 w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] ${
                      tier.featured
                        ? 'bg-white text-black hover:bg-neutral-200 shadow-lg'
                        : 'bg-neutral-800 text-neutral-200 border border-neutral-700 hover:border-neutral-500 hover:text-white'
                    }`}
                  >
                    <span>{t.pricing.choose}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" distance={20} delay={0.3}>
          <div className="mt-8 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex items-start gap-3">
            <Info className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-400 leading-relaxed">{t.pricing.note}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
