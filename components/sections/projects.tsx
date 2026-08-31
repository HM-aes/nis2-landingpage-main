"use client";

import { Reveal } from "@/components/reveal";
import SectionRule from "@/components/section-rule";
import { Chip } from "@heroui/react";
import { CASE_STUDY_URL } from "@/lib/site";

type Status = "production" | "development";

type Project = {
  n: string;
  name: string;
  what: string;
  problem: string;
  stack: string[];
  status: Status;
  note?: string;
  caseStudy?: boolean;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    name: "NIS2 Analyzer",
    what: "A compliance-audit SaaS for the EU NIS2 directive.",
    problem:
      "Organisations struggle to know if they meet NIS2 requirements. This runs RAG-based agents against their documentation and surfaces gaps automatically.",
    stack: ["Django", "RAG agents", "Qdrant"],
    status: "production",
    note: "Available as SaaS. Air-gapped deployment available on request.",
  },
  {
    n: "02",
    name: "Sahel Sentinel",
    what: "A regional OSINT platform for West Africa.",
    problem:
      "Fragmented public data on regional stability is hard to monitor in one place. This aggregates open-source signals into a single operational picture.",
    stack: ["Django", "data aggregation", "geospatial"],
    status: "production",
    caseStudy: true,
  },
  {
    n: "03",
    name: "Birds Eye View",
    what: "An OSINT-style monitoring platform focused on Africa.",
    problem:
      "Turning scattered open-source information into a coherent, watchable overview.",
    stack: ["Django", "computer vision", "data aggregation"],
    status: "development",
    caseStudy: true,
  },
  {
    n: "04",
    name: "Lex Legal",
    what: "A legal application for law firms.",
    problem:
      "Firms need granular, file-level access control — e.g. a senior lawyer granting a junior access to specific files, not the whole matter.",
    stack: ["Django", "access-control architecture"],
    status: "development",
  },
  {
    n: "05",
    name: "TankSlim",
    what: "A border-refueling break-even calculator for cross-border truck drivers.",
    problem:
      "Drivers on the NL/BE/DE borders lose money guessing where to refuel. This tells them exactly when crossing to fill up pays off.",
    stack: ["Django", "Alpine.js"],
    status: "production",
  },
];

const STATUS_LABEL: Record<Status, string> = {
  production: "Production",
  development: "In development",
};

function StatusPill({ status }: { status: Status }) {
  const isProd = status === "production";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
      <span
        className={`size-1.5 rounded-full ${
          isProd ? "bg-emerald-400" : "bg-amber-400"
        } animate-pulse`}
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative border-t border-foreground/10 bg-background py-24"
    >
      <SectionRule label="THE WORK" align="left" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <Chip
            size="sm"
            className="flex h-auto items-center gap-1.5 border border-amber-500/30 bg-amber-500/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-amber-400" />
            Selected projects
          </Chip>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Five systems.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Built and shipped.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Each one solves a problem a client couldn&apos;t buy off the shelf —
            compliance reasoning, open-source intelligence, and tooling that has
            to hold up in production.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.n}
              delay={i * 0.08}
              className="glass-card glass-card-hover group flex flex-col rounded-2xl p-7"
            >
              <div className="flex items-center justify-between">
                <StatusPill status={project.status} />
                <span className="font-mono text-xs font-semibold text-muted-foreground">
                  {project.n}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/90">
                {project.what}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Chip
                    key={s}
                    size="sm"
                    variant="soft"
                    className="font-mono text-[10px] tracking-wide"
                  >
                    {s}
                  </Chip>
                ))}
              </div>

              <div className="mt-auto pt-5">
                {project.note && (
                  <p className="text-xs leading-relaxed text-slatey-400">
                    {project.note}
                  </p>
                )}
                {project.caseStudy && (
                  // TODO(placeholder): CASE_STUDY_URL — decide per project (form vs mailto)
                  <a
                    href={CASE_STUDY_URL}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Request case study →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
