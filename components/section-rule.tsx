// Ruled hairline + mono dossier label between acts.
// align="left" hugs the viewport edge like the Hero, instead of sitting
// in the centered max-w-5xl chapter container.
export default function SectionRule({
  label,
  align = "center",
}: {
  label: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "left"
          ? "flex items-center gap-4 pl-6 pr-6 pt-20 pb-10 sm:pl-10 lg:pl-16"
          : "mx-auto flex max-w-5xl items-center gap-4 px-6 pt-20 pb-10"
      }
    >
      <span className="font-mono text-xs tracking-[0.2em] text-slatey-400">
        {label}
      </span>
      <div className="rule-shimmer h-px flex-1" />
    </div>
  );
}
