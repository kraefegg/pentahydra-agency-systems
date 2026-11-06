import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import BlockRenderer from "@/components/site/blocks/BlockRenderer";
import StatusBadge from "@/components/site/StatusBadge";
import { useLocale } from "@/lib/i18n";

function SpecRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="border-t border-titanium/12 py-5">
      <dt className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/40">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-titanium/85">{value}</dd>
    </div>
  );
}

function SpecList({ label, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="border-t border-titanium/12 py-5">
      <dt className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/40">{label}</dt>
      <dd>
        <ul className="mt-2 space-y-1.5">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed text-titanium/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-cyan/70" />
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export default function ProductDetailPage({ slug }) {
  const { t } = useLocale();
  const item = t.products.items.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <div className="ph-container py-32">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-titanium/50">
          404 · INITIATIVE NOT FOUND
        </p>
        <Link
          to="/products"
          className="ph-focus mt-6 inline-flex items-center gap-2 border border-titanium/25 px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-platinum hover:border-cyan hover:text-cyan"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t.products.backLabel}
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        label={item.kind}
        title={item.name}
        intro={item.summary}
        meta={[`STATUS · ${t.status[item.status].toUpperCase()}`, `PHASE · ${item.phase.toUpperCase()}`]}
      />

      <section className="border-b border-titanium/12">
        <div className="ph-container grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Link
              to="/products"
              className="ph-focus inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-titanium/50 transition-colors hover:text-cyan"
            >
              <ArrowLeft className="h-3 w-3" />
              {t.products.backLabel}
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StatusBadge status={item.status} />
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-titanium/45">
                {item.phase}
              </span>
            </div>
          </div>

          <dl className="grid gap-x-10 sm:grid-cols-2">
            <SpecRow label={t.products.statusLabel} value={t.status[item.status]} />
            <SpecRow label={t.products.audienceLabel} value={item.audience} />
            <SpecRow label={t.products.purposeLabel} value={item.purpose} />
            <SpecList label={t.products.capabilitiesLabel} items={item.capabilities} />
            <SpecList label={t.products.industriesLabel} items={item.industries} />
          </dl>
        </div>
      </section>

      <BlockRenderer blocks={item.blocks} />
    </>
  );
}