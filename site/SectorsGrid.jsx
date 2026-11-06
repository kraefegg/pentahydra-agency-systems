import { useLocale } from "@/lib/i18n";

export default function SectorsGrid({ detailed = false }) {
  const { t } = useLocale();

  return (
    <div className="grid gap-px bg-titanium/12 sm:grid-cols-2 lg:grid-cols-3">
      {t.industries.items.map((item, i) => (
        <article
          key={item.name}
          className="group flex flex-col gap-4 bg-ink p-6 transition-colors duration-300 hover:bg-graphite/60"
        >
          <div className="flex items-center justify-between">
            <span className="ph-mono text-[0.5625rem] tracking-[0.2em] text-titanium/35">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-6 bg-titanium/20 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan/70" />
          </div>
          <h3 className="font-heading text-[0.95rem] font-semibold uppercase leading-snug tracking-wide text-platinum">
            {item.name}
          </h3>
          <p className="text-sm leading-relaxed text-titanium/65">{item.challenge}</p>
          {detailed && (
            <ul className="mt-1 space-y-1.5 border-t border-titanium/10 pt-3">
              {item.solutions.map((solution) => (
                <li key={solution} className="flex gap-2 text-[0.8125rem] leading-relaxed text-titanium/55">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-cyan/60" />
                  {solution}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}