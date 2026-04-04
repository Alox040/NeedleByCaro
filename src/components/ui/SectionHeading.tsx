type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Kein unterer Außenabstand (z. B. neben CTA in einer Zeile) */
  noMargin?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  noMargin = false,
}: SectionHeadingProps) {
  const a = align === "center" ? "text-center mx-auto" : "";
  const mb = noMargin ? "" : "mb-10 md:mb-14";

  return (
    <div className={`${mb} max-w-2xl space-y-3 ${a} ${className}`}>
      {eyebrow ? (
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-forge-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-heading md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
