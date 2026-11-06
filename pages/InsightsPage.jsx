import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import { useLocale } from "@/lib/i18n";

export default function InsightsPage() {
  const { t } = useLocale();
  const data = t.insights;

  return (
    <>
      <PageHero
        label={data.hero.label}
        title={data.hero.title}
        intro={data.hero.intro}
        meta={data.hero.meta}
      />
      <section className="border-b border-titanium/12 bg-graphite/30">
        <div className="ph-container py-5">
          <p className="font-mono text-[0.625rem] uppercase leading-loose tracking-[0.14em] text-titanium/55">
            {data.note}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="ph-container grid gap-px bg-titanium/12 md:grid-cols-2">
          {data.items.map((article, i) => (
            <Link
              key={article.slug}
              to="/insights/$slug"
              params={{ slug: article.slug }}
              className="ph-focus group flex flex-col justify-between gap-8 bg-ink p-8 transition-colors duration-300 hover:bg-graphite/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-cyan">
                    {article.category}
                  </span>
                  <span className="ph-mono text-[0.5625rem] tracking-[0.2em] text-titanium/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-heading text-xl font-semibold leading-snug text-platinum">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-titanium/70">{article.abstract}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-titanium/60 transition-colors group-hover:text-cyan">
                {t.ui.readMore}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand data={t.home.cta} />
    </>
  );
}