"use client";

import CitationChip from "@/components/citation-chip";
import { Card, CardContent, Chip } from "@heroui/react";

const SEVERITY_COLOR: Record<string, string> = {
  CRITICAL: "var(--sev-critical)",
  HIGH: "var(--sev-high)",
  MEDIUM: "var(--sev-medium)",
  LOW: "var(--sev-low)",
};

export default function FindingCard({
  severity,
  title,
  description,
  article,
  bare = false,
}: {
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  title: string;
  description: string;
  article: string;
  bare?: boolean; // no border/padding — used inside the hero demo
}) {
  const color = SEVERITY_COLOR[severity];
  return (
    <Card 
      className={bare ? "bg-transparent border-none" : "shadow-sm backdrop-blur-md border-foreground/10 bg-background/80"}
    >
      <CardContent className={bare ? "p-0" : "p-5"}>
        <div className="flex items-start gap-3">
          <Chip
            size="sm"
            variant="flat"
            startContent={
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
            }
            className="rounded-md mt-0.5 border-none h-auto py-1 font-mono text-[11px] font-medium text-white px-2"
            style={{ backgroundColor: color }}
          >
            {severity}
          </Chip>
          <div className="min-w-0">
            <p className="font-medium leading-snug">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            <div className="mt-2.5">
              <CitationChip article={article} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
