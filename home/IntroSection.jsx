import { Eyebrow } from "@/components/site/SectionHead";
import { useLocale } from "@/lib/i18n";

export default function IntroSection() {
  const { t } = useLocale();
  const intro = t.home.intro;

  return (
    <section className="border-t border-titanium/12 bg-graphite/30 py-20 md:py-28">
      <div className="ph-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{intro.label}</Eyebrow>
          <h2 className="mt-7 max-w-md font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-platinum sm:text-[2.35rem]">
            {intro.title}
          </h2>
          <div className="mt-9 grid max-w-sm grid-cols-2 gap-px bg-titanium/12">
            {intro.figures.map((figure) => (
              <div key={figure.label} className="bg-ink px-5 py-5">
                <div className="ph-mono text-2xl text-cyan">{figure.value}</div>
                <div className="mt-2 font-mono text-[0.5625rem] uppercase leading-relaxed tracking-[0.2em] text-titanium/50">
                  {figure.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-titanium/85 md:text-[1.0625rem]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-px bg-titanium/12 sm:grid-cols-3">
            {t.home.principles.items.map((item) => (
              <div key={item.tag} className="bg-ink p-6">
                <span className="ph-mono text-[0.625rem] tracking-[0.2em] text-cyan/80">{item.tag}</span>
                <h3 className="mt-4 font-heading text-base font-semibold uppercase tracking-wide text-platinum">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-titanium/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}