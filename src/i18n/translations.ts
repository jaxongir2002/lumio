export type Language = 'en' | 'ru';
export type Theme = 'dark' | 'light';

export interface Translations {
  nav: {
    works: string;
    inspector: string;
    duo: string;
    process: string;
    faq: string;
    contact: string;
    available: string;
    startProject: string;
    inquire: string;
    requestProposal: string;
    themeLight: string;
    themeDark: string;
  };
  hero: {
    elenaBadge: string;
    alexBadge: string;
    duoStudio: string;
    title: string;
    description: string;
    bookCall: string;
    exploreWorks: string;
    interactiveMonogram: string;
    estYear: string;
    duoStudioBadge: string;
    clickToRedraw: string;
    advantageTitle: string;
    designExcellence: string;
    designExcellenceDesc: string;
    codeIntegrity: string;
    codeIntegrityDesc: string;
    synergyAdvantage: string;
    synergyAdvantageDesc: string;
  };
  brandStage: {
    badge: string;
    title: string;
    description: string;
    replay: string;
    blueprintOn: string;
    blueprintOff: string;
    arcTension: string;
    copySvg: string;
    copiedSvg: string;
    obsidian: string;
    paper: string;
    vectorPrecision: string;
    vectorPrecisionDesc: string;
    goldenArc: string;
    goldenArcDesc: string;
    zeroLag: string;
    zeroLagDesc: string;
    colorwayPaper: string;
    colorwayObsidian: string;
    paperWhite: string;
    specsOn: string;
    specsOff: string;
    replayDraw: string;
    rationaleAuthor: string;
    rationaleQuote: string;
    needIdentity: string;
    craftSystem: string;
    inquireBtn: string;
  };
  inspector: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    cardTab: string;
    buttonTab: string;
    navbarTab: string;
    figmaSpecsLeft: string;
    dragDivider: string;
    reactCodeRight: string;
    figmaSide: string;
    codeSide: string;
    sliderHint: string;
    tokenSyncPill: string;
    activeComponent: string;
    tokensTab: string;
    codeTab: string;
    copyTokens: string;
    copyCode: string;
    copied: string;
    fidelityScore: string;
    zeroLagHandoff: string;
    designSync: string;
    designSyncVal: string;
    parityRate: string;
    parityRateVal: string;
    motionEngine: string;
    motionEngineVal: string;
    revisionCycles: string;
    revisionCyclesVal: string;
  };
  works: {
    badge: string;
    title: string;
    description: string;
    all: string;
    brandingUi: string;
    webApps: string;
    designSystems: string;
    creativeTech: string;
    ecommerce: string;
    interactiveSandbox: string;
    viewCaseStudy: string;
    metricsLabel: string;
    liveDemo: string;
    categories: {
      all: string;
      brandingUi: string;
      designSystem: string;
      webApp: string;
      ecommerce: string;
      creativeTech: string;
    };
    showingCount: string;
    caseStudiesCount: string;
    liveSandbox: string;
    more: string;
  };
  duo: {
    badge: string;
    title: string;
    description: string;
    tabCombined: string;
    tabElena: string;
    tabAlex: string;
    filterBoth: string;
    filterElena: string;
    filterAlex: string;
    elenaName: string;
    alexName: string;
    elenaBio: string;
    alexBio: string;
    leadDesigner: string;
    leadArchitect: string;
    superpowers: string;
    whyHireTitle: string;
    whyHireDesc: string;
    directSlack: string;
    zeroScopeCreep: string;
    elenaRole: string;
    alexRole: string;
    designDiscipline: string;
    engineeringDiscipline: string;
    coreToolkit: string;
    specialties: string;
    philosophyQuote: string;
    elenaQuote: string;
    alexQuote: string;
  };
  socialProof: {
    badge: string;
    title: string;
    description: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    metric4Val: string;
    metric4Label: string;
    testimonialTag: string;
  };
  proof: {
    badge: string;
    title: string;
    description: string;
    measuredValue: string;
    lumioStandard: string;
    standardPoint1: string;
    standardPoint2: string;
    standardPoint3: string;
  };
  process: {
    badge: string;
    title: string;
    description: string;
    deliverableLabel: string;
    stageOf: string;
    duration: string;
    artifacts: string;
    dualSprint: string;
    testimonialsBadge: string;
    testimonialsTitle: string;
    steps: {
      step: string;
      title: string;
      discipline: string;
      description: string;
      deliverable: string;
    }[];
  };
  caseStudy: {
    closeView: string;
    requestSimilar: string;
    designLens: string;
    engineeringLens: string;
    visualSpec: string;
    typographyHierarchy: string;
    gridAlignment: string;
    rationale: string;
    paletteTitle: string;
    architectureStack: string;
    benchmarks: string;
    milestones: string;
    dualLensTitle: string;
    dualLensDesc: string;
    lookingSimilar: string;
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    askQuestion: string;
    customQuestion: string;
    customDesc: string;
    askBtn: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  blog: {
    badge: string;
    title: string;
    description: string;
    allCategory: string;
    searchPlaceholder: string;
    readTime: string;
    readPost: string;
    readEssay: string;
    closeArticle: string;
    keyTakeaways: string;
    keyPrinciples: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    subtitle: string;
    estimatorTitle: string;
    estimatorSubtitle: string;
    selectedServices: string;
    indicativeTimeline: string;
    estimatedBudget: string;
    weeks: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    servicesLabel: string;
    budgetLabel: string;
    timelineLabel: string;
    detailsLabel: string;
    overviewLabel: string;
    overviewPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    successMessage: string;
    sendAnother: string;
    directDesk: string;
    emailCopied: string;
    scopeReceipt: string;
    activeConfig: string;
    selectedDiscipline: string;
    investmentTier: string;
    timelineWindow: string;
    leadAssignment: string;
    inclusionsTitle: string;
    preferEmail: string;
    copied: string;
    copy: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    disciplines: string;
    directInquiries: string;
    rights: string;
    designCredit: string;
    codeCredit: string;
    description: string;
    location: string;
    locationVal: string;
    explore: string;
    works: string;
    inspector: string;
    duo: string;
    pipeline: string;
    faq: string;
    contact: string;
    connect: string;
    designBy: string;
    codeBy: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      works: 'Works',
      inspector: 'Figma-to-Code',
      duo: 'The Duo',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      available: 'Available for Q3/Q4',
      startProject: 'Start a Project',
      inquire: 'Inquire',
      requestProposal: 'Request Project Proposal',
      themeLight: 'Light',
      themeDark: 'Dark'
    },
    hero: {
      elenaBadge: 'ELENA (GRAPHIC DESIGN)',
      alexBadge: 'ALEX (FRONTEND ARCHITECT)',
      duoStudio: '// LUMIO COLLABORATIVE DUO',
      title: 'Where graphic precision meets fluid frontend engineering.',
      description: 'We are LUMIO—an independent creative duo. We unite high-end brand identity, editorial typography, and tokenized design systems with ultra-performant, 60fps reactive frontend code—delivering digital flagships without agency bloat.',
      bookCall: 'Book a Discovery Call',
      exploreWorks: 'Explore Interactive Works',
      interactiveMonogram: 'INTERACTIVE MONOGRAM',
      estYear: 'EST. 2024',
      duoStudioBadge: 'DUO STUDIO',
      clickToRedraw: 'CLICK TO RE-DRAW',
      advantageTitle: 'THE LUMIO ADVANTAGE',
      designExcellence: 'DESIGN EXCELLENCE',
      designExcellenceDesc: 'Custom vector monograms, editorial typographic hierarchy, living Figma design tokens, and obsessive attention to spatial negative space.',
      codeIntegrity: 'CODE INTEGRITY',
      codeIntegrityDesc: 'Strict TypeScript typing, sub-100ms interaction latency, hardware-accelerated transforms, and Lighthouse 99+ Core Web Vitals.',
      synergyAdvantage: 'DIRECT FOUNDER EXECUTION',
      synergyAdvantageDesc: 'No account managers, zero wireframe-to-code lag, and 100% token parity between Figma variables and production CSS.'
    },
    brandStage: {
      badge: 'THE LUMIO MONOGRAM IDENTITY',
      title: 'Anatomy of the LUMIO Mark',
      description: 'Designed at the intersection of architectural discipline and lyrical fluidity. Explore the vector geometry, stroke animation physics, and typography system.',
      replay: 'Replay Stroke',
      blueprintOn: 'Blueprint Grid: ON',
      blueprintOff: 'Blueprint Grid: OFF',
      arcTension: 'Arc Tension',
      copySvg: 'Copy Clean SVG',
      copiedSvg: 'SVG Copied to Clipboard!',
      obsidian: 'Obsidian Canvas',
      paper: 'Paper Canvas',
      vectorPrecision: 'Orthogonal Precision',
      vectorPrecisionDesc: 'The bold 6.5px stem and baseline anchor the composition with structural architectural permanence.',
      goldenArc: 'Harmonic Golden Curve',
      goldenArcDesc: 'The lyrical 4.5px semicircular stroke breaks the strict grid, introducing organic movement and radiance.',
      zeroLag: 'Interactive Physics',
      zeroLagDesc: 'Calculated in real-time with responsive gyro perspective tilt and cubic bezier spring dynamics.',
      colorwayPaper: 'Gallery Paper White',
      colorwayObsidian: 'Obsidian Noir Dark',
      paperWhite: 'Paper White Canvas',
      specsOn: 'Blueprint Grid: ON',
      specsOff: 'Blueprint Grid: OFF',
      replayDraw: 'Replay Animation',
      rationaleAuthor: 'Elena (Design Lead)',
      rationaleQuote: 'The geometric interplay of the vertical anchor and the fluid luminous arc embodies the exact symbiosis of engineering and design.',
      needIdentity: 'Need a custom brand identity?',
      craftSystem: 'We craft comprehensive vector systems & living Figma tokens.',
      inquireBtn: 'Start Brand Inquiry'
    },
    inspector: {
      badge: 'THE HANDOFF KILLER',
      title: 'Figma-to-Code Parity Inspector',
      subtitle: 'Elena defines tokens in Figma; Alex implements exact TypeScript tokens and Tailwind classes. Drag the parity slider to witness pixel-perfect alignment.',
      description: 'Elena defines tokens in Figma; Alex implements exact TypeScript tokens and Tailwind classes. Drag the parity slider to witness pixel-perfect alignment.',
      cardTab: 'Card Component',
      buttonTab: 'Button Primitive',
      navbarTab: 'Dynamic Nav',
      figmaSpecsLeft: 'Figma Vector Tokens (Left)',
      dragDivider: '⟵ Drag slider to compare 1:1 parity ⟶',
      reactCodeRight: 'Production React 19 (Right)',
      figmaSide: 'FIGMA VECTOR TOKEN LAYER',
      codeSide: 'REACT 19 + TAILWIND CODE LAYER',
      sliderHint: 'Drag to verify 1:1 parity',
      tokenSyncPill: '100% TOKEN SYNCHRONIZED',
      activeComponent: 'Interactive Architectural Card',
      tokensTab: 'Design Tokens',
      codeTab: 'Production Code',
      copyTokens: 'Copy Figma Tokens',
      copyCode: 'Copy React Component',
      copied: 'Copied!',
      fidelityScore: 'Visual Fidelity: 100%',
      zeroLagHandoff: 'Zero Handoff Loss',
      designSync: 'Design Token Sync',
      designSyncVal: '100% Bit-for-Bit',
      parityRate: 'Fidelity Alignment',
      parityRateVal: '1:1 Visual Parity',
      motionEngine: 'Animation Engine',
      motionEngineVal: 'Motion / Hardware 60fps',
      revisionCycles: 'Handoff Revision Lag',
      revisionCyclesVal: '0 Lost Iterations'
    },
    works: {
      badge: 'PORTFOLIO OF COLLABORATIVE WORKS',
      title: 'Featured Works & Interactive Demos',
      description: 'Each project represents a unified synthesis of custom brand design and custom frontend architecture. Click any project to inspect technical specs or run the sandbox.',
      all: 'All Works',
      brandingUi: 'Brand & UI',
      webApps: 'Web Applications',
      designSystems: 'Design Systems',
      creativeTech: 'Creative Tech',
      ecommerce: 'E-Commerce',
      interactiveSandbox: 'Launch Sandbox',
      viewCaseStudy: 'View Case Study',
      metricsLabel: 'Key Outcome',
      liveDemo: 'Live Interactive Demo',
      categories: {
        all: 'All Works',
        brandingUi: 'Brand & UI',
        designSystem: 'Design Systems',
        webApp: 'Web Apps',
        ecommerce: 'E-Commerce',
        creativeTech: 'Creative Tech'
      },
      showingCount: 'Showing',
      caseStudiesCount: 'Case Studies',
      liveSandbox: 'Live Sandbox Available',
      more: 'more'
    },
    duo: {
      badge: 'THE FOUNDING DUO',
      title: 'Two Disciplines. Co-Equal Leadership.',
      description: 'Most agencies suffer from a deep divide: designers who do not understand code constraints, and developers who overlook optical typography. We founded LUMIO to prove what happens when both crafts work as co-equals.',
      tabCombined: 'The LUMIO Duo',
      tabElena: 'Elena (Design Lead)',
      tabAlex: 'Alex (Tech Lead)',
      filterBoth: 'Both Crafts',
      filterElena: 'Elena (Design)',
      filterAlex: 'Alex (Frontend)',
      elenaName: 'Elena Rostova',
      alexName: 'Alex Mercer',
      elenaBio: 'Specializing in high-end brand identities, architectural typography systems, and pixel-calibrated Figma component architectures.',
      alexBio: 'Specializing in zero-runtime CSS, React 19 concurrent features, GPU-accelerated motion choreography, and high-performance WebGL.',
      leadDesigner: 'Lead Visual Designer',
      leadArchitect: 'Lead Frontend Architect',
      superpowers: 'Core Superpowers',
      whyHireTitle: 'Direct Founder Access, Zero Agency Middlemen',
      whyHireDesc: 'No account executives, no games of telephone. Elena and Alex personally design and engineer your flagship digital presence.',
      directSlack: 'Direct Slack / Discord Access',
      zeroScopeCreep: 'Transparent Fixed-Sprint Billing',
      elenaRole: 'Co-Founder & Lead Visual / UI Designer',
      alexRole: 'Co-Founder & Lead Frontend Architect',
      designDiscipline: 'GRAPHIC & BRAND DESIGN',
      engineeringDiscipline: 'FRONTEND ARCHITECTURE',
      coreToolkit: 'PRIMARY TOOLS',
      specialties: 'CORE COMPETENCIES',
      philosophyQuote: 'True digital craft emerges only when the visual identity and the software architecture evolve in the exact same room.',
      elenaQuote: 'I design with DOM structure and component hierarchies in mind from day one. When design understands code, creativity has no limits.',
      alexQuote: 'Every cubic bezier, spatial margin, and font weight is an engineering commitment to the designer’s original vision.'
    },
    socialProof: {
      badge: 'VERIFIED IMPACT & METRICS',
      title: 'Real Results from Direct Duo Collaboration',
      description: 'Measurable outcomes delivered for visionary founders, design ateliers, and high-growth technology companies.',
      metric1Val: '+320%',
      metric1Label: 'Inbound Client Inquiries',
      metric2Val: '99.8',
      metric2Label: 'Avg. Lighthouse Performance',
      metric3Val: '18 Days',
      metric3Label: 'Average Sprint to Launch',
      metric4Val: '0 ms',
      metric4Label: 'Perceived Transition Latency',
      testimonialTag: 'FOUNDER TESTIMONIAL'
    },
    proof: {
      badge: 'PROVEN OUTCOMES & REPUTATION',
      title: 'Trusted by Venture Founders & Design Leaders',
      description: 'When creative direction and frontend engineering operate without agency hierarchy, products launch faster with unmatched polish.',
      measuredValue: 'MEASURED CLIENT VALUE',
      lumioStandard: 'THE LUMIO BENCHMARK',
      standardPoint1: 'Zero agency middle-management or junior hand-offs',
      standardPoint2: '100% token parity between Figma variables & production code',
      standardPoint3: 'Sub-100ms interaction latency with Lighthouse 99+ scores'
    },
    process: {
      badge: 'OUR 4-PHASE SYNERGY PIPELINE',
      title: 'From First Moodboard to Global Production',
      description: 'A transparent, collaborative timeline that eliminates weeks of bureaucratic agency overhead.',
      deliverableLabel: 'Sprint Deliverable:',
      stageOf: 'STAGE',
      duration: 'TYPICAL DURATION: 1–2 WEEKS',
      artifacts: 'CORE ARTIFACTS DELIVERED',
      dualSprint: 'LUMIO CONTINUOUS CO-FOUNDER PIPELINE',
      testimonialsBadge: 'CLIENT PERSPECTIVES',
      testimonialsTitle: 'What Founders Say About Working Directly With Us',
      steps: [
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
      ]
    },
    caseStudy: {
      closeView: 'Close Case Study',
      requestSimilar: 'Inquire About Similar Project',
      designLens: 'Elena’s Design Lens',
      engineeringLens: 'Alex’s Code Architecture',
      visualSpec: 'Visual Identity & System Specifications',
      typographyHierarchy: 'Editorial Typographic System',
      gridAlignment: 'Spatial Scale & Layout Rhythm',
      rationale: 'Creative & Technical Rationale',
      paletteTitle: 'Harmonic Color Architecture',
      architectureStack: 'Frontend Architecture & Tech Stack',
      benchmarks: 'Lighthouse Performance & Latency Benchmarks',
      milestones: 'Production Timeline & Handover Milestones',
      dualLensTitle: 'The Dual Discipline Perspective',
      dualLensDesc: 'See how graphic design decisions directly informed code engineering architecture.',
      lookingSimilar: 'Looking for a similar digital flagship?'
    },
    faq: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Clear Answers Before We Begin',
      description: 'Everything you need to know about our workflow, deliverables, pricing structure, and handover.',
      askQuestion: 'Have a specific question not covered here?',
      customQuestion: 'Have a specific question about your project?',
      customDesc: 'We typically assess technical feasibility and provide creative direction within 24 hours.',
      askBtn: 'Ask Direct Question',
      items: [
        {
          question: 'Why hire a designer + developer duo instead of an agency or separate freelancers?',
          answer: 'Traditional agencies burden your budget with account executives, project managers, and junior subcontractors. When you hire separate freelancers, the designer finishes their job and leaves the developer to guess interactions, resulting in lost fidelity. With LUMIO, Elena and Alex work side-by-side: design decisions are immediately stress-tested in code, and engineering nuances elevate the visual identity.'
        },
        {
          question: 'Who owns the Figma files, design tokens, and code repository?',
          answer: 'You do. 100% of all deliverables—including organized Figma source files, vector assets, token exports, clean TypeScript code, and deployment configurations—are transferred to your organization upon final milestone completion.'
        },
        {
          question: 'What does a typical sprint timeline look like?',
          answer: 'Most brand identity & digital flagship sprints span between 2 to 6 weeks. Simple launch websites take 2–3 weeks, while comprehensive design systems with custom interactive WebGL/Motion applications take 4–6 weeks.'
        },
        {
          question: 'What tech stack do you build with?',
          answer: 'We specialize in React 19, Next.js, TypeScript, Tailwind CSS, Motion (Framer Motion), WebGL/Canvas, and Vite. We do not use clumsy visual page builders (Webflow/WordPress) unless explicitly requested, ensuring unmatched speed and security.'
        },
        {
          question: 'Can you work with our existing branding or in-house engineering team?',
          answer: 'Yes. We often act as the high-velocity strike team for venture-backed startups and mature brands: either building the new flagship from scratch or providing comprehensive Figma tokens and production component libraries that your internal developers love to integrate.'
        }
      ]
    },
    blog: {
      badge: 'INSIGHTS & PUBLICATIONS',
      title: 'Studio Field Notes & Engineering Essays',
      description: 'Deep dives into design systems, typography hierarchy, token automation, and high-performance frontend architecture.',
      allCategory: 'All Insights',
      searchPlaceholder: 'Search articles, design systems, benchmarks...',
      readTime: 'min read',
      readPost: 'Read Full Essay',
      readEssay: 'Read Essay',
      closeArticle: 'Close Article',
      keyTakeaways: 'Key Takeaways & Principles:',
      keyPrinciples: 'Key Principles & Takeaways'
    },
    contact: {
      badge: 'START A CONVERSATION',
      title: 'Collaborative Project Inquiry',
      description: 'Tell us about your brand vision, target timeline, and product goals. We respond to every inquiry within 24 business hours.',
      subtitle: 'Tell us about your brand vision, target timeline, and product goals. We respond to every inquiry within 24 business hours.',
      estimatorTitle: 'Interactive Scope & Budget Estimator',
      estimatorSubtitle: 'Select your target capabilities to receive an immediate indicative timeline and investment scope.',
      selectedServices: 'Selected Capabilities',
      indicativeTimeline: 'Est. Timeline',
      estimatedBudget: 'Estimated Scope',
      weeks: 'weeks',
      formTitle: 'Submit Project Inquiry',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Sarah Jenkins',
      emailLabel: 'Direct Email *',
      emailPlaceholder: 'sarah@company.com',
      companyLabel: 'Company / Project Name',
      companyPlaceholder: 'e.g. Atelier Studio',
      servicesLabel: 'Services Needed',
      budgetLabel: 'Target Budget Range',
      timelineLabel: 'Expected Launch Timeline',
      detailsLabel: 'Project Specifications & Details',
      overviewLabel: 'Project Overview & Objectives *',
      overviewPlaceholder: 'Briefly describe your company, project goals, and what made you reach out to LUMIO...',
      messagePlaceholder: 'Tell us about your vision, technical requirements, or inspiration...',
      submitBtn: 'Send Project Inquiry',
      submittingBtn: 'Transmitting Inquiry...',
      submitting: 'Submitting Inquiry...',
      successTitle: 'Inquiry Received!',
      successDesc: 'Thank you for reaching out to LUMIO. Elena and Alex have received your project details and will follow up with an initial discovery outline within 24 hours.',
      successMessage: 'Thank you for reaching out to LUMIO. Elena and Alex have received your project details and will follow up with an initial discovery outline within 24 hours.',
      sendAnother: 'Send Another Inquiry',
      directDesk: 'Direct Studio Desk:',
      emailCopied: 'Email copied to clipboard!',
      scopeReceipt: 'ESTIMATED SCOPE RECEIPT',
      activeConfig: 'Active Scope Configuration',
      selectedDiscipline: 'Selected Disciplines',
      investmentTier: 'Estimated Investment Tier',
      timelineWindow: 'Estimated Delivery Window',
      leadAssignment: 'Direct Co-Founders: Elena (Design) + Alex (Code)',
      inclusionsTitle: 'Every LUMIO Sprint Includes:',
      preferEmail: 'Prefer direct email instead?',
      copied: 'Copied!',
      copy: 'Copy'
    },
    footer: {
      tagline: 'An independent collaborative duo uniting high-end graphic design, editorial typography, and fluid 60fps frontend engineering.',
      navigation: 'NAVIGATION',
      disciplines: 'DUAL DISCIPLINES',
      directInquiries: 'DIRECT INQUIRIES',
      rights: 'LUMIO Portfolio. All rights reserved.',
      designCredit: 'Graphic Identity by Elena',
      codeCredit: 'Frontend Architecture by Alex',
      description: 'An independent collaborative duo uniting high-end graphic design, editorial typography, and fluid 60fps frontend engineering.',
      location: 'STUDIO BASE',
      locationVal: 'Global / Remote (EST & CET)',
      explore: 'EXPLORE',
      works: 'Selected Works',
      inspector: 'Figma-to-Code Parity',
      duo: 'The Founding Duo',
      pipeline: '4-Phase Process',
      faq: 'Direct FAQ',
      contact: 'Project Inquiry',
      connect: 'CONNECT',
      designBy: 'Identity & Typography: Elena',
      codeBy: 'Frontend Architecture: Alex'
    }
  },
  ru: {
    nav: {
      works: 'Проекты',
      inspector: 'Код и Дизайн',
      duo: 'О дуэте',
      process: 'Процесс',
      faq: 'Вопросы',
      contact: 'Контакты',
      available: 'Открыты для проектов Q3/Q4',
      startProject: 'Начать проект',
      inquire: 'Обсудить',
      requestProposal: 'Запросить предложение',
      themeLight: 'Светлая',
      themeDark: 'Тёмная'
    },
    hero: {
      elenaBadge: 'ЕЛЕНА (ГРАФИЧЕСКИЙ ДИЗАЙН)',
      alexBadge: 'АЛЕКС (ФРОНТЕНД-АРХИТЕКТОР)',
      duoStudio: '// ТВОРЧЕСКИЙ ДУЭТ LUMIO',
      title: 'Где графическая точность встречается с реактивной фронтенд-инженерией.',
      description: 'Мы — LUMIO, независимый творческий дуэт. Мы объединяем премиальный брендинг, типографику и дизайн-системы с производительным кодом на 60fps — создавая цифровые флагманы без бюрократии агентств.',
      bookCall: 'Записаться на звонок',
      exploreWorks: 'Смотреть проекты',
      interactiveMonogram: 'ИНТЕРАКТИВНАЯ МОНОГРАММА',
      estYear: 'ОСН. 2024',
      duoStudioBadge: 'ДУЭТ-СТУДИЯ',
      clickToRedraw: 'НАЖМИТЕ ДЛЯ АНИМАЦИИ',
      advantageTitle: 'ПРЕИМУЩЕСТВО LUMIO',
      designExcellence: 'ДИЗАЙН-ЭКСПЕРТИЗА',
      designExcellenceDesc: 'Векторные монограммы, строгая типографическая сетка, дизайн-токены в Figma и внимание к пространственному негативному пространству.',
      codeIntegrity: 'ЧИСТОТА КОДА',
      codeIntegrityDesc: 'Строгий TypeScript, отклик до 100 мс, аппаратное ускорение анимаций и безупречные 99+ баллов в Lighthouse Core Web Vitals.',
      synergyAdvantage: 'РАБОТА НАПРЯМУЮ',
      synergyAdvantageDesc: 'Никаких аккаунт-менеджеров, задержек при передаче макетов и 100% синхронизация переменных Figma с production-кодом.'
    },
    brandStage: {
      badge: 'АЙДЕНТИКА МОНОГРАММЫ LUMIO',
      title: 'Анатомия знака LUMIO',
      description: 'Создана на стыке архитектурной строгости и живой пластики. Исследуйте геометрию векторов, физику анимации линий и типографическую систему.',
      replay: 'Перезапустить штрих',
      blueprintOn: 'Чертежная сетка: ВКЛ',
      blueprintOff: 'Чертежная сетка: ВЫКЛ',
      arcTension: 'Натяжение дуги',
      copySvg: 'Скопировать чистый SVG',
      copiedSvg: 'SVG скопирован в буфер!',
      obsidian: 'Холст «Обсидиан»',
      paper: 'Холст «Бумага»',
      vectorPrecision: 'Ортогональная точность',
      vectorPrecisionDesc: 'Четкий штрих толщиной 6.5px и горизонтальное основание задают архитектурную устойчивость знака.',
      goldenArc: 'Гармоническая дуга',
      goldenArcDesc: 'Пластичная дуга 4.5px преодолевает строгую сетку, добавляя органику, воздух и ощущение света.',
      zeroLag: 'Интерактивная физика',
      zeroLagDesc: 'Расчет координат в реальном времени с 3D-гироскопическим наклоном курсора и пружинной физикой.',
      colorwayPaper: 'Галерейный белый',
      colorwayObsidian: 'Глубокий обсидиановый',
      paperWhite: 'Холст «Бумага»',
      specsOn: 'Чертежная сетка: ВКЛ',
      specsOff: 'Чертежная сетка: ВЫКЛ',
      replayDraw: 'Перезапустить штрих',
      rationaleAuthor: 'Елена (Арт-директор)',
      rationaleQuote: 'Геометрический диалог вертикальной оси и пластичной сияющей дуги воплощает точный симбиоз инженерии и чистого дизайна.',
      needIdentity: 'Нужна уникальная айдентика?',
      craftSystem: 'Мы разрабатываем векторные системы и живые токены в Figma.',
      inquireBtn: 'Обсудить айдентику'
    },
    inspector: {
      badge: 'БЕЗ ПОТЕРЬ ПРИ ВЕРСТКЕ',
      title: 'Инспектор синхронизации Figma и Кода',
      subtitle: 'Елена настраивает токены в Figma, Алекс переносит их в строгий TypeScript и классы Tailwind. Потяните слайдер, чтобы увидеть абсолютную точность.',
      description: 'Елена настраивает токены в Figma, Алекс переносит их в строгий TypeScript и классы Tailwind. Потяните слайдер, чтобы увидеть абсолютную точность.',
      cardTab: 'Компонент карточки',
      buttonTab: 'Примитив кнопки',
      navbarTab: 'Навигационная панель',
      figmaSpecsLeft: 'Векторные токены Figma (Слева)',
      dragDivider: '⟵ Потяните разделитель для проверки 1:1 ⟶',
      reactCodeRight: 'Production React 19 (Справа)',
      figmaSide: 'СЛОЙ ВЕКТОРНЫХ ТОКЕНОВ FIGMA',
      codeSide: 'СЛОЙ КОДА REACT 19 + TAILWIND',
      sliderHint: 'Потяните для проверки синхронизации 1:1',
      tokenSyncPill: '100% СИНХРОНИЗАЦИЯ ТОКЕНОВ',
      activeComponent: 'Интерактивная архитектурная карточка',
      tokensTab: 'Дизайн-токены',
      codeTab: 'Production-код',
      copyTokens: 'Скопировать токены Figma',
      copyCode: 'Скопировать компонент React',
      copied: 'Скопировано!',
      fidelityScore: 'Точность верстки: 100%',
      zeroLagHandoff: 'Ноль потерь макета',
      designSync: 'Синхронизация токенов',
      designSyncVal: '100% Байт-в-байт',
      parityRate: 'Точность соответствия',
      parityRateVal: '1:1 Паритет с кодом',
      motionEngine: 'Движок анимации',
      motionEngineVal: 'Motion / Аппаратные 60fps',
      revisionCycles: 'Потери при верстке',
      revisionCyclesVal: '0 потерянных итераций'
    },
    works: {
      badge: 'ПОРТФОЛИО СОВМЕСТНЫХ ПРОЕКТОВ',
      title: 'Избранные проекты и интерактивные демо',
      description: 'Каждый проект — результат неразрывной связи визуального брендинга и передовой веб-архитектуры. Выберите проект для изучения спецификаций или запуска демо.',
      all: 'Все проекты',
      brandingUi: 'Брендинг и UI',
      webApps: 'Веб-сервисы',
      designSystems: 'Дизайн-системы',
      creativeTech: 'Креативный код',
      ecommerce: 'E-Commerce',
      interactiveSandbox: 'Запустить песочницу',
      viewCaseStudy: 'Подробнее о проекте',
      metricsLabel: 'Ключевой результат',
      liveDemo: 'Интерактивное демо',
      categories: {
        all: 'Все проекты',
        brandingUi: 'Брендинг и UI',
        designSystem: 'Дизайн-системы',
        webApp: 'Веб-сервисы',
        ecommerce: 'E-Commerce',
        creativeTech: 'Креативный код'
      },
      showingCount: 'Показано',
      caseStudiesCount: 'кейсов',
      liveSandbox: 'Интерактивная песочница',
      more: 'ещё'
    },
    duo: {
      badge: 'ОСНОВАТЕЛИ ДУЭТА',
      title: 'Две дисциплины. Равноправное партнерство.',
      description: 'Большинство агентств страдают от пропасти: дизайнеры не учитывают технические ограничения, а разработчики пренебрегают оптической типографикой. Мы создали LUMIO, чтобы доказать мощь равного союза.',
      tabCombined: 'Дуэт LUMIO',
      tabElena: 'Елена (Дизайн)',
      tabAlex: 'Алекс (Разработка)',
      filterBoth: 'Оба направления',
      filterElena: 'Елена (Дизайн)',
      filterAlex: 'Алекс (Разработка)',
      elenaName: 'Елена Ростова',
      alexName: 'Алекс Мерсер',
      elenaBio: 'Специализируется на премиальной айдентике, архитектурных системах шрифтов и выверенных компонентах Figma.',
      alexBio: 'Специализируется на React 19, анимациях на аппаратном ускорении GPU, WebGL и коде с откликом до 100 мс.',
      leadDesigner: 'Ведущий дизайнер айдентики',
      leadArchitect: 'Ведущий фронтенд-архитектор',
      superpowers: 'Ключевые суперсилы',
      whyHireTitle: 'Прямой контакт с создателями без лишних посредников',
      whyHireDesc: 'Никаких менеджеров проектов и испорченного телефона. Елена и Алекс лично проектируют и создают ваш цифровой флагман.',
      directSlack: 'Прямой канал в Slack / Discord',
      zeroScopeCreep: 'Прозрачные фиксированные спринты',
      elenaRole: 'Сооснователь и ведущий дизайнер айдентики и UI',
      alexRole: 'Сооснователь и ведущий фронтенд-архитектор',
      designDiscipline: 'ГРАФИКА И БРЕНДИНГ',
      engineeringDiscipline: 'ФРОНТЕНД-АРХИТЕКТУРА',
      coreToolkit: 'ОСНОВНЫЕ ИНСТРУМЕНТЫ',
      specialties: 'КЛЮЧЕВЫЕ НАВЫКИ',
      philosophyQuote: 'Настоящее цифровое мастерство рождается только тогда, когда айдентика и архитектура кода развиваются в одном пространстве.',
      elenaQuote: 'Я проектирую с учетом структуры DOM и иерархии компонентов с первого дня. Когда дизайн понимает код, границы исчезают.',
      alexQuote: 'Каждая кривая Безье, отступ и начертание шрифта — это инженерное обязательство сохранить чистоту исходного видения.'
    },
    socialProof: {
      badge: 'РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ И МЕТРИКИ',
      title: 'Измеримый эффект прямой работы с основателями',
      description: 'Фактические бизнес-результаты, достигнутые для технологических брендов, архитектурных бюро и стартапов.',
      metric1Val: '+320%',
      metric1Label: 'Рост входящих заявок',
      metric2Val: '99.8',
      metric2Label: 'Средний балл Lighthouse',
      metric3Val: '18 дней',
      metric3Label: 'Средний срок до запуска',
      metric4Val: '0 мс',
      metric4Label: 'Задержка смены экранов',
      testimonialTag: 'ОТЗЫВ ОСНОВАТЕЛЯ'
    },
    proof: {
      badge: 'ПОДТВЕРЖДЕННЫЙ РЕЗУЛЬТАТ И РЕПУТАЦИЯ',
      title: 'Доверие венчурных фаундеров и дизайн-лидеров',
      description: 'Когда арт-дирекшн и фронтенд-архитектура работают без посредников и бюрократии, продукты запускаются быстрее и с безупречной точностью.',
      measuredValue: 'ИЗМЕРИМАЯ ПОЛЬЗА ДЛЯ КЛИЕНТА',
      lumioStandard: 'СТАНДАРТ КАЧЕСТВА LUMIO',
      standardPoint1: 'Никаких аккаунт-менеджеров и передачи задач джуниорам',
      standardPoint2: '100% синхронизация переменных Figma и продакшн-кода',
      standardPoint3: 'Отклик взаимодействий до 100 мс и 99+ баллов в Lighthouse'
    },
    process: {
      badge: 'НАШИ 4 ЭТАПА СОВМЕСТНОЙ РАБОТЫ',
      title: 'От первого мудборда до глобального запуска',
      description: 'Прозрачный и сфокусированный пайплайн, устраняющий недели бесполезных согласований.',
      deliverableLabel: 'Результат этапа:',
      stageOf: 'ЭТАП',
      duration: 'СРОК: 1–2 НЕДЕЛИ',
      artifacts: 'РЕЗУЛЬТАТЫ ЭТАПА',
      dualSprint: 'НЕПРЕРЫВНЫЙ СПРИНТ ОСНОВАТЕЛЕЙ LUMIO',
      testimonialsBadge: 'ОТЗЫВЫ КЛИЕНТОВ',
      testimonialsTitle: 'Что говорят фаундеры о работе напрямую с нами',
      steps: [
        {
          step: '01',
          title: 'Креативная стратегия и визуальный тезис',
          discipline: 'Исследование и концепция',
          description: 'Мы погружаемся в ДНК бренда, технические условия и коммерческие цели. Елена создает мудборды, систему типографики и монограммы; Алекс оценивает архитектуру и бюджет производительности.',
          deliverable: 'Презентация визуального стиля, мудборд, чертеж технической архитектуры.'
        },
        {
          step: '02',
          title: 'Дизайн-система на токенах в Figma',
          discipline: 'Архитектура дизайна',
          description: 'Создаем надежную дизайн-систему с семантическими переменными Figma, авто-лейаутами, адаптивными фреймами и микро-состояниями. Все параметры бесшовно транслируются в код.',
          deliverable: 'Библиотека компонентов Figma, шкала типографики, сетка отступов, спецификации интеракций.'
        },
        {
          step: '03',
          title: 'Реактивная фронтенд-разработка',
          discipline: 'Фронтенд-инженерия',
          description: 'Алекс оживляет макеты с использованием React 19, TypeScript и Motion. Никаких шаблонных конструкторов. Каждый жест, анимация и запрос оптимизированы для отклика до 100 мс.',
          deliverable: 'Чистый модульный репозиторий, адаптивная верстка, интерактивные демо-билды, тесты.'
        },
        {
          step: '04',
          title: 'Попиксельная полировка, оптимизация и релиз',
          discipline: 'Совместный контроль качества',
          description: 'Елена проверяет каждый пиксель, контраст и адаптивные точки; Алекс калибрует Core Web Vitals для достижения 99+ баллов в Lighthouse и стабильных 60fps. Передаем документацию и настраиваем деплой.',
          deliverable: '100% аудит Lighthouse, деплой на продакшн, обучающее видео, передача репозитория.'
        }
      ]
    },
    caseStudy: {
      closeView: 'Закрыть кейс',
      requestSimilar: 'Обсудить похожий проект',
      designLens: 'Взгляд Елены (Дизайн)',
      engineeringLens: 'Архитектура Алекса (Код)',
      visualSpec: 'Спецификация айдентики и системы',
      typographyHierarchy: 'Редакционная типографическая система',
      gridAlignment: 'Пространственная сетка и ритм',
      rationale: 'Творческое и техническое обоснование',
      paletteTitle: 'Гармоническая цветовая палитра',
      architectureStack: 'Фронтенд-архитектура и стек',
      benchmarks: 'Показатели Lighthouse и отклика',
      milestones: 'Этапы производства и сдачи',
      dualLensTitle: 'Взгляд с двух сторон',
      dualLensDesc: 'Посмотрите, как визуальные решения напрямую определили архитектуру кода.',
      lookingSimilar: 'Нужен похожий цифровой флагман?'
    },
    faq: {
      badge: 'ЧАСТЫЕ ВОПРОСЫ',
      title: 'Ответы на ключевые вопросы перед стартом',
      description: 'Все о формате взаимодействия, правах на материалы, сроках и передаче исходников.',
      askQuestion: 'Остались вопросы по вашему проекту?',
      customQuestion: 'Есть индивидуальный вопрос по вашему проекту?',
      customDesc: 'Мы оцениваем техническую реализуемость и даем концептуальные рекомендации в течение 24 часов.',
      askBtn: 'Задать вопрос напрямую',
      items: [
        {
          question: 'Почему стоит выбрать дуэт дизайнера и разработчика вместо агентства или разрозненных фрилансеров?',
          answer: 'Традиционные агентства перегружают бюджет расходами на менеджеров и субподрядчиков. При работе с отдельными фрилансерами дизайнер уходит, оставляя разработчика гадать над анимациями. В LUMIO Елена и Алекс работают плечом к плечу: каждое визуальное решение сразу проверяется в коде, а техническая точность усиливает дизайн.'
        },
        {
          question: 'Кому принадлежат исходники Figma, дизайн-токены и репозиторий с кодом?',
          answer: 'Вам. 100% всех результатов работы — включая исходные файлы Figma, векторные материалы, токены, чистый код на TypeScript и конфигурации деплоя — переходят в вашу полную собственность после завершения проекта.'
        },
        {
          question: 'Сколько времени обычно занимает проект?',
          answer: 'Большинство проектов по брендингу и разработке флагманских сайтов длятся от 2 до 6 недель. Быстрый запуск промо-сайта занимает 2–3 недели, а комплексные дизайн-системы с интерактивным WebGL/Motion — от 4 до 6 недель.'
        },
        {
          question: 'Какой стек технологий вы используете?',
          answer: 'Мы работаем с React 19, Next.js, TypeScript, Tailwind CSS, Motion (Framer Motion), WebGL/Canvas и Vite. Мы не используем громоздкие визуальные конструкторы (Webflow/WordPress), что гарантирует максимальную скорость и надежность.'
        },
        {
          question: 'Можете ли вы работать с существующим стилем или внутренней командой разработки?',
          answer: 'Да. Мы регулярно подключаемся как ударная команда: либо создаем флагман с нуля, либо проектируем дизайн-систему и библиотеку готовых React-компонентов, которые ваши разработчики с удовольствием интегрируют.'
        }
      ]
    },
    blog: {
      badge: 'СТАТЬИ И ПУБЛИКАЦИИ',
      title: 'Заметки студии и статьи об инженерии',
      description: 'Глубокий анализ дизайн-систем, типографической иерархии, автоматизации токенов и скоростной веб-архитектуры.',
      allCategory: 'Все статьи',
      searchPlaceholder: 'Поиск по статьям, дизайн-системам, метрикам...',
      readTime: 'мин чтения',
      readPost: 'Читать статью',
      readEssay: 'Читать статью',
      closeArticle: 'Закрыть статью',
      keyTakeaways: 'Ключевые выводы и принципы:',
      keyPrinciples: 'Ключевые принципы и тезисы'
    },
    contact: {
      badge: 'ОБСУДИТЬ СОТРУДНИЧЕСТВО',
      title: 'Заявка на проект',
      description: 'Расскажите о видении вашего бренда, желаемых сроках и целях продукта. Мы отвечаем на все заявки в течение 24 рабочих часов.',
      subtitle: 'Расскажите о видении вашего бренда, желаемых сроках и целях продукта. Мы отвечаем на все заявки в течение 24 рабочих часов.',
      estimatorTitle: 'Калькулятор объема и бюджета проекта',
      estimatorSubtitle: 'Выберите нужные компетенции для мгновенной предварительной оценки сроков и бюджета.',
      selectedServices: 'Выбранные услуги',
      indicativeTimeline: 'Ориентировочный срок',
      estimatedBudget: 'Ориентировочный бюджет',
      weeks: 'нед.',
      formTitle: 'Отправить информацию о проекте',
      nameLabel: 'Ваше имя *',
      namePlaceholder: 'Например, Дмитрий Соколов',
      emailLabel: 'Рабочий email *',
      emailPlaceholder: 'dmitry@company.com',
      companyLabel: 'Компания / Проект',
      companyPlaceholder: 'Например, Atelier Studio',
      servicesLabel: 'Необходимые услуги',
      budgetLabel: 'Планируемый бюджет',
      timelineLabel: 'Желаемый срок запуска',
      detailsLabel: 'Спецификация и детали проекта',
      overviewLabel: 'Описание проекта и цели *',
      overviewPlaceholder: 'Кратко опишите ваш бизнес, задачи проекта и почему вы решили обратиться к LUMIO...',
      messagePlaceholder: 'Расскажите о ваших целях, технических требованиях или референсах...',
      submitBtn: 'Отправить заявку',
      submittingBtn: 'Отправка заявки...',
      submitting: 'Отправка заявки...',
      successTitle: 'Заявка получена!',
      successDesc: 'Спасибо за обращение в LUMIO. Елена и Алекс получили описание вашего проекта и свяжутся с вами с вводными предложениями в течение 24 часов.',
      successMessage: 'Спасибо за обращение в LUMIO. Елена и Алекс получили описание вашего проекта и свяжутся с вами с вводными предложениями в течение 24 часов.',
      sendAnother: 'Отправить еще одну заявку',
      directDesk: 'Прямой контакт со студией:',
      emailCopied: 'Email скопирован в буфер!',
      scopeReceipt: 'ОЦЕНКА ОБЪЕМА И СМЕТА',
      activeConfig: 'Выбранная конфигурация',
      selectedDiscipline: 'Выбранные направления',
      investmentTier: 'Ориентировочный бюджет',
      timelineWindow: 'Срок реализации',
      leadAssignment: 'Работа напрямую: Елена (Дизайн) + Алекс (Код)',
      inclusionsTitle: 'Каждый спринт LUMIO включает:',
      preferEmail: 'Предпочитаете написать напрямую на email?',
      copied: 'Скопировано!',
      copy: 'Копировать'
    },
    footer: {
      tagline: 'Независимый творческий дуэт, объединяющий премиальный графический дизайн, редакционную типографику и реактивную фронтенд-инженерию на 60fps.',
      navigation: 'НАВИГАЦИЯ',
      disciplines: 'НАПРАВЛЕНИЯ РАБОТЫ',
      directInquiries: 'ПРЯМЫЕ КОНТАКТЫ',
      rights: 'LUMIO Portfolio. Все права защищены.',
      designCredit: 'Айдентика и графический дизайн: Елена',
      codeCredit: 'Фронтенд-архитектура: Алекс',
      description: 'Независимый творческий дуэт, объединяющий премиальный графический дизайн, редакционную типографику и реактивную фронтенд-инженерию на 60fps.',
      location: 'ЛОКАЦИЯ',
      locationVal: 'По всему миру / Удаленно (EST и CET)',
      explore: 'НАВИГАЦИЯ',
      works: 'Избранные проекты',
      inspector: 'Синхронизация Figma и Кода',
      duo: 'О дуэте',
      pipeline: '4 этапа работы',
      faq: 'Частые вопросы',
      contact: 'Обсудить проект',
      connect: 'КОНТАКТЫ',
      designBy: 'Айдентика и типографика: Елена',
      codeBy: 'Фронтенд-архитектура: Алекс'
    }
  }
};
