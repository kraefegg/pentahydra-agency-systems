import { SectionHead } from "@/components/site/SectionHead";

export default function TimelineBlock({ label, heading, intro, phases = [] }) {
  return (
    <section className="ph-blueprint border-t border-titanium/12 bg-graphite/20 py-16 md:py-24">
      <div className="ph-container">
        <SectionHead label={label} title={heading} intro={intro} />
        <ol className="mt-12 grid gap-px bg-titanium/12 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, i) => (
            <li key={phase.title} className="flex flex-col gap-5 bg-ink p-7">
              <div className="flex items-center justify-between">
                <span className="ph-mono text-[0.625rem] tracking-[0.2em] text-cyan">
                  {phase.tag ?? `PH/0${i + 1}`}
                </span>
                <span className="h-px w-8 bg-titanium/25" />
              </div>
              <h3 className="font-heading text-base font-semibold leading-snug text-platinum">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed text-titanium/65">{phase.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}