import { SectionHead } from "@/components/site/SectionHead";
import InitiativesGrid from "@/components/site/InitiativesGrid";
import { useLocale } from "@/lib/i18n";

export default function InitiativesSection() {
  const { t } = useLocale();
  const data = t.home.products;

  return (
    <section className="border-t border-titanium/12 py-20 md:py-28">
      <div className="ph-container">
        <SectionHead label={data.label} title={data.title} intro={data.intro} />
        <div className="mt-12">
          <InitiativesGrid limit={3} />
        </div>
        <p className="mt-6 font-mono text-[0.625rem] uppercase leading-loose tracking-[0.14em] text-titanium/45">
          {t.ui.scopeNote}
        </p>
      </div>
    </section>
  );
}