import { TrackRecordContent } from "./TrackRecordContent";
import { TRACK_RECORD_CONTENT } from "@/lib/site/content-data";

export default function TrackRecordPage() {
  return (
    <TrackRecordContent
      intro={TRACK_RECORD_CONTENT.intro}
      stats={TRACK_RECORD_CONTENT.stats}
      milestones={TRACK_RECORD_CONTENT.milestones}
      caseStudies={TRACK_RECORD_CONTENT.caseStudies}
    />
  );
}
