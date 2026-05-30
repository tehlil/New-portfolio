import Link from "next/link";
import OpsStudioCard from "@/components/OpsStudioCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-24 flex flex-col min-h-[80vh] gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            AI-First Product Engineer building scalable <span className="text-[var(--color-text-glow-primary)]">intelligent systems</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12">
            I bridge engineering, product thinking, and operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/systems" className="rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-3 font-semibold text-center hover:bg-neutral-200 transition-colors">
              View Systems
            </Link>
            <Link href="/contact" className="rounded-full border border-[var(--color-border)] px-8 py-3 font-semibold text-center hover:bg-[var(--color-surface)] transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <OpsStudioCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link href="/case-studies" className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-glow-secondary)] transition-colors">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-glow-secondary)] transition-colors">Case Studies</h2>
          <p className="text-sm text-neutral-400">Deep dives into complex problems.</p>
        </Link>
        <Link href="/dashboard" className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-glow-primary)] transition-colors">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-glow-primary)] transition-colors">Ops Dashboard</h2>
          <p className="text-sm text-neutral-400">Real-time performance metrics.</p>
        </Link>
        <Link href="/ai-lab" className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-white transition-colors">
          <h2 className="text-lg font-semibold mb-2">AI Lab</h2>
          <p className="text-sm text-neutral-400">Experiments & prototypes.</p>
        </Link>
      </div>
    </div>
  );
}
