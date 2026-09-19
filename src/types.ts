export type ProjectCategory = 'all' | 'branding-ui' | 'web-app' | 'design-system' | 'creative-tech' | 'ecommerce';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface InteractiveDemoConfig {
  type: 'lumio-grid' | 'verve-cards' | 'kroma-tokens' | 'aura-atelier' | 'aether-sound';
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  metrics: ProjectMetric[];
  deliverables: string[];
  designSpecs: {
    typography: string;
    palette: { name: string; hex: string }[];
    gridSystem: string;
    artDirection: string;
    figmaComponentsCount: number;
  };
  codeSpecs: {
    stack: string[];
    performance: { metric: string; score: string }[];
    architecture: string;
    highlights: string[];
  };
  interactiveDemo: InteractiveDemoConfig;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  category: 'Design Systems' | 'Frontend Architecture' | 'Motion & UI' | 'Collaboration';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  keyTakeaways: string[];
}

export interface Founder {
  name: string;
  role: string;
  discipline: 'design' | 'development';
  tagline: string;
  bio: string;
  skills: string[];
  tools: string[];
  avatar: string;
  socials: {
    github?: string;
    dribbble?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface ProjectInquiry {
  clientName: string;
  email: string;
  companyName: string;
  services: string[];
  budgetTier: string;
  timeline: string;
  projectOverview: string;
}
