"use client";

import type { HeroFeatureCard } from "@/lib/site/content";
import { ContentIcon } from "@/components/ContentIcon";
import { motion, type Variants } from "framer-motion";

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const FeaturedCards = ({ featureCards }: { featureCards: HeroFeatureCard[] }) => {
  return (
    <section aria-label="Why OneLife" className="border-b border-charcoal/10 bg-white px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-onelife-red">Built around your brief</p>
            <h2 className="font-heading text-xl font-semibold tracking-tight text-charcoal sm:text-2xl">
              One team. More ways to move forward.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-grey">
            Connected thinking, local understanding, and delivery that reaches across the region.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featureCards.map(({ icon, title, body }, index) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className="group border-t border-charcoal/10 py-5 sm:px-5 sm:first:pl-0 lg:border-l lg:border-t-0 lg:py-2 lg:first:border-l-0"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7eeee] transition-colors group-hover:bg-onelife-red">
                  <ContentIcon
                    name={icon}
                    className="h-4 w-4 text-onelife-red transition-colors group-hover:text-white"
                    strokeWidth={2}
                  />
                </span>
                <span className="font-heading text-xs font-medium tracking-widest text-charcoal/35">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold leading-snug text-charcoal">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-grey">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
