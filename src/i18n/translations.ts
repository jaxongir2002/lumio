export type Language = "uz" | "ru" | "en";
export type Theme = "dark" | "light";

export interface ProjectCopy {
  tagline: string;
  description: string;
}

export interface ServiceCopy {
  title: string;
  description: string;
}

export interface TierCopy {
  name: string;
  note: string;
  features: string[];
}

export interface StepCopy {
  title: string;
  description: string;
  deliverable: string;
}

export interface FaqCopy {
  question: string;
  answer: string;
}

export interface RoleCopy {
  title: string;
  description: string;
  skills: string[];
}

export interface Translations {
  nav: {
    services: string;
    works: string;
    pricing: string;
    process: string;
    faq: string;
    contact: string;
    available: string;
    startProject: string;
  };
  hero: {
    studioLabel: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    priceHint: string;
    facts: { years: string; projects: string; location: string };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    from: string;
    negotiable: string;
    items: Record<string, ServiceCopy>;
  };
  works: {
    badge: string;
    title: string;
    description: string;
    showing: string;
    cases: string;
    viewCase: string;
    liveSite: string;
    confidential: string;
    categories: { all: string; landing: string; webApp: string; crmPos: string };
  };
  projects: Record<string, ProjectCopy>;
  metricLabels: Record<string, string>;
  stats: {
    badge: string;
    title: string;
    description: string;
    items: Record<string, string>;
  };
  pricing: {
    badge: string;
    title: string;
    description: string;
    from: string;
    choose: string;
    popular: string;
    note: string;
    tiers: Record<string, TierCopy>;
  };
  process: {
    badge: string;
    title: string;
    description: string;
    stage: string;
    deliverable: string;
    steps: Record<string, StepCopy>;
  };
  studio: {
    badge: string;
    title: string;
    description: string;
    roles: Record<string, RoleCopy>;
    advantagesTitle: string;
    advantages: string[];
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    items: FaqCopy[];
    customTitle: string;
    customDesc: string;
    askBtn: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    serviceLabel: string;
    budgetLabel: string;
    timelineLabel: string;
    detailsLabel: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    telegramBtn: string;
    emailBtn: string;
    copiedBrief: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    summaryTitle: string;
    summaryService: string;
    summaryBudget: string;
    summaryTimeline: string;
    includedTitle: string;
    included: string[];
    orWrite: string;
    copy: string;
    copied: string;
    budgetOptions: string[];
    timelineOptions: string[];
    serviceOptions: string[];
  };
  modal: {
    overview: string;
    stack: string;
    results: string;
    visitSite: string;
    confidentialNote: string;
    discussTitle: string;
    discussBtn: string;
    close: string;
  };
  footer: {
    description: string;
    explore: string;
    connect: string;
    rights: string;
    madeIn: string;
    backToTop: string;
  };
}

