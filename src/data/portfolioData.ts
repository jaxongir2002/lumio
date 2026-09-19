import { Project, Service, PricingTier, StatItem, DesignCase } from '../types';

/**
 * Haqiqiy portfolio. Matnlar (tagline/description) i18n faylida —
 * bu yerda faqat til bilan bog'liq bo'lmagan faktlar saqlanadi.
 */
export const PROJECTS: Project[] = [
  {
    id: 'hybridxperience',
    title: 'Hybrid Xperience',
    client: 'Hybrid Xperience (Dubai, BAA)',
    year: '2025',
    category: 'landing',
    coverImage: null,
    liveUrl: 'https://www.hybridxperience.com',
    accent: 'violet',
    stack: ['Webflow', 'GSAP', 'Lenis', 'Swiper', 'Lottie', 'WebGL'],
    metrics: [
      { label: 'platform', value: 'Webflow' },
      { label: 'motion', value: 'GSAP · Lenis' },
      { label: 'market', value: 'Dubai, BAA' }
    ]
  },
  {
    id: 'mpos',
    title: 'mPOS',
    client: 'Minutda',
    year: '2024—2025',
    category: 'crm-pos',
    coverImage: '/projects/mpos-dashboard.jpg',
    liveUrl: 'https://mpos-landing.vercel.app',
    accent: 'emerald',
    stack: ['Vue 3', 'Django REST', 'PostgreSQL', 'Docker', 'Offline-first'],
    metrics: [
      { label: 'businesses', value: '20+' },
      { label: 'languages', value: '5' },
      { label: 'offline', value: 'Offline-first' }
    ]
  },
  {
    id: 'shamcrm',
    title: 'ShamCRM',
    client: 'FinGroup',
    year: '2024—2025',
    category: 'crm-pos',
    coverImage: '/projects/shamcrm-dashboard.webp',
    liveUrl: 'https://shamcrm.com',
    accent: 'indigo',
    stack: ['Vue', 'SCSS', 'REST API', 'Git Flow'],
    metrics: [
      { label: 'bugs', value: '−40%' },
      { label: 'sources', value: '3' },
      { label: 'analytics', value: '24/7' }
    ]
  },
  {
    id: 'multibank',
    title: 'Multibank Admin Hub',
    client: 'Multibank',
    year: '2025—',
    category: 'web-app',
    coverImage: null,
    accent: 'sky',
    confidential: true,
    stack: ['Vue 3', 'Module Federation', 'GraphQL', 'RBAC', 'TypeScript'],
    metrics: [
      { label: 'performance', value: '+35%' },
      { label: 'security', value: 'PCI DSS' },
      { label: 'architecture', value: 'Micro-frontend' }
    ]
  },
  {
    id: 'orderm',
    title: 'OrderM',
    client: 'Minutda',
    year: '2024—2025',
    category: 'web-app',
    coverImage: null,
    accent: 'amber',
    stack: ['Vue 3', 'WebSocket', 'REST API'],
    metrics: [
      { label: 'orders', value: '300+' },
      { label: 'processing', value: '−25%' },
      { label: 'realtime', value: 'WebSocket' }
    ]
  },
  {
    id: 'easybooking',
    title: 'EasyBooking',
    client: 'EasyBooking',
    year: '2023—2024',
    category: 'web-app',
    coverImage: '/projects/easybooking-hero.jpg',
    liveUrl: 'https://easybooking.travel',
    accent: 'sky',
    stack: ['Vue 2→3', 'Vite', 'REST API'],
    metrics: [
      { label: 'speed', value: '+30%' },
      { label: 'session', value: '+20%' },
      { label: 'migration', value: 'Vue 2→3' }
    ]
  },
  {
    id: 'sino',
    title: 'Sino',
    client: 'Sino HealthTech',
    year: '2025',
    category: 'web-app',
    coverImage: '/projects/sino-app-mobile.png',
    liveUrl: 'https://sino-web-seven.vercel.app',
    accent: 'rose',
    stack: ['Vue 3', 'Nuxt', 'WebView', 'IoT'],
    metrics: [
      { label: 'platform', value: 'WebView' },
      { label: 'device', value: 'Sino Band' },
      { label: 'ssr', value: 'Nuxt' }
    ]
  },
  {
    id: 'eloqwnt',
    title: 'Eloqwnt',
    client: 'Eloqwnt Agency',
    year: '2024',
    category: 'landing',
    coverImage: '/projects/eloqwnt-hero.jpg',
    liveUrl: 'https://eloqwnt.com',
    accent: 'indigo',
    stack: ['Vue', 'React', 'Strapi CMS', 'Vercel'],
    metrics: [
      { label: 'sites', value: '10+' },
      { label: 'cms', value: 'Strapi' },
      { label: 'clients', value: 'B2B' }
    ]
  }
];

