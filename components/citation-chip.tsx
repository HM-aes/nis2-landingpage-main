// Evidence element — warm amber accent.
export default function CitationChip({ article }: { article: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-xs font-medium text-amber-300">
      <span aria-hidden className="text-amber-400">§</span>
      {article}
    </span>
  );
}
