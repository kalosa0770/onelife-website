import type { Metadata } from "next";
import { ButtonLink, Section, SectionHeading, PageHero, Checklist } from "@/components/site/ui";
import { CorridorMap } from "../CorridorMap";
import { GREEN, AMBER, corridors } from "../data";

export const metadata: Metadata = {
  title: "Corridors Being Tracked | IMPEX 2027 | OneLife",
  description: "The six SADC-COMESA corridors IMPEX and OTI track — from the Battery Value Chain to the Lobito Corridor.",
};

export default function ImpexCorridorsPage() {
  return (
    <>
      <PageHero
        eyebrow="IMPEX 2027 · Corridors being tracked"
        accent={GREEN}
        title="Six Corridors. One Room."
        intro="Each corridor mirrors a live OTI editorial track — the intelligence and the deal flow run on the same rails — and carries a named Corridor Champion who chairs its session and vets its Deal Room applicants."
        aside={<CorridorMap />}
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {corridors.map((c) => (
            <article key={c.name} className="flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition hover:shadow-md">
              <header className="flex items-start justify-between gap-3 px-5 py-4 text-white" style={{ backgroundColor: GREEN }}>
                <h3 className="font-heading text-base font-bold">{c.name}</h3>
                <span className="shrink-0 rounded px-2 py-1 font-heading text-[10px] font-bold tracking-wider text-foreground" style={{ backgroundColor: AMBER }}>
                  {c.status}
                </span>
              </header>
              <div className="flex-1 space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-grey">{c.geo}</p>
                <p className="text-sm leading-relaxed text-slate-grey">{c.focus}</p>
                <p className="border-t border-charcoal/10 pt-3 text-xs text-slate-grey">Corridor Champion: announcement to follow</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Corridor Champions" accent={GREEN} title="Chaired by practitioners, not generalists" />
        <p className="max-w-3xl text-base leading-relaxed text-slate-grey">
          Each corridor is chaired by a named practitioner who sets the session agenda, sits on the IMPEX Deal Committee for that sector, and anchors the corresponding OTI corridor report.
        </p>
        <div className="mt-6 max-w-3xl">
          <Checklist
            accent={GREEN}
            items={[
              "Practitioner credibility in the sector, not primarily academic standing",
              "An existing public track record on the corridor’s specific bottlenecks",
              "Willingness to be co-selected alongside that corridor’s sponsor",
            ]}
          />
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/events/impex/ledger">See the Ledger</ButtonLink>
          <ButtonLink href="/events/impex/register#partner" variant="outline">Sponsor a corridor</ButtonLink>
        </div>
      </Section>
    </>
  );
}
