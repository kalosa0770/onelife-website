import { BookOpen, Briefcase, Mic } from "lucide-react";
import { Card, Section, SectionHeading } from "@/components/site/ui";
import { ROSE } from "../data";

const programmes = [
  { icon: BookOpen, name: "Sip & Read Book Club", body: "A monthly club for women who want to read, talk and learn about money together." },
  { icon: Briefcase, name: "SME Month", body: "Each January: partnership announcements and activations for women in business." },
  { icon: Mic, name: "The Summit", body: "The flagship day — honest conversations about earning, growing and protecting money." },
];

export function Literacy() {
  return (
    <Section id="literacy">
      <SectionHeading
        eyebrow="The platform"
        accent={ROSE}
        title="Financial literacy, all year round."
        intro="The Summit is the flagship day of a year-round platform that starts with the money conversations women don’t usually have out loud — and keeps going long after the day itself."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {programmes.map(({ icon: Icon, name, body }) => (
          <Card key={name}>
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-heading text-lg font-bold">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-grey">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
