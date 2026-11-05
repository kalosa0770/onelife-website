import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Card, Section, SectionHeading, Prose } from "@/components/site/ui";
import { GREEN, otiArticles, otiLink } from "../data";

export function Oti() {
  return (
    <>
      <Section id="oti">
        <SectionHeading
          eyebrow="OTI · Onelife Trade Intelligence"
          accent={GREEN}
          title="Every IMPEX Deal Starts With Intelligence"
          intro="OTI is a pan-African trade publication that tracks deal flow, corridor infrastructure, capital access, and business policy across the SADC-COMESA region."
        />
        <Prose>
          <p>IMPEX does not exist in isolation. It is the annual culmination of OTI, published every Thursday and authored by Maria Masiri. Its current series, <em>The Ledger</em>, opens the Opportunity Register band by band.</p>
          <p>OTI subscribers get early intelligence on IMPEX deal flow, pre-qualified corridor opportunities, and first access to Founding Delegate registration windows and event dates.</p>
        </Prose>
        <div className="mt-8"><ButtonLink href={otiLink("oti-hero")} external>Subscribe to OTI — free</ButtonLink></div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="OTI articles" accent={GREEN} title="Read the intelligence" intro="Selected issues from the OTI archive on Substack." />
        <ul className="grid gap-5 sm:grid-cols-2">
          {otiArticles.map((a) => (
            <li key={a.title}>
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full group-hover:border-charcoal/30">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{a.issue}</p>
                  <h3 className="mt-2 flex items-start justify-between gap-3 font-heading text-base font-bold">
                    {a.title}
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-grey transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-onelife-red" />
                  </h3>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
