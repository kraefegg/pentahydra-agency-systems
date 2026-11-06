import { Eyebrow } from "@/components/site/SectionHead";

export default function ListBlock({ label, heading, intro, items = [] }) {
  return (
    <section className="border-t border-titanium/12 py-16 md:py-24">
      <div className="ph-container grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
        <div>
          {label && <Eyebrow>{label}</Eyebrow>}
          {heading && (
            <h2 className="mt-6 max-w-sm font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-platinum sm:text-3xl">
              {heading}
            </h2>
          )}
          {intro && <p className="mt-5 max-w-sm text-sm leading-relaxed text-titanium/70">{intro}</p>}
        </div>
        <ol className="divide-y divide-titanium/10 border-t border-titanium/12">
          {items.map((item, i) => (
            <li key={item.title} className="group flex gap-6 py-6 transition-colors hover:bg-graphite/30">
              <span className="ph-mono w-9 shrink-0 pt-1 text-[0.625rem] tracking-[0.16em] text-cyan/60">
                {item.n ?? String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-platinum">
                  {item.title}
                </h3>
                {item.text && (
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-titanium/70">{item.text}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}