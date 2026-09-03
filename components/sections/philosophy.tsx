"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionRule from "@/components/section-rule";
import ScrollReveal from "@/components/scroll-reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const POINTS = [
  {
    title: "Secure by design",
    body: "Security isn't a feature added at the end. It shapes every decision from the first line of code.",
  },
  {
    title: "Your data stays yours",
    body: "Hosted with strict boundaries or fully air-gapped on your own hardware. It never leaves your control.",
  },
  {
    title: "Built to be understood",
    body: "Serious systems, explained in language your whole team can follow — not just your engineers.",
  },
];

function glowMove(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--bx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--by", `${e.clientY - r.top}px`);
}

function Move({
  children,
  delay = 0,
  x = 0,
  y = 24,
  className = "",
  glow = false,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
  glow?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      onMouseMove={glow ? glowMove : undefined}
      initial={reduced ? false : { opacity: 0, x, y }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden border-t border-foreground/10 py-6"
    >
      {/* Ambient aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[10%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-amber-500/[.06] blur-[130px]"
          style={{ animation: "bento-aurora-a 26s ease-in-out infinite" }}
        />
      </div>

      <SectionRule label="OUR PHILOSOPHY" align="left" />

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <ScrollReveal
          text="Everyone's racing to add AI. Almost no one's securing it."
          className="max-w-3xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-zinc-300 sm:text-4xl lg:text-[3rem]"
        />

        <Move delay={0.1} x={-40} y={0} className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            The AI market is moving faster than its safeguards. New agents, new
            models, and new connectors like MCP are being wired into real
            systems every week — often with sensitive data flowing straight
            through them and little thought given to what could go wrong.
          </p>
          <p>
            That&apos;s backwards. An AI tool that touches your documents, your
            compliance data, or your clients&apos; files has to be secure by
            design — not patched later when something leaks.
          </p>
          <p>
            So that&apos;s how AES builds. Every tool is built to keep your data
            under your control: hosted with strict boundaries, or fully
            air-gapped on your own infrastructure when the work demands it. No
            data sold, no data leaked, no surprises.
          </p>
        </Move>

        {/* Pull-quote */}
        <Move delay={0.05} y={28} className="mt-14 max-w-3xl">
          <div aria-hidden className="h-px w-12 bg-amber-400/70" />
          <p className="mt-5 font-display text-xl font-medium leading-snug text-foreground/90 sm:text-2xl lg:text-[1.75rem]">
            Powerful AI is easy. Trustworthy AI is the hard part — and it&apos;s
            the part that matters.
          </p>
        </Move>

        {/* Supporting points */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <Move
              key={p.title}
              delay={i * 0.08}
              y={20}
              glow
              className="bento-tile group/card rounded-2xl border border-white/[.08] bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] p-6 backdrop-blur-md"
            >
              <span aria-hidden className="block size-1.5 rounded-full bg-amber-400" />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Move>
          ))}
        </div>
      </div>
    </section>
  );
}
