"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const timelineMilestones = [
  {
    year: "2012",
    title: "Founding & Strategic Agency Inception",
    description: "Established in Lusaka, Zambia to provide institutional-grade brand and communications strategy.",
  },
  {
    year: "2016",
    title: "Public Health & Large-Scale Campaigns",
    description: "Delivered multi-sector public awareness campaigns and high-stakes stakeholder alignment initiatives across Zambia.",
  },
  {
    year: "2020",
    title: "Trade Corridor & Agricultural Precedents (ZIPEX)",
    description: "Managed landmark sector engagements, including precedents with the Ministry of Fisheries & Livestock and trade facilitation entities.",
  },
  {
    year: "2023",
    title: "Launch of Smart Woman Summit (SWS)",
    description: "Inaugurated Zambia's premier women's financial literacy and leadership platform, growing to 125+ executive delegates annually.",
  },
  {
    year: "2024–2025",
    title: "Pan-African Expansion & Mélange Alliance",
    description: "Formed strategic alliance with Mélange Digital to scale multi-market digital execution across the SADC-COMESA corridor.",
  },
  {
    year: "2026",
    title: "IMPEX & Trade Intelligence Institutionalisation",
    description: "Formalised the IMPEX practitioner platform, OTI corridor intelligence publishing, and Zambia–Zimbabwe medical tourism corridor management.",
  },
];

const caseStudies = [
  {
    id: "sws-platform",
    category: "Proprietary Platform & Leadership",
    title: "Smart Woman Summit: Building Year-Round Equity",
    challenge: "Overcoming the standard one-day event reset by creating continuous financial literacy engagement and corporate sponsorship value.",
    solution: "Segmented the delegate architecture into 5 distinct profiles (Builder, Ascender, Founder, Foundation, Innovator) paired with corporate literacy sponsorships.",
    impact: "Compounding year-round audience with 100% capacity attendance and recurring blue-chip corporate partnerships.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "impex-corridor",
    category: "Trade Intelligence & Corridors",
    title: "IMPEX: Making Second-Economy SMEs Deal-Ready",
    challenge: "Bridging the persistent disconnect between informal trade operators and institutional anchor buyers.",
    solution: "Established corridor-specific diagnostic tracks and structured B2B facilitation directly linked to OTI editorial intelligence.",
    impact: "Direct commercial linkages, public sector alignment (ZDA/CEEC precedent), and capital mobilization across cross-border tracks.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TrackRecordPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-20 px-4 sm:px-8 border-b border-charcoal/10 bg-warm-white overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.span variants={itemVariants} className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-3">
                Track Record &amp; Proof
              </motion.span>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-grey font-normal leading-relaxed max-w-3xl mx-auto">
                We are a 14 year proof platform that is backed by real execution across banking, agriculture, public health, trade corridors, and regional investment.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 bg-onelife-red text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">14+</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mt-1">Years Regional Delivery</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">50+</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mt-1">Institutional &amp; Corporate Brands</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">3</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mt-1">Owned Regional Platforms</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">100%</h3>
              <p className="text-[12px] md:text-[14px] text-white/80 mt-1">Accountable Execution</p>
            </div>
          </div>
        </section>

        {/* 14-YEAR MILESTONE TIMELINE */}
        <section className="py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
                Chronology
              </span>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal">
                Milestones: 2012 to Present
              </h2>
            </div>

            <div className="relative border-l-2 border-charcoal/15 pl-6 sm:pl-8 ml-4 sm:ml-8 space-y-10">
              {timelineMilestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-onelife-red group-hover:scale-125 transition-transform" />
                  
                  <span className="text-[12px] font-heading font-bold text-onelife-red uppercase tracking-wider block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-bold text-[14px] md:text-base text-charcoal mb-1">
                    {m.title}
                  </h3>
                  <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED CASE STUDIES */}
        <section className="py-24 px-4 sm:px-8 bg-[#F4F4F0] border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
                Demonstrated Proof
              </span>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal">
                Selected Case Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="bg-white rounded-lg overflow-hidden border border-charcoal/10 shadow-sm flex flex-col justify-between">
                  <div className="relative h-60 w-full bg-charcoal">
                    <Image src={cs.image} alt={cs.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[11px] font-heading font-semibold uppercase tracking-wider bg-onelife-red text-white px-2.5 py-1 rounded">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-heading font-bold text-[14px] md:text-base text-charcoal">{cs.title}</h3>
                    
                    <div className="space-y-2 text-[12px] md:text-[14px] text-slate-grey">
                      <p><strong className="text-charcoal">Challenge:</strong> {cs.challenge}</p>
                      <p><strong className="text-charcoal">Strategic Approach:</strong> {cs.solution}</p>
                      <p><strong className="text-charcoal">Outcome:</strong> {cs.impact}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 border-t border-charcoal/5">
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase text-onelife-red hover:underline">
                      <span>Get More Information</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}