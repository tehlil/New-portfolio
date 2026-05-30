"use client";

import { useState, useEffect } from "react";
import DashboardCharts from "./DashboardCharts";

export default function DashboardClient() {
  const [view, setView] = useState<'efficiency' | 'delivery'>('efficiency');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Operations Intelligence</h1>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Real-time metrics on efficiency, cost reduction, and delivery performance.
          </p>
        </div>
        <div className="flex bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-1">
          <button 
            onClick={() => setView('efficiency')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'efficiency' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
          >
            Efficiency & Cost
          </button>
          <button 
            onClick={() => setView('delivery')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'delivery' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
          >
            Delivery Performance
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30">
          <p className="text-neutral-400 text-sm mb-2">System Efficiency</p>
          <p className="text-3xl font-bold text-[var(--color-text-glow-primary)]">+41%</p>
        </div>
        <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30">
          <p className="text-neutral-400 text-sm mb-2">Cost Reduction</p>
          <p className="text-3xl font-bold text-emerald-400">-35%</p>
        </div>
        <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30">
          <p className="text-neutral-400 text-sm mb-2">Delivery Speed</p>
          <p className="text-3xl font-bold text-[var(--color-text-glow-secondary)]">1.8x</p>
        </div>
      </div>

      <div className="h-[400px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-6 flex flex-col justify-center items-center">
        {isMounted ? (
          <DashboardCharts view={view} />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-700 border-t-[var(--color-text-glow-primary)]"></div>
            <p className="text-sm text-neutral-400">Loading charts...</p>
          </div>
        )}
      </div>
    </div>
  );
}
