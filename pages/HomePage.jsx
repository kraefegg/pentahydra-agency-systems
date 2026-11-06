import HeroSection from "@/components/home/HeroSection";
import ArchitectureBand from "@/components/home/ArchitectureBand";
import IntroSection from "@/components/home/IntroSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import InitiativesSection from "@/components/home/InitiativesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ResearchSection from "@/components/home/ResearchSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import CtaBand from "@/components/site/CtaBand";
import { useLocale } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <>
      <HeroSection />
      <ArchitectureBand />
      <IntroSection />
      <CapabilitiesSection />
      <EcosystemSection />
      <InitiativesSection />
      <IndustriesSection />
      <ResearchSection />
      <LeadershipSection />
      <CtaBand data={t.home.cta} />
    </>
  );
}