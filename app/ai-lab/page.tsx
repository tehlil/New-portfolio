import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Lab | Tehlil Khan",
  description: "Explore AI experiments, automations, and prototypes built by Tehlil Khan.",
};

export default function AILabPage() {
  const labs = [
    { type: "Experiment", title: "LLM Routing Layer", desc: "A smart router that selects the most cost-effective LLM based on query complexity.", href: "/ai-lab/llm-router" },
    { type: "Automation", title: "Automated PR Reviewer", desc: "Github Action that provides context-aware code reviews and security checks.", href: "/ai-lab/pr-reviewer" },
    { type: "Prototype", title: "Voice-to-SQL Interface", desc: "Natural language interface for complex database queries using Whisper and GPT-4.", href: "/ai-lab/voice-to-sql" },
    { type: "Experiment", title: "Semantic Caching", desc: "Redis-based caching layer using embeddings to serve similar semantic queries instantly.", href: "/ai-lab/semantic-caching" },
    { type: "Automation", title: "E2E Testing Agent", desc: "Autonomous agent that writes and maintains Playwright tests by observing user sessions.", href: "/ai-lab/e2e-testing" },
    { type: "Prototype", title: "Dynamic UI Generation", desc: "React components generated on the fly based on user context and permissions.", href: "/ai-lab/dynamic-ui" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI Lab</h1>
        <p className="text-neutral-400 max-w-2xl text-lg">
          Experiments, automations, and prototypes exploring the edge of AI engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab, i) => {
          const CardContent = (
            <>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md bg-[var(--color-background)] border border-[var(--color-border)] 
                  ${lab.type === 'Experiment' ? 'text-blue-400' : lab.type === 'Automation' ? 'text-purple-400' : 'text-emerald-400'}`}>
                  {lab.type}
                </span>
                <span className="text-neutral-400 group-hover:text-white transition-colors">↗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">{lab.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{lab.desc}</p>
            </>
          );

          if (lab.href) {
            return (
              <Link 
                key={i} 
                href={lab.href}
                className="group relative block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-6 hover:bg-[var(--color-surface)] hover:border-sky-500/35 transition-all"
              >
                {CardContent}
              </Link>
            );
          }

          return (
            <div key={i} className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-6 hover:bg-[var(--color-surface)] transition-all">
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

