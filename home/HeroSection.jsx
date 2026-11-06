import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useLocale } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useLocale();
  const hero = t.home.hero;

  return (
    <section className="ph-glow relative overflow-hidden" aria-label={hero.eyebrow}>
      <div className="ph-blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div className="ph-container relative pb-12 pt-12 md:pt-16">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div className="flex min-w-0 flex-col justify-between gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-px w-10 bg-cyan" />
                <span className="ph-label text-cyan">{hero.eyebrow}</span>
              </div>
              <h1 className="ph-display mt-9 text-[clamp(2.3rem,6.1vw,4.55rem)] text-platinum">
                {hero.title}
              </h1>
            </div>

            <div className="max-w-[38ch]">
              <p className="text-base leading-relaxed text-titanium md:text-lg">{hero.body}</p>
              <div className="mt-9 flex flex-col items-start gap-3">
                <Link
                  to={hero.primary.to}
                  className="ph-focus group inline-flex items-center gap-3 bg-platinum px-6 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-cyan"
                >
                  {hero.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={hero.secondary.to}
                  className="ph-focus group inline-flex items-center gap-3 border border-titanium/35 px-6 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-platinum transition-colors hover:border-cyan hover:text-cyan"
                >
                  {hero.secondary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <figure className="relative flex">
            <div className="relative w-full overflow-hidden border border-titanium/15 bg-graphite/50">
              <div className="relative aspect-[602/628] w-full">
                <Image src={hero.image} alt={hero.imageAlt} className="h-full w-full" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-cyan/60" />
              <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-cyan/60" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-titanium/15 bg-ink/75 px-4 py-3 backdrop-blur-sm">
                <span className="ph-label text-[0.5rem] text-titanium/70">{hero.caption}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse bg-cyan" />
                  <span className="ph-label text-[0.5rem] text-cyan">R&amp;D</span>
                </span>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-titanium/12 pt-5">
          {hero.meta.map((item) => (
            <span key={item} className="ph-label text-[0.5625rem] text-titanium/45">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}