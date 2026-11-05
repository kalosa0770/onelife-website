import type { Metadata } from "next";
import { ButtonLink, Card, Section, SectionHeading } from "@/components/site/ui";
import { CorridorMap } from "./CorridorMap";
import { GREEN, AMBER, facts, otiLink } from "./data";
import { Mail } from "lucide-react";
import { Explore } from "./_sections/Explore";
import { Register } from "./_sections/Register";

export const metadata: Metadata = {
  title: "About IMPEX 2027 | Trade Intelligence to Deal Room | OneLife",
  description:
    "IMPEX 2027 is a practitioner deal-making summit in Lusaka, Zambia — where OTI's trade intelligence becomes a deal room across six SADC-COMESA corridors.",
};

export default function ImpexPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-8 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-impex-green/50 via-charcoal to-charcoal" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 block font-heading text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: AMBER }}>
              IMPEX 2027 · Lusaka, Zambia
            </span>
            <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              What is IMPEX?
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              IMPEX (Intra-African Trade &amp; Manufacturers&rsquo; Exchange) is a practitioner deal-making summit in Lusaka. It is the live-event end of a year-round pipeline: OTI identifies and tracks the projects, and IMPEX convenes the capital, the policy support and the implementers around them.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
              It is not a conference. There are no panels for the sake of panels. Transactions are the agenda, not the afterthought &mdash; across six corridors in the SADC-COMESA region.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#register">Register as a Founding Delegate</ButtonLink>
              <ButtonLink href="#explore" variant="outline-light">How it works</ButtonLink>
            </div>
          </div>
          <CorridorMap />
        </div>
      </section>

      <Explore />

      <Section id="dates">
        <SectionHeading
          eyebrow="Event dates"
          accent={GREEN}
          title="When and where"
          intro="Dates are announced to OTI subscribers first."
        />
        <Card accent={GREEN}>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {facts.map(([k, v]) => (
              <div key={k} className="flex gap-4 border-b border-charcoal/15 py-3.5 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
                <dt className="w-32 shrink-0 pt-0.5 font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{k}</dt>
                <dd className="text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <div className="mt-6">
          <ButtonLink href={otiLink("dates")} external variant="outline">Get dates first: subscribe to OTI</ButtonLink>
        </div>
      </Section>

      <Register />

      <Section tone="surface">
        <div className="flex flex-col gap-6 text-sm text-slate-grey md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-2 leading-relaxed">
            <p>IMPEX 2027 is organised by Onelife Communications &amp; Events Company, Lusaka, Zambia. A Onelife Events production. OTI is an editorial brand of Onelife Communications.</p>
          </div>
          <div className="flex flex-col gap-2 font-medium sm:flex-row sm:gap-6">
            <a href={otiLink("about-footer")} target="_blank" rel="noopener noreferrer" className="hover:text-onelife-red">Subscribe to OTI</a>
            <a href="mailto:info@onelife.co.zm" className="inline-flex items-center gap-1.5 hover:text-onelife-red">
              <Mail className="h-4 w-4" />info@onelife.co.zm
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
