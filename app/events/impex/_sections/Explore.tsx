import type { ReactNode } from "react";
import { ButtonLink, Checklist, Section, SectionHeading } from "@/components/site/ui";
import { GREEN, AMBER, activities, corridors, ledger, otiLink } from "../data";

const fundability = activities.find((a) => a.title.includes("Fundability"));
const dealRoom = activities.find((a) => a.title === "The Deal Room");

const items: { id: string; title: string; summary: string; body: ReactNode }[] = [
  {
    id: "corridors",
    title: "The Corridors",
    summary: "Six tracked corridors, each mirroring a live OTI editorial track.",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-grey md:text-base">
          Each corridor carries a named Corridor Champion, a practitioner who chairs its session, sits on the IMPEX Deal Committee for that sector and vets its Deal Room applicants.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {corridors.map((c) => (
            <li key={c.name} className="rounded-xl border border-charcoal/10 bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-heading text-base font-bold">{c.name}</h4>
                <span className="shrink-0 rounded px-2 py-1 font-heading text-[10px] font-bold tracking-wider text-foreground" style={{ backgroundColor: AMBER }}>
                  {c.status}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-grey">{c.geo}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">{c.focus}</p>
              <p className="mt-3 border-t border-charcoal/10 pt-3 text-xs text-slate-grey">Corridor Champion: announcement to follow</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Checklist
            accent={GREEN}
            items={[
              "Practitioner credibility in the sector, not primarily academic standing",
              "An existing public track record on the corridor’s specific bottlenecks",
              "Willingness to be co-selected alongside that corridor’s sponsor",
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: "ledger",
    title: "The Ledger",
    summary: "A live catalogue of verified trade and investment opportunities.",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-grey md:text-base">
          The Opportunity Register is a live, curated catalogue of verified trade, investment and supply-chain opportunities across SADC-COMESA, published band by band in OTI&rsquo;s Ledger series. OTI publishes every Thursday.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {ledger.map((l) => (
            <li key={l.band} className="rounded-xl border border-charcoal/10 border-t-4 bg-white p-5" style={{ borderTopColor: GREEN }}>
              <p className="font-heading text-base font-bold">{l.band}</p>
              <p className="mt-1 text-sm text-slate-grey">{l.range}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider" style={{ color: GREEN }}>{l.state}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-charcoal/10 bg-white p-5">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">Featured entry · OTI Issue 007 · USD 5M+</p>
          <h4 className="mt-1 font-heading text-base font-bold">Cross-Border Beneficiation Hub &mdash; Tobacco Value Chain</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-grey">
            115,000+ registered growers across Malawi, Zimbabwe, Mozambique, Tanzania and Zambia produced a 2026 crop projected at 360M kg, worth close to USD 1.2bn, yet roughly 9 in 10 tobacco dollars still leave the region as raw leaf. Entry point: a cross-border beneficiation hub processing leaf from across the region, not Zimbabwean leaf alone.
          </p>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-grey">
          Got a documented need? Submit to the Register at{" "}
          <a className="underline underline-offset-2 hover:text-onelife-red" href="mailto:maria.masiri26@gmail.com">maria.masiri26@gmail.com</a>. Submissions are screened for relevance, feasibility and readiness before publication.
        </p>
        <div className="mt-6">
          <ButtonLink href={otiLink("register")} external variant="outline">Subscribe to OTI</ButtonLink>
        </div>
      </>
    ),
  },
  {
    id: "fundability",
    title: "The SME Fundability Programme",
    summary: "Arrive bankable, not just present.",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-grey md:text-base">{fundability?.body}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-grey md:text-base">
          It is a pre-summit readiness process covering business model documentation, financial presentation, corridor opportunity mapping and deal introductions. Completing it is the qualification for access to the IMPEX Deal Room. Open to Founding Delegates and Early-Bird registrants.
        </p>
      </>
    ),
  },
  {
    id: "deal-room",
    title: "The Deal Room",
    summary: "Pre-qualified matchmaking where documented intent is the entry requirement.",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-grey md:text-base">{dealRoom?.body}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-grey md:text-base">
          Founding Delegates receive priority Deal Room placement, corridor matching and OTI intelligence briefings ahead of the summit.
        </p>
      </>
    ),
  },
];

export function Explore() {
  return (
    <Section id="explore" tone="surface">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="How IMPEX works"
          accent={GREEN}
          title="From intelligence to a deal room"
          intro="Select a topic to read more."
        />
        <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
          {items.map((item, i) => (
            <details key={item.id} id={item.id} open={i === 0} className="group scroll-mt-40 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block font-heading text-lg font-bold md:text-xl">{item.title}</span>
                  <span className="mt-1 block text-sm text-slate-grey">{item.summary}</span>
                </span>
                <span className="shrink-0 font-heading text-3xl leading-none" style={{ color: GREEN }} aria-hidden="true">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">&minus;</span>
                </span>
              </summary>
              <div className="pt-5">{item.body}</div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
