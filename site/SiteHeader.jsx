import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { ASSETS } from "@/content/assets";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

function Wordmark({ full = false }) {
  const { t } = useLocale();
  return (
    <span className="flex items-center gap-3">
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden border border-titanium/25 bg-graphite">
        <Image
          src={ASSETS.emblem}
          alt={`${t.brand.full} emblem`}
          className="h-full w-full"
          fittingType="fill"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[0.92rem] font-semibold tracking-[0.3em] text-platinum">
          PENTAHYDRA
        </span>
        <span className="mt-1 font-mono text-[0.5rem] tracking-[0.34em] text-titanium/70">
          {full ? "AGENCY SYSTEMS · BRAZIL" : "AGENCY SYSTEMS"}
        </span>
      </span>
    </span>
  );
}

function LanguageToggle({ className }) {
  const { locale, setLocale, t } = useLocale();
  return (
    <div
      className={cn("flex items-center border border-titanium/20", className)}
      role="group"
      aria-label={t.ui.language}
    >
      {["en", "pt"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "ph-focus px-2.5 py-1.5 font-mono text-[0.625rem] tracking-[0.18em] transition-colors",
            locale === code
              ? "bg-cyan text-ink"
              : "text-titanium/70 hover:bg-titanium/10 hover:text-platinum"
          )}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function SiteHeader() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-titanium/15 bg-ink/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="ph-container flex h-[76px] items-center justify-between gap-6">
        <Link to="/" className="ph-focus shrink-0" aria-label={t.brand.full}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {t.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="ph-focus group relative font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-titanium/80 transition-colors hover:text-platinum"
              activeProps={{ className: "text-cyan" }}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageToggle />
          <Link
            to="/contact"
            className="ph-focus group inline-flex items-center gap-2 border border-cyan/50 bg-cyan/10 px-4 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-platinum transition-colors hover:border-cyan hover:bg-cyan hover:text-ink"
          >
            {t.navMeta.contact}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.ui.close : t.ui.menu}
            className="ph-focus flex h-10 w-10 items-center justify-center border border-titanium/20 text-platinum"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-titanium/15 bg-ink xl:hidden">
          <div className="ph-container max-h-[calc(100svh-76px)] overflow-y-auto py-8">
            <nav className="flex flex-col" aria-label="Mobile">
              {[...t.nav, { label: t.navMeta.contact, to: "/contact" }].map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="ph-focus flex items-baseline justify-between border-b border-titanium/10 py-4"
                >
                  <span className="font-heading text-xl uppercase tracking-wide text-platinum">
                    {item.label}
                  </span>
                  <span className="font-mono text-[0.625rem] tracking-[0.2em] text-titanium/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              to="/core-engineering"
              className="ph-focus mt-8 flex items-center justify-between border border-cyan/40 bg-cyan/10 px-4 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-platinum"
            >
              {t.navMeta.core}
              <ArrowUpRight className="h-4 w-4 text-cyan" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}