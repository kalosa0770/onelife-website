import { WhoWeAreHero } from "./sections/WhoWeAreHero";
import { ImperfectOPhilosophy } from "./sections/ImperfectOPhilosophy";
import { MissionVision } from "./sections/MissionVision";
import { CoreValues } from "./sections/CoreValues";
import { FourPhaseApproach } from "./sections/FourPhaseApproach";
import { LeadershipAlliance } from "./sections/LeadershipAlliance";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        <WhoWeAreHero />
        <ImperfectOPhilosophy />
        <MissionVision />
        <CoreValues />
        <FourPhaseApproach />
        <LeadershipAlliance />
      </main>
    </div>
  );
}