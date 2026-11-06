import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "@/content/en";
import pt from "@/content/pt";

const BUNDLES = { en, pt };
const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("ph.locale");
      if (stored && BUNDLES[stored]) setLocaleState(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!BUNDLES[next]) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem("ph.locale", next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(() => ({ locale, setLocale, t: BUNDLES[locale] }), [locale, setLocale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}