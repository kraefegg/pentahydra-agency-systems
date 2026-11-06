import ProseBlock from "@/components/site/blocks/ProseBlock";
import CardsBlock from "@/components/site/blocks/CardsBlock";
import SplitBlock from "@/components/site/blocks/SplitBlock";
import TimelineBlock from "@/components/site/blocks/TimelineBlock";
import ListBlock from "@/components/site/blocks/ListBlock";
import BrandBlock from "@/components/site/blocks/BrandBlock";
import CtaBand from "@/components/site/CtaBand";
import InitiativesGrid from "@/components/site/InitiativesGrid";
import SectorsGrid from "@/components/site/SectorsGrid";
import { SectionHead } from "@/components/site/SectionHead";
import { useLocale } from "@/lib/i18n";

function InitiativesBlock({ block }) {
  return (
    <section className="border-t border-titanium/12 py-16 md:py-24">
      <div className="ph-container">
        <SectionHead label={block.label} title={block.heading} intro={block.intro} />
        <div className="mt-12">
          <InitiativesGrid />
        </div>
      </div>
    </section>
  );
}

function SectorsBlock({ block }) {
  return (
    <section className="border-t border-titanium/12 py-16 md:py-24">
      <div className="ph-container">
        <SectionHead label={block.label} title={block.heading} intro={block.intro} />
        <div className="mt-12">
          <SectorsGrid detailed />
        </div>
      </div>
    </section>
  );
}

export default function BlockRenderer({ blocks = [] }) {
  const { t } = useLocale();

  return blocks.map((block, index) => {
    switch (block.type) {
      case "prose":
        return <ProseBlock key={index} {...block} />;
      case "cards":
        return <CardsBlock key={index} {...block} />;
      case "split":
        return <SplitBlock key={index} {...block} />;
      case "timeline":
        return <TimelineBlock key={index} {...block} />;
      case "list":
        return <ListBlock key={index} {...block} />;
      case "brand":
        return <BrandBlock key={index} {...block} />;
      case "initiatives":
        return <InitiativesBlock key={index} block={block} />;
      case "sectors":
        return <SectorsBlock key={index} block={block} />;
      case "cta":
        return <CtaBand key={index} data={block.data ?? t.home.cta} />;
      default:
        return null;
    }
  });
}