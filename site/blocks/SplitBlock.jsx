import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Eyebrow } from "@/components/site/SectionHead";
import { cn } from "@/lib/utils";

export default function SplitBlock({
  label,
  heading,
  paragraphs = [],
  points = [],
  image,
  flip,
  note,
  links = [],
}) {
  return (
    <section className="border-t border-titanium/12 py-16 md:py-24">
      <div className="ph-container grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={cn(image && flip && "lg:order-2")}>
          {image ? (
            <figure className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-titanium/15">
                <Image src={image.src} alt={image.alt} className="h-full w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
              {image.caption && (
                <figcaption className="mt-3 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-titanium/45">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <div className="border border-titanium/15 bg-graphite/40 p-8">
              <ul className="divide-y divide-titanium/10">
                {points.map((point, i) => (
                  <li key={point.title} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                    <span className="ph-mono w-7 shrink-0 pt-1 text-[0.5625rem] tracking-[0.16em] text-cyan/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-platinum">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-titanium/65">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={cn(image && flip && "lg:order-1")}>
          {label && <Eyebrow>{label}</Eyebrow>}
          {heading && (
            <h2 className="mt-6 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-platinum sm:text-[2rem]">
              {heading}
            </h2>
          )}
          <div className="mt-5 space-y-4">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 28)} className="text-base leading-relaxed text-titanium/80">
                {p}
              </p>
            ))}
          </div>
          {links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ph-focus inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-platinum transition-colors hover:border-cyan hover:bg-cyan hover:text-ink"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
          {image && points.length > 0 && (
            <ul className="mt-8 divide-y divide-titanium/10 border-y border-titanium/12">
              {points.map((point) => (
                <li key={point.title} className="flex gap-4 py-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-platinum">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-titanium/65">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {note && (
            <p className="mt-8 border-l border-cyan/40 pl-4 font-mono text-[0.625rem] uppercase leading-loose tracking-[0.14em] text-titanium/50">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}