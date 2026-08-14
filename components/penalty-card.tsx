"use client";

import { Card, CardContent } from "@heroui/react";

// Penalty-notice styling: hairline border, mono figures, severity accent
// bar on Essential only.
export default function PenaltyCard({
  tier,
  amount,
  turnover,
}: {
  tier: "Essential" | "Important";
  amount: string;
  turnover: string;
}) {
  const essential = tier === "Essential";
  return (
    <Card 
      className="shadow-sm backdrop-blur-md relative overflow-hidden rounded-lg border-foreground/10 bg-background/80"
    >
      {essential && (
        <div
          className="absolute inset-y-0 left-0 w-1 z-10"
          style={{ backgroundColor: "var(--sev-critical)" }}
        />
      )}
      <CardContent className="p-6">
        <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground">
          MAXIMUM FINE · {tier.toUpperCase()} ENTITIES
        </p>
        <p className="mt-3 font-mono text-3xl tracking-tight">{amount}</p>
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          or {turnover} of global annual turnover — whichever is higher
        </p>
      </CardContent>
    </Card>
  );
}
