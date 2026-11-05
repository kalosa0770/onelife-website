import Link from "next/link";
import { ArrowRight } from "lucide-react";

const platforms = [
  {
    eyebrow: "OneLife Events",
    title: "IMPEX 2027",
    text: "A practitioner trade summit in Lusaka connecting buyers, manufacturers and investors across six SADC-COMESA corridors.",
    href: "/events/impex",
    color: "text-impex-green",
  },
  {
    eyebrow: "OneLife Events",
    title: "Smart Woman Summit ’27",
    text: "Money Out Loud: a year-round women’s financial literacy community with a flagship summit, dates to be announced.",
    href: "/events/smart-woman-summit",
    color: "text-sws-rose",
  },
];

export function Platforms() {
  return (
    <section id="platforms" aria-labelledby="platforms-heading" className="scroll-mt-32 bg-surface px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-onelife-red">OneLife in action</p>
          <h2 id="platforms-heading" className="font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
            Platforms that connect people, trade and care.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {platforms.map((p) => (
            <Link key={p.href} href={p.href} className="group flex flex-col border border-charcoal/10 bg-white p-6 transition-shadow hover:shadow-lg">
              <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${p.color}`}>{p.eyebrow}</p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-charcoal">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-grey">{p.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-charcoal">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
