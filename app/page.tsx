import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Capabilities } from "@/components/Capabilities";
import { TrackRecord } from "@/components/TrackRecord";
import { Platforms } from "@/components/Platforms";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-white text-charcoal overflow-hidden">
      <Hero />
      <WhoWeAre />
      <Capabilities />
      <TrackRecord />
      <Platforms />
      <Leadership />
      <Contact />
    </main>
  );
}