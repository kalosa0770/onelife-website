import type { Metadata } from "next";
import { ButtonLink, Card, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { GREEN, AMBER, corridors, ledger, otiLink } from "../data";

export const metadata: Metadata = {
  title: "The Ledger & Opportunity Register | IMPEX 2027 | OneLife",
  description:
    "The IMPEX Opportunity Register: a live, curated catalogue of verified trade and investment opportunities, published band by band in OTI's Ledger series.",
};

export default function ImpexLedgerPage() {
  return (
    <>
      <PageHero
        eyebrow="IMPEX 2027 · The Ledger"
        accent={GREEN}
        title="This Is What’s Actually on the Table"
        intro="The Opportunity Register is a live, curated catalogue of verified trade, investment, and supply-chain opportunities across SADC-COMESA — published band by band in OTI’s Ledger series."
      >
        <ButtonLink href={otiLink("ledger-hero")} external>Subscribe to OTI</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Transaction bands"
          accent={GREEN}
          title="Opening the register, band by band"
          intro="OTI publishes every Thursday. The Ledger opens each band of the Opportunity Register in turn."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {ledger.map((l) => (
            <li key={l.band}>
              <Card accent={GREEN} className="h-full">
                <p className="font-heading text-lg font-bold">{l.band}</p>
                <p className="mt-1 text-sm text-slate-grey">{l.range}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider" style={{ color: GREEN }}>{l.state}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Featured entry"
          accent={GREEN}
          title="Cross-Border Beneficiation Hub — Tobacco Value Chain"
        />
        <article className="overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm">
          <header className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-white" style={{ backgroundColor: GREEN }}>
            <span className="font-heading text-sm font-bold">Anchor / Institutional</span>
            <span className="rounded px-2 py-1 font-heading text-[10px] font-bold tracking-wider text-foreground" style={{ backgroundColor: AMBER }}>
              BAND: USD 5M+ · OTI ISSUE 007
            </span>
          </header>
          <p className="p-6 text-sm leading-relaxed text-slate-grey md:text-base">
            115,000+ registered growers across Malawi, Zimbabwe, Mozambique, Tanzania and Zambia produced a 2026 crop projected at 360M kg, worth close to USD 1.2bn &mdash; yet roughly 9 in 10 tobacco dollars still leave the region as raw, unprocessed leaf. Zimbabwe&rsquo;s Tobacco Value Chain Transformation Plan II (2026&ndash;2030) targets value addition rising from 11% to 30% and 70% of production financing localised by plan end. Entry point: a cross-border beneficiation hub processing leaf from Zambia, Malawi, Mozambique and Tanzania, not Zimbabwean leaf alone.
          </p>
        </article>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corridors.filter((c) => c.name !== "Tobacco Value Chain").map((c) => (
            <div key={c.name} className="rounded-xl border border-dashed border-charcoal/25 bg-white p-5">
              <h3 className="font-heading text-sm font-bold" style={{ color: GREEN }}>{c.name}</h3>
              <p className="mt-1 text-sm text-slate-grey">Register entries opening in OTI.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Submit an opportunity" accent={GREEN} title="Got a documented need?" />
            <p className="text-base leading-relaxed text-slate-grey">
              Operators can submit to the Register via{" "}
              <a className="underline underline-offset-2 hover:text-onelife-red" href="mailto:maria.masiri26@gmail.com">maria.masiri26@gmail.com</a>.
              Submissions are screened for strategic relevance, feasibility, and readiness before publication.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 sm:p-8">
            <h3 className="font-heading text-lg font-bold">Access the full Register</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-grey">
              The Full Register is available to OTI subscribers and registered IMPEX delegates. Founding Delegates receive corridor-matched opportunity alerts ahead of general publication.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={otiLink("register")} external variant="outline">Subscribe to OTI</ButtonLink>
              <ButtonLink href="/events/impex/register">Register as a delegate</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
