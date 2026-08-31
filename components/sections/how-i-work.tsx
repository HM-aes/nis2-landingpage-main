"use client";

import { Reveal } from "@/components/reveal";
import SectionRule from "@/components/section-rule";

const STEPS = [
  {
    n: "01",
    title: "Scope",
    body: "We map the real problem, not the feature list. Usually one call plus a short written proposal.",
  },
  {
    n: "02",
    title: "Build",
    body: "Production-grade from day one. You see progress, not promises.",
  },
  {
    n: "03",
    title: "Handover",
    body: "Documented, explainable, and understandable by the people who have to sign off on it.",
  },
] as const;

export default function HowIWork() {
  return (
    <section id="how" className="relative border-t border-white/[.08] bg-muted py-6">
      <SectionRule label="HOW I WORK" align="left" />
      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            One project. Full focus.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I take on one client engagement at a time. That means the person
              scoping your system is the same person building it and the same
              person explaining it to your stakeholders — no handoffs, no
              telephone game, no junior doing the real work.
            </p>
            <p>
              I work as an independent operator (digital nomad, currently Porto),
              which keeps overhead low and communication direct.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="glass-card rounded-2xl p-6"
            >
              <span className="font-mono text-xs font-semibold text-amber-400">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
