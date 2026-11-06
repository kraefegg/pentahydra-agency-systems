import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const TONE = {
  operational: "border-cyan/60 bg-cyan/12 text-cyan",
  development: "border-titanium/45 bg-titanium/10 text-platinum",
  research: "border-deep/90 bg-deep/25 text-titanium",
  planned: "border-titanium/25 bg-transparent text-titanium/60",
};

export default function StatusBadge({ status, className }) {
  const { t } = useLocale();
  const label = t.status[status] ?? status;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.18em]",
        TONE[status] ?? TONE.planned,
        className
      )}
    >
      <span className="h-1 w-1 bg-current" />
      {label}
    </span>
  );
}