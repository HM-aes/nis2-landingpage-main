"use client";

import { Chip } from "@heroui/react";
import { Reveal } from "@/components/reveal";
import SectionRule from "@/components/section-rule";
import { CASE_STUDY_URL } from "@/lib/site";

type Status = "production" | "development";

type Project = {
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
    name: "NIS2 Analyzer",
    what: "A compliance-audit SaaS for the EU NIS2 directive.",
    problem:
      "Organisations struggle to know if they meet NIS2 requirements. This runs RAG-based agents against their documentation and surfaces gaps automatically.",
    stack: ["Django", "RAG agents", "Qdrant"],
    status: "production",
    note: "Available as SaaS. Air-gapped deployment available on request.",
  },
  {
    name: "Sahel Sentinel",
    what: "A regional OSINT platform for West Africa.",
    problem:
      "Fragmented public data on regional stability is hard to monitor in one place. This aggregates open-source signals into a single operational picture.",
    stack: ["Django", "data aggregation", "geospatial"],
    status: "production",
    caseStudy: true,
  },
  {
    name: "Birds Eye View",
    what: "An OSINT-style monitoring platform focused on Africa.",
    problem:
      "Turning scattered open-source information into a coherent, watchable overview.",
    stack: ["Django", "computer vision", "data aggregation"],
    status: "development",
    caseStudy: true,
  },
  {
    name: "Lex Legal",
    what: "A legal application for law firms.",
    problem:
      "Firms need granular, file-level access control — e.g. a senior lawyer granting a junior access to specific files, not the whole matter.",
    stack: ["Django", "access-control architecture"],
    status: "development",
  },
  {
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
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      <span
        className={`size-1.5 rounded-full ${
          isProd ? "bg-emerald-400" : "bg-amber-400"
        }`}
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card glass-card-hover flex h-full flex-col rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-foreground">
          {project.name}
        </h3>
        <StatusPill status={project.status} />
      </div>

      <p className="mt-2 text-sm font-medium text-foreground/90">
        {project.what}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.problem}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
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

      <div className="mt-auto pt-4">
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
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-6">
      <SectionRule label="THE WORK" align="left" />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
