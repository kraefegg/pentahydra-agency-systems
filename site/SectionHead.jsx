import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-cyan" />
      <span className="ph-label text-cyan">{children}</span>
    </div>
  );
}

export function SectionHead({ label, title, intro, align = "left", className, children }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && <Eyebrow className={align === "center" ? "justify-center" : ""}>{label}</Eyebrow>}
      {title && (
        <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-platinum sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      )}
      {intro && (
        <p className="max-w-2xl text-base leading-relaxed text-titanium/80">{intro}</p>
      )}
      {children}
    </div>
  );
}

export function Section({ children, className, id, tone = "ink" }) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        tone === "graphite" && "bg-graphite/40",
        "py-20 md:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}