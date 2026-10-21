import type { Metadata } from "next";
import { PageHero } from "@/components/site/ui";
import { ContactPanel } from "@/components/site/ContactPanel";
import { SITE_SETTINGS } from "@/lib/site/content-data";

export const metadata: Metadata = {
  title: "Contact OneLife | Lusaka, Zambia",
  description: "Get in touch with OneLife Communications & Events Company in Lusaka, Zambia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your challenge."
        intro="One strategic partner, every discipline. Tell us what you’re working on and the right person will come back to you."
      />
      <ContactPanel
        settings={SITE_SETTINGS}
        formId="contact"
        accent="#ED1C24"
        eyebrow="Reach out"
        title="We’d love to hear from you"
        intro="Use the form or contact us directly."
      />
    </>
  );
}
