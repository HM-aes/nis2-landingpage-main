"use client";

import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Home,
  Users,
  ClipboardCheck,
  Search,
  FileText,
  FileBarChart,
  Settings,
  LogOut,
  ChevronLeft
} from "lucide-react";
import { Chip } from "@heroui/react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Clients", icon: Users },
  { label: "Audits", icon: ClipboardCheck },
  { label: "Gap Analysis", icon: Search },
];

const REPORTS = [
  { label: "Audit Reports", icon: FileText },
  { label: "Sector Report", icon: FileBarChart, badge: "FREE" },
];

const SETTINGS = [
  { label: "Admin", icon: Settings },
  { label: "Log out", icon: LogOut },
];

export default function DashboardSidebar() {
  return (
    <div className="hidden border-r border-border bg-[#0a0a0a] p-4 md:flex md:flex-col dark:bg-[#0a0a0a]">
      {/* Brand Logo & Collapse */}
      <div className="flex items-center justify-between px-2 mb-8 mt-2">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg border border-amber-600/30 bg-amber-600/10 text-amber-500 font-bold">
            <ShieldCheck className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm font-bold text-foreground">
              NIS2 Analyzer
            </span>
            <span className="font-sans text-[10px] text-muted-foreground">
              Compliance Platform
            </span>
          </div>
        </div>
        <button className="grid size-6 place-items-center rounded-md border border-border bg-surface hover:bg-surface-secondary transition-colors text-muted-foreground">
          <ChevronLeft className="size-3" />
        </button>
      </div>

      <div className="space-y-6 flex-1">
        {/* Navigation */}
        <div className="space-y-2">
          <div className="px-2">
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
              Navigation
            </span>
          </div>
          <nav className="space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                    item.active
                      ? "bg-white/5 text-white font-semibold"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon className={cn("size-4", item.active ? "text-amber-500" : "text-muted-foreground")} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Reports */}
        <div className="space-y-2 mt-6">
          <div className="px-2">
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
              Reports
            </span>
          </div>
          <nav className="space-y-0.5">
            {REPORTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer text-muted-foreground hover:bg-white/5 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <Chip 
                      size="sm" 
                      variant="flat"
                      startContent={
                        <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                      }
                      className="h-auto py-1 px-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[9px] font-bold uppercase"
                    >
                      {item.badge}
                    </Chip>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-2 mt-auto border-t border-white/5 pt-4">
        <div className="px-2">
          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
            Settings
          </span>
        </div>
        <nav className="space-y-0.5">
          {SETTINGS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer text-muted-foreground hover:bg-white/5 hover:text-white"
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
