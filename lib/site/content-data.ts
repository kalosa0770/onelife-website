import type {
  CapabilityHomeCard,
  CapabilitySection,
  CoreValue,
  CorridorHospital,
  CorridorInsurer,
  EyebrowDescription,
  EyebrowHeading,
  FourPhaseStep,
  HeroFeatureCard,
  ImperfectPhilosophy,
  LeadershipAllianceIntro,
  MissionVisionCard,
  SiteSettings,
  StaffMember,
  TrackRecordCaseStudy,
  TrackRecordMilestone,
  TrackRecordStat,
  WhoWeAreHome,
} from "@/lib/site/content";

export const SITE_SETTINGS: SiteSettings = {
  address: "Lusaka, Zambia",
  email: "info@onelife.co.zm",
  phone: "+260 961 888 009",
  linkedinUrl: "https://linkedin.com",
  xUrl: "https://x.com",
  instagramUrl: "https://instagram.com",
  footerBrandBlurb:
    "One strategic partner assembling brand, events, trade intelligence, and digital delivery. 14 years of regional execution across Zambia and SADC-COMESA.",
  copyrightText: "© 2026 OneLife Communications & Events Company. All rights reserved.",
};

export const HOME_CONTENT = {
  hero: {
    headline:
      "We are a strategic partner assembling brand, events, trade intelligence, and digital delivery.",
    backgroundImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  },
  featureCards: [
    {
      icon: "Award",
      title: "14+ Years Track Record",
      body: "Proven delivery across banking, agriculture, public health, trade corridors, and regional investment.",
      tag: "50+ Partner Brands",
      variant: "light",
    },
    {
      icon: "Lightbulb",
      title: "Strategic Assembly",
      body: "We think strategically first, then assemble the team rather than forcing a rigid agency menu.",
      tag: "Plug & Play Delivery",
      variant: "light",
    },
    {
      icon: "CheckCircle2",
      title: "Owned Platforms",
      body: "Proprietary reach through IMPEX, Smart Woman Summit, and OneLife Trade Intelligence (OTI).",
      tag: "Proprietary Reach",
      variant: "light",
    },
    {
      icon: "Briefcase",
      title: "Pan-African Reach",
      body: "Rooted in Zambia, fluent across the SADC-COMESA trade corridors with seamless regional delivery.",
      tag: "Lusaka to Regional Scale",
      variant: "dark",
    },
  ] satisfies HeroFeatureCard[],
  whoWeAre: {
    eyebrow: "Who We Are",
    heading: "We are a strategic partner that is always there for your needs.",
    quote:
      "We exist to spread bold ideas that transform how African businesses do marketing — and to connect them to the intelligence, platforms and partnerships that help them grow.",
    paragraph:
      "For 14 years across Zambia and the SADC-COMESA corridor, OneLife has eliminated vendor fragmentation. We think strategically first, then assemble the exact team needed — brand, flagship summits, trade intelligence, and high-velocity digital delivery.",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  } satisfies WhoWeAreHome,
  capabilitiesIntro: {
    eyebrow: "What We Offer",
    heading: "Integrated Capabilities & Execution",
    description:
      "Every practice area is built to operate either independently or seamlessly orchestrated together under a single accountable partner.",
  },
  capabilityCards: [
    {
      id: "strategic-communications",
      title: "Strategic Communications",
      subtitle: "Brand & Public Affairs",
      description:
        "Market positioning, stakeholder alignment, reputation management, and multi-channel campaign architectures tailored for local and regional African contexts.",
      icon: "Compass",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      link: "/capabilities#communications",
    },
    {
      id: "events",
      title: "Flagship Summits & Events",
      subtitle: "End-to-End Production",
      description:
        "Full-scale production of national-level dialogues, trade exhibitions, and proprietary summits with zero vendor fragmentation and single-point accountability.",
      icon: "Calendar",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      link: "/capabilities#events",
    },
    {
      id: "trade-intelligence",
      title: "Trade Intelligence",
      subtitle: "Corridor & Deal Advisory",
      description:
        "Proprietary corridor data, SME deal-readiness frameworks, and market link facilitation across Southern and Eastern African trade routes.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      link: "/capabilities#trade",
    },
    {
      id: "media-digital",
      title: "Media & Digital Production",
      subtitle: "Creative Execution",
      description:
        "Delivered in partnership with Mélange Digital: high-velocity content creation, corporate performance marketing, and multimedia publishing.",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      link: "/capabilities#digital",
    },
  ] satisfies (CapabilityHomeCard & { id: string })[],
  leadershipIntro: {
    eyebrow: "Strategic Leadership",
    heading: "I believe in Strategic Vision & Hands-On Execution.",
  } satisfies EyebrowHeading,
  staff: [
    {
      id: "maria-masiri",
      name: "Maria Masiri",
      role: "Founder, Lead Strategist & Corridor Manager",
      bio: "",
      photoUrl: "/maria.png",
      isFeatured: "true",
      highlights: [
        {
          icon: "Briefcase",
          title: "OneLife & IMPEX Platform",
          body: "Founder & Lead Strategist. Directing 14+ years of strategic communications, high-stakes stakeholder events, and trade corridor facilitation across SADC-COMESA.",
        },
        {
          icon: "Globe2",
          title: "OneLife Trade Intelligence (OTI)",
          body: "Editorial Anchor & Publisher. Authoring trade analysis and corridor intelligence that guides institutional partners, policymakers, and second-economy entrepreneurs.",
        },
        {
          icon: "TrendingUp",
          title: "Regional Trade & Ventures",
          body: "Corridor Manager & Venture Lead. Spearheading cross-border trade initiatives and Zambia–Zimbabwe corridor management.",
        },
      ],
    },
  ] satisfies (StaffMember & { id: string })[],
};

