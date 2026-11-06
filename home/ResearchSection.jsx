import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Eyebrow } from "@/components/site/SectionHead";
import { useLocale } from "@/lib/i18n";

export default function ResearchSection() {
  const { t } = useLocale();
  const research = t.home.research;

  return (
    <section className="border-t border-titanium/12 py-20 md:py-28">
      <div className="ph-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-titanium/15">
            <Image src={research.image} alt={research.imageAlt} className="h-full w-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-px left-0 right-0 flex items-center justify-between border-x border-b border-titanium/15 bg-ink/85 px-4 py-3 backdrop-blur-sm">
            <span className="ph-label text-[0.5rem] text-titanium/60">GEOAI · DIGITAL TWINS · SIMULATION</span>
            <span className="h-1.5 w-1.5 animate-pulse bg-cyan" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>{research.label}</Eyebrow>
          <h2 className="mt-7 font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-platinum sm:text-[2.35rem]">
            {research.title}
          </h2>
          <div className="mt-6 space-y-5">
            {research.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-titanium/80">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-9 divide-y divide-titanium/10 border-y border-titanium/12">
            {research.points.map((point) => (
              <li key={point.title} className="flex gap-5 py-4">
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

          <Link
            to={research.cta.to}
            className="ph-focus group mt-8 inline-flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-cyan"
          >
            {research.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}