const uz: Translations = {
  nav: {
    services: "Xizmatlar",
    works: "Ishlarimiz",
    pricing: "Narxlar",
    process: "Jarayon",
    faq: "Savollar",
    contact: "Aloqa",
    available: "Buyurtma qabul qilinmoqda",
    startProject: "Loyiha boshlash"
  },
  hero: {
    studioLabel: "Ikki kishilik veb-studiya · Toshkent",
    title: "Sotadigan landing va",
    titleAccent: "ishlaydigan veb-tizimlar",
    description:
      "LUMIO — landing saytlar, korporativ saytlar hamda CRM va POS tizimlarini noldan yaratadigan studiya. Dizayndan serverga qadar hammasi bizda: shablon yo'q, ortiqcha menejer yo'q.",
    primaryCta: "Bepul konsultatsiya",
    secondaryCta: "Ishlarimizni ko'rish",
    priceHint: "Landing $300 dan boshlanadi",
    facts: {
      years: "yillik produkshn tajriba",
      projects: "ishga tushirilgan loyiha",
      location: "Toshkent · masofadan ham"
    }
  },
  services: {
    badge: "Xizmatlar",
    title: "Nima qila olamiz",
    description:
      "Saytdan tortib ichki biznes tizimigacha. Bitta jamoa butun siklni olib boradi — dizayn, kod, server va integratsiyalar.",
    from: "dan",
    negotiable: "Kelishuv asosida",
    items: {
      landing: {
        title: "Landing sayt",
        description:
          "Bitta sahifali sotuvchi sayt. Tez yuklanadi, telefonga to'liq moslashgan, so'rovnoma to'g'ridan-to'g'ri Telegramingizga tushadi."
      },
      multipage: {
        title: "Korporativ sayt",
        description:
          "Ko'p sahifali sayt: xizmatlar, portfolio, yangiliklar, aloqa. Kontentni admin panel orqali o'zingiz boshqarasiz."
      },
      webapp: {
        title: "Veb-tizim, CRM va POS",
        description:
          "Savdo, ombor, buyurtma va mijozlar bazasi. Rollar, hisobotlar, to'lov integratsiyalari — to'liq ishlab chiqarish sikli."
      },
      design: {
        title: "Grafik dizayn",
        description:
          "Logotip, brend identifikatsiyasi, ijtimoiy tarmoq maketlari va bosma mahsulotlar. Har bir loyihaga individual vizual yechim."
      },
      telegram: {
        title: "Telegram Web App",
        description:
          "Telegram ichida ishlaydigan ilova va botlar: katalog, buyurtma, to'lov va yetkazib berish. O'zbekiston bozori uchun eng tez kanal."
      },
      support: {
        title: "Qo'llab-quvvatlash",
        description:
          "Domen, hosting, SSL, zaxira nusxalar va yangilanishlar. Sayt topshirilgandan keyin ham yolg'iz qolmaysiz."
      }
    }
  },
  works: {
    badge: "Portfolio",
    title: "Qilgan ishlarimiz",
    description:
      "Har birining orqasida real foydalanuvchilar va o'lchanadigan natijalar bor — namoyish uchun chizilgan maketlar emas.",
    showing: "Ko'rsatilmoqda:",
    cases: "ta loyiha",
    viewCase: "Batafsil",
    liveSite: "Saytni ochish",
    confidential: "NDA · yopiq loyiha",
    categories: {
      all: "Hammasi",
      landing: "Sayt va landing",
      webApp: "Veb-ilova",
      crmPos: "CRM / POS"
    }
  },
  projects: {
    hybridxperience: {
      tagline: "Dubaydagi immersiv media studiya uchun sayt",
      description: "Yangi media san'ati va texnologiya studiyasining brend sayti: golografiya, interaktiv installyatsiyalar, AI va WebGL loyihalarini namoyish qiladi. Sahifa boshidan oxirigacha harakatga qurilgan — GSAP timeline'lari, Lenis silliq scroll, Swiper galereyalari va Lottie animatsiyalari. Kontent Webflow CMS orqali boshqariladi, video materiallar alohida CDN'dan uzatiladi."
    },
    mpos: {
      tagline: "Kichik va o'rta biznes uchun kassa tizimi",
      description:
        "Savdo, ombor, mijoz qarzlari, smenalar va hisobotlar — bitta kabinetda. Internet uzilganda ham ishlaydi: buyurtmalar telefonda saqlanib turadi va aloqa tiklanganda serverga o'zi yuboriladi. Bugun 20 dan ortiq tadbirkor kundalik savdosini shu tizim orqali yuritadi."
    },
    shamcrm: {
      tagline: "Biznes uchun CRM va boshqaruv paneli",
      description:
        "Instagram, Telegram va saytdan keladigan lidlar bitta oynada to'planadi. Menejerlar bo'yicha bitimlar, analitika va hisobotlar. Code review va Git Flow joriy etilgach, produkshn xatolar 40 foizga kamaydi."
    },
    multibank: {
      tagline: "Bank uchun mikrofrontend admin-hab",
      description:
        "Module Federation asosidagi arxitektura: har bir modul mustaqil deploy qilinadi. Autentifikatsiya, RBAC, routing va umumiy UI uchun asosiy shell ishlab chiqildi. OTP va PCI DSS talablariga mos xavfsiz kirish, REST va GraphQL integratsiyalari. Frontend tezligi ~35 foizga oshdi."
    },
    orderm: {
      tagline: "Restoranlar uchun buyurtma tizimi",
      description:
        "Zal, oshxona va kassa o'rtasida real vaqt rejimida ishlaydigan tizim. WebSocket orqali buyurtma holati bir zumda yangilanadi. Kuniga 300 dan ortiq buyurtma, ishlov berish vaqti 25 foizga qisqardi."
    },
    easybooking: {
      tagline: "B2B bron qilish platformasi",
      description:
        "Yirik bron qilish tizimini Vue 2 dan Vue 3 ga ko'chirish va legacy kodni refaktor qilish. Sahifa yuklanish tezligi ~30 foizga oshdi, redizayndan keyin o'rtacha sessiya davomiyligi 20 foizga uzaydi."
    },
    sino: {
      tagline: "Raqamli salomatlik uchun mobil ilova",
      description:
        "WebView asosidagi mobil ilova: tibbiy xizmatlar, tahlillar va Sino Band aqlli bilaguzugi bilan integratsiya. Nuxt orqali tez render va qurilmadan keladigan ma'lumotlarni jonli ko'rsatish."
    },
    eloqwnt: {
      tagline: "Xalqaro mijozlar uchun marketing saytlar",
      description:
        "Agentlik mijozlari uchun 10 dan ortiq produkshn sayt: brendingdan tortib deploygacha. Strapi CMS orqali kontent boshqaruvi, Vue va React'da tez ishlaydigan marketing sahifalari."
    }
  },
  metricLabels: {
    motion: "harakat dvigateli",
    market: "bozor",
    businesses: "biznes foydalanadi",
    languages: "interfeys tili",
    offline: "internetsiz savdo",
    bugs: "produkshn xatolar",
    sources: "lid manbai",
    analytics: "analitika",
    performance: "frontend tezligi",
    security: "xavfsizlik standarti",
    architecture: "arxitektura",
    orders: "kunlik buyurtma",
    processing: "ishlov berish vaqti",
    realtime: "real vaqt rejimi",
    speed: "yuklanish tezligi",
    session: "sessiya davomiyligi",
    migration: "migratsiya",
    platform: "platforma",
    device: "qurilma",
    ssr: "render",
    sites: "produkshn sayt",
    cms: "kontent boshqaruvi",
    clients: "mijozlar"
  },
  stats: {
    badge: "Raqamlarda",
    title: "Natijalar gapiradi",
    description:
      "Quyidagi raqamlar bizning loyihalarimizdan olingan — har biri ishlab turgan mahsulotda o'lchangan.",
    items: {
      projects: "Ishga tushirilgan loyiha",
      years: "Yillik produkshn tajriba",
      businesses: "mPOS bilan ishlayotgan biznes",
      orders: "OrderM'da kunlik buyurtma"
    }
  },
  pricing: {
    badge: "Narxlar",
    title: "Shaffof narxlar",
    description:
      "Yakuniy narx hajm va murakkablikka bog'liq. Brifdan keyin aniq smeta beramiz — kelishilgan narx jarayonda oshmaydi.",
    from: "dan",
    choose: "Shuni tanlash",
    popular: "Ko'p tanlanadi",
    note:
      "Grafik dizayn, brending va oylik qo'llab-quvvatlash alohida kelishiladi. To'lov odatda 50% oldindan, 50% topshirilganda.",
    tiers: {
      start: {
        name: "Start",
        note: "Landing sayt",
        features: [
          "1 sahifali sotuvchi landing",
          "Individual dizayn — shablon emas",
          "Telefon va planshetga moslashuv",
          "So'rovnoma → Telegram yoki e-mail",
          "Asosiy SEO va tezlik optimizatsiyasi",
          "7—10 kunda tayyor"
        ]
      },
      business: {
        name: "Biznes",
        note: "Korporativ sayt",
        features: [
          "5—10 sahifali to'liq sayt",
          "Admin panel — kontentni o'zingiz boshqarasiz",
          "Blog, portfolio va yangiliklar bo'limi",
          "Uch tilli interfeys (uz / ru / en)",
          "Google Analytics va Search Console",
          "Domen, hosting va SSL sozlash",
          "2—4 haftada tayyor"
        ]
      },
      system: {
        name: "Tizim",
        note: "CRM, POS yoki veb-ilova",
        features: [
          "CRM, POS yoki buyurtma tizimi",
          "Rollar va ruxsatlar tizimi (RBAC)",
          "Ma'lumotlar bazasi va server arxitekturasi",
          "To'lov va Telegram integratsiyasi",
          "Hisobotlar va analitika paneli",
          "Texnik hujjat va xodimlarni o'qitish",
          "Muddat loyiha hajmiga qarab"
        ]
      }
    }
  },
  process: {
    badge: "Jarayon",
    title: "Qanday ishlaymiz",
    description:
      "To'rt bosqich. Har bosqich oxirida siz aniq natijani ko'rasiz va keyingisiga o'tishni o'zingiz tasdiqlaysiz.",
    stage: "Bosqich",
    deliverable: "Natija",
    steps: {
      brief: {
        title: "Brif va kelishuv",
        description:
          "Biznesingizni, mijozlaringizni va maqsadni o'rganamiz. Raqobatchilarni ko'rib chiqamiz, sayt strukturasi va matnni birgalikda tasdiqlaymiz.",
        deliverable: "Texnik topshiriq, aniq narx va muddat"
      },
      design: {
        title: "Dizayn",
        description:
          "Figma'da maket chizamiz. Shablon ishlatmaymiz — har bir sayt noldan chiziladi. Siz tasdiqlagunga qadar tuzatamiz.",
        deliverable: "Figma maket: telefon va kompyuter versiyalari"
      },
      build: {
        title: "Dasturlash",
        description:
          "Maketni kodga o'giramiz: tez yuklanadigan, qidiruv tizimlariga tushunarli, barcha brauzerlarda bir xil ishlaydigan sayt.",
        deliverable: "Test serverida ishlayotgan sayt"
      },
      launch: {
        title: "Ishga tushirish",
        description:
          "Domen, hosting, SSL va analitika ulanadi. Saytni boshqarishni o'rgatamiz, kafolat muddatida barcha tuzatishlar bepul.",
        deliverable: "Ishga tushgan sayt + 1 oy bepul yordam"
      }
    }
  },
  studio: {
    badge: "Studiya",
    title: "Ikki kishi. Ortiqcha zveno yo'q.",
    description:
      "Katta agentlikda buyurtmangiz menejer, akkaunt va junior orasida yuradi — har o'tishda sifat yo'qoladi. Bizda siz ishni bajaradigan odam bilan to'g'ridan-to'g'ri gaplashasiz.",
    roles: {
      dev: {
        title: "Dasturlash va infratuzilma",
        description:
          "Frontend, backend, server, ma'lumotlar bazasi, deploy va integratsiyalar. Bank tizimlari, POS va CRM ustida uch yildan ortiq produkshn tajribasi.",
        skills: [
          "Vue 3 · Nuxt · React · TypeScript",
          "Node.js · Django REST · PostgreSQL",
          "Docker · CI/CD · Nginx · Vercel",
          "Telegram Web App va to'lov tizimlari"
        ]
      },
      design: {
        title: "Grafik dizayn va UI",
        description:
          "Brend identifikatsiyasi, logotip, sayt maketlari, ijtimoiy tarmoq va bosma dizayn. Har bir loyiha uchun alohida vizual til.",
        skills: [
          "Logotip va brend identifikatsiyasi",
          "Figma · UI/UX maketlar",
          "Ijtimoiy tarmoq va reklama makeltari",
          "Bosma mahsulotlar va poligrafiya"
        ]
      }
    },
    advantagesTitle: "Nima uchun studiya afzal",
    advantages: [
      "To'g'ridan-to'g'ri aloqa — menejersiz",
      "Kelishilgan narx jarayonda oshmaydi",
      "Kod va barcha manba fayllar sizga o'tadi",
      "Telegram orqali tezkor javob"
    ]
  },
  faq: {
    badge: "Savollar",
    title: "Tez-tez so'raladigan savollar",
    description:
      "Eng ko'p beriladigan savollarga ochiq javoblar. Boshqa savol bo'lsa — to'g'ridan-to'g'ri yozing.",
    items: [
      {
        question: "Landing qancha turadi?",
        answer:
          "$300 dan boshlanadi. Yakuniy narx sahifa hajmi, dizayn murakkabligi va integratsiyalarga bog'liq. Brifdan keyin aniq raqamni aytamiz va u jarayonda oshmaydi."
      },
      {
        question: "Qancha vaqtda tayyor bo'ladi?",
        answer:
          "Landing — 7—10 kun. Korporativ sayt — 2—4 hafta. CRM yoki POS tizimi hajmga qarab 1—3 oy. Muddat kelishuvda aniq qayd etiladi."
      },
      {
        question: "To'lov qanday amalga oshiriladi?",
        answer:
          "Odatda 50% oldindan, 50% ish topshirilganda. Yirik loyihalarda bosqichma-bosqich to'lov mumkin. Naqd, plastik karta yoki bank o'tkazmasi orqali."
      },
      {
        question: "Tayyor shablon ishlatasizmi?",
        answer:
          "Yo'q. Har bir sayt Figma'da noldan chiziladi va qo'lda kodlanadi. Shuning uchun saytingiz raqobatchilarnikiga o'xshamaydi va sezilarli darajada tez ishlaydi."
      },
      {
        question: "Sayt telefonda yaxshi ko'rinadimi?",
        answer:
          "Ha. O'zbekistonda trafikning katta qismi telefondan keladi, shuning uchun biz avval mobil versiyani ishlab chiqamiz, keyin katta ekranlarga kengaytiramiz."
      },
      {
        question: "Saytni o'zim boshqara olamanmi?",
        answer:
          "Biznes paketidan boshlab admin panel beriladi — matn, rasm va yangiliklarni o'zingiz o'zgartirasiz. Topshirishdan oldin video qo'llanma beramiz va o'qitib qo'yamiz."
      },
      {
        question: "Topshirilgandan keyin yordam beriladimi?",
        answer:
          "1 oy davomida barcha tuzatishlar bepul. Undan keyin qo'llab-quvvatlash alohida kelishiladi: domen, hosting, yangilanishlar va yangi bo'limlar qo'shish."
      }
    ],
    customTitle: "Savolingiz ro'yxatda yo'qmi?",
    customDesc: "Telegramga yozing — odatda bir soat ichida javob beramiz.",
    askBtn: "Savol berish"
  },
  contact: {
    badge: "Aloqa",
    title: "Loyihangizni muhokama qilamiz",
    description:
      "Formani to'ldiring yoki to'g'ridan-to'g'ri Telegramga yozing. Konsultatsiya bepul — narx va muddatni brifdan keyin aytamiz.",
    serviceLabel: "Qanday xizmat kerak?",
    budgetLabel: "Taxminiy byudjet",
    timelineLabel: "Qachon kerak?",
    detailsLabel: "Aloqa ma'lumotlari",
    namePlaceholder: "Ismingiz",
    contactPlaceholder: "Telefon yoki Telegram",
    companyPlaceholder: "Kompaniya (ixtiyoriy)",
    messagePlaceholder:
      "Loyiha haqida qisqacha: qanday biznes, nima kerak, yoqqan saytlar bo'lsa havolasini tashlang.",
    submitBtn: "So'rov yuborish",
    submittingBtn: "Yuborilmoqda...",
    telegramBtn: "Telegram orqali yuborish",
    emailBtn: "E-mail orqali yuborish",
    copiedBrief: "So'rov matni nusxalandi — Telegramda qo'ying va yuboring.",
    successTitle: "So'rov qabul qilindi",
    successDesc:
      "Rahmat, {name}! Bir-ikki soat ichida bog'lanamiz. Shoshilinch bo'lsa Telegramga yozing.",
    sendAnother: "Yana so'rov yuborish",
    summaryTitle: "Sizning so'rovingiz",
    summaryService: "Xizmat",
    summaryBudget: "Byudjet",
    summaryTimeline: "Muddat",
    includedTitle: "Har bir loyihada bor:",
    included: [
      "Individual dizayn, shablonsiz",
      "Telefon va planshetga to'liq moslashuv",
      "Barcha kod va manba fayllar sizga o'tadi",
      "1 oy bepul texnik qo'llab-quvvatlash"
    ],
    orWrite: "Yoki to'g'ridan-to'g'ri:",
    copy: "Nusxalash",
    copied: "Nusxalandi",
    budgetOptions: ["$300 — $700", "$700 — $1 500", "$1 500 — $3 000", "$3 000 dan yuqori"],
    timelineOptions: ["Shoshilinch (1—2 hafta)", "Bir oy ichida", "2—3 oy", "Hali aniq emas"],
    serviceOptions: [
      "Landing sayt",
      "Korporativ sayt",
      "CRM / POS tizimi",
      "Telegram Web App",
      "Grafik dizayn",
      "Mavjud saytni yangilash"
    ]
  },
  modal: {
    overview: "Loyiha haqida",
    stack: "Texnologiyalar",
    results: "Natijalar",
    visitSite: "Saytni ochish",
    confidentialNote:
      "Bu loyiha NDA ostida — skrinshot va ichki tafsilotlar ochiq ko'rsatilmaydi.",
    discussTitle: "Shunga o'xshash loyiha kerakmi?",
    discussBtn: "Muhokama qilish",
    close: "Yopish"
  },
  footer: {
    description:
      "Toshkentda joylashgan ikki kishilik veb-studiya. Landing, korporativ sayt, CRM va POS tizimlari — dizayndan serverga qadar.",
    explore: "Bo'limlar",
    connect: "Aloqa",
    rights: "Barcha huquqlar himoyalangan.",
    madeIn: "Toshkentda ishlangan",
    backToTop: "Yuqoriga"
  }
};

