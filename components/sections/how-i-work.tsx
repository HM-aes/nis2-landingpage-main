"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@heroui/react";
import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  Hammer,
  PackageCheck,
  ArrowRight,
  User,
  Building2,
} from "lucide-react";
import SectionRule from "@/components/section-rule";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const PILLARS = [
  {
    icon: Compass,
    tag: "01 · SCOPE",
    title: "Map the real problem",
    description:
      "We map the real problem, not the feature list. Usually one call plus a short written proposal — so we both know exactly what's being built and why.",
    iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    cardGlow:
      "hover:border-amber-500/40 hover:shadow-[0_12px_40px_-12px_rgba(245,158,11,0.25)]",
  },
  {
    icon: Hammer,
    tag: "02 · BUILD",
    title: "Production-grade from day one",
    description:
      "The person who scoped it is the one writing the code. You see progress, not promises — working software, reviewed as it lands, no junior doing the real work.",
    iconBg: "bg-amber-400 text-black border-amber-300 font-bold",
    cardGlow:
      "ring-1 ring-amber-500/50 border-amber-500/40 shadow-[0_0_24px_rgba(245,158,11,0.2)] hover:border-amber-400 hover:shadow-[0_12px_44px_-10px_rgba(245,158,11,0.4)]",
  },
  {
    icon: PackageCheck,
    tag: "03 · HANDOVER",
    title: "Documented and explainable",
    description:
      "Handover is documented, explainable, and understandable by the people who have to sign off on it — not just the engineers who inherit it.",
    iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    cardGlow:
      "hover:border-indigo-500/40 hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.25)]",
  },
] as const;

const MODEL = {
  solo: {
    label: "Solo (me)",
    icon: User,
    rows: [
      ["Who scopes it:", "The person who builds it"],
      ["Who explains it to your board:", "The person who built it"],
      ["Clients at a time:", "One"],
      ["Communication:", "Direct — no account layer"],
      ["The real work:", "Done by me, not a junior"],
    ],
  },
  agency: {
    label: "Agency",
    icon: Building2,
    rows: [
      ["Who scopes it:", "A solutions consultant"],
      ["Who explains it to your board:", "An account manager"],
      ["Clients at a time:", "As many as sales can close"],
      ["Communication:", "Through a project manager"],
      ["The real work:", "Delegated down the bench"],
    ],
  },
} as const;

export default function HowIWork() {
  const [tab, setTab] = useState<"solo" | "agency">("solo");
  const reduced = useReducedMotion();

  return (
    <section id="how" className="relative border-t border-foreground/10 py-6">
      <SectionRule label="HOW I WORK" align="left" />

      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
        {/* ── Header ── */}
        <div className="relative space-y-5">
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={reduced ? false : { opacity: 0, y: -30 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-400 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-black shadow-sm">
              One project. Full focus.
            </span>
            <span className="inline-flex items-center rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-violet-400">
              SOLO ENGAGEMENT
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={reduced ? false : { opacity: 0, y: -30 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            No handoffs.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              No telephone game.
            </span>
          </motion.h2>

          <motion.div
            className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl"
            initial={reduced ? false : { opacity: 0, x: -40 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
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
          </motion.div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid gap-8 lg:grid-cols-12">
          {reduced ? (
            <div className="space-y-6 lg:col-span-7">
              {PILLARS.map((p) => (
                <PillarCard key={p.title} pillar={p} reduced />
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
              {PILLARS.map((p) => (
                <motion.div key={p.title} variants={cardItem}>
                  <PillarCard pillar={p} reduced={false} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {reduced ? (
            <div className="lg:col-span-5">
              <ModelPanel tab={tab} setTab={setTab} />
            </div>
          ) : (
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <ModelPanel tab={tab} setTab={setTab} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  reduced,
}: {
  pillar: (typeof PILLARS)[number];
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
          pillar.cardGlow,
        )}
      >
        <CardHeader className="flex flex-row items-center gap-3.5 pb-2">
          <motion.div
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-xl border",
              pillar.iconBg,
            )}
            whileHover={reduced ? undefined : { scale: 1.1, rotate: 3 }}
            transition={{ duration: 0.25 }}
          >
            <Icon className="size-5" />
          </motion.div>
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
              {pillar.tag}
            </span>
            <h4 className="font-display text-xl font-bold text-foreground">
              {pillar.title}
            </h4>
          </div>
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

function ModelPanel({
  tab,
  setTab,
}: {
  tab: "solo" | "agency";
  setTab: (t: "solo" | "agency") => void;
}) {
  const active = MODEL[tab];
  return (
    <Card className="sticky top-24 rounded-2xl border border-foreground/10 bg-background/90 p-4 shadow-lg backdrop-blur-md">
      <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-4">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Engagement model
        </span>
        <div className="flex gap-1 rounded-lg border border-foreground/10 bg-background p-1">
          <button
            type="button"
            onClick={() => setTab("solo")}
            className={cn(
              "rounded-md px-3 py-1 font-mono text-xs font-medium transition-all",
              tab === "solo"
                ? "border border-amber-300 bg-amber-400 font-extrabold text-black shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Solo
          </button>
          <button
            type="button"
            onClick={() => setTab("agency")}
            className={cn(
              "rounded-md px-3 py-1 font-mono text-xs font-medium transition-all",
              tab === "agency"
                ? "bg-foreground font-bold text-background shadow-md"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Agency
          </button>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="space-y-5">
          <div
            className={cn(
              "rounded-xl border p-4",
              tab === "solo"
                ? "border-amber-500/30 bg-amber-500/10"
                : "border-foreground/15 bg-foreground/5",
            )}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <active.icon
                className={cn(
                  "size-4",
                  tab === "solo" ? "text-amber-400" : "text-muted-foreground",
                )}
              />
              <span>{active.label}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {tab === "solo"
                ? "What you get working with AES AI Solutions."
                : "What the typical alternative looks like."}
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {active.rows.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-b border-foreground/10 py-2"
              >
                <span className="text-muted-foreground">{label}</span>
                <span
                  className={cn(
                    "text-right font-bold",
                    tab === "solo" ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          <CardFooter className="px-0 pt-2">
            {/* TODO(placeholder): BOOKING_URL — set real Calendly/Cal.com link in lib/site.ts */}
            <a
              href={BOOKING_URL}
              className="btn-glow-primary flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
            >
              Book a call
              <ArrowRight className="size-4" />
            </a>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
