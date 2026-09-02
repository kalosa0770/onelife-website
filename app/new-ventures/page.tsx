import { VenturesContent } from "./VenturesContent";
import { getSingleton, getItems } from "@/lib/content/read";
import type { EyebrowDescription, Venture } from "@/lib/content/read";

export const dynamic = "force-dynamic";

export default async function NewVenturesPage() {
  const [intro, ventures] = await Promise.all([
    getSingleton<EyebrowDescription>("ventures-intro", {
      eyebrow: "",
      description: "",
      backgroundImage: "",
    }),
    getItems<Venture>("ventures", {
      badge: "",
      title: "",
      description: "",
      icon: "Globe2",
      image: "",
      points: [],
      ctaLabel: "",
      ctaHref: "",
    }),
  ]);

  return <VenturesContent intro={intro} ventures={ventures} />;
}
