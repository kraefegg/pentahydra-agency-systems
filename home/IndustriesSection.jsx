import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import SectorsGrid from "@/components/site/SectorsGrid";
import { useLocale } from "@/lib/i18n";

export default function IndustriesSection() {
  const { t } = useLocale();
  const data = t.home.industries;

  return (
    <section className="border-t border-titanium/12 bg-graphite/25 py-20 md:py-28">
      <div className="ph-container">
        <SectionHead label={data.label} title={data.title} intro={data.intro} />
        <div className="mt-12">
          <SectorsGrid />
        </div>
        <Link
          to={data.cta.to}
          className="ph-focus group mt-10 inline-flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-cyan"
        >
          {data.cta.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}