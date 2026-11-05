import { ContactPanel } from "@/components/site/ContactPanel";
import { TEAL } from "@/components/site/ui";
import { SITE_SETTINGS } from "@/lib/site/content-data";

export function Contact() {
  return (
    <div id="contact" className="scroll-mt-40">
      <ContactPanel
        settings={SITE_SETTINGS}
        formId="health-corridor"
        accent={TEAL}
        eyebrow="Get in touch"
        title="Join or enquire about the corridor"
        intro="Hospitals, insurers, institutions and patients — register a hospital, propose an insurance partnership, or ask a question."
      />
    </div>
  );
}
