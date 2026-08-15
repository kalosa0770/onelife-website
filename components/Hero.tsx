"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  Award, 
  Lightbulb, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight, 
  Play 
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.35,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const FEATURE_CARDS = [
  {
    icon: Award,
    iconBg: "bg-warm-white",
    iconColor: "text-onelife-red",
    title: "14+ Years Track Record",
    body: "Proven delivery across banking, agriculture, public health, trade corridors, and regional investment.",
    tag: "50+ Partner Brands",
    variant: "light" as const,
  },
  {
    icon: Lightbulb,
    iconBg: "bg-warm-white",
    iconColor: "text-charcoal",
    title: "Strategic Assembly",
    body: "We think strategically first, then assemble the team rather than forcing a rigid agency menu.",
    tag: "Plug & Play Delivery",
    variant: "light" as const,
  },
  {
    icon: CheckCircle2,
    iconBg: "bg-warm-white",
    iconColor: "text-charcoal",
    title: "Owned Platforms",
    body: "Proprietary reach through IMPEX, Smart Woman Summit, and OneLife Trade Intelligence (OTI).",
    tag: "Proprietary Reach",
    variant: "light" as const,
  },
  {
    icon: Briefcase,
    iconBg: "bg-white/10",
    iconColor: "text-white",
    title: "Pan-African Reach",
    body: "Rooted in Zambia, fluent across the SADC-COMESA trade corridors with seamless regional delivery.",
    tag: "Lusaka to Regional Scale",
    variant: "dark" as const,
  },
];

export const Hero = () => {
  return (
    <section className="relative bg-charcoal text-warm-white pt-20 pb-32 lg:pb-36 overflow-visible z-15">
      {/* Dark Auditorium Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop')`,
        }}
      />
    
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Hero Title & Subtext */}
        <motion.div 
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-2xl md:text-5xl text-warm-white tracking-tight leading-[1.15] mb-6"
          >
            We are a strategic partner assembling brand, events, trade intelligence, and digital delivery.
          </motion.h1>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-4"
          >
            <Link
              href="#contact"
              className="bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-lg shadow-onelife-red/20 transition duration-200 flex items-center gap-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#capabilities"
              className="border border-white/20 hover:border-white/40 text-warm-white font-heading font-medium text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded hover:bg-white/[0.04] transition flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current text-onelife-red" />
              <span>Explore Our Services</span>
            </a>
          </motion.div>
        </motion.div>

        {/* 4 Floating Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 lg:mt-16 -mb-40 md:-mb-60 relative z-20 items-stretch px-4 sm:px-6 md:px-12"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {FEATURE_CARDS.map(({ icon: Icon, iconBg, iconColor, title, body, tag, variant }) => {
            const isDark = variant === "dark";
            return (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`p-5 rounded shadow-xl flex flex-col justify-between h-full ${
                  isDark
                    ? "bg-onelife-red text-white"
                    : "bg-white text-charcoal border border-charcoal/5"
                }`}
              >
                <div>
                  <div
                    className={`w-9 h-9 rounded flex items-center justify-center mb-4 border ${
                      iconBg
                    } ${isDark ? "border-white/20" : "border-charcoal/5"}`}
                  >
                    <Icon className={`w-4.5 h-4.5 ${iconColor}`} strokeWidth={2} />
                  </div>
                  <h3
                    className={`font-heading font-bold text-sm leading-snug mb-1.5 ${
                      isDark ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? "text-white/90" : "text-slate-grey"
                    }`}
                  >
                    {body}
                  </p>
                </div>
                <div
                  className={`mt-3 pt-3 border-t flex items-center text-[11px] font-semibold ${
                    isDark ? "border-white/20 text-white" : "border-charcoal/5 text-charcoal"
                  }`}
                >
                  <span>{tag}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};