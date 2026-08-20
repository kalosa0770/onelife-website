"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  Compass, 
  Calendar, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface CapabilitySection {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  image: string;
  deliverables: string[];
  proofPoint: string;
}

const capabilitySections: CapabilitySection[] = [
  {
    id: "brand",
    badge: "Solution 01",
    title: "Communications & Brand Strategy",
    tagline: "Culturally fluent positioning that commands authority.",
    description:
      "We design strategic communications frameworks, corporate narratives, and public affairs campaigns built for Zambian and regional African operating realities. We eliminate generic corporate-speak in favor of grounded, evidence-backed messaging.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    deliverables: [
      "Brand Positioning & Corporate Messaging Systems",
      "Public Affairs & Government-Adjacent Campaign Strategy",
      "Stakeholder Alignment & Public Awareness Architecture",
      "Crisis & Executive Communications",
    ],
    proofPoint: "14+ years developing national-scale institutional narratives.",
  },
  {
    id: "events",
    badge: "Solution 02",
    title: "Events & Flagship Summits",
    tagline: "End-to-end production with zero vendor fragmentation.",
    description:
      "From high-level diplomatic stakeholder dialogues to 100+ delegate annual conferences, we manage the entire event lifecycle: programmatic curation, VIP stakeholder management, physical staging, and multi-channel coverage.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    deliverables: [
      "Conference Curation & Agenda Architecture",
      "VIP, Diplomatic & Anchor Partner Protocol Management",
      "Technical Audio-Visual, Stage Design & Spatial Branding",
      "Delegate Journey, Registration & Payment Workflows",
    ],
    proofPoint: "Producers of Smart Woman Summit and national trade conventions.",
  },
  {
    id: "trade-intelligence",
    badge: "Solution 03",
    title: "Trade Intelligence & Publishing",
    tagline: "Data, corridor context, and deal-readiness frameworks.",
    description:
      "We generate proprietary trade insights that link second-economy entrepreneurs with institutional capital. Through corridor mapping and macro intelligence, we help growth-stage businesses become deal-ready across SADC-COMESA trade corridors.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    deliverables: [
      "SADC-COMESA Trade Corridor Analysis & Briefs",
      "SME 'Deal-Ready' Frameworks & Capacity Audits",
      "Editorial Intelligence via OTI (OneLife Trade Intelligence)",
      "Cross-Border Deal Facilitation & Anchor Buyer Matching",
    ],
    proofPoint: "Corridor manager for bilateral regional trade initiatives.",
  },
  {
    id: "digital-production",
    badge: "Solution 04",
    title: "Media & Print Production",
    tagline: "Delivered in strategic partnership with Mélange Digital.",
    description:
      "High-velocity digital distribution, corporate collateral design, and publication printing. We ensure that every piece of physical and digital material adheres strictly to the brand standard with zero compromise on production quality.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    deliverables: [
      "Corporate Reports, Whitepapers & Prospectus Production",
      "Digital Media Architecture & Multi-Market Distribution",
      "Large-Format Environmental & Signage Fabrication",
      "High-Impact Corporate Film & Social Video Creation",
    ],
    proofPoint: "Scalable alliance model with Mélange Digital for multi-country execution.",
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        {/* 1. HERO HEADER */}
        <section className="relative pt-20 pb-20 px-4 sm:px-8 border-b border-charcoal/10 bg-warm-white overflow-hidden">
          {/* Watermark */}
          <div className="absolute right-[-100px] -top-16 w-[550px] h-[550px] pointer-events-none opacity-[0.035] select-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="#2B2B2D" strokeWidth="1.5">
              <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                variants={itemVariants}
                className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-3"
              >
                Our Capabilities
              </motion.span>

              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-grey font-normal leading-relaxed max-w-3xl mx-auto"
              >
                We do not sell a rigid agency menu. We diagnose the strategic challenge first, then assemble the exact blend of brand, events, trade intelligence, and digital delivery to solve it.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* 2. CAPABILITY SECTIONS (DETAILED BREAKDOWN) */}
        <div className="divide-y divide-charcoal/10">
          {capabilitySections.map((section, idx) => {
            const Icon = section.icon;
            const isReversed = idx % 2 === 1;

            return (
              <section 
                key={section.id} 
                id={section.id} 
                className="py-24 px-4 sm:px-8 bg-warm-white relative overflow-hidden"
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Image Column */}
                  <motion.div 
                    className={`lg:col-span-5 relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                    initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative h-80 sm:h-[440px] rounded-lg overflow-hidden shadow-xl border border-charcoal/10 bg-charcoal">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-6 left-6 right-6 text-warm-white">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-onelife-red block mb-1">
                            {section.title}
                        </span>
                        <p className="text-[12px] md:text-[14px] text-white/90 font-medium">
                          {section.proofPoint}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                    initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-white border border-charcoal/10 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-onelife-red" strokeWidth={2} />
                      </div>
                      <span className="text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-grey">
                        {section.badge}
                      </span>
                    </div>

                    <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight">
                      {section.title}
                    </h2>

                    <p className="text-[12px] md:text-[14px] font-semibold italic text-charcoal">
                      &ldquo;{section.tagline}&rdquo;
                    </p>

                    <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
                      {section.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-2 space-y-3">
                      <span className="text-[12px] md:text-[14px] font-heading font-bold uppercase tracking-wider text-charcoal block">
                        Core Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {section.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-[12px] md:text-[14px] font-medium text-charcoal bg-white p-3 rounded border border-charcoal/5">
                            <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-onelife-red hover:underline"
                      >
                        <span>Get More Information</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>

                </div>
              </section>
            );
          })}
        </div>

        {/* 3. CTA INTAKE BANNER */}
        <section className="py-20 px-4 sm:px-8 bg-onelife-red text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-white block">
              Direct Engagement
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">
              Have a Strategic Challenge in Front of You?
            </h2>
            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-background hover:bg-background/90 text-onelife-red font-heading font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-lg transition-all duration-200"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}