export const SERVICES: Service[] = [
  { id: 'landing', icon: 'Rocket', priceFrom: 300, featured: true, inquiryIndex: 0 },
  { id: 'multipage', icon: 'Layers', priceFrom: 700, inquiryIndex: 1 },
  { id: 'webapp', icon: 'Database', priceFrom: 1500, inquiryIndex: 2 },
  { id: 'design', icon: 'Palette', priceFrom: null, inquiryIndex: 4 },
  { id: 'telegram', icon: 'Send', priceFrom: null, inquiryIndex: 3 },
  { id: 'support', icon: 'LifeBuoy', priceFrom: null, inquiryIndex: 5 }
];

export const PRICING_TIERS: PricingTier[] = [
  { id: 'start', priceFrom: 300, inquiryIndex: 0 },
  { id: 'business', priceFrom: 700, featured: true, inquiryIndex: 1 },
  { id: 'system', priceFrom: 1500, inquiryIndex: 2 }
];

export const STATS: StatItem[] = [
  { id: 'projects', value: 10, suffix: '+' },
  { id: 'years', value: 3, suffix: '+' },
  { id: 'businesses', value: 20, suffix: '+' },
  { id: 'orders', value: 300, suffix: '+' }
];

export const CONTACT = {
  phone: '+998 99 042 74 06',
  phoneHref: 'tel:+998990427406',
  email: 'jaxongirxon.rustamov12@gmail.com',
  telegram: 'https://t.me/rustamov_jaxongirxon',
  telegramHandle: '@rustamov_jaxongirxon',
  github: 'https://github.com/jaxongir2002',
  location: 'Toshkent, O‘zbekiston'
} as const;

export const WORKFLOW_STEP_IDS = ['brief', 'design', 'build', 'launch'] as const;

/**
 * Grafik dizayn ishlari — mijozlar bo'yicha guruhlangan.
 * `images` bo'sh bo'lsa, kartochka saytda ko'rsatilmaydi (DesignSection filtrlaydi),
 * shuning uchun rasm qo'shilishi bilan ish avtomatik paydo bo'ladi.
 */
export const DESIGN_CASES: DesignCase[] = [
  {
    id: 'ziyolab',
    client: 'ZiyoLab',
    category: 'branding',
    formats: ['Logotip', 'Brendbuk', '1080×1920'],
    tags: ['Branding', 'Visual Identity', 'Brandbook', 'EdTech', 'AI', 'UI/UX'],
    images: [],
    aspect: 'story',
    accent: 'violet'
  },
  {
    id: 'grandquality',
    client: 'Grand Quality Water',
    category: 'social',
    formats: ['1080×1920', '1080×1350'],
    tags: ['Social Media', 'Meta Ads', 'Minimal Design', 'Holiday Campaign'],
    images: [],
    aspect: 'story',
    accent: 'sky'
  },
  {
    id: 'rentacar',
    client: 'Rent a Car Samarkand',
    category: 'social',
    formats: ['1080×1920', '1080×1350'],
    tags: ['Social Media', 'Automotive', 'Instagram Highlights', 'Holiday Campaign'],
    images: [],
    aspect: 'story',
    accent: 'amber'
  },
  {
    id: 'khusanov',
    client: 'KHUSANOV',
    category: 'marketplace',
    formats: ['1080×1440'],
    tags: ['Marketplace', 'E-commerce', 'Product Design', 'Sports Branding'],
    images: [],
    aspect: 'post',
    accent: 'emerald'
  }
];
