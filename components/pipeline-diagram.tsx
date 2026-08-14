import { BookOpen, FileText, ScanSearch, Sparkles, type LucideIcon } from "lucide-react";

// 5-node pipeline, dotted-leader connectors, signal pulse on the AI node.
// Pure HTML/SVG/CSS — animates via globals.css, so it
// degrades to a static diagram without JS and under reduced motion.

type Node = {
  label: string;
  icon?: LucideIcon;
  glyph?: string;
  solid?: boolean;
};

const NODES: Node[] = [
  { label: "Your policy document", icon: FileText },
  { label: "Semantic index", icon: ScanSearch },
  { label: "Full directive text", icon: BookOpen },
  { label: "AI reasoning", icon: Sparkles, solid: true },
  { label: "Cited gap", glyph: "§" },
];

function Connector() {
  return (
    <svg
      aria-hidden
      className="hidden h-px w-full min-w-6 flex-1 md:block"
      preserveAspectRatio="none"
      viewBox="0 0 100 2"
    >
      <line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="var(--muted-foreground)"
        strokeWidth="1.5"
        className="dash-animate"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function PipelineDiagram() {
  return (
    <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-2">
      {NODES.map((node, i) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className="contents">
            {i > 0 && <Connector />}
            <div className="flex items-center gap-3 md:w-32 md:flex-col md:gap-2 md:text-center">
              <div
                className={
                  node.solid
                    ? "pulse-signal flex size-11 shrink-0 items-center justify-center rounded-md bg-signal text-white"
                    : "flex size-11 shrink-0 items-center justify-center rounded-md border border-white/[.08] bg-ink-700/50 text-slatey-300"
                }
              >
                {node.glyph ? (
                  <span className="font-mono text-lg text-signal-soft">{node.glyph}</span>
                ) : Icon ? (
                  <Icon size={18} />
                ) : null}
              </div>
              <p className="text-sm text-slatey-300 md:text-xs">{node.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
