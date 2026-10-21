'use client';

import type { HeroFeatureCard } from "@/lib/site/content";
import { ContentIcon } from "@/components/ContentIcon";
import { motion, type Variants } from "framer-motion";

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

export const FeaturedCards = ({ featureCards }: { featureCards: HeroFeatureCard[] }) => {
  return (
        <div className="px-4 py-20 sm:px-8 md:py-28">
             <motion.div
          className="mt-14 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:mt-20 xl:grid-cols-4"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {featureCards.map(({ icon, title, body, variant }) => {
            const isDark = variant === "dark";
            return (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className={`h-full rounded-xl p-5 shadow-xl shadow-black/10 ${
                  isDark
                    ? "bg-onelife-red text-white"
                    : "border border-white/70 bg-white/95 text-charcoal backdrop-blur"
                }`}
              >
                <div
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg border ${
                    isDark ? "border-white/20 bg-white/10" : "border-charcoal/5 bg-warm-white"
                  }`}
                >
                  <ContentIcon
                    name={icon}
                    className={`h-5 w-5 ${isDark ? "text-white" : "text-onelife-red"}`}
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3
                    className={`mb-2 font-heading text-base font-bold leading-snug ${
                      isDark ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-white/90" : "text-slate-grey"
                    }`}
                  >
                    {body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
    )
}