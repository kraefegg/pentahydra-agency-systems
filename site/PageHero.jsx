import { Eyebrow } from "@/components/site/SectionHead";
import { cn } from "@/lib/utils";

export default function PageHero({ label, title, intro, meta = [], className }) {
  return (
    <section className={cn("relative overflow-hidden border-b border-titanium/12", className)}>
      <div className="ph-glow pointer-events-none absolute inset-0 opacity-80" />
      <div className="ph-blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="ph-container relative py-16 md:py-24">
        <Eyebrow>{label}</Eyebrow>
        <h1 className="mt-8 max-w-5xl font-heading text-[clamp(2.1rem,4.6vw,3.75rem)] font-semibold uppercase leading-[0.98] tracking-[-0.03em] text-platinum">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-titanium/80 md:text-lg">
            {intro}
          </p>
        )}
        {meta.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-titanium/12 pt-5">
            {meta.map((item) => (
              <span key={item} className="ph-label text-[0.5625rem] text-titanium/45">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}