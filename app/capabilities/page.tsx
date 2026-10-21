import { CapabilitiesContent } from "./CapabilitiesContent";
import { CAPABILITIES_PAGE_CONTENT } from "@/lib/site/content-data";

export default function CapabilitiesPage() {
  return (
    <CapabilitiesContent
      intro={CAPABILITIES_PAGE_CONTENT.intro}
      sections={CAPABILITIES_PAGE_CONTENT.sections}
      cta={CAPABILITIES_PAGE_CONTENT.cta}
    />
  );
}
