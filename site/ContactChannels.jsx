import { ArrowUpRight } from "lucide-react";
import { EMAILS } from "@/content/contact";
import { Eyebrow } from "@/components/site/SectionHead";
import { useLocale } from "@/lib/i18n";

export default function ContactChannels() {
  const { t } = useLocale();
  const { channelsLabel, channelsNote, channels } = t.pages.contact.direct;

  return (
    <section className="border-t border-titanium/12 py-16 md:py-24">
      <div className="ph-container">
        <Eyebrow>{channelsLabel}</Eyebrow>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium/75">{channelsNote}</p>

        <ul className="mt-10 divide-y divide-titanium/10 border-y border-titanium/12">
          {channels.map((channel) => (
            <li key={channel.key}>
              <a
                href={`mailto:${EMAILS[channel.key]}`}
                className="ph-focus group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <span className="font-heading text-[0.9375rem] font-semibold uppercase tracking-[0.04em] text-platinum transition-colors group-hover:text-cyan">
                  {channel.label}
                </span>
                <span className="flex items-center gap-2 font-mono text-[0.6875rem] lowercase tracking-[0.1em] text-cyan/90 transition-colors group-hover:text-cyan">
                  {EMAILS[channel.key]}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}