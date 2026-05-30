import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems I've Built | Tehlil Khan",
  description: "A collection of scalable, intelligent systems bridging engineering and product operations built by Tehlil Khan.",
};

export default function SystemsPage() {
  const systems = [
    {
      title: "Healthcare Scheduling System",
      problem: "Inefficient patient routing causing long wait times and high provider burnout.",
      approach: "Built a predictive routing engine that balances patient acuity with provider availability using constraint programming.",
      techStack: ["Next.js", "Python", "PostgreSQL", "Redis"],
      outcome: "Reduced wait times by 35% and increased provider utilization by 20%.",
    },
    {
      title: "Clinical Risk Prediction Engine",
      problem: "Late identification of high-risk patients leading to preventable readmissions.",
      approach: "Developed an ML pipeline processing real-time EHR data to flag at-risk patients 48 hours earlier.",
      techStack: ["PyTorch", "FastAPI", "AWS", "React"],
      outcome: "15% reduction in 30-day readmission rates across 3 pilot hospitals.",
    },
    {
      title: "Identity Intelligence System",
      problem: "High fraud rates in user onboarding due to sophisticated synthetic identities.",
      approach: "Implemented a multi-modal identity verification system combining document analysis and behavioral biometrics.",
      techStack: ["Go", "TensorFlow", "Kafka", "Vue.js"],
      outcome: "Decreased fraudulent signups by 80% while reducing manual review time by 50%.",
    },
    {
      title: "Interactive Media Platform",
      problem: "Low user engagement and high latency in real-time collaborative media streaming.",
      approach: "Architected an edge-computed WebRTC infrastructure with predictive pre-fetching.",
      techStack: ["Node.js", "WebRTC", "Redis Edge", "Next.js"],
      outcome: "Improved video start time by 60% and increased session length by 40%.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Systems I've Built</h1>
        <p className="text-neutral-400 max-w-2xl text-lg">
          A collection of scalable, intelligent systems bridging engineering and product operations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {systems.map((system, i) => (
          <div key={i} className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-8 backdrop-blur-sm hover:border-[var(--color-text-glow-primary)] transition-colors group">
            <h2 className="text-2xl font-semibold mb-6 group-hover:text-[var(--color-text-glow-primary)] transition-colors">{system.title}</h2>
            
            <div className="space-y-4 flex-grow">
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">Problem</h3>
                <p className="text-neutral-300">{system.problem}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">Approach</h3>
                <p className="text-neutral-300">{system.approach}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {system.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full border border-[var(--color-border)] bg-[var(--color-background)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-semibold text-[var(--color-text-glow-primary)] uppercase tracking-wider mb-1">Outcome</h3>
              <p className="text-[var(--color-foreground)] font-medium">{system.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
