import React from 'react';
import {
  Rocket,
  Layers,
  Database,
  Palette,
  Send,
  LifeBuoy,
  ArrowUpRight,
  type LucideIcon
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollAnimations';

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Layers,
  Database,
  Palette,
  Send,
  LifeBuoy
};

interface ServicesSectionProps {
  onServiceClick: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const { t } = useApp();

  return (
    <section id="services" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {t.services.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              {t.services.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollStaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Rocket;
            const copy = t.services.items[service.id];

            return (
              <ScrollStaggerItem key={service.id}>
                <button
                  type="button"
                  onClick={() => onServiceClick(t.contact.serviceOptions[service.inquiryIndex])}
                  className={`group h-full w-full text-left p-6 rounded-2xl border transition-all cursor-pointer flex flex-col ${
                    service.featured
                      ? 'bg-neutral-900 border-neutral-700 hover:border-neutral-500'
                      : 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                        service.featured
                          ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                          : 'bg-neutral-800/60 border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <h3 className="mt-5 text-lg font-display font-semibold text-white">
                    {copy.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed flex-1">
                    {copy.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-neutral-800/80 font-mono text-xs">
                    {service.priceFrom !== null ? (
                      <span className="text-neutral-400">
                        {t.services.from}{' '}
                        <span className="text-white font-semibold text-sm">
                          ${service.priceFrom}
                        </span>
                      </span>
                    ) : (
                      <span className="text-neutral-500">{t.services.negotiable}</span>
                    )}
                  </div>
                </button>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStaggerContainer>
      </div>
    </section>
  );
};
