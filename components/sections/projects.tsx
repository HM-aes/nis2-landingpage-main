"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import SectionRule from "@/components/section-rule";
import { Chip } from "@heroui/react/chip";
import { CASE_STUDY_URL } from "@/lib/site";

/* ─────────────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────────────── */

type Status = "production" | "development";

type Project = {
  name: string;
  what: string;
  problem: string;
  stack: string[];
  status: Status;
  note?: string;
  caseStudy?: boolean;
  span: string;
  motif: "audit" | "network" | "radar" | "tree" | "chart";
  feature?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "NIS2 Analyzer",
    what: "A compliance-audit SaaS for the EU NIS2 directive.",
    problem:
      "Organisations struggle to know if they meet NIS2 requirements. RAG-based agents read their documentation and surface every gap automatically.",
    stack: ["Django", "RAG agents", "Qdrant"],
    status: "production",
    note: "Available as SaaS · air-gapped deployment on request",
    span: "sm:col-span-2 lg:col-span-4",
    motif: "audit",
    feature: true,
  },
  {
    name: "Sahel Sentinel",
    what: "A regional OSINT platform for West Africa.",
    problem:
      "Fragmented public data on regional stability is hard to watch in one place. This aggregates open-source signals into a single operational picture.",
    stack: ["Django", "data aggregation", "geospatial"],
    status: "production",
    caseStudy: true,
    span: "lg:col-span-2",
    motif: "network",
  },
  {
    name: "Birds Eye View",
    what: "An OSINT-style monitoring platform focused on Africa.",
    problem:
      "Turning scattered open-source information into a coherent, watchable overview.",
    stack: ["Django", "computer vision", "data aggregation"],
    status: "development",
    caseStudy: true,
    span: "lg:col-span-2",
    motif: "radar",
  },
  {
    name: "Lex Legal",
    what: "A legal application for law firms.",
    problem:
      "Firms need file-level access control — a senior lawyer granting a junior access to specific files, not the whole matter.",
    stack: ["Django", "access-control architecture"],
    status: "development",
    span: "lg:col-span-2",
    motif: "tree",
  },
  {
    name: "TankSlim",
    what: "A border-refueling break-even calculator for truck drivers.",
    problem:
      "Drivers on the NL/BE/DE borders lose money guessing where to refuel. This tells them exactly when crossing to fill up pays off.",
    stack: ["Django", "Alpine.js"],
    status: "production",
    span: "lg:col-span-2",
    motif: "chart",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────────────────
   Cinematic scroll-reveal heading (motion.dev style)
   ──────────────────────────────────────────────────────────────────────── */

const LEAD =
  "Not prototypes. Not slideware. Five systems built to run in production — shipped by one person.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const blurPx = useTransform(progress, range, [5, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  return (
    <motion.span style={{ opacity, filter }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

function ScrollLead() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.45"],
  });

  const words = LEAD.split(" ");

  if (reduced) {
    return (
      <p className="max-w-4xl font-display text-2xl font-semibold leading-[1.3] tracking-tight text-foreground sm:text-3xl lg:text-[2.6rem]">
        {LEAD}
      </p>
    );
  }

  return (
    <p
      ref={ref}
      className="max-w-4xl font-display text-2xl font-semibold leading-[1.3] tracking-tight text-foreground sm:text-3xl lg:text-[2.6rem]"
    >
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${w}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Tile shell — pointer-tracked glow + in-view entrance
   ──────────────────────────────────────────────────────────────────────── */

function BentoTile({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--bx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--by", `${e.clientY - r.top}px`);
  }

  return (
    <motion.article
      onMouseMove={handleMove}
      initial={reduced ? false : { opacity: 0, y: 26, filter: "blur(6px)" }}
      whileInView={
        reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={`bento-tile group/tile flex flex-col overflow-hidden rounded-3xl border border-white/[.08] bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] backdrop-blur-md ${className}`}
    >
      {children}
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Per-project ambient motifs (CSS-animated SVG; reduced-motion safe)
   ──────────────────────────────────────────────────────────────────────── */

function Motif({ kind }: { kind: Project["motif"] }) {
  const stroke = "currentColor";
  const common =
    "bento-motif h-full w-full text-foreground/[0.16] transition-colors duration-500 group-hover/tile:text-foreground/[0.28]";

  if (kind === "audit") {
    const rows = [16, 30, 44, 58, 72, 86, 100, 114];
    return (
      <svg viewBox="0 0 240 140" fill="none" preserveAspectRatio="xMidYMid slice" className={common} aria-hidden>
        {rows.map((y, i) => (
          <line
            key={y}
            x1="20"
            y1={y}
            x2={i % 3 === 0 ? 150 : i % 3 === 1 ? 200 : 120}
            y2={y}
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
        <rect x="186" y="40" width="7" height="7" rx="1.5" fill="var(--signal)" />
        <rect x="186" y="82" width="7" height="7" rx="1.5" fill="var(--signal)" />
        <g style={{ animation: "bento-scan 4.5s ease-in-out infinite" }}>
          <rect
            x="12"
            y="0"
            width="216"
            height="18"
            rx="4"
            fill="var(--signal)"
            opacity="0.14"
          />
          <line
            x1="12"
            y1="9"
            x2="228"
            y2="9"
            stroke="var(--signal)"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </g>
      </svg>
    );
  }

  if (kind === "network") {
    const nodes = [
      [40, 40],
      [110, 26],
      [180, 52],
      [66, 96],
      [140, 104],
      [200, 92],
      [96, 62],
    ];
    const links: [number, number][] = [
      [0, 6],
      [6, 1],
      [1, 2],
      [6, 3],
      [3, 4],
      [4, 5],
      [4, 2],
      [6, 4],
    ];
    return (
      <svg viewBox="0 0 240 130" fill="none" preserveAspectRatio="xMidYMid slice" className={common} aria-hidden>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={stroke}
            strokeWidth="1.5"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 4 ? 6 : 4}
            fill={i === 4 ? "var(--signal)" : stroke}
            style={{
              animation: `bento-node-pulse ${2.4 + (i % 3) * 0.6}s ease-in-out ${i * 0.25}s infinite`,
            }}
          />
        ))}
      </svg>
    );
  }

  if (kind === "radar") {
    return (
      <svg viewBox="0 0 240 130" fill="none" preserveAspectRatio="xMidYMid slice" className={common} aria-hidden>
        <g transform="translate(120 66)">
          {[18, 34, 50].map((r) => (
            <circle key={r} r={r} stroke={stroke} strokeWidth="1.5" />
          ))}
          <line x1="-52" y1="0" x2="52" y2="0" stroke={stroke} strokeWidth="1" />
          <line x1="0" y1="-52" x2="0" y2="52" stroke={stroke} strokeWidth="1" />
          <g style={{ animation: "bento-radar 6s linear infinite" }}>
            <path
              d="M0 0 L52 0 A52 52 0 0 1 15 49 Z"
              fill="var(--signal)"
              opacity="0.16"
            />
            <line
              x1="0"
              y1="0"
              x2="52"
              y2="0"
              stroke="var(--signal)"
              strokeWidth="1.5"
              opacity="0.7"
            />
          </g>
          <circle cx="30" cy="-14" r="3" fill="var(--signal)" />
          <circle cx="-22" cy="22" r="2.5" fill={stroke} />
        </g>
      </svg>
    );
  }

  if (kind === "tree") {
    return (
      <svg
        viewBox="0 0 240 130"
        fill="none" preserveAspectRatio="xMidYMid slice"
        className={common}
        aria-hidden
        style={{ animation: "bento-drift 7s ease-in-out infinite" }}
      >
        <rect x="20" y="54" width="34" height="22" rx="5" stroke={stroke} strokeWidth="2" />
        <path d="M54 65 H84" stroke={stroke} strokeWidth="2" />
        <path d="M84 65 V30 M84 65 V100 M84 30 H112 M84 100 H112" stroke={stroke} strokeWidth="2" />
        <rect x="112" y="18" width="42" height="24" rx="5" stroke={stroke} strokeWidth="2" />
        <rect
          x="112"
          y="88"
          width="42"
          height="24"
          rx="5"
          stroke="var(--signal)"
          strokeWidth="2"
        />
        <path d="M154 100 H182" stroke="var(--signal)" strokeWidth="2" />
        <circle cx="188" cy="100" r="4" fill="var(--signal)" />
      </svg>
    );
  }

  // chart — self-drawing break-even line
  return (
    <svg viewBox="0 0 240 130" fill="none" preserveAspectRatio="xMidYMid slice" className={common} aria-hidden>
      <line x1="24" y1="108" x2="220" y2="108" stroke={stroke} strokeWidth="1.5" />
      <line x1="24" y1="14" x2="24" y2="108" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M24 96 L70 84 L110 70 L150 48 L196 20"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="320"
        strokeDashoffset="320"
        style={{ animation: "bento-draw 2.4s ease-out 0.2s forwards" }}
      />
      <path
        d="M24 40 L70 52 L110 64 L150 78 L196 96"
        stroke="var(--signal)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="320"
        strokeDashoffset="320"
        style={{ animation: "bento-draw 2.4s ease-out 0.5s forwards" }}
      />
      <line
        x1="130"
        y1="14"
        x2="130"
        y2="108"
        stroke="var(--signal)"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        opacity="0.7"
      />
      <circle cx="130" cy="60" r="4.5" fill="var(--signal)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Card content
   ──────────────────────────────────────────────────────────────────────── */

function StatusPill({ status }: { status: Status }) {
  const isProd = status === "production";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
      <span
        className={`size-1.5 rounded-full ${
          isProd ? "bg-emerald-400" : "bg-amber-400"
        }`}
        style={{ animation: "bento-node-pulse 2.6s ease-in-out infinite" }}
      />
      {isProd ? "Production" : "In development"}
    </span>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      {/* Motif band */}
      <div
        className={`relative shrink-0 overflow-hidden px-6 ${
          project.feature ? "h-32 pt-6 lg:h-40" : "h-24 pt-5"
        }`}
      >
        <div className="h-full w-full [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]">
          <Motif kind={project.motif} />
        </div>
      </div>

      {/* Text */}
      <div className="relative -mt-2 flex flex-1 flex-col px-6 pb-6">
        <StatusPill status={project.status} />

        <h3
          className={`mt-2.5 font-display font-bold text-foreground ${
            project.feature ? "text-2xl lg:text-[1.75rem]" : "text-lg"
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-foreground/90">
          {project.what}
        </p>
        <p
          className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
            project.feature ? "max-w-xl" : ""
          }`}
        >
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

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          {project.note ? (
            <p className="font-mono text-[11px] leading-relaxed text-slatey-400">
              {project.note}
            </p>
          ) : (
            <span />
          )}
          {project.caseStudy && (
            // TODO(placeholder): CASE_STUDY_URL — decide per project (form vs mailto)
            <a
              href={CASE_STUDY_URL}
              className="group/link inline-flex shrink-0 items-center gap-1.5 font-mono text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
            >
              Request case study
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Section
   ──────────────────────────────────────────────────────────────────────── */

export default function Projects() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-foreground/10 bg-background py-24"
    >
      {/* Parallax ambient glow */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-500/[.06] blur-[120px]"
      />

      <SectionRule label="THE WORK" align="left" />

      <div className="mx-auto max-w-6xl px-6">
        <ScrollLead />

        <div className="bento-grid mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-fr">
          {PROJECTS.map((project, i) => (
            <BentoTile
              key={project.name}
              className={`min-h-[280px] ${project.span}`}
              delay={i * 0.06}
            >
              <ProjectContent project={project} />
            </BentoTile>
          ))}
        </div>
      </div>
    </section>
  );
}
