"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Tabs,
  Tab,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import {
  BrainCircuit,
  ShieldAlert,
  Zap,
  AlertTriangle,
  ArrowRight,
  Compass,
} from "lucide-react";

// ── Shared ease ────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;

// ── Card stagger variants ──────────────────────────────────────────────────
const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

// ── Citation chip ──────────────────────────────────────────────────────────
function CitationChip({
  label,
  accent = "amber",
}: {
  label: string;
  accent?: "amber" | "teal" | "indigo";
}) {
  const styles = {
    amber: "bg-amber-400 text-black font-bold border-amber-300",
    teal: "bg-teal-400 text-black font-bold border-teal-300",
    indigo: "bg-indigo-500/20 text-indigo-300 font-semibold border-indigo-500/30",
  }[accent];

  const dot = {
    amber: "bg-black",
    teal: "bg-black",
    indigo: "bg-indigo-400",
  }[accent];

  return (
    <span
      className={cn(
        "mx-1 inline-flex translate-y-[-1px] items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] align-middle shadow-xs transition-all",
        styles
      )}
    >
      <span className={cn("size-1.5 rounded-full animate-pulse", dot)} aria-hidden />
      {label}
    </span>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const STATS = [
  { value: "46",    label: "Articles Audited",  sub: "Complete Directive Coverage" },
  { value: "< 3m",  label: "Audit Execution",   sub: "Vs 4 Weeks Manual Review" },
  { value: "100%",  label: "Article Citation",  sub: "Zero AI Hallucinations" },
  { value: "€10M",  label: "Fine Liability",    sub: "Or 2% Global Turnover Saved" },
];

const DECISION_PILLARS = [
  {
    icon: ShieldAlert,
    tag: "THE COMPLIANCE CRISIS",
    title: "Overwhelming Legal Complexity",
    description:
      "NIS2 enforces 46 granular security obligations spanning risk management, supply chains, and incident response. Executive leadership faces direct personal liability, making compliance decisions high-stakes and confusing.",
    citation: "Annex I · II Entity Tiers",
    accent: "amber" as const,
    isAnchor: false,
    tagColor: "text-amber-400 font-bold",
    iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    cardGlow: "hover:border-amber-500/40 hover:shadow-[0_12px_40px_-12px_rgba(245,158,11,0.25)]",
  },
  {
    icon: BrainCircuit,
    tag: "THE AI BREAKTHROUGH",
    title: "LLMs & Multi-Agent Reasoning",
    description:
      "Autonomous AI agents ingest NIS2 legal text alongside your internal policies and SOC 2 reports. Structured via Pydantic AI for strict schema validation, translating dense regulations into verifiable logic.",
    citation: "Art. 21(2)(d) Supply Chain",
    accent: "amber" as const,
    isAnchor: true, // Visual Anchor Card — Rich Dark Amber emphasis!
    tagColor: "text-amber-400 font-bold",
    iconBg: "bg-amber-400 text-black border-amber-300 font-bold",
    cardGlow: "ring-1 ring-amber-500/50 border-amber-500/40 shadow-[0_0_24px_rgba(245,158,11,0.2)] hover:border-amber-400 hover:shadow-[0_12px_44px_-10px_rgba(245,158,11,0.4)]",
  },
  {
    icon: Compass,
    tag: "EXECUTIVE ALIGNMENT",
    title: "Confident Decision-Making",
    description:
      "Replaces vague consulting advice with an instant, prioritized decision matrix. Leadership knows exactly what controls are missing, why they are legally required, and how to execute remediation.",
    citation: "Art. 23 Notification Gate",
    accent: "indigo" as const,
    isAnchor: false,
    tagColor: "text-indigo-400 font-bold",
    iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    cardGlow: "hover:border-indigo-500/40 hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.25)]",
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Nis2AboutContent({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<"ai" | "manual">("ai");
  const reduced = useReducedMotion();

  // When reduced motion is preferred, render everything static
  if (reduced) {
    return (
      <div className={cn("mx-auto max-w-6xl space-y-16 text-left", className)}>
        <StaticHeader />
        <MainGrid activeTab={activeTab} setActiveTab={setActiveTab} reduced />
        <StatsBar />
      </div>
    );
  }

  return (
    <div className={cn("mx-auto max-w-6xl space-y-16 text-left", className)}>

      {/*
       * Behavior 2 — Section heading drop:
       * Heading animates from y:-30, opacity:0 → settled.
       * Duration 0.7s, ease [0.22, 1, 0.36, 1].
       * whileInView, once, margin -100px.
       */}
      <div className="relative space-y-5">
        {/* Tags row — drops in together with the heading */}
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-flex items-center rounded-full bg-amber-400 border border-amber-300 px-4 py-1.5 text-xs font-bold tracking-wider text-black font-mono shadow-sm">
            The NIS2 &amp; AI Decision Engine
          </span>
          <span className="inline-flex items-center rounded-full bg-violet-500/10 border border-violet-500/25 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet-400 font-mono">
            DIRECTIVE (EU) 2022/2555
          </span>
        </motion.div>

        {/* Heading — same drop, slightly longer to feel weighty */}
        <motion.h2
          className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          NIS2 Complexity meets <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Autonomous AI Precision.
          </span>
        </motion.h2>

        {/*
         * Behavior 3 — Text slide-in:
         * Body slides from x:-40, opacity:0 → settled.
         * Delay 0.25s after the header, same ease.
         */}
        <motion.p
          className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          Navigating NIS2 requires fast, accurate decision-making. Our specialized AI engine uses
          Large Language Models, multi-agent regulatory reasoning, and Pydantic AI schema validation
          to analyze your security posture, pinpoint exact gaps, and guarantee 100% alignment with European policy.
        </motion.p>
      </div>

      {/* ── Main grid ──────────────────────────────────────────────────── */}
      <MainGrid activeTab={activeTab} setActiveTab={setActiveTab} reduced={false} />

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <StatsBar />
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StaticHeader() {
  return (
    <div className="relative space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-amber-400 border border-amber-300 px-4 py-1.5 text-xs font-bold tracking-wider text-black font-mono shadow-sm">
          The NIS2 &amp; AI Decision Engine
        </span>
        <span className="inline-flex items-center rounded-full bg-violet-500/10 border border-violet-500/25 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet-400 font-mono">
          DIRECTIVE (EU) 2022/2555
        </span>
      </div>
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        NIS2 Complexity meets <br />
        <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
          Autonomous AI Precision.
        </span>
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        Navigating NIS2 requires fast, accurate decision-making. Our specialized AI engine uses
        Large Language Models, multi-agent regulatory reasoning, and Pydantic AI schema validation
        to analyze your security posture, pinpoint exact gaps, and guarantee 100% alignment with European policy.
      </p>
    </div>
  );
}

function MainGrid({
  activeTab,
  setActiveTab,
  reduced,
}: {
  activeTab: "ai" | "manual";
  setActiveTab: (t: "ai" | "manual") => void;
  reduced: boolean;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">

      {/*
       * Behavior 4 — Card stagger:
       * Parent uses staggerChildren: 0.12.
       * Each card: y:24, opacity:0 → y:0, opacity:1, duration 0.5s.
       * Triggered by viewport entry (once: true).
       */}
      {reduced ? (
        <div className="space-y-6 lg:col-span-7">
          {DECISION_PILLARS.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} reduced={reduced} />
          ))}
        </div>
      ) : (
        <motion.div
          className="space-y-6 lg:col-span-7"
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {DECISION_PILLARS.map((pillar) => (
            <motion.div key={pillar.title} variants={cardItem}>
              <PillarCard pillar={pillar} reduced={reduced} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Right panel — slides in from the right after the cards */}
      {reduced ? (
        <div className="lg:col-span-5">
          <DecisionMatrix activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      ) : (
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <DecisionMatrix activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>
      )}
    </div>
  );
}

function PillarCard({
  pillar,
  reduced,
}: {
  pillar: (typeof DECISION_PILLARS)[number];
  reduced: boolean;
}) {
  const Icon = pillar.icon;

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.2, ease }}
      className="group"
    >
      <Card
        className={cn(
          "relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/80 p-3 backdrop-blur-md transition-all duration-300",
          pillar.cardGlow
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-3.5">
            <motion.div
              className={cn("grid size-11 shrink-0 place-items-center rounded-xl border", pillar.iconBg)}
              whileHover={reduced ? undefined : { scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.25 }}
            >
              <Icon className="size-5" />
            </motion.div>
            <div>
              <span className={cn("font-mono text-[11px] uppercase tracking-wider font-bold", pillar.tagColor)}>
                {pillar.tag}
              </span>
              <h4 className="font-display text-xl font-bold text-foreground">
                {pillar.title}
              </h4>
            </div>
          </div>
          <CitationChip label={pillar.citation} accent={pillar.accent} />
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {pillar.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function DecisionMatrix({
  activeTab,
  setActiveTab,
}: {
  activeTab: "ai" | "manual";
  setActiveTab: (t: "ai" | "manual") => void;
}) {
  return (
    <Card className="shadow-lg backdrop-blur-md sticky top-24 rounded-2xl border border-foreground/10 bg-background/90 p-4">
      <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-4">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
          EXECUTIVE DECISION MATRIX
        </span>

        {/* HeroUI Tabs implementation */}
        <div className="flex gap-1 rounded-lg bg-background p-1 border border-foreground/10">
          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className={cn(
              "rounded-md px-3 py-1 font-mono text-xs font-medium transition-all",
              activeTab === "ai"
                ? "bg-amber-400 text-black font-extrabold border border-amber-300 shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            ⚡ AI Engine
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("manual")}
            className={cn(
              "rounded-md px-3 py-1 font-mono text-xs font-medium transition-all",
              activeTab === "manual"
                ? "bg-foreground text-background font-bold shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            ⏳ Manual
          </button>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        {activeTab === "ai" ? (
          <div className="space-y-5 animate-fadeIn">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <Zap className="size-4 text-amber-400" />
                <span>LLM + Agent Regulatory Reasoning</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Translates 46 legal articles into immediate, prioritized security decisions with 100% citation accuracy.
              </p>
            </div>
            <div className="space-y-3 font-mono text-xs">
              {[
                ["Decision Time:", "Under 3 Minutes"],
                ["Validation:", "Pydantic AI Schema-Checked"],
                ["Policy Alignment:", "Verifiable NIS2 Citations"],
                ["Leadership Liability:", "Fully Protected & Documented"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-foreground/10 py-2">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-bold text-foreground">{value}</span>
                </div>
              ))}
            </div>
            <CardFooter className="pt-2 px-0">
              <a
                href="#signup"
                className="btn-glow-primary w-full flex items-center justify-center gap-2 rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
              >
                Automate Your NIS2 Decision-Making
                <ArrowRight className="size-4" />
              </a>
            </CardFooter>
          </div>
        ) : (
          <div className="space-y-5 animate-fadeIn">
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold text-sm">
                <AlertTriangle className="size-4" />
                <span>Legacy Manual Consulting</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Slow manual review of complex legal texts leading to delayed decisions and compliance risk.
              </p>
            </div>
            <div className="space-y-3 font-mono text-xs">
              {[
                ["Decision Time:", "4 – 8 Weeks", true],
                ["Average Cost:", "€25,000+ Consulting Fee", true],
                ["Oversight Risk:", "High Human Error Potential", true],
                ["Policy Alignment:", "Subjective Opinions", false],
              ].map(([label, value, danger]) => (
                <div key={label as string} className="flex justify-between border-b border-foreground/10 py-2">
                  <span className="text-muted-foreground">{label}</span>
                  <span className={cn("font-bold", danger ? "text-red-600 dark:text-red-400" : "text-muted-foreground")}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <CardFooter className="pt-2 px-0">
              <div className="w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-center font-mono text-xs text-zinc-400">
                Manual consulting cannot keep pace with NIS2 enforcement deadlines.
              </div>
            </CardFooter>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function StatsBar() {
  const ease = [0.22, 1, 0.36, 1] as const;
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="grid grid-cols-2 gap-6 rounded-2xl border border-foreground/10 bg-foreground/5 p-8 backdrop-blur-md md:grid-cols-4 shadow-2xl"
      {...(reduced ? {} : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease },
      })}
    >
      {STATS.map((stat) => (
        <div key={stat.label} className="space-y-1 border-l-2 border-amber-500/40 pl-5 first:border-l-0">
          <p className="font-mono text-3xl font-extrabold text-amber-400 sm:text-4xl">{stat.value}</p>
          <p className="font-sans text-base font-bold text-foreground">{stat.label}</p>
          <p className="font-mono text-xs text-muted-foreground">{stat.sub}</p>
        </div>
      ))}
    </motion.div>
  );
}
