import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { PRIMARY_EMAIL, PHONES } from "@/content/contact";

export default function SiteFooter() {
  const { t } = useLocale();
  const year = 2026;

  return (
    <footer className="relative border-t border-titanium/15 bg-ink">
      <div className="ph-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="ph-focus inline-flex flex-col">
              <span className="font-heading text-lg font-semibold uppercase tracking-[0.32em] text-platinum">
                PENTAHYDRA
              </span>
              <span className="mt-2 font-mono text-[0.5625rem] uppercase tracking-[0.32em] text-titanium/60">
                AGENCY SYSTEMS
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-titanium/70">{t.footer.blurb}</p>
            <p className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-cyan/90">
              {t.brand.tagline}
            </p>
            <Link
              to="/contact"
              className="ph-focus mt-8 inline-flex items-center gap-2 border border-titanium/25 px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-platinum transition-colors hover:border-cyan hover:text-cyan"
            >
              {t.ui.ctaPrimary}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <div className="mt-8 space-y-2">
              <a
                href={`mailto:${PRIMARY_EMAIL}`}
                className="ph-focus block font-mono text-[0.625rem] tracking-[0.08em] text-titanium/70 transition-colors hover:text-cyan"
              >
                {PRIMARY_EMAIL}
              </a>
              {PHONES.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="ph-focus block font-mono text-[0.625rem] tracking-[0.08em] text-titanium/60 transition-colors hover:text-cyan"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {t.footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[0.5625rem] uppercase tracking-[0.26em] text-titanium/45">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="ph-focus text-sm text-titanium/80 transition-colors hover:text-cyan"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-titanium/12 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-titanium/45">
              {t.footer.manifest.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {t.footer.legal.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="ph-focus font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-titanium/60 transition-colors hover:text-platinum"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-titanium/35">
            © {year} {t.brand.full} · {t.footer.rights} · {t.footer.coordinates}
          </p>
        </div>
      </div>
    </footer>
  );
}