import FadeIn from "@/components/fade-in";
import PenaltyCard from "@/components/penalty-card";
import ScopeChecker from "@/components/scope-checker";
import SectionRule from "@/components/section-rule";
import { PENALTIES, SECTORS } from "@/lib/data";

export default function Scope() {
  return (
    <section id="scope" className="bg-muted">
      <SectionRule label="SCOPE" />
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Eighteen sectors. Two tiers. Personal liability.
          </h2>
          <p className="mt-3 max-w-2xl text-slatey-300">
            NIS2 applies to organisations with 50+ employees or €10M+ turnover in a
            listed sector — and management can be held personally liable. Check where
            you stand:
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8">
          <ScopeChecker />
        </FadeIn>

        {/* Static sector list — full data without JS. */}
        <details className="mt-6 rounded-lg border border-white/[.08] px-5 py-4">
          <summary className="cursor-pointer font-mono text-xs tracking-[0.15em] text-slatey-400">
            FULL SECTOR LIST — ANNEX I &amp; II
          </summary>
          <div className="mt-4 grid gap-x-10 gap-y-1.5 sm:grid-cols-2">
            {SECTORS.map((s) => (
              <div key={s.name} className="flex items-baseline text-sm">
                <span>{s.name}</span>
                <span className="leader" aria-hidden />
                <span
                  className="font-mono text-[11px] tracking-wide"
                  style={{
                    color: s.tier === "essential" ? "var(--sev-critical)" : "var(--sev-medium)",
                  }}
                >
                  {s.tier.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <FadeIn>
            <PenaltyCard tier="Essential" amount={PENALTIES.essential.amount} turnover={PENALTIES.essential.turnover} />
          </FadeIn>
          <FadeIn delay={0.08}>
            <PenaltyCard tier="Important" amount={PENALTIES.important.amount} turnover={PENALTIES.important.turnover} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
