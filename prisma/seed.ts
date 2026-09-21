// Seeds the CMS with an AdminUser (from env, if none exists yet) and every
// Singleton/Item row using the site's original hardcoded copy, so switching
// the components over to CMS data (see lib/content/read.ts) is a visual
// no-op. Run with `npm run db:seed` (wraps `npx prisma migrate dev`'s
// auto-seed, or run directly any time to backfill missing rows).
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, type Prisma } from "../generated/prisma/client";
import { hashPassword } from "../lib/auth/password";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function seedAdminUser() {
  const existing = await prisma.adminUser.count();
  if (existing > 0) {
    console.log("AdminUser already exists, skipping.");
    return;
  }
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_INITIAL_PASSWORD;
  if (!email || !password) {
    console.warn(
      "ADMIN_EMAIL / ADMIN_INITIAL_PASSWORD not set — no admin user created. " +
        "Set them in .env.local and re-run `npm run db:seed`."
    );
    return;
  }
  await prisma.adminUser.create({
    data: { email: email.toLowerCase(), passwordHash: await hashPassword(password) },
  });
  console.log(`Created admin user ${email}. Log in at /admin/login.`);
}

async function seedSingleton(key: string, data: Record<string, unknown>) {
  await prisma.singleton.upsert({
    where: { key },
    create: { key, data: data as Prisma.InputJsonValue },
    update: {}, // never overwrite content an admin may have already edited
  });
}

async function seedCollection(
  collection: string,
  rows: Record<string, unknown>[]
) {
  const existing = await prisma.item.count({ where: { collection } });
  if (existing > 0) {
    console.log(`"${collection}" already has rows, skipping.`);
    return;
  }
  await prisma.item.createMany({
    data: rows.map((data, order) => ({
      collection,
      data: data as Prisma.InputJsonValue,
      order,
    })),
  });
}

