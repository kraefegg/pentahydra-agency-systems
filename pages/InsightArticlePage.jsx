import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import BlockRenderer from "@/components/site/blocks/BlockRenderer";
import CtaBand from "@/components/site/CtaBand";
import { useLocale } from "@/lib/i18n";

export default function InsightArticlePage({ slug }) {
  const { t } = useLocale();
  const article = t.insights.items.find((entry) => entry.slug === slug);

  if (!article) {
    return (
      <div className="ph-container py-32">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-titanium/50">
          404 · INSIGHT NOT FOUND
        </p>
        <Link
          to="/insights"
          className="ph-focus mt-6 inline-flex items-center gap-2 border border-titanium/25 px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-platinum hover:border-cyan hover:text-cyan"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t.insights.hero.label}
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        label={article.category}
        title={article.title}
        intro={article.abstract}
        meta={["PENTAHYDRA ENGINEERING · EDITORIAL"]}
      />
      <div className="border-b border-titanium/12">
        <div className="ph-container py-6">
          <Link
            to="/insights"
            className="ph-focus inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-titanium/50 transition-colors hover:text-cyan"
          >
            <ArrowLeft className="h-3 w-3" />
            {t.insights.hero.label}
          </Link>
        </div>
      </div>
      <BlockRenderer blocks={article.blocks} />
      <CtaBand data={t.home.cta} />
    </>
  );
}