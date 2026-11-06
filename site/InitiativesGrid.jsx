import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import StatusBadge from "@/components/site/StatusBadge";
import { useLocale } from "@/lib/i18n";

export default function InitiativesGrid({ limit }) {
  const { t } = useLocale();
  const items = limit ? t.products.items.slice(0, limit) : t.products.items;

  return (
    <div className="grid gap-px bg-titanium/12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.slug}
          to="/products/$slug"
          params={{ slug: item.slug }}
          className="ph-focus group flex flex-col justify-between gap-8 bg-ink p-7 transition-colors duration-300 hover:bg-graphite/60"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <StatusBadge status={item.status} />
              <ArrowUpRight className="h-4 w-4 text-titanium/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
            </div>
            <h3 className="mt-6 font-heading text-lg font-semibold leading-snug text-platinum">
              {item.name}
            </h3>
            <p className="mt-1.5 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-cyan/80">
              {item.kind}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-titanium/70">{item.summary}</p>
          </div>
          <dl className="grid grid-cols-2 gap-3 border-t border-titanium/12 pt-4">
            <div>
              <dt className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-titanium/40">
                {t.ui.statusLabel}
              </dt>
              <dd className="mt-1 text-[0.6875rem] text-titanium/70">{item.phase}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-titanium/40">
                {t.products.audienceLabel}
              </dt>
              <dd className="mt-1 text-[0.6875rem] text-titanium/70">{item.audience}</dd>
            </div>
          </dl>
        </Link>
      ))}
    </div>
  );
}