const ru: Translations = {
  nav: {
    services: "Услуги",
    works: "Работы",
    pricing: "Цены",
    process: "Процесс",
    faq: "Вопросы",
    contact: "Контакты",
    available: "Принимаем заказы",
    startProject: "Начать проект"
  },
  hero: {
    studioLabel: "Веб-студия из двух человек · Ташкент",
    title: "Лендинги, которые продают, и",
    titleAccent: "системы, которые работают",
    description:
      "LUMIO — студия, которая делает лендинги, корпоративные сайты, CRM и POS-системы с нуля. Дизайн, код, сервер — всё у нас: без шаблонов и лишних менеджеров.",
    primaryCta: "Бесплатная консультация",
    secondaryCta: "Смотреть работы",
    priceHint: "Лендинг от $300",
    facts: {
      years: "года в продакшене",
      projects: "запущенных проектов",
      location: "Ташкент · и удалённо"
    }
  },
  services: {
    badge: "Услуги",
    title: "Что мы делаем",
    description:
      "От сайта до внутренней бизнес-системы. Одна команда ведёт весь цикл — дизайн, код, сервер и интеграции.",
    from: "от",
    negotiable: "По договорённости",
    items: {
      landing: {
        title: "Лендинг",
        description:
          "Одностраничный продающий сайт. Быстро грузится, идеально работает на телефоне, заявки падают прямо к вам в Telegram."
      },
      multipage: {
        title: "Корпоративный сайт",
        description:
          "Многостраничный сайт: услуги, портфолио, новости, контакты. Контентом управляете сами через админ-панель."
      },
      webapp: {
        title: "Веб-система, CRM и POS",
        description:
          "Продажи, склад, заказы и база клиентов. Роли, отчёты, платёжные интеграции — полный цикл разработки."
      },
      design: {
        title: "Графический дизайн",
        description:
          "Логотип, фирменный стиль, макеты для соцсетей и полиграфия. Индивидуальное визуальное решение под каждый проект."
      },
      telegram: {
        title: "Telegram Web App",
        description:
          "Приложения и боты внутри Telegram: каталог, заказ, оплата и доставка. Самый быстрый канал для рынка Узбекистана."
      },
      support: {
        title: "Поддержка",
        description:
          "Домен, хостинг, SSL, резервные копии и обновления. После сдачи сайта вы не остаётесь один на один с ним."
      }
    }
  },
  works: {
    badge: "Портфолио",
    title: "Наши работы",
    description:
      "За каждой — реальные пользователи и измеримый результат, а не отрисованные для показа макеты.",
    showing: "Показано:",
    cases: "проектов",
    viewCase: "Подробнее",
    liveSite: "Открыть сайт",
    confidential: "NDA · закрытый проект",
    categories: {
      all: "Все",
      landing: "Сайты и лендинги",
      webApp: "Веб-приложения",
      crmPos: "CRM / POS"
    }
  },
  projects: {
    hybridxperience: {
      tagline: "Сайт для иммерсивной медиа-студии в Дубае",
      description: "Бренд-сайт студии новых медиа и технологий: голограммы, интерактивные инсталляции, AI и WebGL-проекты. Страница полностью построена на движении — таймлайны GSAP, плавный скролл Lenis, галереи Swiper и анимации Lottie. Контентом управляют через Webflow CMS, видео раздаётся с отдельного CDN."
    },
    mpos: {
      tagline: "Касса для малого и среднего бизнеса",
      description:
        "Продажи, склад, долги клиентов, смены и отчёты — в одном кабинете. Работает даже без интернета: заказы копятся локально и сами уходят на сервер, когда связь возвращается. Сегодня более 20 предпринимателей ведут через неё ежедневные продажи."
    },
    shamcrm: {
      tagline: "CRM и админ-панель для бизнеса",
      description:
        "Лиды из Instagram, Telegram и сайта собираются в одном окне. Сделки по менеджерам, аналитика и отчёты. После внедрения code review и Git Flow количество продакшн-багов снизилось на 40%."
    },
    multibank: {
      tagline: "Микрофронтенд админ-хаб для банка",
      description:
        "Архитектура на Module Federation: каждый модуль деплоится независимо. Разработан основной shell для аутентификации, RBAC, роутинга и общего UI. Безопасный вход по OTP с соблюдением PCI DSS, интеграции REST и GraphQL. Производительность фронтенда выросла примерно на 35%."
    },
    orderm: {
      tagline: "Система заказов для ресторанов",
      description:
        "Зал, кухня и касса работают в реальном времени. Статус заказа обновляется мгновенно через WebSocket. Более 300 заказов в день, время обработки сократилось на 25%."
    },
    easybooking: {
      tagline: "B2B-платформа бронирования",
      description:
        "Миграция крупной системы бронирования с Vue 2 на Vue 3 и рефакторинг легаси-кода. Скорость загрузки страниц выросла примерно на 30%, после редизайна средняя длительность сессии увеличилась на 20%."
    },
    sino: {
      tagline: "Мобильное приложение цифрового здоровья",
      description:
        "WebView-приложение: медицинские услуги, анализы и интеграция с умным браслетом Sino Band. Быстрый рендер через Nuxt и живое отображение данных с устройства."
    },
    eloqwnt: {
      tagline: "Маркетинговые сайты для международных клиентов",
      description:
        "Более 10 продакшн-сайтов для клиентов агентства: от брендинга до деплоя. Управление контентом через Strapi CMS, быстрые маркетинговые страницы на Vue и React."
    }
  },
  metricLabels: {
    motion: "движок анимации",
    market: "рынок",
    businesses: "бизнесов используют",
    languages: "языка интерфейса",
    offline: "продажи без интернета",
    bugs: "продакшн-баги",
    sources: "источника лидов",
    analytics: "аналитика",
    performance: "скорость фронтенда",
    security: "стандарт безопасности",
    architecture: "архитектура",
    orders: "заказов в день",
    processing: "время обработки",
    realtime: "режим реального времени",
    speed: "скорость загрузки",
    session: "длительность сессии",
    migration: "миграция",
    platform: "платформа",
    device: "устройство",
    ssr: "рендер",
    sites: "продакшн-сайтов",
    cms: "управление контентом",
    clients: "клиенты"
  },
  stats: {
    badge: "В цифрах",
    title: "Результат говорит сам",
    description:
      "Эти цифры взяты из наших проектов — каждая измерена на работающем продукте.",
    items: {
      projects: "Запущенных проектов",
      years: "Года в продакшене",
      businesses: "Бизнесов работают на mPOS",
      orders: "Заказов в день в OrderM"
    }
  },
  pricing: {
    badge: "Цены",
    title: "Прозрачные цены",
    description:
      "Финальная цена зависит от объёма и сложности. После брифа даём точную смету — согласованная цена в процессе не растёт.",
    from: "от",
    choose: "Выбрать",
    popular: "Выбирают чаще",
    note:
      "Графический дизайн, брендинг и ежемесячная поддержка обсуждаются отдельно. Оплата обычно 50% предоплата, 50% при сдаче.",
    tiers: {
      start: {
        name: "Старт",
        note: "Лендинг",
        features: [
          "Одностраничный продающий лендинг",
          "Индивидуальный дизайн — не шаблон",
          "Адаптация под телефон и планшет",
          "Заявки → Telegram или e-mail",
          "Базовое SEO и оптимизация скорости",
          "Готово за 7—10 дней"
        ]
      },
      business: {
        name: "Бизнес",
        note: "Корпоративный сайт",
        features: [
          "Полноценный сайт на 5—10 страниц",
          "Админ-панель — управляете контентом сами",
          "Блог, портфолио и раздел новостей",
          "Три языка интерфейса (uz / ru / en)",
          "Google Analytics и Search Console",
          "Настройка домена, хостинга и SSL",
          "Готово за 2—4 недели"
        ]
      },
      system: {
        name: "Система",
        note: "CRM, POS или веб-приложение",
        features: [
          "CRM, POS или система заказов",
          "Система ролей и прав доступа (RBAC)",
          "База данных и серверная архитектура",
          "Платёжные и Telegram-интеграции",
          "Панель отчётов и аналитики",
          "Документация и обучение сотрудников",
          "Сроки по объёму проекта"
        ]
      }
    }
  },
  process: {
    badge: "Процесс",
    title: "Как мы работаем",
    description:
      "Четыре этапа. В конце каждого вы видите конкретный результат и сами подтверждаете переход к следующему.",
    stage: "Этап",
    deliverable: "Результат",
    steps: {
      brief: {
        title: "Бриф и согласование",
        description:
          "Изучаем ваш бизнес, клиентов и цель. Смотрим конкурентов, вместе утверждаем структуру сайта и тексты.",
        deliverable: "Техническое задание, точная цена и срок"
      },
      design: {
        title: "Дизайн",
        description:
          "Рисуем макет в Figma. Шаблоны не используем — каждый сайт с нуля. Правим до тех пор, пока вы не утвердите.",
        deliverable: "Макет в Figma: версии для телефона и компьютера"
      },
      build: {
        title: "Разработка",
        description:
          "Превращаем макет в код: быстрый сайт, понятный поисковым системам и одинаково работающий во всех браузерах.",
        deliverable: "Работающий сайт на тестовом сервере"
      },
      launch: {
        title: "Запуск",
        description:
          "Подключаем домен, хостинг, SSL и аналитику. Учим управлять сайтом, все правки в гарантийный период бесплатны.",
        deliverable: "Запущенный сайт + месяц бесплатной поддержки"
      }
    }
  },
  studio: {
    badge: "Студия",
    title: "Два человека. Без лишних звеньев.",
    description:
      "В большом агентстве ваш заказ ходит между менеджером, аккаунтом и джуном — на каждой передаче теряется качество. У нас вы говорите напрямую с тем, кто делает работу.",
    roles: {
      dev: {
        title: "Разработка и инфраструктура",
        description:
          "Фронтенд, бэкенд, сервер, база данных, деплой и интеграции. Более трёх лет продакшн-опыта в банковских системах, POS и CRM.",
        skills: [
          "Vue 3 · Nuxt · React · TypeScript",
          "Node.js · Django REST · PostgreSQL",
          "Docker · CI/CD · Nginx · Vercel",
          "Telegram Web App и платёжные системы"
        ]
      },
      design: {
        title: "Графический дизайн и UI",
        description:
          "Фирменный стиль, логотип, макеты сайтов, соцсети и полиграфия. Отдельный визуальный язык под каждый проект.",
        skills: [
          "Логотип и фирменный стиль",
          "Figma · UI/UX макеты",
          "Макеты для соцсетей и рекламы",
          "Полиграфия и печатная продукция"
        ]
      }
    },
    advantagesTitle: "Почему студия выгоднее",
    advantages: [
      "Прямой контакт — без менеджеров",
      "Согласованная цена не растёт по ходу",
      "Код и все исходники переходят вам",
      "Быстрый ответ в Telegram"
    ]
  },
  faq: {
    badge: "Вопросы",
    title: "Частые вопросы",
    description:
      "Честные ответы на то, что спрашивают чаще всего. Если вопроса нет в списке — напишите напрямую.",
    items: [
      {
        question: "Сколько стоит лендинг?",
        answer:
          "От $300. Финальная цена зависит от объёма страницы, сложности дизайна и интеграций. После брифа называем точную сумму, и она не растёт в процессе."
      },
      {
        question: "Сколько времени занимает работа?",
        answer:
          "Лендинг — 7—10 дней. Корпоративный сайт — 2—4 недели. CRM или POS-система — от 1 до 3 месяцев по объёму. Срок фиксируется в договорённости."
      },
      {
        question: "Как происходит оплата?",
        answer:
          "Обычно 50% предоплата, 50% при сдаче работы. На крупных проектах возможна поэтапная оплата. Наличные, карта или банковский перевод."
      },
      {
        question: "Используете ли вы готовые шаблоны?",
        answer:
          "Нет. Каждый сайт рисуется в Figma с нуля и кодится вручную. Поэтому ваш сайт не похож на сайты конкурентов и работает заметно быстрее."
      },
      {
        question: "Хорошо ли сайт выглядит на телефоне?",
        answer:
          "Да. В Узбекистане большая часть трафика идёт с телефонов, поэтому мы сначала делаем мобильную версию, а потом расширяем её под большие экраны."
      },
      {
        question: "Смогу ли я управлять сайтом сам?",
        answer:
          "Начиная с пакета «Бизнес» вы получаете админ-панель — тексты, фото и новости меняете сами. Перед сдачей даём видеоинструкцию и обучаем."
      },
      {
        question: "Есть ли поддержка после сдачи?",
        answer:
          "Месяц все правки бесплатно. Дальше поддержка обсуждается отдельно: домен, хостинг, обновления и добавление новых разделов."
      }
    ],
    customTitle: "Вашего вопроса нет в списке?",
    customDesc: "Напишите в Telegram — обычно отвечаем в течение часа.",
    askBtn: "Задать вопрос"
  },
  contact: {
    badge: "Контакты",
    title: "Обсудим ваш проект",
    description:
      "Заполните форму или напишите напрямую в Telegram. Консультация бесплатная — цену и срок называем после брифа.",
    serviceLabel: "Какая услуга нужна?",
    budgetLabel: "Примерный бюджет",
    timelineLabel: "Когда нужно?",
    detailsLabel: "Контактные данные",
    namePlaceholder: "Ваше имя",
    contactPlaceholder: "Телефон или Telegram",
    companyPlaceholder: "Компания (необязательно)",
    messagePlaceholder:
      "Коротко о проекте: какой бизнес, что нужно, ссылки на понравившиеся сайты.",
    submitBtn: "Отправить заявку",
    submittingBtn: "Отправляем...",
    telegramBtn: "Отправить в Telegram",
    emailBtn: "Отправить на e-mail",
    copiedBrief: "Текст заявки скопирован — вставьте его в Telegram и отправьте.",
    successTitle: "Заявка принята",
    successDesc:
      "Спасибо, {name}! Свяжемся в течение одного-двух часов. Если срочно — напишите в Telegram.",
    sendAnother: "Отправить ещё одну",
    summaryTitle: "Ваша заявка",
    summaryService: "Услуга",
    summaryBudget: "Бюджет",
    summaryTimeline: "Срок",
    includedTitle: "В каждом проекте есть:",
    included: [
      "Индивидуальный дизайн, без шаблонов",
      "Полная адаптация под телефон и планшет",
      "Код и все исходники переходят вам",
      "Месяц бесплатной технической поддержки"
    ],
    orWrite: "Или напрямую:",
    copy: "Копировать",
    copied: "Скопировано",
    budgetOptions: ["$300 — $700", "$700 — $1 500", "$1 500 — $3 000", "Более $3 000"],
    timelineOptions: ["Срочно (1—2 недели)", "В течение месяца", "2—3 месяца", "Пока не решили"],
    serviceOptions: [
      "Лендинг",
      "Корпоративный сайт",
      "CRM / POS-система",
      "Telegram Web App",
      "Графический дизайн",
      "Обновление существующего сайта"
    ]
  },
  modal: {
    overview: "О проекте",
    stack: "Технологии",
    results: "Результаты",
    visitSite: "Открыть сайт",
    confidentialNote:
      "Проект под NDA — скриншоты и внутренние детали публично не раскрываются.",
    discussTitle: "Нужен похожий проект?",
    discussBtn: "Обсудить",
    close: "Закрыть"
  },
  footer: {
    description:
      "Веб-студия из двух человек в Ташкенте. Лендинги, корпоративные сайты, CRM и POS-системы — от дизайна до сервера.",
    explore: "Разделы",
    connect: "Контакты",
    rights: "Все права защищены.",
    madeIn: "Сделано в Ташкенте",
    backToTop: "Наверх"
  }
};

