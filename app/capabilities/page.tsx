import { CapabilitiesContent } from "./CapabilitiesContent";
import { getSingleton, getItems } from "@/lib/content/read";
import type {
  EyebrowDescription,
  CapabilitySection,
  HeadingOnly,
} from "@/lib/content/read";

export const dynamic = "force-dynamic";

export default async function CapabilitiesPage() {
  const [intro, sections, cta] = await Promise.all([
    getSingleton<EyebrowDescription>("capabilities-intro", {
      eyebrow: "",
      description: "",
      backgroundImage: "",
    }),
    getItems<CapabilitySection>("capability-sections", {
      slug: "",
      badge: "",
      title: "",
      tagline: "",
      description: "",
      icon: "Compass",
      image: "",
      proofPoint: "",
      deliverables: [],
    }),
    getSingleton<HeadingOnly>("capabilities-cta", { heading: "" }),
  ]);

  return <CapabilitiesContent intro={intro} sections={sections} cta={cta} />;
}
