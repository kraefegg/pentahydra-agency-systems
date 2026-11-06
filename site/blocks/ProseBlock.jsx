import { Eyebrow } from "@/components/site/SectionHead";
import { cn } from "@/lib/utils";

export default function ProseBlock({ label, heading, paragraphs = [], narrow = false }) {
  return (
    <section className="border-t border-titanium/12 py-16 md:py-20">
      <div className="ph-container grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
        <div>
          {label && <Eyebrow>{label}</Eyebrow>}
          {heading && (
            <h2 className="mt-6 max-w-sm font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-platinum sm:text-3xl">
              {heading}
            </h2>
          )}
        </div>
        <div className={cn("space-y-5", narrow && "max-w-3xl")}>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 28)} className="text-base leading-relaxed text-titanium/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}