import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Card, PageHero, Section, SectionHeading, Prose } from "@/components/site/ui";
import { GREEN, otiArticles, otiLink } from "../data";

export const metadata: Metadata = {
  title: "OTI — Onelife Trade Intelligence | IMPEX 2027 | OneLife",
  description:
    "OTI is a pan-African trade publication tracking deal flow, corridor infrastructure, capital access, and business policy across SADC-COMESA.",
};

export default function ImpexOtiPage() {
  return (
    <>
      <PageHero
        eyebrow="IMPEX 2027 · OTI"
        accent="#C9A961"
        title="Every IMPEX Deal Starts With Intelligence"
        intro="OTI — Onelife Trade Intelligence — is a pan-African trade publication that tracks deal flow, corridor infrastructure, capital access, and business policy across the SADC-COMESA region."
      >
        <ButtonLink href={otiLink("oti-hero")} external>Subscribe to OTI — free</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="What is OTI?" accent={GREEN} title="The editorial engine behind IMPEX" />
        <Prose>
          <p>IMPEX does not exist in isolation. It is the annual culmination of OTI, published every Thursday and authored by Maria Masiri. Its current series, <em>The Ledger</em>, opens the Opportunity Register band by band.</p>
          <p>OTI subscribers get early intelligence on IMPEX deal flow, pre-qualified corridor opportunities, and first access to Founding Delegate registration windows and event dates.</p>
        </Prose>
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
