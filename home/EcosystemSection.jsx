import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { useLocale } from "@/lib/i18n";

export default function EcosystemSection() {
  const { t } = useLocale();
  const eco = t.home.ecosystem;

  return (
    <section className="ph-blueprint relative border-t border-titanium/12 bg-graphite/20 py-20 md:py-28">
      <div className="ph-container">
        <SectionHead label={eco.label} title={eco.title} intro={eco.intro} />

        <div className="mt-14 grid gap-px bg-titanium/12 lg:grid-cols-[0.85fr_1.15fr]">
          <Link
            to={eco.core.to}
            className="ph-focus group relative flex flex-col justify-between gap-10 bg-ink p-8 transition-colors hover:bg-graphite/60 md:p-10"
          >
            <div>
              <span className="ph-mono text-[0.5625rem] uppercase tracking-[0.24em] text-cyan">
                {eco.core.subtitle}
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight text-platinum sm:text-[1.75rem]">
                {eco.core.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-titanium/75">{eco.core.text}</p>
            </div>
            <div className="flex items-center justify-between border-t border-titanium/12 pt-5">
              <span className="ph-label text-[0.5625rem] text-titanium/50">SYS · 01</span>
              <span className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-cyan">
                {t.ui.readMore}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <ol className="bg-ink">
            {eco.layers.map((layer) => (
              <li
                key={layer.n}
                className="group flex gap-5 border-b border-titanium/10 px-6 py-5 transition-colors last:border-b-0 hover:bg-graphite/50 md:px-8"
              >
                <span className="ph-mono w-8 shrink-0 pt-0.5 text-[0.625rem] tracking-[0.16em] text-cyan/70">
                  {layer.n}
                </span>
                <div>
                  <h4 className="font-heading text-[0.95rem] font-semibold uppercase tracking-wide text-platinum">
                    {layer.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-titanium/65">{layer.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}