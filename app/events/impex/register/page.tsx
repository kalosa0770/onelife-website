import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageHero, Section, SectionHeading, Checklist } from "@/components/site/ui";
import { GREEN, delegateBenefits } from "../data";

export const metadata: Metadata = {
  title: "Register for IMPEX 2027 | OneLife",
  description: "Register as an IMPEX 2027 Founding Delegate or enquire about a category-exclusive partnership.",
};

export default function ImpexRegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="IMPEX 2027 · Registrations"
        accent={GREEN}
        title="Founding Delegate Status Is Limited"
        intro="IMPEX 2027 is a managed, invitation-quality event. Register now to secure priority Deal Room placement."
      />

      <Section id="register">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Founding Delegate registration" accent={GREEN} title="What Founding Delegate status confers" />
            <Checklist accent={GREEN} items={delegateBenefits} />
            <p className="mt-6 text-sm leading-relaxed text-slate-grey">
              The form opens a prefilled email draft. Send it to the IMPEX team to register your interest; the team can then follow up with qualification steps.
            </p>
            <div className="mt-8 rounded-xl bg-surface p-6">
              <h3 className="font-heading text-base font-bold">Don&rsquo;t just attend. Arrive bankable.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                The SME Fundability Programme is a pre-summit readiness process — business model documentation, financial presentation, corridor opportunity mapping and deal introductions. Completing it is the qualification for access to the IMPEX Deal Room. Open to Founding Delegates and Early-Bird registrants.
              </p>
            </div>
          </div>
          <div className="self-start rounded-xl border border-charcoal/10 bg-white p-6 shadow-lg sm:p-8">
            <LeadForm formId="impex-delegate" accent={GREEN} />
          </div>
        </div>
      </Section>

      <Section id="partner" tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Partner / sponsor enquiry"
              accent={GREEN}
              title="Category Partnerships Are Exclusive"
              intro="IMPEX 2027 offers a small number of category-exclusive partnership positions. No category is sold twice. Several categories are already in discussion."
            />
          </div>
          <div className="self-start rounded-xl border border-charcoal/10 bg-white p-6 shadow-lg sm:p-8">
            <LeadForm formId="impex-partner" accent={GREEN} />
          </div>
        </div>
      </Section>
    </>
  );
}
