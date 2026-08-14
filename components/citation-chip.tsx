import { Chip } from "@heroui/react";

type ChipAccent = "amber" | "indigo" | "emerald" | "rose" | "cyan" | "violet";

const CHIP_STYLES: Record<ChipAccent, { bg: string; border: string; text: string; dot: string }> = {
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    dot: "bg-indigo-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    text: "text-rose-400",
    dot: "bg-rose-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    dot: "bg-violet-400",
  },
};

export default function CitationChip({ 
  article, 
  label, 
  accent = "amber" 
}: { 
  article?: string;
  label?: string;
  accent?: ChipAccent;
}) {
  const style = CHIP_STYLES[accent];
  const displayText = label || article;

  return (
    <Chip
      size="sm"
      variant="flat"
      startContent={
        <span className={`size-1.5 rounded-full ${style.dot} animate-pulse`} />
      }
      className={`${style.bg} ${style.border} ${style.text} border font-mono text-xs font-medium px-2 h-auto py-1`}
    >
      {displayText}
    </Chip>
  );
}
