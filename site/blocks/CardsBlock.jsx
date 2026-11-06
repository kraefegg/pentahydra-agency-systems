import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { cn } from "@/lib/utils";

export default function CardsBlock({ label, heading, intro, items = [], columns = 3 }) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="border-t border-titanium/12 py-16 md:py-24">
      <div className="ph-container">
        {(label || heading || intro) && <SectionHead label={label} title={heading} intro={intro} />}
        <div className={cn("mt-12 grid gap-px bg-titanium/12", gridClass)}>
          {items.map((item, index) => {
            const Wrapper = item.to ? Link : "div";
            const wrapperProps = item.to ? { to: item.to } : {};
            return (
              <Wrapper
                key={item.title}
                {...wrapperProps}
                className={cn(
                  "group relative flex flex-col gap-4 bg-ink p-7 transition-colors duration-300 hover:bg-graphite/60",
                  item.to && "ph-focus"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="ph-mono text-[0.5625rem] tracking-[0.22em] text-titanium/35">
                    {item.tag ?? String(index + 1).padStart(2, "0")}
                  </span>
                  {item.to && (
                    <ArrowUpRight className="h-4 w-4 text-titanium/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  )}
                </div>
                <h3 className="font-heading text-base font-semibold leading-snug text-platinum">
                  {item.title}
                </h3>
                {item.text && (
                  <p className="text-sm leading-relaxed text-titanium/70">{item.text}</p>
                )}
                {item.points && (
                  <ul className="mt-1 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-titanium/65">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-cyan/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}