export const CAPABILITIES_PAGE_CONTENT = {
  intro: {
    eyebrow: "Our Capabilities",
    description:
      "We do not sell a rigid agency menu. We diagnose the strategic challenge first, then assemble the exact blend of brand, events, trade intelligence, and digital delivery to solve it.",
    backgroundImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2069&auto=format&fit=crop",
  } satisfies EyebrowDescription,
  sections: [
    {
      id: "communications",
      slug: "communications",
      badge: "Solution 01",
      title: "Communications & Brand Strategy",
      tagline: "Culturally fluent positioning that commands authority.",
      description:
        "We design strategic communications frameworks, corporate narratives, and public affairs campaigns built for Zambian and regional African operating realities. We eliminate generic corporate-speak in favor of grounded, evidence-backed messaging.",
      icon: "Compass",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      proofPoint: "14+ years developing national-scale institutional narratives.",
      deliverables: [
        "Brand Positioning & Corporate Messaging Systems",
        "Public Affairs & Government-Adjacent Campaign Strategy",
        "Stakeholder Alignment & Public Awareness Architecture",
        "Crisis & Executive Communications",
      ],
    },
    {
      id: "events",
      slug: "events",
      badge: "Solution 02",
      title: "Events & Flagship Summits",
      tagline: "End-to-end production with zero vendor fragmentation.",
      description:
        "From high-level diplomatic stakeholder dialogues to 100+ delegate annual conferences, we manage the entire event lifecycle: programmatic curation, VIP stakeholder management, physical staging, and multi-channel coverage.",
      icon: "Calendar",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
      proofPoint: "Producers of Smart Woman Summit and national trade conventions.",
      deliverables: [
        "Conference Curation & Agenda Architecture",
        "VIP, Diplomatic & Anchor Partner Protocol Management",
        "Technical Audio-Visual, Stage Design & Spatial Branding",
        "Delegate Journey, Registration & Payment Workflows",
      ],
    },
    {
      id: "trade",
      slug: "trade",
      badge: "Solution 03",
      title: "Trade Intelligence & Publishing",
      tagline: "Data, corridor context, and deal-readiness frameworks.",
      description:
        "We generate proprietary trade insights that link second-economy entrepreneurs with institutional capital. Through corridor mapping and macro intelligence, we help growth-stage businesses become deal-ready across SADC-COMESA trade corridors.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      proofPoint: "Corridor manager for bilateral regional trade initiatives.",
      deliverables: [
        "SADC-COMESA Trade Corridor Analysis & Briefs",
        "SME 'Deal-Ready' Frameworks & Capacity Audits",
        "Editorial Intelligence via OTI (OneLife Trade Intelligence)",
        "Cross-Border Deal Facilitation & Anchor Buyer Matching",
      ],
    },
    {
      id: "digital",
      slug: "digital",
      badge: "Solution 04",
      title: "Media & Print Production",
      tagline: "Delivered in strategic partnership with Mélange Digital.",
      description:
        "High-velocity digital distribution, corporate collateral design, and publication printing. We ensure that every piece of physical and digital material adheres strictly to the brand standard with zero compromise on production quality.",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
      proofPoint: "Scalable alliance model with Mélange Digital for multi-country execution.",
      deliverables: [
        "Corporate Reports, Whitepapers & Prospectus Production",
        "Digital Media Architecture & Multi-Market Distribution",
        "Large-Format Environmental & Signage Fabrication",
        "High-Impact Corporate Film & Social Video Creation",
      ],
    },
  ] satisfies (CapabilitySection & { id: string })[],
  cta: { heading: "Have a Strategic Challenge in Front of You?" },
};

