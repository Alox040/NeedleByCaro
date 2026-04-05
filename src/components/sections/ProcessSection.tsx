import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site-content";

export function ProcessSection() {
  const { steps } = site.process;
  // Zeile 1: Schritte 1–3 (links→rechts), Zeile 2: Schritte 4–6 (rechts→links — Snake)
  const row1 = steps.slice(0, 3);
  const row2 = [...steps.slice(3)].reverse();

  return (
    <section
      id={site.process.id}
      className="border-t border-gray-200 px-gutter py-section scroll-mt-24"
    >
      <div className="mx-auto max-w-shell">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <SectionHeading
            noMargin
            eyebrow={site.process.eyebrow}
            title={site.process.title}
            description={site.process.description}
          />
          <Button href="/booking" variant="secondary" className="shrink-0 self-start md:self-auto">
            Prozess starten
          </Button>
        </div>

        {/* Desktop: Snake 3+3 / Mobile: vertikale Timeline */}
        <div className="hidden overflow-hidden rounded-forge border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:block">
          <ProcessRow steps={row1} startIndex={0} direction="ltr" />

          {/* Verbindung zwischen Zeile 1 und 2 */}
          <div className="relative my-0 flex justify-end pr-[calc(100%/3/2)]">
            <div className="h-8 w-px bg-gray-200" />
          </div>

          <ProcessRow steps={row2} startIndex={3} direction="rtl" />
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-0 rounded-forge border border-gray-200 bg-white px-6 py-2 shadow-sm transition-shadow hover:shadow-md lg:hidden">
          {steps.map((step, i) => (
            <MobileStep key={step.title} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Desktop Row ──────────────────────────────────────────────── */

type Step = (typeof site.process.steps)[number];

function ProcessRow({
  steps,
  startIndex,
  direction,
}: {
  steps: readonly Step[];
  startIndex: number;
  direction: "ltr" | "rtl";
}) {
  // Bei rtl sind die Schritte reversed für die Anzeige → echten Index ermitteln
  const getIndex = (pos: number) =>
    direction === "rtl" ? startIndex + (steps.length - 1 - pos) : startIndex + pos;

  return (
    <div className="relative grid grid-cols-3">
      {/* Verbindungslinie */}
      <div className="absolute left-0 right-0 top-[2.75rem] h-px bg-gray-200" />

      {steps.map((step, pos) => {
        const idx = getIndex(pos);
        const num = String(idx + 1).padStart(2, "0");
        const isFirst = pos === 0;
        const isLast = pos === steps.length - 1;

        return (
          <div
            key={step.title}
            className={`relative flex flex-col gap-5 p-6 ${
              isFirst ? "" : "border-l border-gray-200"
            }`}
          >
            {/* Step-Dot auf der Linie */}
            <div className="relative z-10 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-forge-accent/55 bg-white font-mono text-xs font-medium tracking-[0.14em] text-forge-accent shadow-sm">
                {num}
              </span>
              {/* Pfeil-Indikator auf dem letzten Element einer Reihe */}
              {isLast && (
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/50">
                  {direction === "ltr" ? "↓" : "✓"}
                </span>
              )}
            </div>

            {/* Ghost-Zahl als Deko */}
            <span
              className="pointer-events-none absolute right-4 top-2 select-none font-display text-7xl font-extrabold leading-none tracking-tighter text-forge-border/25"
              aria-hidden="true"
            >
              {num}
            </span>

            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-forge-accent/70">
                {step.detail}
              </p>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-heading">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Mobile Step ──────────────────────────────────────────────── */

function MobileStep({
  step,
  index,
  total,
}: {
  step: Step;
  index: number;
  total: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const isLast = index === total - 1;

  return (
    <div className="relative flex gap-5 py-6">
      {/* Timeline-Linie links */}
      <div className="flex flex-col items-center">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-forge-accent/55 bg-white font-mono text-xs font-medium tracking-[0.12em] text-forge-accent shadow-sm">
          {num}
        </span>
        {!isLast && <div className="mt-2 flex-1 w-px bg-gray-200" />}
      </div>

      {/* Inhalt */}
      <div className={`space-y-2 pb-6 ${isLast ? "" : ""}`}>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-forge-accent/70">
          {step.detail}
        </p>
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-heading">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{step.description}</p>
      </div>
    </div>
  );
}
