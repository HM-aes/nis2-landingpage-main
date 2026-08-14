"use client";

import { useState } from "react";
import { PENALTIES, SECTORS } from "@/lib/data";

type Size = "micro" | "medium" | "large";

const SIZES: { value: Size; label: string }[] = [
  { value: "micro", label: "Under 50 employees and under €10M turnover" },
  { value: "medium", label: "50–249 employees or €10–50M turnover" },
  { value: "large", label: "250+ employees or €50M+ turnover" },
];

function Line({ label, value, signal = false }: { label: string; value: React.ReactNode; signal?: boolean }) {
  return (
    <div className="flex items-baseline font-mono text-sm">
      <span className="text-slatey-400">{label}</span>
      <span className="leader" aria-hidden />
      <span className={signal ? "text-cyan-400 font-semibold" : "text-white"}>{value}</span>
    </div>
  );
}

export default function ScopeChecker() {
  const [sector, setSector] = useState("");
  const [size, setSize] = useState<Size | "">("");

  const selected = SECTORS.find((s) => s.name === sector);
  const ready = selected && size;

  let result: { inScope: boolean; tier?: "essential" | "important" } | null = null;
  if (ready) {
    if (size === "micro") result = { inScope: false };
    else if (selected.tier === "essential" && size === "large")
      result = { inScope: true, tier: "essential" };
    else result = { inScope: true, tier: "important" };
  }

  const selectClass =
    "w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40";

  return (
    <div className="glass-card rounded-2xl p-7 shadow-2xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-xs tracking-wider text-slatey-400 uppercase">
            SECTOR
          </span>
          <select value={sector} onChange={(e) => setSector(e.target.value)} className={selectClass}>
            <option value="" className="bg-slate-900 text-slate-300">Select your sector…</option>
            <optgroup label="Annex I — Essential sectors" className="bg-slate-900 text-cyan-400 font-semibold">
              {SECTORS.filter((s) => s.tier === "essential").map((s) => (
                <option key={s.name} className="bg-slate-900 text-white">{s.name}</option>
              ))}
            </optgroup>
            <optgroup label="Annex II — Important sectors" className="bg-slate-900 text-indigo-400 font-semibold">
              {SECTORS.filter((s) => s.tier === "important").map((s) => (
                <option key={s.name} className="bg-slate-900 text-white">{s.name}</option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-xs tracking-wider text-slatey-400 uppercase">
            COMPANY SIZE
          </span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as Size)}
            className={selectClass}
          >
            <option value="" className="bg-slate-900 text-slate-300">Select your size…</option>
            {SIZES.map((s) => (
              <option key={s.value} value={s.value} className="bg-slate-900 text-white">
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
          {result.inScope && result.tier ? (
            <>
              <Line label="Status" value="IN SCOPE" signal />
              <Line label="Tier" value={result.tier.toUpperCase()} />
              <Line
                label="Maximum fine"
                value={`${PENALTIES[result.tier].amount} or ${PENALTIES[result.tier].turnover} of global turnover`}
              />
              <p className="pt-2 text-sm text-slatey-300">
                Management bodies can be held personally liable for non-compliance.
              </p>
              <a
                href="#signup"
                className="btn-glow-primary mt-3 inline-block rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-all hover:scale-105"
              >
                Start free audit
              </a>
            </>
          ) : (
            <>
              <Line label="Status" value="LIKELY OUT OF SCOPE" />
              <p className="pt-2 text-sm text-slatey-300">
                Micro and small entities are generally exempt — but suppliers to in-scope
                companies are increasingly required to demonstrate compliance contractually.
              </p>
            </>
          )}
          <p className="pt-2 font-mono text-[11px] text-slatey-400/70">
            Indicative only — national transposition laws may extend scope.
          </p>
        </div>
      )}
    </div>
  );
}
