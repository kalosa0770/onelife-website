import { WhoWeAreHero } from "./sections/WhoWeAreHero";
import { ImperfectOPhilosophy } from "./sections/ImperfectOPhilosophy";
import { MissionVision } from "./sections/MissionVision";
import { CoreValues } from "./sections/CoreValues";
import { FourPhaseApproach } from "./sections/FourPhaseApproach";
import { LeadershipAlliance } from "./sections/LeadershipAlliance";
import { WHO_WE_ARE_CONTENT } from "@/lib/site/content-data";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        <WhoWeAreHero content={WHO_WE_ARE_CONTENT.hero} />
        <ImperfectOPhilosophy content={WHO_WE_ARE_CONTENT.philosophy} />
        <MissionVision cards={WHO_WE_ARE_CONTENT.missionVision} />
        <CoreValues intro={WHO_WE_ARE_CONTENT.coreValuesIntro} values={WHO_WE_ARE_CONTENT.coreValues} />
        <FourPhaseApproach intro={WHO_WE_ARE_CONTENT.fourPhaseIntro} steps={WHO_WE_ARE_CONTENT.fourPhaseSteps} />
        <LeadershipAlliance
          intro={WHO_WE_ARE_CONTENT.allianceIntro}
          staff={WHO_WE_ARE_CONTENT.staff}
          highlights={WHO_WE_ARE_CONTENT.allianceHighlights}
        />
      </main>
    </div>
  );
}
