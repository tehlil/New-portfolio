"use client";

import { motion } from "framer-motion";

export default function InteractiveSystemGraph() {
  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 overflow-hidden flex items-center justify-center">
      {/* Central Node */}
      <motion.div
        className="absolute w-16 h-16 rounded-2xl bg-neutral-900 border border-[var(--color-glow-primary)] flex items-center justify-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-8 h-8 rounded-full bg-[var(--color-glow-primary)]/50 blur-md" />
      </motion.div>

      {/* Orbiting Nodes Placeholder */}
      <motion.div
        className="absolute w-64 h-64 border border-[var(--color-border)] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-glow-secondary)] rounded-full shadow-[0_0_10px_var(--color-glow-secondary)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white/50 rounded-full" />
      </motion.div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </div>
  );
}