export const WHO_WE_ARE_CONTENT = {
  hero: {
    eyebrow: "Who We Are",
    description:
      "For over 14 years, OneLife has partnered with African enterprises, institutions, and development actors to deliver strategically grounded, creatively bold work across Zambia and the SADC-COMESA region.",
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
  } satisfies EyebrowDescription,
  philosophy: {
    eyebrow: "What We Believe In",
    heading: "Continuity Over Flawlessness.",
    paragraph1:
      "Look closely at our logo: it was never a clean, compass-drawn circle. It has a hand-drawn stroke, an uneven curve, and a subtle break. That is our philosophy: a life, or a growing business, is not a perfect circle.",
    paragraph2:
      "True continuity means staying whole while navigating economic headwinds, structural pivots, and market realities. It is why our 14-year track record has stayed unbroken—we adapt, solve, and build without pretending challenges do not exist.",
    quote: "Imagination is the beginning of creation. — OneLife Motto",
  } satisfies ImperfectPhilosophy,
  missionVision: [
    {
      id: "mission",
      eyebrow: "Our Mission",
      heading: "To Spread Bold Ideas.",
      description:
        "To spread bold ideas that transform how African businesses do marketing, and to connect them to the intelligence, platforms, and partnerships that help them grow.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "vision",
      eyebrow: "Our Vision",
      heading: "The Valued Strategic Partner.",
      description:
        "To be the most valued strategic communications partner for African institutions, enterprises, and development actors operating across the continent.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
  ] satisfies (MissionVisionCard & { id: string })[],
  coreValuesIntro: { eyebrow: "Guiding Principles", heading: "What Drives Our Work" } satisfies EyebrowHeading,
  coreValues: [
    { id: "passion", title: "Passion", description: "We care about the outcome, not just the output.", icon: "Compass" },
    { id: "curiosity", title: "Curiosity", description: "We ask why before we ask how.", icon: "Search" },
    { id: "exploration", title: "Exploration", description: "We go looking for the idea no one else found.", icon: "Lightbulb" },
    { id: "experimentation", title: "Experimentation", description: "We test, learn, and adapt in the open.", icon: "FlaskConical" },
    { id: "boldness", title: "Boldness", description: "We say the thing that needs saying, and build the thing that needs building.", icon: "Zap" },
  ] satisfies (CoreValue & { id: string })[],
  fourPhaseIntro: {
    eyebrow: "Operating Methodology",
    description: "How we eliminate agency overhead and deliver targeted ROI on every brief.",
    backgroundImage: "",
  } satisfies EyebrowDescription,
  fourPhaseSteps: [
    {
      id: "01",
      step: "01",
      name: "Strategic Diagnosis",
      detail: "We deconstruct the market environment, audience barriers, and commercial objectives before proposing tactics.",
    },
    {
      id: "02",
      step: "02",
      name: "Bespoke Team Assembly",
      detail: "Rather than pushing a fixed agency menu, we assemble the exact creative, trade, or event discipline your challenge needs.",
    },
    {
      id: "03",
      step: "03",
      name: "Precision Delivery",
      detail: "Execution with single-point accountability across digital campaigns, trade corridors, or national summits.",
    },
    {
      id: "04",
      step: "04",
      name: "Impact & Compounding Reach",
      detail: "Connecting client outcomes to our owned platforms (IMPEX, SWS, OTI) for sustained regional momentum.",
    },
  ] satisfies (FourPhaseStep & { id: string })[],
  allianceIntro: {
    eyebrow: "Executive Leadership & Delivery Model",
    heading: "Single Accountability, Regional Reach",
    description:
      "Led by Maria Masiri, OneLife bridges the gap between high-level policy dialogues and commercial campaign execution. Our model pairs internal strategic oversight with proprietary platforms and dedicated creative partnerships.",
  } satisfies LeadershipAllianceIntro,
  staff: HOME_CONTENT.staff,
  allianceHighlights: [
    {
      id: "owned-convening-power",
      icon: "ShieldCheck",
      title: "Owned Convening Power",
      body: "Proprietary reach through IMPEX, Smart Woman Summit, and OTI Trade Intelligence.",
    },
    {
      id: "melange-partnership",
      icon: "Globe2",
      title: "Mélange Digital Partnership",
      body: "Extending creative production, digital distribution, and multi-market media capability.",
    },
  ],
};

export const TRACK_RECORD_CONTENT = {
  intro: {
    eyebrow: "Track Record & Proof",
    description:
      "We are a 14 year proof platform that is backed by real execution across banking, agriculture, public health, trade corridors, and regional investment.",
    backgroundImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
  } satisfies EyebrowDescription,
  stats: [
    { id: "years", value: "14+", label: "Years Proven Delivery", icon: "ShieldCheck" },
    { id: "clients", value: "50+", label: "Partner Brands & Clients", icon: "Handshake" },
    { id: "platforms", value: "3", label: "Owned Regional Platforms", icon: "Globe2" },
    { id: "accountability", value: "100%", label: "Accountable Delivery", icon: "Users" },
  ] satisfies (TrackRecordStat & { id: string })[],
  milestones: [
    { id: "2012", year: "2012", title: "Founding & Strategic Agency Inception", description: "Established in Lusaka, Zambia to provide institutional-grade brand and communications strategy." },
    { id: "2016", year: "2016", title: "Public Health & Large-Scale Campaigns", description: "Delivered multi-sector public awareness campaigns and high-stakes stakeholder alignment initiatives across Zambia." },
    { id: "2020", year: "2020", title: "Trade Corridor & Agricultural Precedents (ZIPEX)", description: "Managed landmark sector engagements, including precedents with the Ministry of Fisheries & Livestock and trade facilitation entities." },
    { id: "2023", year: "2023", title: "Launch of Smart Woman Summit (SWS)", description: "Inaugurated Zambia's premier women's financial literacy and leadership platform, growing to 125+ executive delegates annually." },
    { id: "2024-2025", year: "2024–2025", title: "Pan-African Expansion & Mélange Alliance", description: "Formed strategic alliance with Mélange Digital to scale multi-market digital execution across the SADC-COMESA corridor." },
    { id: "2026", year: "2026", title: "IMPEX & Trade Intelligence Institutionalisation", description: "Formalised the IMPEX practitioner platform, OTI corridor intelligence publishing, and Zambia–Zimbabwe medical tourism corridor management." },
  ] satisfies (TrackRecordMilestone & { id: string })[],
  caseStudies: [
    {
      id: "smart-woman-summit",
      category: "Proprietary Platform & Leadership",
      title: "Smart Woman Summit: Building Year-Round Equity",
      challenge: "Overcoming the standard one-day event reset by creating continuous financial literacy engagement and corporate sponsorship value.",
      solution: "Segmented the delegate architecture into 5 distinct profiles (Builder, Ascender, Founder, Foundation, Innovator) paired with corporate literacy sponsorships.",
      impact: "Compounding year-round audience with 100% capacity attendance and recurring blue-chip corporate partnerships.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "impex",
      category: "Trade Intelligence & Corridors",
      title: "IMPEX: Making Second-Economy SMEs Deal-Ready",
      challenge: "Bridging the persistent disconnect between informal trade operators and institutional anchor buyers.",
      solution: "Established corridor-specific diagnostic tracks and structured B2B facilitation directly linked to OTI editorial intelligence.",
      impact: "Direct commercial linkages, public sector alignment (ZDA/CEEC precedent), and capital mobilization across cross-border tracks.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
  ] satisfies (TrackRecordCaseStudy & { id: string })[],
};

export const CORRIDOR_HOSPITALS: CorridorHospital[] = [];
export const CORRIDOR_INSURERS: CorridorInsurer[] = [];
