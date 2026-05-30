import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Tehlil Khan",
  description: "Deep dive case studies into optimizing healthcare staffing, automating fintech compliance, and building intelligent systems.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Optimizing Healthcare Staffing Allocation",
      context: "A regional hospital network was struggling with unpredictable patient surges, leading to understaffed shifts and increased overtime costs.",
      problem: "Manual scheduling based on historical averages failed to account for real-time variables like local events or flu season spikes.",
      approach: "Developed an AI-driven forecasting model that ingested weather, local event data, and historical admission rates to predict staffing needs 7 days in advance.",
      outcome: "Reduced staffing shortages by 40% and cut overtime expenditure by $1.2M annually while maintaining care quality."
    },
    {
      title: "Automating Compliance in FinTech Onboarding",
      context: "A fast-growing FinTech startup faced a bottleneck in user onboarding due to manual KYC (Know Your Customer) document reviews.",
      problem: "The compliance team was overwhelmed, resulting in a 3-day average wait time for new users and a 25% drop-off rate during onboarding.",
      approach: "Architected a multi-tiered verification system using OCR and computer vision to automatically process and verify standard IDs, escalating only edge cases to human reviewers.",
      outcome: "Decreased median onboarding time from 3 days to 4 minutes and improved onboarding conversion by 30%."
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Case Studies</h1>
        <p className="text-neutral-400 max-w-2xl text-lg">
          In-depth breakdowns of complex problems and the systems that solved them.
        </p>
      </header>

      <div className="grid gap-12">
        {caseStudies.map((study, i) => (
          <div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-text-glow-secondary)] opacity-50" />
            <h2 className="text-3xl font-semibold mb-8 text-[var(--color-foreground)]">{study.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-glow-secondary)] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-glow-secondary)]"></span> Context
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">{study.context}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-glow-secondary)] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-glow-secondary)]"></span> Problem
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">{study.problem}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-glow-secondary)] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-glow-secondary)]"></span> Approach
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">{study.approach}</p>
                </div>
                <div className="bg-[var(--color-background)] rounded-xl p-6 border border-[var(--color-border)] mt-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Outcome</h3>
                  <p className="text-lg font-medium text-white">{study.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
