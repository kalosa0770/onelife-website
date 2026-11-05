import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/ui";
import { ROSE } from "../data";

export function EventDetails() {
  return (
    <Section id="event" tone="surface">
      <SectionHeading
        eyebrow="Event dates"
        accent={ROSE}
        title="Smart Woman Summit ’27 dates to be announced."
        intro="We’ll share the date, venue and ticketing details as soon as they are confirmed. Register your interest to hear first."
      />
      <div className="grid gap-5 sm:grid-cols-3">
        {[
          { icon: CalendarDays, label: "Date", value: "To be announced" },
          { icon: MapPin, label: "Location", value: "Lusaka — venue to be announced" },
          { icon: Ticket, label: "Tickets", value: "To be announced" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm">
            <Icon className="h-6 w-6" style={{ color: ROSE }} />
            <p className="mt-4 font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{label}</p>
            <p className="mt-1 font-heading text-lg font-bold">{value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
