import { Image } from "@/components/ui/image";
import { SectionHead } from "@/components/site/SectionHead";

export default function BrandBlock({ label, heading, intro, assets = [], note }) {
  return (
    <section className="border-t border-titanium/12 bg-graphite/25 py-16 md:py-24">
      <div className="ph-container">
        <SectionHead label={label} title={heading} intro={intro} />
        <div className="mt-12 grid gap-px bg-titanium/12 sm:grid-cols-2 lg:grid-cols-3">
          {assets.map((asset) => (
            <figure key={asset.label} className="bg-ink p-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-titanium/12">
                <Image src={asset.src} alt={asset.alt} className="h-full w-full" fittingType="fill" />
              </div>
              <figcaption className="mt-3 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-titanium/45">
                {asset.label}
              </figcaption>
            </figure>
          ))}
        </div>
        {note && (
          <p className="mt-8 max-w-3xl border-l border-cyan/40 pl-4 font-mono text-[0.625rem] uppercase leading-loose tracking-[0.14em] text-titanium/50">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}