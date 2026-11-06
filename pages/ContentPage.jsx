import PageHero from "@/components/site/PageHero";
import BlockRenderer from "@/components/site/blocks/BlockRenderer";
import { useLocale } from "@/lib/i18n";

export default function ContentPage({ pageKey }) {
  const { t } = useLocale();
  const page = t.pages[pageKey];

  if (!page) return null;

  return (
    <>
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        intro={page.hero.intro}
        meta={page.hero.meta}
      />
      {page.note && (
        <section className="border-b border-titanium/12 bg-graphite/30">
          <div className="ph-container py-5">
            <p className="font-mono text-[0.625rem] uppercase leading-loose tracking-[0.14em] text-titanium/55">
              {page.note}
            </p>
          </div>
        </section>
      )}
      <BlockRenderer blocks={page.blocks} />
    </>
  );
}