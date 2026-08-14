"use client";

import { Reveal } from "@/components/reveal";
import { Chip } from "@heroui/react";
import { ArrowDown } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Reads the directive",
    body: "Retrieval-augmented agents read NIS2 directly and pull the specific provisions that apply to your entity type and sector.",
    iconWrap: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </>
    ),
  },
  {
    n: "02",
    title: "Validates every step",
    body: "Structured through Pydantic AI, each agent output is schema-checked for data integrity — no malformed reasoning slips through.",
    iconWrap: "bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </>
    ),
  },
  {
    n: "03",
    title: "Grounds every finding",
    body: "Cross-references your documentation against the directive and cites the exact article behind each conclusion. Audit-grade traceability.",
    iconWrap: "bg-amber-600/10 text-amber-500 ring-amber-600/20",
    icon: (
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
] as const;

export default function Technology() {
  return (
    <section id="tech" className="relative border-t border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <Chip 
            size="sm"
            className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-1 h-auto flex items-center gap-1.5"
          >
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            The Engine
          </Chip>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Built for regulatory reasoning
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Not a chatbot with a compliance prompt. A pipeline of autonomous
            agents, each validated at every step, so the output isn&apos;t just
            fluent — it&apos;s verifiably correct.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="glass-card glass-card-hover group rounded-2xl p-7"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl ring-1 ${step.iconWrap}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    {step.icon}
                  </svg>
                </div>
                <span className="font-mono text-xs text-muted-foreground font-semibold">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* pipeline strip */}
        <Reveal className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-foreground/10 bg-card px-6 py-5 font-mono text-xs text-muted-foreground backdrop-blur-md shadow-xl">
          <span className="text-muted-foreground font-bold uppercase tracking-wider">Pipeline</span>
          <Chip 
            size="sm"
            className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-1 h-auto flex items-center gap-1.5"
          >
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            document intake
          </Chip>
          <ArrowDown className="size-3 text-muted-foreground/30 mx-auto" />
          <Chip 
            size="sm"
            className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-1 h-auto flex items-center gap-1.5"
          >
            <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
            RAG retrieval
          </Chip>
          <ArrowDown className="size-3 text-muted-foreground/30 mx-auto" />
          <Chip 
            size="sm"
            className="bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-1 h-auto flex items-center gap-1.5"
          >
            <span className="size-1.5 rounded-full bg-violet-400 animate-pulse" />
            agent reasoning
          </Chip>
          <ArrowDown className="size-3 text-muted-foreground/30 mx-auto" />
          <Chip 
            size="sm"
            className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-1 h-auto flex items-center gap-1.5"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            pydantic validation
          </Chip>
          <ArrowDown className="size-3 text-muted-foreground/30 mx-auto" />
          <Chip 
            size="sm"
            className="bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-1 h-auto flex items-center gap-1.5"
          >
            <span className="size-1.5 rounded-full bg-rose-400 animate-pulse" />
            article-grounded finding
          </Chip>
        </Reveal>
      </div>
    </section>
  );
}
