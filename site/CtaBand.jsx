import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function CtaBand({ data }) {
  return (
    <section className="ph-glow relative overflow-hidden border-t border-titanium/12">
      <div className="ph-blueprint-fine pointer-events-none absolute inset-0 opacity-50" />
      <div className="ph-container relative py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="ph-label text-cyan">{data.label}</span>
            <h2 className="ph-display mt-6 text-[clamp(1.9rem,4.4vw,3.25rem)] text-platinum">
              {data.title}
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-titanium/80">{data.text}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                to={data.primary.to}
                className="ph-focus group inline-flex items-center gap-3 bg-cyan px-6 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-platinum"
              >
                {data.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={data.secondary.to}
                className="ph-focus group inline-flex items-center gap-3 border border-titanium/30 px-6 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-platinum transition-colors hover:border-cyan hover:text-cyan"
              >
                {data.secondary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}