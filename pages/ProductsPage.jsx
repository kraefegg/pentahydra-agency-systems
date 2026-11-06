import PageHero from "@/components/site/PageHero";
import InitiativesGrid from "@/components/site/InitiativesGrid";
import CtaBand from "@/components/site/CtaBand";
import { useLocale } from "@/lib/i18n";

export default function ProductsPage() {
  const { t } = useLocale();
  const data = t.products;

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
        <div className="ph-container">
          <InitiativesGrid />
        </div>
      </section>
      <CtaBand data={t.home.cta} />
    </>
  );
}