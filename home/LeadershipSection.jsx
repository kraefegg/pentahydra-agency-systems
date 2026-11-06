import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/SectionHead";
import { ASSETS } from "@/content/assets";
import { Image } from "@/components/ui/image";
import { useLocale } from "@/lib/i18n";

export default function LeadershipSection() {
  const { t } = useLocale();
  const lead = t.home.leadership;

  return (
    <section className="relative border-t border-titanium/12 bg-graphite/30 py-20 md:py-28">
      <div className="ph-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow>{lead.label}</Eyebrow>
          <div className="mt-8 flex items-center gap-5">
            <span className="relative block h-16 w-16 shrink-0 overflow-hidden border border-titanium/20">
              <Image
                src={ASSETS.emblem}
                alt={`${t.brand.full} emblem`}
                className="h-full w-full"
                fittingType="fill"
              />
            </span>
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-platinum">
                {lead.name}
              </h2>
              <p className="mt-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-cyan">
                {lead.role}
              </p>
            </div>
          </div>
          <Link
            to={lead.cta.to}
            className="ph-focus group mt-8 inline-flex items-center gap-3 border border-titanium/25 px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-platinum transition-colors hover:border-cyan hover:text-cyan"
          >
            {lead.cta.label}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div>
          <p className="text-base leading-relaxed text-titanium/85 md:text-[1.0625rem]">{lead.bio}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {lead.areas.map((area) => (
              <span
                key={area}
                className="border border-titanium/15 bg-ink/40 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-titanium/65"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}