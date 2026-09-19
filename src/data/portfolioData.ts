import { Project, BlogPost, Founder } from '../types';

export const FOUNDERS: Founder[] = [
  {
    name: 'Elena Rostova',
    role: 'Co-Founder & Lead Visual / UI Designer',
    discipline: 'design',
    tagline: 'Sculpting brand identities, spatial editorial layouts, and living design systems.',
    bio: 'With 7+ years directing visual identities for high-end design agencies and architectural brands, Elena specializes in typography hierarchy, geometric brand systems, and Figma token architectures that translate directly into scalable production code.',
    skills: ['Brand Identity & Monograms', 'Design Systems (Tokens)', 'Spatial & Grid Composition', 'Editorial Typography', 'Micro-interaction Choreography', 'Accessibility (WCAG AAA)'],
    tools: ['Figma', 'Illustrator', 'After Effects', 'Spline 3D', 'Glyphs'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      dribbble: 'https://dribbble.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Alex Chen',
    role: 'Co-Founder & Lead Frontend Architect',
    discipline: 'development',
    tagline: 'Translating bold visual visions into 60fps, ultra-performant reactive code.',
    bio: 'Former senior engineer at creative tech studios, Alex builds fluid digital experiences with TypeScript, React 19, Motion, and WebGL. Obsessed with zero layout shifts, sub-100ms interaction latency, and bulletproof modular architectures.',
    skills: ['React & Next.js Architecture', 'Motion & Gesture Physics', 'TypeScript & State Engines', 'Design Token Automation', 'WebGL & Canvas Shaders', 'Core Web Vitals (99+ Score)'],
    tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion/Framer', 'Three.js / WebGL', 'Vite / Turbopack'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'lumio-archive',
    title: 'LUMIO Architectural Portfolio',
    client: 'Lumio Design Atelier',
    year: '2025',
    category: 'branding-ui',
    categoryLabel: 'Brand Identity & Web Experience',
    tagline: 'A hyper-minimalist digital monograph and interactive archive for an avant-garde architectural atelier.',
    description: 'Lumio required a brand identity and web flagship that embodied their philosophy: negative space, razor-sharp geometric precision, and visceral interactions. Together, Elena designed a bespoke geometric monogram and editorial grid, while Alex built a fluid canvas renderer with responsive spatial panning and zero-latency layout transitions.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Avg. Session Duration', value: '4m 12s', change: '+142%' },
      { label: 'Lighthouse Performance', value: '100 / 100' },
      { label: 'Awards Won', value: 'Awwwards SOTD' }
    ],
    deliverables: ['Custom Monogram & Identity System', 'Interactive Spatial Grid', 'Fluid Typography Engine', 'Dark / Light Spatial Canvas'],
    designSpecs: {
      typography: 'Syne Display paired with Plus Jakarta Sans & JetBrains Mono',
      palette: [
        { name: 'Onyx Noir', hex: '#0a0a0c' },
        { name: 'Warm Alabaster', hex: '#f7f6f2' },
        { name: 'Architectural Stone', hex: '#9e9e98' },
        { name: 'Cadmium Accent', hex: '#e85d04' }
      ],
      gridSystem: '12-column dynamic ratio grid with custom 8px micro-grid alignment',
      artDirection: 'High-contrast geometric forms, monoline strokes, and editorial whitespace that breathes.',
      figmaComponentsCount: 48
    },
    codeSpecs: {
      stack: ['React 19', 'TypeScript', 'Motion', 'Tailwind CSS', 'WebGL Canvas'],
      performance: [
        { metric: 'First Contentful Paint', score: '0.4s' },
        { metric: 'Cumulative Layout Shift', score: '0.00' },
        { metric: 'Total Bundle Size', score: '38 kB (gzipped)' }
      ],
      architecture: 'Zero-layout-shift component tree using CSS containment, hardware-accelerated transforms, and virtualized image preloading.',
      highlights: [
        'Hardware accelerated spring physics on hover interactions',
        'Custom WebGL image distortion shader on scroll transition',
        'Fully accessible keyboard navigation through spatial architectural nodes'
      ]
    },
    interactiveDemo: {
      type: 'lumio-grid',
      title: 'Interactive Spatial Grid & Monogram Explorer',
      description: 'Interact with the live Lumio layout engine below: adjust the column tension, toggle architectural modes, and inspect the responsive typography ratios.'
    },
    testimonial: {
      quote: 'Synergy Studios achieved what three traditional agencies couldn’t: the design and code feel like they were birthed by one single mind. Absolute perfection in every pixel.',
      author: 'Julian Thorne',
      role: 'Principal Architect',
      company: 'Lumio Atelier'
    }
  },
  {
    id: 'kroma-design-system',
    title: 'Kroma Token & UI Engine',
    client: 'Kroma Enterprise Cloud',
    year: '2025',
    category: 'design-system',
    categoryLabel: 'Design System & Component Library',
    tagline: 'Multi-brand design token architecture bridging Figma variables directly to modern React components.',
    description: 'Scaling design across 4 flagship enterprise products was causing inconsistent UI and developer friction. Elena crafted a semantic token hierarchy in Figma with 120+ modular component variants, while Alex engineered an automated pipeline that compiles Figma variables directly to zero-runtime CSS tokens and accessible React components.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Dev Handoff Speed', value: '3.4x Faster', change: '+240%' },
      { label: 'Component Reusability', value: '94%' },
      { label: 'Accessibility Score', value: '100% WCAG AAA' }
    ],
    deliverables: ['Figma Variable Tokens', 'React Component Library', 'Style Dictionary Pipeline', 'Interactive Documentation Hub'],
    designSpecs: {
      typography: 'Plus Jakarta Sans with strict typographic scale ratio (1.25)',
      palette: [
        { name: 'Kroma Obsidian', hex: '#111215' },
        { name: 'Electric Iris', hex: '#6366f1' },
        { name: 'Emerald Signal', hex: '#10b981' },
        { name: 'Surface Zinc', hex: '#27272a' }
      ],
      gridSystem: '8pt fluid baseline grid with semantic spacing tokens (space-1 to space-16)',
      artDirection: 'Pragmatic, crisp, enterprise ergonomics with subtle interactive micro-states.',
      figmaComponentsCount: 142
    },
    codeSpecs: {
      stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI Primitives', 'Storybook'],
      performance: [
        { metric: 'Interaction to Next Paint (INP)', score: '< 30ms' },
        { metric: 'Lighthouse Accessibility', score: '100 / 100' },
        { metric: 'Tree-shaking Efficiency', score: '99.2%' }
      ],
      architecture: 'Headless Radix primitives wrapped in semantic Tailwind token layers with zero CSS-in-JS runtime penalty.',
      highlights: [
        'Automated CI/CD sync from Figma Token JSON to Tailwind theme variables',
        'Compound variant component API supporting seamless nested states',
        'WCAG AAA color contrast validation baked into automated test suites'
      ]
    },
    interactiveDemo: {
      type: 'kroma-tokens',
      title: 'Live Token Switcher & Component Sandbox',
      description: 'Test the live token system: swap border radii, switch brand color modes, and trigger interactive micro-states in real time.'
    },
    testimonial: {
      quote: 'The synergy between Elena’s systematic Figma tokens and Alex’s clean component code saved our engineering team months of rework. It is a benchmark in design ops.',
      author: 'Sophia Vance',
      role: 'VP of Product',
      company: 'Kroma Cloud'
    }
  },
  {
    id: 'verve-fintech',
    title: 'Verve Neo-Banking Interface',
    client: 'Verve Financial',
    year: '2024',
    category: 'web-app',
    categoryLabel: 'Fintech Web Application',
    tagline: 'High-frequency wealth management dashboard with tactile haptic-like animations and instant analytics.',
    description: 'Verve wanted to elevate fintech beyond sterile tables into an inspiring financial command center. Elena sculpted dark-mode surfaces with optical depth and glowing data trajectories, while Alex implemented streaming state updates, gesture-driven interactive cards, and zero-stutter telemetry visualizers.',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'User Signups (Day 30)', value: '84,000+' },
      { label: 'User Retention rate', value: '78%', change: '+31%' },
      { label: 'Render Latency', value: '16.4ms (Solid 60fps)' }
    ],
    deliverables: ['Web Application Dashboard', 'Interactive Wealth Tracker', 'Design System & Data Visuals', 'Micro-Animation Library'],
    designSpecs: {
      typography: 'Syne Display with JetBrains Mono for financial figures',
      palette: [
        { name: 'Deep Space', hex: '#090a0f' },
        { name: 'Verve Mint', hex: '#00f5a0' },
        { name: 'Cyan Flux', hex: '#00d9f5' },
        { name: 'Card Surface', hex: '#161922' }
      ],
      gridSystem: 'Modular bento-box spatial dashboard with dynamic aspect ratios',
      artDirection: 'High-tech precision, neon pulse indicators, laser-etched card borders, and tactile controls.',
      figmaComponentsCount: 88
    },
    codeSpecs: {
      stack: ['React 19', 'TypeScript', 'Motion', 'Tailwind CSS', 'SVG Canvas Charts'],
      performance: [
        { metric: 'First Input Delay', score: '8ms' },
        { metric: 'Chart Render Time', score: '< 12ms' },
        { metric: 'Lighthouse Score', score: '99 / 100' }
      ],
      architecture: 'Optimistic UI state pipelines with memoized SVG path interpolations and 3D gyro tilt animations.',
      highlights: [
        '3D physics-based card hover with dynamic specular reflection highlight',
        'Real-time transaction stream with spring-loaded entry choreography',
        'Encrypted client-side mock privacy mask toggle with zero DOM flicker'
      ]
    },
    interactiveDemo: {
      type: 'verve-cards',
      title: 'Interactive 3D Card & Telemetry Sandbox',
      description: 'Hover and tilt the custom-designed holographic smart card, customize card finishes, and toggle privacy data layers.'
    },
    testimonial: {
      quote: 'Our user engagement jumped immediately after launch. Clients constantly praise how buttery smooth and visually mesmerizing the platform feels.',
      author: 'Marcus Sterling',
      role: 'Chief Product Officer',
      company: 'Verve Financial'
    }
  },
  {
    id: 'aura-living-atelier',
    title: 'Aura Living Commerce',
    client: 'Aura Sustainable Interiors',
    year: '2024',
    category: 'ecommerce',
    categoryLabel: 'Luxury Sustainable E-Commerce',
    tagline: 'Sensory e-commerce storytelling with tactile product customization and zero checkout drop-off.',
    description: 'Aura designs artisanal sustainable furniture. Elena developed an organic, warm editorial aesthetic using natural grain textures and bespoke serif styling. Alex engineered an interactive room visualizer, dynamic 360-degree colorway customizer, and a streamlined 1-step slideout bag.',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'E-commerce Conversion', value: '4.8%', change: '+180%' },
      { label: 'Average Order Value', value: '$820', change: '+35%' },
      { label: 'Mobile Bounce Rate', value: '22%', change: '-41%' }
    ],
    deliverables: ['Custom E-Commerce Storefront', 'Interactive Product Customizer', 'Checkout Optimization Flow', 'Brand Book & Packaging'],
    designSpecs: {
      typography: 'Syne & Playfair pairings with warm neutral tone hierarchy',
      palette: [
        { name: 'Warm Travertine', hex: '#e8e5dc' },
        { name: 'Smoked Walnut', hex: '#2b231d' },
        { name: 'Olive Clay', hex: '#585e4d' },
        { name: 'Linen White', hex: '#faf9f5' }
      ],
      gridSystem: 'Asymmetric editorial editorial masonry with generous negative margins',
      artDirection: 'Warm organic minimalism, tactile material swatches, and quiet luxury.',
      figmaComponentsCount: 64
    },
    codeSpecs: {
      stack: ['React 19', 'TypeScript', 'Motion', 'Tailwind CSS', 'Web Audio API'],
      performance: [
        { metric: 'Time to Interactive', score: '0.8s' },
        { metric: 'Image Load Optimization', score: 'AVIF / WebP Auto' },
        { metric: 'Lighthouse Score', score: '98 / 100' }
      ],
      architecture: 'Client-side reactive basket with instantaneous optimistic updates and smooth page transitions.',
      highlights: [
        'Live fabric swatch switcher with dynamic material sheen interpolation',
        'Integrated micro-haptic click sounds synthesized via Web Audio API',
        'Frictionless slideout checkout drawer with auto-filled address intelligence'
      ]
    },
    interactiveDemo: {
      type: 'aura-atelier',
      title: 'Interactive Material & Finish Customizer',
      description: 'Switch materials between Smoked Walnut, Natural Travertine, and Olive Linen. Watch the ambient lighting and typography adapt in real time.'
    },
    testimonial: {
      quote: 'Synergy Studios transformed our online shop from a generic store into an art gallery that converts. The customizer alone doubled our average order value.',
      author: 'Clara Dupond',
      role: 'Founder & Creative Director',
      company: 'Aura Living'
    }
  },
  {
    id: 'aether-spatial-sound',
    title: 'Aether Generative Sound Lab',
    client: 'Aether Audio Technologies',
    year: '2024',
    category: 'creative-tech',
    categoryLabel: 'Creative Technology & Audio Synthesis',
    tagline: 'Interactive browser-based synthesizer and generative waveform visualizer for acoustic research.',
    description: 'An experimental collaboration exploring how graphic vectors react to real-time harmonic frequencies in the browser. Elena designed mathematical typographic dials and harmonic color scales; Alex authored a Web Audio oscillator engine wired directly to an animated SVG waveform node tree.',
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Community Stars', value: '4,200+' },
      { label: 'Audio Latency', value: '< 6ms' },
      { label: 'Featured In', value: 'SiteInspire & Codrops' }
    ],
    deliverables: ['Web Audio Synthesizer', 'Generative SVG Particle Canvas', 'Technical Documentation', 'Sound Brand Guidelines'],
    designSpecs: {
      typography: 'JetBrains Mono with mathematical glyph accents and Syne Display',
      palette: [
        { name: 'Acoustic Black', hex: '#080809' },
        { name: 'Resonance Violet', hex: '#8b5cf6' },
        { name: 'Spectral Amber', hex: '#f59e0b' },
        { name: 'Signal White', hex: '#ffffff' }
      ],
      gridSystem: 'Oscilloscope Cartesian coordinate grid with micro-subdivisions',
      artDirection: 'Mathematical, brutalist typography, glowing vector waveforms, and analog synthesizer hardware homage.',
      figmaComponentsCount: 36
    },
    codeSpecs: {
      stack: ['Web Audio API', 'React 19', 'TypeScript', 'Motion', 'SVG Canvas'],
      performance: [
        { metric: 'Audio Engine Jitter', score: '< 1ms' },
        { metric: 'FPS during Waveform', score: '60fps' },
        { metric: 'Zero External Audio Libs', score: 'Native Web Audio' }
      ],
      architecture: 'Custom synthesizer audio context node graph with low-pass filters, delay taps, and gain envelope generators.',
      highlights: [
        'Pure client-side dual-oscillator sine & triangle wave synthesis',
        'Real-time frequency Fourier transform hooked to reactive SVG curves',
        'Polyphonic touch / keyboard note triggers with smooth attack & release'
      ]
    },
    interactiveDemo: {
      type: 'aether-sound',
      title: 'Interactive Web Audio Frequency Lab',
      description: 'Trigger melodic harmonic frequencies directly in your browser. Watch the sound waves transform according to frequency and resonance.'
    },
    testimonial: {
      quote: 'One of the most visually and sonically mesmerizing web experiences ever created. Alex and Elena possess an extraordinary caliber of craft.',
      author: 'Dr. Henrik Lind',
      role: 'Head of Sound Architecture',
      company: 'Aether Audio'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'bridging-the-chasm-design-engineering',
    title: 'Bridging the Chasm: How Designers & Frontend Developers Can Speak the Exact Same Language',
    excerpt: 'The traditional design-to-development handoff is fundamentally broken. Here is how a designer and a developer created a zero-friction workflow using semantic tokens, live component prototypes, and shared terminology.',
    content: [
      'For decades, digital product creation has been plagued by the "handoff wall." A designer crafts high-fidelity static frames in Figma, passes redlines over to a developer, and weeks later discovers that margins are wrong, font-smoothing shifted, and micro-interactions were abandoned due to timeline crunches.',
      'When we founded Synergy Studios, we banned the word "handoff." Elena and Alex do not hand off work to each other—we co-author the product from day one.',
      'The key is semantic tokenization. Instead of Elena specifying arbitrary hex values or 17px padding, we establish a mutual contract in Figma variables that matches our Tailwind configuration byte-for-byte: `color-surface-elevated`, `spacing-card-padding`, `ease-spring-snappy`.',
      'Furthermore, frontend developers must be invited into Figma during ideation, and designers must participate in reviewing live PR previews directly in the browser. When the two disciplines merge into a single creative sprint, development velocity triples and visual fidelity never degrades.'
    ],
    readTime: '5 min read',
    date: 'March 14, 2025',
    category: 'Collaboration',
    author: {
      name: 'Elena Rostova & Alex Chen',
      role: 'Co-Founders, Synergy Studios',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Design Systems', 'Team Workflow', 'Figma to Code', 'Synergy'],
    keyTakeaways: [
      'Replace static redline handoffs with shared semantic token contracts.',
      'Treat Figma variables and Tailwind theme files as a bidirectional single source of truth.',
      'Review work in the real rendering engine (the browser) as early as day three.',
      'Eliminate visual compromise by prototyping complex micro-interactions in code together.'
    ]
  },
  {
    id: 'post-2',
    slug: 'micro-interactions-in-2026',
    title: 'Micro-Interactions in Modern Web: Balancing Fluid Physics with 60fps Performance',
    excerpt: 'Great motion design gives a website tactile weight and emotional delight, while poor motion causes jank and motion sickness. A deep dive into spring physics, transform constraints, and reduced motion accessibility.',
    content: [
      'Nothing distinguishes an amateur template from a bespoke digital atelier faster than the feel of its interactive feedback. When you hover a card, press a button, or dismiss a modal, your brain expects the subtle physics of physical matter: inertia, mass, and dampening.',
      'However, running unoptimized JavaScript animations or animating non-composite properties (like `width`, `height`, `margin`, or `left`) forces the browser to trigger costly layout recalculations and repaint cycles on every single frame.',
      'At Synergy Studios, all motion adheres to three cardinal rules:',
      '1. Strictly GPU-composited: We only animate `transform` (scale, translate3d, rotate) and `opacity`.',
      '2. Physics over easing curves: Rather than linear or cubic-bezier eases, we use spring simulations with tuned stiffness and damping. Springs feel organic because they adapt dynamically if an animation is interrupted mid-flight by user input.',
      '3. Mandatory `prefers-reduced-motion` compliance: For users sensitive to motion, our code gracefully converts transform transitions into subtle, elegant opacity cross-fades.'
    ],
    readTime: '6 min read',
    date: 'February 28, 2025',
    category: 'Motion & UI',
    author: {
      name: 'Alex Chen',
      role: 'Lead Frontend Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Motion Physics', 'Web Performance', 'React 19', 'Accessibility'],
    keyTakeaways: [
      'Limit web animations to transform and opacity to prevent layout recalculation.',
      'Spring physics deliver vastly more tactile experiences than rigid cubic-bezier curves.',
      'Never lock the main thread with heavy script execution during gesture interactions.',
      'Always implement responsive fallbacks for users with reduced motion preferences.'
    ]
  },
  {
    id: 'post-3',
    slug: 'why-design-systems-fail-at-scale',
    title: 'Why Design Systems Fail at Scale (and How Token-Driven Code Solves It)',
    excerpt: 'Most enterprise design systems fail within 18 months because they become static documentation graveyards. Here is how we construct living, multi-tier token architectures that stay synced automatically.',
    content: [
      'Have you ever worked at a company with a 300-page Storybook and a massive Figma library, only to find that every engineer is still writing custom inline classes and designers are inventing new button styles on each screen?',
      'Design systems fail when there is cognitive friction between maintaining the documentation and shipping daily features. If updating a color token requires manually altering 14 files across three repositories, the system is doomed.',
      'Our approach at Synergy Studios utilizes a three-tiered token model:',
      '1. Global Primitives: Raw values like `zinc-900`, `iris-500`, `spacing-16`.',
      '2. Semantic Tokens: Purpose-driven abstractions like `bg-surface-elevated`, `text-primary`, `border-interactive`.',
      '3. Component Tokens: Scoped variables like `btn-primary-bg-hover`, `modal-backdrop-blur`.',
      'By coupling Figma Variables API directly to GitHub Actions using Style Dictionary, any change Elena approves in Figma triggers an automated Pull Request that compiles fresh CSS custom properties and TypeScript type definitions.'
    ],
    readTime: '7 min read',
    date: 'January 19, 2025',
    category: 'Design Systems',
    author: {
      name: 'Elena Rostova',
      role: 'Lead Visual & UI Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Design Systems', 'Tokens', 'Architecture', 'DesignOps'],
    keyTakeaways: [
      'Separate tokens into Global Primitives, Semantic Tokens, and Component Scopes.',
      'Automate the transformation pipeline from Figma variables to CSS properties.',
      'Build strict TypeScript checks that flag rogue non-token styling before merge.',
      'A design system is not a project with an end date; it is an infrastructure product.'
    ]
  },
  {
    id: 'post-4',
    slug: 'return-of-editorial-typography',
    title: 'The Return of Editorial Typography in Contemporary Web Design',
    excerpt: 'Tired of the ubiquitous gray SaaS aesthetics? Discover why modern luxury, tech, and cultural brands are embracing sharp display typefaces, generous negative space, and typographic drama.',
    content: [
      'For the past eight years, the web has been drowning in a sea of interchangeable blue-purple gradients, generic neo-grotesque sans-serifs (Inter, Roboto), and homogeneous card grids. Every SaaS landing page looked like a clone of a clone.',
      'Recently, a refreshing rebellion has taken over: the revival of editorial typography, high-contrast display typefaces, and brutalist geometric elegance.',
      'Typographic hierarchy is the ultimate storytelling vehicle. When paired with high-performance web typography (variable fonts, optical sizing, and CSS `font-display: swap`), modern typefaces like Syne, Newsreader, and Playfair give a brand unmistakable authority without loading megabytes of static font files.',
      'In our work for clients like Lumio Atelier, we treat typography as the primary visual architecture—letting the letterforms, tracking, and baseline grids command the page before a single piece of visual decoration is added.'
    ],
    readTime: '4 min read',
    date: 'January 05, 2025',
    category: 'Collaboration',
    author: {
      name: 'Elena Rostova',
      role: 'Lead Visual & UI Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Typography', 'Editorial Web', 'Visual Identity', 'Art Direction'],
    keyTakeaways: [
      'Pair distinctive display fonts with hyper-legible body typefaces.',
      'Use variable fonts with optical sizing to minimize web payload while maximizing visual nuance.',
      'Embrace generous negative space around headings to let typography command attention.',
      'Rethink standard grid boundaries by experimenting with baseline alignment and oversized display scales.'
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Creative Strategy & Visual Thesis',
    discipline: 'Design & Engineering Discovery',
    description: 'We unpack your brand DNA, technical constraints, and commercial goals. Elena creates moodboards, typography systems, and identity monograms; Alex evaluates architecture, tech stack viability, and performance budgets.',
    deliverable: 'Visual direction deck, core moodboard, tech architecture blueprint.'
  },
  {
    step: '02',
    title: 'Tokenized Design Systems in Figma',
    discipline: 'Design Architecture',
    description: 'We construct a bulletproof design system with semantic Figma variables, auto-layout components, responsive viewport frames, and micro-interaction states. Everything is designed to map directly into code without ambiguity.',
    deliverable: 'Figma component library, typography scale, spacing system, interaction specifications.'
  },
  {
    step: '03',
    title: 'High-Fidelity Reactive Engineering',
    discipline: 'Frontend Engineering',
    description: 'Alex brings the designs to life using modern React 19, TypeScript, and Motion. Zero boilerplate, zero bloated templates. Every interactive gesture, transition, and dynamic data query is hand-crafted for sub-100ms response times.',
    deliverable: 'Clean modular codebase, responsive layouts, interactive sandbox builds, automated testing.'
  },
  {
    step: '04',
    title: 'Micro-Polish, Performance & Handover',
    discipline: 'Collaborative Quality Assurance',
    description: 'Elena audits every single pixel, breakpoint, and contrast ratio; Alex tunes Core Web Vitals to guarantee 99+ Lighthouse scores and fluid 60fps animations. We deliver clean documentation and assist with seamless deployment.',
    deliverable: '100% Lighthouse audit, production deployment, client video walkthrough, code repository.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Synergy Studios transformed our company’s visual presence and technical performance. Having both the designer and frontend developer in the same room saved us weeks of back-and-forth.',
    author: 'Julian Thorne',
    role: 'Principal Architect',
    company: 'Lumio Atelier',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    stat: '100/100 Lighthouse'
  },
  {
    quote: 'Elena’s artistic eye and Alex’s technical wizardry are an unbeatable combination. Our conversion rate surged 180% within the first month after our website launch.',
    author: 'Clara Dupond',
    role: 'Founder & CEO',
    company: 'Aura Living',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    stat: '+180% Conversion'
  },
  {
    quote: 'They eliminated the headache of design handoffs entirely. What we saw in the Figma prototype was exactly what went live in production—down to the smoothest spring physics.',
    author: 'Marcus Sterling',
    role: 'Chief Product Officer',
    company: 'Verve Financial',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    stat: '84k Active Users'
  }
];
