import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Section, SectionHeading } from "@/components/site/ui";
import type { SiteSettings } from "@/lib/site/content";
import type { FORMS } from "@/lib/site/forms";

export function ContactPanel({
  settings,
  formId,
  accent,
  eyebrow,
  title,
  intro,
}: {
  settings: SiteSettings;
  formId: keyof typeof FORMS;
  accent: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  const details = [
    { icon: MapPin, label: "Visit", value: settings.address, href: undefined },
    { icon: Mail, label: "Email", value: settings.email, href: `mailto:${settings.email}` },
    { icon: Phone, label: "Phone", value: settings.phone, href: `tel:${settings.phone.replace(/\s/g, "")}` },
  ].filter((d) => d.value);

  return (
    <Section tone="surface">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow={eyebrow} accent={accent} title={title} intro={intro} />
          <ul className="space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm" style={{ color: accent }}>
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{label}</p>
                  {href ? (
                    <a href={href} className="text-base font-medium hover:text-onelife-red">{value}</a>
                  ) : (
                    <p className="text-base font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-start rounded-xl border border-charcoal/10 bg-white p-6 shadow-lg sm:p-8 lg:col-span-3">
          <LeadForm formId={formId} accent={accent} />
        </div>
      </div>
    </Section>
  );
}
