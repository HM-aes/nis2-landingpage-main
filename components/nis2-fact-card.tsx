// Dossier "quick facts" card — mirrors PenaltyCard's mono/hairline
// styling, used inside the About section's intro pair.
const FACTS = [
  { label: "IN FORCE", value: "17 Oct 2024" },
  { label: "SCOPE", value: "18 sectors, EU-wide" },
  { label: "ARTICLES", value: "46 obligations" },
  { label: "MAX FINE", value: "€10M or 2% turnover" },
];

export default function Nis2FactCard() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/[.08] bg-ink-700/50 p-8">
      <div className="absolute inset-y-0 left-0 w-1 bg-signal/60" aria-hidden="true" />
      <p className="font-mono text-xs tracking-[0.15em] text-slatey-400">
        DIRECTIVE (EU) 2022/2555
      </p>
      <dl className="mt-6 space-y-5">
        {FACTS.map((f) => (
          <div key={f.label} className="flex items-baseline justify-between gap-4 border-t border-white/[.08] pt-5 first:border-t-0 first:pt-0">
            <dt className="font-mono text-xs tracking-[0.1em] text-slatey-400">
              {f.label}
            </dt>
            <dd className="font-mono text-base">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
