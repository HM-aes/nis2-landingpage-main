"use client";

import { motion } from "motion/react";
import DashboardSidebar from "@/components/dashboard-sidebar";
import { 
  Search, 
  Bell, 
  Shield, 
  Users, 
  ClipboardList, 
  ShieldCheck, 
  AlertTriangle,
  Plus,
  BarChart3,
  Clock
} from "lucide-react";
import { Chip } from "@heroui/react";
import { cn } from "@/lib/utils";

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[1200px]">
      {/* Outer ambient glow halo */}
      <div className="aria-hidden pointer-events-none absolute -inset-4 rounded-3xl bg-amber-500/10 blur-2xl" />

      {/* Main App Window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl flex font-sans">
        
        {/* Sidebar */}
        <div className="w-[260px] shrink-0 border-r border-white/5">
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-[760px] overflow-hidden">
          
          {/* Top Navbar */}
          <div className="flex h-16 items-center justify-between px-8 border-b border-white/5">
            <h1 className="text-lg font-semibold text-white">Dashboard</h1>
            
            <div className="flex items-center gap-6">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  readOnly
                  placeholder="Search..."
                  className="w-full rounded-full border border-white/10 bg-white/5 py-1.5 pl-9 pr-4 text-sm text-white placeholder-muted-foreground focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-muted-foreground font-semibold">SEARCH</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Bell className="size-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
                <div className="grid h-8 w-8 place-items-center rounded border border-amber-600/30 bg-amber-600/10 text-amber-500 font-bold text-sm cursor-pointer hover:bg-amber-600/20 transition-colors">
                  S
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Canvas */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
            
            {/* Welcome Banner */}
            <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#121212] p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-amber-500" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">REAL-TIME OVERVIEW OF YOUR NIS2 OBLIGATIONS</span>
              </div>
              <div className="absolute top-4 right-6">
                <Chip 
                  size="sm" 
                  variant="flat"
                  className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 h-auto py-1.5 font-medium text-xs flex items-center gap-1.5"
                >
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Audit-ready
                </Chip>
              </div>

              <div className="flex flex-col items-center gap-4 max-w-lg mt-4">
                <div className="relative">
                  <Shield className="size-12 text-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-6 bg-red-500 rotate-12 rounded-full" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-white">Welcome to NIS2 Analyzer</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Add your first client to start NIS2 compliance analyses. You can then create an audit, upload documents, and start the AI analysis.
                </p>
                
                <div className="flex items-center gap-3 mt-4">
                  <button className="flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors px-4 py-2 text-sm font-semibold text-black">
                    <Plus className="size-4" />
                    Add First Client
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-4 py-2 text-sm font-semibold text-white">
                    <BarChart3 className="size-4 text-emerald-500" />
                    Free Sector Report
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="rounded-xl border border-white/5 bg-[#121212] p-5 flex flex-col justify-between h-[120px]">
                <div className="flex items-center justify-between">
                  <div className="rounded-md border border-white/10 bg-white/5 p-1.5">
                    <Users className="size-4 text-muted-foreground" />
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500 border border-amber-500/20">
                    +0 this month
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">0</div>
                  <div className="text-xs text-muted-foreground mt-1">Total Clients</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-white/5 bg-[#121212] p-5 flex flex-col justify-between h-[120px]">
                <div className="flex items-center justify-between">
                  <div className="rounded-md border border-white/10 bg-white/5 p-1.5">
                    <ClipboardList className="size-4 text-muted-foreground" />
                  </div>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-white/10">
                    0 processing
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">0</div>
                  <div className="text-xs text-muted-foreground mt-1">Active Audits</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-white/5 bg-[#121212] p-5 flex flex-col justify-between h-[120px]">
                <div className="flex items-center justify-between">
                  <div className="rounded-md border border-white/10 bg-white/5 p-1.5">
                    <ShieldCheck className="size-4 text-muted-foreground" />
                  </div>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-white/10">
                    across 0 audits
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">0.0%</div>
                  <div className="text-xs text-muted-foreground mt-1">Avg. Compliance Score</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-xl border border-white/5 bg-[#121212] p-5 flex flex-col justify-between h-[120px]">
                <div className="flex items-center justify-between">
                  <div className="rounded-md border border-white/10 bg-white/5 p-1.5">
                    <AlertTriangle className="size-4 text-muted-foreground" />
                  </div>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-white/10">
                    across all clients
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">0</div>
                  <div className="text-xs text-muted-foreground mt-1">Critical Open Gaps</div>
                </div>
              </div>
            </div>

            {/* Lower Section Grid */}
            <div className="grid grid-cols-[2.5fr_1fr] gap-4">
              
              {/* Audit Pipeline */}
              <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="size-1.5 rounded-full bg-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">AUDIT PIPELINE</span>
                </div>
                
                <div className="flex items-center justify-between w-full relative before:absolute before:left-0 before:right-0 before:top-3 before:h-px before:bg-white/10 before:z-0">
                  {["INTAKE", "PROCESSING", "ANALYSIS", "REVIEW", "COMPLETE"].map((stage, i) => (
                    <div key={stage} className="flex flex-col items-center gap-4 z-10 w-32">
                      <Chip
                        size="sm"
                        variant="flat"
                        className={cn(
                          "px-2 py-1 h-auto font-mono text-[9px] font-bold uppercase tracking-wider border flex items-center gap-1.5",
                          i === 4 
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
                            : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                        )}
                      >
                        <span className={cn("size-1.5 rounded-full animate-pulse", i === 4 ? "bg-emerald-400" : "bg-amber-400")} />
                        {stage}
                      </Chip>
                      
                      <div className="w-full flex flex-col items-center justify-center border border-white/5 bg-white/[0.02] rounded-lg h-32 p-4 text-center">
                        <ClipboardList className="size-5 text-white/20 mb-3" />
                        <span className="text-xs text-muted-foreground max-w-[80px]">No audits in this stage</span>
                        {i === 0 && (
                          <button className="mt-4 rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500 px-3 py-1.5 text-xs font-semibold hover:bg-amber-500/20 transition-colors">
                            + New audit
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-xl border border-white/5 bg-[#121212] p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="size-1.5 rounded-full bg-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">RECENT ACTIVITY</span>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <Clock className="size-6 text-white/20 mb-4" />
                  <h4 className="text-sm font-semibold text-white mb-2">No activity yet</h4>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed max-w-[200px]">
                    Activity appears here when you create clients and run audits.
                  </p>
                  <button className="rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500 px-4 py-2 text-xs font-semibold hover:bg-amber-500/20 transition-colors">
                    + Add client
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