const en: Translations = {
  nav: {
    services: "Services",
    works: "Work",
    pricing: "Pricing",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    available: "Taking new projects",
    startProject: "Start a project"
  },
  hero: {
    studioLabel: "Two-person web studio · Tashkent",
    title: "Landing pages that sell and",
    titleAccent: "systems that actually run",
    description:
      "LUMIO builds landing pages, corporate sites, CRM and POS systems from scratch. Design, code and server — all in one place: no templates, no layers of managers.",
    primaryCta: "Free consultation",
    secondaryCta: "See our work",
    priceHint: "Landing pages from $300",
    facts: {
      years: "years in production",
      projects: "projects shipped",
      location: "Tashkent · and remote"
    }
  },
  services: {
    badge: "Services",
    title: "What we build",
    description:
      "From a single landing page to internal business systems. One team owns the whole cycle — design, code, server and integrations.",
    from: "from",
    negotiable: "On request",
    items: {
      landing: {
        title: "Landing page",
        description:
          "A single-page site built to convert. Loads fast, works properly on phones, and sends every enquiry straight to your Telegram."
      },
      multipage: {
        title: "Corporate website",
        description:
          "A multi-page site: services, portfolio, news, contact. You manage the content yourself through an admin panel."
      },
      webapp: {
        title: "Web system, CRM and POS",
        description:
          "Sales, inventory, orders and customer records. Roles, reports and payment integrations — the full development cycle."
      },
      design: {
        title: "Graphic design",
        description:
          "Logo, brand identity, social media assets and print. A distinct visual solution for every project."
      },
      telegram: {
        title: "Telegram Web App",
        description:
          "Apps and bots inside Telegram: catalogue, ordering, payment and delivery. The fastest channel for the Uzbek market."
      },
      support: {
        title: "Support",
        description:
          "Domain, hosting, SSL, backups and updates. You are not left alone with the site after handover."
      }
    }
  },
  works: {
    badge: "Portfolio",
    title: "Selected work",
    description:
      "Each one has real users and measurable outcomes behind it — not mockups drawn for a portfolio.",
    showing: "Showing:",
    cases: "projects",
    viewCase: "Details",
    liveSite: "Visit site",
    confidential: "NDA · private project",
    categories: {
      all: "All",
      landing: "Sites & landings",
      webApp: "Web apps",
      crmPos: "CRM / POS"
    }
  },
  projects: {
    hybridxperience: {
      tagline: "Website for an immersive media studio in Dubai",
      description: "A brand site for a new media art and technology studio, showcasing holograms, interactive installations, AI and WebGL work. The page is built around motion from top to bottom — GSAP timelines, Lenis smooth scrolling, Swiper galleries and Lottie animations. Content is managed through Webflow CMS, with video served from a separate CDN."
    },
    mpos: {
      tagline: "Point-of-sale platform for small business",
      description:
        "Sales, inventory, customer debt, shifts and reports in a single dashboard. It keeps working without internet: orders queue locally and sync to the server once the connection is back. Over 20 businesses run their daily sales through it."
    },
    shamcrm: {
      tagline: "CRM and admin panel for business",
      description:
        "Leads from Instagram, Telegram and the website land in one inbox. Deals by manager, analytics and reports. After introducing code review and Git Flow, production bugs dropped by 40%."
    },
    multibank: {
      tagline: "Micro-frontend admin hub for a bank",
      description:
        "Module Federation architecture where every module deploys independently. Built the core shell for authentication, RBAC, routing and shared UI. Secure OTP sign-in compliant with PCI DSS, plus REST and GraphQL integrations. Frontend performance improved by roughly 35%."
    },
    orderm: {
      tagline: "Order management system for restaurants",
      description:
        "Floor, kitchen and till stay in sync in real time. Order status updates instantly over WebSocket. More than 300 orders a day, with processing time cut by 25%."
    },
    easybooking: {
      tagline: "B2B booking platform",
      description:
        "Migrated a large booking system from Vue 2 to Vue 3 and refactored the legacy codebase. Page load speed improved by about 30%, and average session length grew 20% after the redesign."
    },
    sino: {
      tagline: "Digital health mobile application",
      description:
        "A WebView application covering medical services, test results and integration with the Sino Band wearable. Fast rendering through Nuxt and live display of device data."
    },
    eloqwnt: {
      tagline: "Marketing sites for international clients",
      description:
        "More than 10 production sites for agency clients, from branding through to deployment. Content managed in Strapi CMS, with fast marketing pages built in Vue and React."
    }
  },
  metricLabels: {
    motion: "motion engine",
    market: "market",
    businesses: "businesses using it",
    languages: "interface languages",
    offline: "sales without internet",
    bugs: "production bugs",
    sources: "lead sources",
    analytics: "analytics",
    performance: "frontend performance",
    security: "security standard",
    architecture: "architecture",
    orders: "orders per day",
    processing: "processing time",
    realtime: "real-time mode",
    speed: "load speed",
    session: "session length",
    migration: "migration",
    platform: "platform",
    device: "device",
    ssr: "rendering",
    sites: "production sites",
    cms: "content management",
    clients: "clients"
  },
  stats: {
    badge: "By the numbers",
    title: "Results speak first",
    description:
      "These figures come from our own projects — each one measured on a product in production.",
    items: {
      projects: "Projects shipped",
      years: "Years in production",
      businesses: "Businesses running on mPOS",
      orders: "Daily orders in OrderM"
    }
  },
  pricing: {
    badge: "Pricing",
    title: "Transparent pricing",
    description:
      "The final figure depends on scope and complexity. After the brief you get a precise quote — and the agreed price does not grow mid-project.",
    from: "from",
    choose: "Choose this",
    popular: "Most chosen",
    note:
      "Graphic design, branding and monthly support are quoted separately. Payment is usually 50% upfront and 50% on delivery.",
    tiers: {
      start: {
        name: "Start",
        note: "Landing page",
        features: [
          "Single-page landing built to convert",
          "Custom design — never a template",
          "Full phone and tablet adaptation",
          "Enquiries → Telegram or e-mail",
          "Core SEO and speed optimisation",
          "Ready in 7—10 days"
        ]
      },
      business: {
        name: "Business",
        note: "Corporate website",
        features: [
          "Full 5—10 page website",
          "Admin panel — you manage content yourself",
          "Blog, portfolio and news sections",
          "Three interface languages (uz / ru / en)",
          "Google Analytics and Search Console",
          "Domain, hosting and SSL setup",
          "Ready in 2—4 weeks"
        ]
      },
      system: {
        name: "System",
        note: "CRM, POS or web app",
        features: [
          "CRM, POS or order management system",
          "Roles and permissions (RBAC)",
          "Database and server architecture",
          "Payment and Telegram integrations",
          "Reporting and analytics dashboard",
          "Documentation and staff training",
          "Timeline depends on scope"
        ]
      }
    }
  },
  process: {
    badge: "Process",
    title: "How we work",
    description:
      "Four stages. At the end of each you see a concrete result and approve moving to the next one yourself.",
    stage: "Stage",
    deliverable: "Deliverable",
    steps: {
      brief: {
        title: "Brief and agreement",
        description:
          "We study your business, your customers and the goal. We review competitors and agree the site structure and copy together.",
        deliverable: "Specification, firm price and timeline"
      },
      design: {
        title: "Design",
        description:
          "We draw the layout in Figma. No templates — every site starts from a blank canvas. We iterate until you approve it.",
        deliverable: "Figma layout: phone and desktop versions"
      },
      build: {
        title: "Development",
        description:
          "We turn the layout into code: a fast site, readable to search engines, behaving identically across browsers.",
        deliverable: "Working site on a staging server"
      },
      launch: {
        title: "Launch",
        description:
          "Domain, hosting, SSL and analytics get connected. We teach you to run the site, and every fix in the warranty period is free.",
        deliverable: "Live site + one month of free support"
      }
    }
  },
  studio: {
    badge: "Studio",
    title: "Two people. No extra links in the chain.",
    description:
      "In a large agency your order passes between an account manager, a project manager and a junior — quality leaks at every handover. Here you talk directly to the person doing the work.",
    roles: {
      dev: {
        title: "Development and infrastructure",
        description:
          "Frontend, backend, server, database, deployment and integrations. Over three years of production experience across banking systems, POS and CRM.",
        skills: [
          "Vue 3 · Nuxt · React · TypeScript",
          "Node.js · Django REST · PostgreSQL",
          "Docker · CI/CD · Nginx · Vercel",
          "Telegram Web App and payment systems"
        ]
      },
      design: {
        title: "Graphic design and UI",
        description:
          "Brand identity, logos, site layouts, social media and print. A separate visual language for each project.",
        skills: [
          "Logo and brand identity",
          "Figma · UI/UX layouts",
          "Social media and advertising assets",
          "Print and production artwork"
        ]
      }
    },
    advantagesTitle: "Why a studio works better",
    advantages: [
      "Direct contact — no account managers",
      "The agreed price does not grow mid-project",
      "Code and all source files transfer to you",
      "Fast replies over Telegram"
    ]
  },
  faq: {
    badge: "FAQ",
    title: "Frequently asked questions",
    description:
      "Straight answers to what people ask most. If your question is not here, just write to us directly.",
    items: [
      {
        question: "How much does a landing page cost?",
        answer:
          "From $300. The final figure depends on page scope, design complexity and integrations. After the brief we give an exact number, and it does not rise during the project."
      },
      {
        question: "How long does it take?",
        answer:
          "Landing page — 7—10 days. Corporate site — 2—4 weeks. A CRM or POS system takes 1 to 3 months depending on scope. The timeline is fixed in the agreement."
      },
      {
        question: "How does payment work?",
        answer:
          "Usually 50% upfront and 50% on delivery. Larger projects can be paid in stages. Cash, card or bank transfer."
      },
      {
        question: "Do you use ready-made templates?",
        answer:
          "No. Every site is drawn in Figma from scratch and coded by hand. That is why your site does not look like your competitors' and runs noticeably faster."
      },
      {
        question: "Will the site look good on a phone?",
        answer:
          "Yes. Most traffic in Uzbekistan comes from phones, so we build the mobile version first and scale it up to larger screens afterwards."
      },
      {
        question: "Can I manage the site myself?",
        answer:
          "From the Business package onwards you get an admin panel — you change text, photos and news yourself. Before handover we provide a video guide and walk you through it."
      },
      {
        question: "Is there support after launch?",
        answer:
          "All fixes are free for one month. After that, support is agreed separately: domain, hosting, updates and new sections."
      }
    ],
    customTitle: "Question not on the list?",
    customDesc: "Write to us on Telegram — we usually reply within the hour.",
    askBtn: "Ask a question"
  },
  contact: {
    badge: "Contact",
    title: "Let's talk about your project",
    description:
      "Fill in the form or write straight to Telegram. The consultation is free — we quote price and timeline after the brief.",
    serviceLabel: "What do you need?",
    budgetLabel: "Approximate budget",
    timelineLabel: "When do you need it?",
    detailsLabel: "Contact details",
    namePlaceholder: "Your name",
    contactPlaceholder: "Phone or Telegram",
    companyPlaceholder: "Company (optional)",
    messagePlaceholder:
      "A few lines about the project: what kind of business, what you need, links to sites you like.",
    submitBtn: "Send request",
    submittingBtn: "Sending...",
    telegramBtn: "Send via Telegram",
    emailBtn: "Send by e-mail",
    copiedBrief: "Your brief has been copied — paste it into Telegram and send.",
    successTitle: "Request received",
    successDesc:
      "Thank you, {name}! We will get back to you within an hour or two. If it is urgent, write to us on Telegram.",
    sendAnother: "Send another one",
    summaryTitle: "Your request",
    summaryService: "Service",
    summaryBudget: "Budget",
    summaryTimeline: "Timeline",
    includedTitle: "Included in every project:",
    included: [
      "Custom design, no templates",
      "Full adaptation for phones and tablets",
      "Code and all source files transfer to you",
      "One month of free technical support"
    ],
    orWrite: "Or reach us directly:",
    copy: "Copy",
    copied: "Copied",
    budgetOptions: ["$300 — $700", "$700 — $1,500", "$1,500 — $3,000", "Over $3,000"],
    timelineOptions: ["Urgent (1—2 weeks)", "Within a month", "2—3 months", "Not decided yet"],
    serviceOptions: [
      "Landing page",
      "Corporate website",
      "CRM / POS system",
      "Telegram Web App",
      "Graphic design",
      "Redesign of an existing site"
    ]
  },
  modal: {
    overview: "About the project",
    stack: "Tech stack",
    results: "Results",
    visitSite: "Visit site",
    confidentialNote:
      "This project is under NDA — screenshots and internal details are not shown publicly.",
    discussTitle: "Need something similar?",
    discussBtn: "Discuss it",
    close: "Close"
  },
  footer: {
    description:
      "A two-person web studio based in Tashkent. Landing pages, corporate sites, CRM and POS systems — from design through to the server.",
    explore: "Sections",
    connect: "Contact",
    rights: "All rights reserved.",
    madeIn: "Made in Tashkent",
    backToTop: "Back to top"
  }
};

export const translations: Record<Language, Translations> = { uz, ru, en };

export const LANGUAGE_LABELS: Record<Language, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN"
};
