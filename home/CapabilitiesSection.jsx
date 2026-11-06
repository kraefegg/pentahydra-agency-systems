import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { useLocale } from "@/lib/i18n";

export default function CapabilitiesSection() {
  const { t } = useLocale();
  const caps = t.home.capabilities;

  return (
    <section className="relative border-t border-titanium/12 py-20 md:py-28">
      <div className="ph-container">
        <SectionHead label={caps.label} title={caps.title} intro={caps.intro} />

        <div className="mt-14 grid gap-px bg-titanium/12 sm:grid-cols-2 lg:grid-cols-3">
          {caps.items.map((item) => (
            <Link
              key={item.n}
              to={item.to}
              className="ph-focus group relative flex flex-col justify-between gap-8 bg-ink p-7 transition-colors duration-300 hover:bg-graphite/60"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="ph-mono text-[0.625rem] tracking-[0.2em] text-titanium/40">
                    {item.n}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-titanium/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold leading-snug text-platinum">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-titanium/70">{item.text}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-titanium/15 px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-titanium/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}

          <div className="flex flex-col justify-between gap-6 bg-graphite/70 p-7">
            <p className="font-mono text-[0.625rem] uppercase leading-loose tracking-[0.18em] text-titanium/60">
              {t.ui.scopeNote}
            </p>
            <Link
              to="/contact"
              className="ph-focus inline-flex items-center gap-2 border border-cyan/50 px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-cyan transition-colors hover:bg-cyan hover:text-ink"
            >
              {t.ui.ctaPrimary}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}