async function main() {
  await seedAdminUser();

  // ---- Singletons ---------------------------------------------------
  await seedSingleton("site-settings", {
    address: "Lusaka, Zambia",
    email: "info@onelife.co.zm",
    phone: "+260 961 888 009",
    linkedinUrl: "https://linkedin.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    footerBrandBlurb:
      "One strategic partner assembling brand, events, trade intelligence, and digital delivery. 14 years of regional execution across Zambia and SADC-COMESA.",
    copyrightText:
      "© 2026 OneLife Communications & Events Company. All rights reserved.",
  });

  await seedSingleton("hero", {
    headline:
      "We are a strategic partner assembling brand, events, trade intelligence, and digital delivery.",
    backgroundImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  });

  await seedSingleton("who-we-are-home", {
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
  });

  await seedSingleton("capabilities-home-intro", {
    eyebrow: "What We Offer",
    heading: "Integrated Capabilities & Execution",
    description:
      "Every practice area is built to operate either independently or seamlessly orchestrated together under a single accountable partner.",
  });

  await seedSingleton("capabilities-intro", {
    eyebrow: "Our Capabilities",
    description:
      "We do not sell a rigid agency menu. We diagnose the strategic challenge first, then assemble the exact blend of brand, events, trade intelligence, and digital delivery to solve it.",
    backgroundImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2069&auto=format&fit=crop",
  });

  await seedSingleton("capabilities-cta", {
    heading: "Have a Strategic Challenge in Front of You?",
  });

  await seedSingleton("track-record-home", {
    backgroundImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
  });

  await seedSingleton("track-record-intro", {
    eyebrow: "Track Record & Proof",
    description:
      "We are a 14 year proof platform that is backed by real execution across banking, agriculture, public health, trade corridors, and regional investment.",
    backgroundImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
  });

  await seedSingleton("ventures-intro", {
    eyebrow: "Forward Motion & Incubation",
    description:
      "Beyond traditional advisory, OneLife acts as an incubator and corridor manager, initiating platforms that unlock cross-border trade, specialized services, and SME acceleration.",
    backgroundImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
  });

  await seedSingleton("who-we-are-hero", {
    eyebrow: "Who We Are",
    description:
      "For over 14 years, OneLife has partnered with African enterprises, institutions, and development actors to deliver strategically grounded, creatively bold work across Zambia and the SADC-COMESA region.",
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
  });

  await seedSingleton("imperfect-philosophy", {
    eyebrow: "What We Believe In",
    heading: "Continuity Over Flawlessness.",
    paragraph1:
      "Look closely at our logo: it was never a clean, compass-drawn circle. It has a hand-drawn stroke, an uneven curve, and a subtle break. That is our philosophy: a life, or a growing business, is not a perfect circle.",
    paragraph2:
      "True continuity means staying whole while navigating economic headwinds, structural pivots, and market realities. It is why our 14-year track record has stayed unbroken—we adapt, solve, and build without pretending challenges do not exist.",
    quote: "Imagination is the beginning of creation. — OneLife Motto",
  });

  await seedSingleton("core-values-intro", {
    eyebrow: "Guiding Principles",
    heading: "What Drives Our Work",
  });

  await seedSingleton("four-phase-intro", {
    eyebrow: "Operating Methodology",
    description:
      "How we eliminate agency overhead and deliver targeted ROI on every brief.",
  });

  await seedSingleton("leadership-home-intro", {
    eyebrow: "Strategic Leadership",
    heading: "I believe in Strategic Vision & Hands-On Execution.",
  });

  await seedSingleton("leadership-alliance-intro", {
    eyebrow: "Executive Leadership & Delivery Model",
    heading: "Single Accountability, Regional Reach",
    description:
      "Led by Maria Masiri, OneLife bridges the gap between high-level policy dialogues and commercial campaign execution. Our model pairs internal strategic oversight with proprietary platforms and dedicated creative partnerships.",
  });

  // ---- Collections ----------------------------------------------------
  await seedCollection("hero-feature-cards", [
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
  ]);

  await seedCollection("who-we-are-home-values", [
    { text: "Plug-and-Play Assembly" },
    { text: "14-Year Proven Track Record" },
    { text: "Proprietary Owned Platforms" },
    { text: "Pan-African & Corridor Fluent" },
  ]);

  await seedCollection("capabilities-home", [
    {
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
      title: "Media & Digital Production",
      subtitle: "Creative Execution",
      description:
        "Delivered in partnership with Mélange Digital: high-velocity content creation, corporate performance marketing, and multimedia publishing.",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      link: "/capabilities#digital",
    },
  ]);

  // Note: the original site's homepage teaser cards linked to anchors
  // ("communications"/"trade"/"digital") that didn't match the capability
  // detail page's actual section ids ("brand"/"trade-intelligence"/
  // "digital-production") for 3 of 4 cards — the anchor links silently did
  // nothing. Slugs are unified here so they actually work.
  await seedCollection("capability-sections", [
    {
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
      slug: "digital",
      badge: "Solution 04",
      title: "Media & Print Production",
      tagline: "Delivered in strategic partnership with Mélange Digital.",
      description:
        "High-velocity digital distribution, corporate collateral design, and publication printing. We ensure that every piece of physical and digital material adheres strictly to the brand standard with zero compromise on production quality.",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
      proofPoint:
        "Scalable alliance model with Mélange Digital for multi-country execution.",
      deliverables: [
        "Corporate Reports, Whitepapers & Prospectus Production",
        "Digital Media Architecture & Multi-Market Distribution",
        "Large-Format Environmental & Signage Fabrication",
        "High-Impact Corporate Film & Social Video Creation",
      ],
    },
  ]);

  // Shared by the homepage TrackRecord section and the Track Record page's
  // stats bar (the two had slightly different label wording originally;
  // unified here since they're now one record).
  await seedCollection("track-record-stats", [
    { value: "14+", label: "Years Proven Delivery", icon: "ShieldCheck" },
    { value: "50+", label: "Partner Brands & Clients", icon: "Handshake" },
    { value: "3", label: "Owned Regional Platforms", icon: "Globe2" },
    { value: "100%", label: "Accountable Delivery", icon: "Users" },
  ]);

  await seedCollection("track-record-milestones", [
    {
      year: "2012",
      title: "Founding & Strategic Agency Inception",
      description:
        "Established in Lusaka, Zambia to provide institutional-grade brand and communications strategy.",
    },
    {
      year: "2016",
      title: "Public Health & Large-Scale Campaigns",
      description:
        "Delivered multi-sector public awareness campaigns and high-stakes stakeholder alignment initiatives across Zambia.",
    },
    {
      year: "2020",
      title: "Trade Corridor & Agricultural Precedents (ZIPEX)",
      description:
        "Managed landmark sector engagements, including precedents with the Ministry of Fisheries & Livestock and trade facilitation entities.",
    },
    {
      year: "2023",
      title: "Launch of Smart Woman Summit (SWS)",
      description:
        "Inaugurated Zambia's premier women's financial literacy and leadership platform, growing to 125+ executive delegates annually.",
    },
    {
      year: "2024–2025",
      title: "Pan-African Expansion & Mélange Alliance",
      description:
        "Formed strategic alliance with Mélange Digital to scale multi-market digital execution across the SADC-COMESA corridor.",
    },
    {
      year: "2026",
      title: "IMPEX & Trade Intelligence Institutionalisation",
      description:
        "Formalised the IMPEX practitioner platform, OTI corridor intelligence publishing, and Zambia–Zimbabwe medical tourism corridor management.",
    },
  ]);

  await seedCollection("track-record-case-studies", [
    {
      category: "Proprietary Platform & Leadership",
      title: "Smart Woman Summit: Building Year-Round Equity",
      challenge:
        "Overcoming the standard one-day event reset by creating continuous financial literacy engagement and corporate sponsorship value.",
      solution:
        "Segmented the delegate architecture into 5 distinct profiles (Builder, Ascender, Founder, Foundation, Innovator) paired with corporate literacy sponsorships.",
      impact:
        "Compounding year-round audience with 100% capacity attendance and recurring blue-chip corporate partnerships.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Trade Intelligence & Corridors",
      title: "IMPEX: Making Second-Economy SMEs Deal-Ready",
      challenge:
        "Bridging the persistent disconnect between informal trade operators and institutional anchor buyers.",
      solution:
        "Established corridor-specific diagnostic tracks and structured B2B facilitation directly linked to OTI editorial intelligence.",
      impact:
        "Direct commercial linkages, public sector alignment (ZDA/CEEC precedent), and capital mobilization across cross-border tracks.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
  ]);

  // The original site had two photos for Maria (maria.png on the homepage,
  // maria.jpg on the Who We Are page) and two slightly different role
  // strings — unified into one staff record since both sections now render
  // from the same source.
  await seedCollection("staff", [
    {
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
          body: "Corridor Manager & Venture Lead. Spearheading cross-border trade initiatives (including Zambia–Zimbabwe corridor management) and the OneLife Brand Accelerator.",
        },
      ],
    },
  ]);

  await seedCollection("alliance-highlights", [
    {
      icon: "ShieldCheck",
      title: "Owned Convening Power",
      body: "Proprietary reach through IMPEX, Smart Woman Summit, and OTI Trade Intelligence.",
    },
    {
      icon: "Globe2",
      title: "Mélange Digital Partnership",
      body: "Extending creative production, digital distribution, and multi-market media capability.",
    },
  ]);

  await seedCollection("platforms", [
    {
      name: "IMPEX",
      slug: "impex",
      category: "Trade Corridors",
      badge: "Trade Platform",
      description:
        "A practitioner-focused trade facilitation platform connecting second-economy SMEs, cross-border corridor operators, and institutional capital across SADC-COMESA.",
      longDescription:
        "IMPEX is OneLife's practitioner-focused trade facilitation platform, connecting second-economy SMEs, cross-border corridor operators, and institutional capital across the SADC-COMESA region. Through corridor-specific diagnostic tracks and structured B2B facilitation linked directly to OTI editorial intelligence, IMPEX helps second-economy entrepreneurs become deal-ready — bridging the disconnect between informal trade operators and institutional anchor buyers.",
      icon: "Globe",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
      accentColorHex: "#1B3A5C",
      externalHref: "/platforms/impex",
      isExternal: "false",
      linkLabel: "Visit IMPEX",
    },
    {
      name: "Smart Woman Summit",
      slug: "smart-woman-summit",
      category: "Financial Leadership",
      badge: "Annual Summit",
      description:
        "Zambia's premier financial literacy and leadership summit. Convening founders, ascenders, and institutional partners to unpack capital, ownership, and sustainable wealth.",
      longDescription:
        "Smart Woman Summit (SWS) is Zambia's premier financial literacy and leadership summit, convening founders, ascenders, and institutional partners to unpack capital, ownership, and sustainable wealth. Inaugurated in 2023, the summit segments its delegate architecture into five distinct profiles — Builder, Ascender, Founder, Foundation, and Innovator — paired with corporate literacy sponsorships, building a compounding, year-round audience beyond the standard one-day event.",
      icon: "Sparkles",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop",
      accentColorHex: "#D6336C",
      externalHref: "/platforms/smart-woman-summit",
      isExternal: "false",
      linkLabel: "Explore 2027 Edition",
    },
    {
      name: "OneLife Trade Intelligence",
      slug: "oti",
      category: "Editorial & Policy",
      badge: "Editorial Publication",
      description:
        "Proprietary trade corridor data, cross-border regulatory context, and actionable macroeconomic analysis feeding trade operators and high-level decision makers.",
      longDescription:
        "OneLife Trade Intelligence (OTI) is OneLife's editorial publishing arm, authored by Maria Masiri. It delivers proprietary trade corridor data, cross-border regulatory context, and actionable macroeconomic analysis for trade operators, policymakers, and second-economy entrepreneurs across the SADC-COMESA region.",
      icon: "BookOpen",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
      accentColorHex: "#C9A961",
      externalHref: "https://mariamasiri.substack.com",
      isExternal: "true",
      linkLabel: "Read on Substack",
    },
  ]);

  await seedCollection("ventures", [
    {
      badge: "Venture Track 01",
      title: "Corridor Manager: Zambia–Zimbabwe Medical Tourism",
      description:
        "Serving in the institutional role of Corridor Manager, OneLife coordinates bilateral stakeholder engagement, patient pathway protocols, and service standardization between healthcare providers and private insurers across Zambia and Zimbabwe.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
      points: [
        { title: "", body: "Institutional alignment between ministries, regulators, and health operators." },
        { title: "", body: "Cross-border travel and specialized healthcare referral facilitation." },
        { title: "", body: "Bespoke communications to build patient trust and regulatory transparency." },
      ],
      ctaLabel: "",
      ctaHref: "",
    },
    {
      badge: "Venture Track 02",
      title: "OneLife Brand Accelerator",
      description:
        "Growth-stage SMEs frequently hit a ceiling due to fragmented, generic branding that cannot attract institutional buyers or regional capital. The OneLife Brand Accelerator provides high-potential African enterprises with agency-grade strategic positioning at accessible cohorts.",
      icon: "Rocket",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
      points: [
        {
          title: "Deal-Readiness Audits",
          body: "Aligning visual identity, product collateral, and value propositions for investor diligence.",
        },
        {
          title: "Corridor Route-to-Market",
          body: "Direct integration into the IMPEX trade tracks and regional buyer discovery.",
        },
      ],
      ctaLabel: "Apply for Accelerator Cohort",
      ctaHref: "/#contact",
    },
  ]);

  await seedCollection("mission-vision-cards", [
    {
      eyebrow: "Our Mission",
      heading: "To Spread Bold Ideas.",
      description:
        "To spread bold ideas that transform how African businesses do marketing, and to connect them to the intelligence, platforms, and partnerships that help them grow.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },
    {
      eyebrow: "Our Vision",
      heading: "The Valued Strategic Partner.",
      description:
        "To be the most valued strategic communications partner for African institutions, enterprises, and development actors operating across the continent.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  await seedCollection("core-values", [
    { title: "Passion", description: "We care about the outcome, not just the output.", icon: "Compass" },
    { title: "Curiosity", description: "We ask why before we ask how.", icon: "Search" },
    { title: "Exploration", description: "We go looking for the idea no one else found.", icon: "Lightbulb" },
    { title: "Experimentation", description: "We test, learn, and adapt in the open.", icon: "FlaskConical" },
    {
      title: "Boldness",
      description: "We say the thing that needs saying, and build the thing that needs building.",
      icon: "Zap",
    },
  ]);

  await seedCollection("four-phase-steps", [
    {
      step: "01",
      name: "Strategic Diagnosis",
      detail: "We deconstruct the market environment, audience barriers, and commercial objectives before proposing tactics.",
    },
    {
      step: "02",
      name: "Bespoke Team Assembly",
      detail: "Rather than pushing a fixed agency menu, we assemble the exact creative, trade, or event discipline your challenge needs.",
    },
    {
      step: "03",
      name: "Precision Delivery",
      detail: "Execution with single-point accountability across digital campaigns, trade corridors, or national summits.",
    },
    {
      step: "04",
      name: "Impact & Compounding Reach",
      detail: "Connecting client outcomes to our owned platforms (IMPEX, SWS, OTI) for sustained regional momentum.",
    },
  ]);

  console.log("Seed complete.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
