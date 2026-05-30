"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function OpsStudioCard() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4">
      {/* Radial Background Glow (Cyan at top, Purple/Violet at bottom) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[280px] h-[280px] rounded-full bg-cyan-500/20 blur-[50px] -translate-y-16 animate-pulse duration-[6000ms]" />
        <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/20 blur-[50px] translate-y-16 animate-pulse duration-[8000ms]" />
      </div>

      {/* Subtle Grid Dot Background behind the card */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-[40px]" />

      {/* Main Glassmorphic Card Container */}
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full h-full rounded-[36px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col items-center justify-center shadow-2xl cursor-pointer group"
      >
        {/* Glow Border Effect */}
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        {/* Dashed Inner Border Wrapper */}
        <div className="w-full h-full border border-dashed border-white/5 group-hover:border-white/10 rounded-[28px] flex flex-col items-center justify-center p-6 transition-colors duration-300">
          
          {/* Icon (Glowing activity waveform) */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="mb-6"
          >
            <Activity className="w-10 h-10 text-[var(--color-text-glow-secondary)] drop-shadow-[0_0_12px_var(--color-glow-secondary)]" />
          </motion.div>

          {/* Bold, wide, futuristic stylized title */}
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-white uppercase text-center mb-4 transition-colors group-hover:text-[var(--color-text-glow-primary)] duration-300">
            TK.SYSTEMS
          </h2>

          {/* Subtitle with double slashes */}
          <p className="text-[10px] md:text-xs font-medium tracking-wider text-neutral-400 text-center max-w-[280px] leading-relaxed uppercase">
            Scaling Technical Operations // High Efficiency SaaS Architecture
          </p>

          {/* Tag Badges */}
          <div className="flex gap-2.5 mt-8">
            {["OPS", "SaaS", "AI"].map((tag) => (
              <span
                key={tag}
                className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 rounded px-3 py-1 text-[9px] font-semibold tracking-wider text-neutral-400 hover:text-white uppercase transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
