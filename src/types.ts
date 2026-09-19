export type ProjectCategory = 'all' | 'landing' | 'web-app' | 'crm-pos' | 'ecommerce';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: Exclude<ProjectCategory, 'all'>;
  /** i18n kaliti: t.projects[id].tagline / .description */
  coverImage: string | null;
  liveUrl?: string;
  /** Skrinshot yo'q loyihalar uchun gradient fon */
  accent: 'indigo' | 'emerald' | 'sky' | 'amber' | 'rose' | 'violet';
  stack: string[];
  metrics: ProjectMetric[];
  /** NDA sababli link yoki skrinshot berilmagan */
  confidential?: boolean;
}

export type ServiceId =
  | 'landing'
  | 'multipage'
  | 'webapp'
  | 'design'
  | 'telegram'
  | 'support';

export interface Service {
  id: ServiceId;
  icon: string;
  priceFrom: number | null;
  featured?: boolean;
  /** Aloqa formasidagi t.contact.serviceOptions indeksi */
  inquiryIndex: number;
}

export interface PricingTier {
  id: 'start' | 'business' | 'system';
  priceFrom: number;
  featured?: boolean;
  /** Aloqa formasidagi t.contact.serviceOptions indeksi */
  inquiryIndex: number;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export type DesignCategory = 'branding' | 'social' | 'marketplace';

export interface DesignCase {
  id: string;
  client: string;
  category: DesignCategory;
  /** Asosiy format, masalan "1080×1920" */
  formats: string[];
  tags: string[];
  /** public/design/ ichidagi rasm yo'llari */
  images: string[];
  accent: 'violet' | 'sky' | 'amber' | 'emerald';
}
