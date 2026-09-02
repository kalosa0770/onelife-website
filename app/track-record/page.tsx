import { TrackRecordContent } from "./TrackRecordContent";
import { getSingleton, getItems } from "@/lib/content/read";
import type {
  EyebrowDescription,
  TrackRecordStat,
  TrackRecordMilestone,
  TrackRecordCaseStudy,
} from "@/lib/content/read";

export const dynamic = "force-dynamic";

export default async function TrackRecordPage() {
  const [intro, stats, milestones, caseStudies] = await Promise.all([
    getSingleton<EyebrowDescription>("track-record-intro", {
      eyebrow: "",
      description: "",
      backgroundImage: "",
    }),
    getItems<TrackRecordStat>("track-record-stats", { value: "", label: "", icon: "ShieldCheck" }),
    getItems<TrackRecordMilestone>("track-record-milestones", {
      year: "",
      title: "",
      description: "",
    }),
    getItems<TrackRecordCaseStudy>("track-record-case-studies", {
      category: "",
      title: "",
      challenge: "",
      solution: "",
      impact: "",
      image: "",
    }),
  ]);

  return (
    <TrackRecordContent
      intro={intro}
      stats={stats}
      milestones={milestones}
      caseStudies={caseStudies}
    />
  );
}
