import { WhoWeAreHero } from "./sections/WhoWeAreHero";
import { ImperfectOPhilosophy } from "./sections/ImperfectOPhilosophy";
import { MissionVision } from "./sections/MissionVision";
import { CoreValues } from "./sections/CoreValues";
import { FourPhaseApproach } from "./sections/FourPhaseApproach";
import { LeadershipAlliance } from "./sections/LeadershipAlliance";
import { getSingleton, getItems } from "@/lib/content/read";
import type {
  EyebrowDescription,
  EyebrowHeading,
  ImperfectPhilosophy,
  MissionVisionCard,
  CoreValue,
  FourPhaseStep,
  LeadershipAllianceIntro,
  StaffMember,
  HighlightItem,
} from "@/lib/content/read";

export const dynamic = "force-dynamic";

export default async function WhoWeArePage() {
  const [
    heroContent,
    philosophy,
    missionVisionCards,
    coreValuesIntro,
    coreValues,
    fourPhaseIntro,
    fourPhaseSteps,
    allianceIntro,
    staff,
    allianceHighlights,
  ] = await Promise.all([
    getSingleton<EyebrowDescription>("who-we-are-hero", { eyebrow: "", description: "" }),
    getSingleton<ImperfectPhilosophy>("imperfect-philosophy", {
      eyebrow: "",
      heading: "",
      paragraph1: "",
      paragraph2: "",
      quote: "",
    }),
    getItems<MissionVisionCard>("mission-vision-cards", {
      eyebrow: "",
      heading: "",
      description: "",
      image: "",
    }),
    getSingleton<EyebrowHeading>("core-values-intro", { eyebrow: "", heading: "" }),
    getItems<CoreValue>("core-values", { title: "", description: "", icon: "Compass" }),
    getSingleton<EyebrowDescription>("four-phase-intro", { eyebrow: "", description: "" }),
    getItems<FourPhaseStep>("four-phase-steps", { step: "", name: "", detail: "" }),
    getSingleton<LeadershipAllianceIntro>("leadership-alliance-intro", {
      eyebrow: "",
      heading: "",
      description: "",
    }),
    getItems<StaffMember>("staff", {
      name: "",
      role: "",
      bio: "",
      photoUrl: "",
      isFeatured: "false",
      highlights: [],
    }),
    getItems<HighlightItem>("alliance-highlights", { icon: "ShieldCheck", title: "", body: "" }),
  ]);

  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        <WhoWeAreHero content={heroContent} />
        <ImperfectOPhilosophy content={philosophy} />
        <MissionVision cards={missionVisionCards} />
        <CoreValues intro={coreValuesIntro} values={coreValues} />
        <FourPhaseApproach intro={fourPhaseIntro} steps={fourPhaseSteps} />
        <LeadershipAlliance intro={allianceIntro} staff={staff} highlights={allianceHighlights} />
      </main>
    </div>
  );
}
