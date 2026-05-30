import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu, Sparkles, Terminal } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface LabDetails {
  title: string;
  type: "Experiment" | "Automation" | "Prototype";
  desc: string;
  githubUrl: string;
  longDesc: string;
  techStack: string[];
  features: string[];
}

const LABS_DATA: Record<string, LabDetails> = {
  "pr-reviewer": {
    title: "Automated PR Reviewer",
    type: "Automation",
    desc: "Github Action that provides context-aware code reviews and security checks.",
    githubUrl: "https://github.com/tehlil/pr-reviewer",
    longDesc: "A serverless GitHub Action powered by LLMs that automatically reviews Pull Requests. It analyzes code diffs, generates summaries, highlights potential logic bugs, suggests optimizations, and runs compliance checks on dependencies before human review.",
    techStack: ["Node.js", "GitHub Actions API", "OpenAI API", "TypeScript"],
    features: [
      "Incremental diff analysis to minimize token usage",
      "Security vulnerability scanner for third-party libraries",
      "Interactive code suggestion replies inside GitHub PR threads",
      "Automated summary generation for release notes"
    ]
  },
  "voice-to-sql": {
    title: "Voice-to-SQL Interface",
    type: "Prototype",
    desc: "Natural language interface for complex database queries using Whisper and GPT-4.",
    githubUrl: "https://github.com/tehlil/voice-to-sql",
    longDesc: "An intuitive interface allowing non-technical business teams to speak natural language and receive optimized SQL queries and instant data visualizations. It leverages Whisper for accurate voice transcription and schema-guided GPT-4 translation for precise querying.",
    techStack: ["React", "FastAPI", "OpenAI Whisper", "PostgreSQL", "Recharts"],
    features: [
      "Speech-to-text with semantic schema-awareness",
      "Interactive schema visualizer and execution safety guardrails",
      "Dynamic data graphing and automatic visualization mapping",
      "Exportable SQL queries and query optimization suggestions"
    ]
  },
  "semantic-caching": {
    title: "Semantic Caching Layer",
    type: "Experiment",
    desc: "Redis-based caching layer using embeddings to serve similar semantic queries instantly.",
    githubUrl: "https://github.com/tehlil/semantic-caching",
    longDesc: "An experimental middleware layer designed to cut downstream LLM costs by caching responses semantically. Rather than matching exact string queries, it maps prompts to high-dimensional embedding spaces and retrieves cached answers if the semantic similarity is above 95%.",
    techStack: ["Python", "Redis Vector Search", "OpenAI Embeddings", "FastAPI"],
    features: [
      "Sub-10ms response times for semantically equivalent questions",
      "Threshold adjustments for fuzzy vs precise matching",
      "Automatic cache invalidation and feedback loops",
      "Over 40% reduction in total API endpoint costs"
    ]
  },
  "e2e-testing": {
    title: "E2E Testing Agent",
    type: "Automation",
    desc: "Autonomous agent that writes and maintains Playwright tests by observing user sessions.",
    githubUrl: "https://github.com/tehlil/e2e-testing",
    longDesc: "A tool that records actual user telemetry during sessions and uses reinforcement learning agents to auto-generate and heal Playwright test suites. When code updates break standard selector patterns, the agent repairs them dynamically by matching semantic HTML intents.",
    techStack: ["Playwright", "Node.js", "Gemini API", "React Analytics"],
    features: [
      "No-code recording of user interaction paths",
      "Self-healing selectors that adapt to UI DOM mutations",
      "Automated edge-case verification and error state logging",
      "Clean TypeScript test file export compatible with standard runners"
    ]
  },
  "dynamic-ui": {
    title: "Dynamic UI Generation",
    type: "Prototype",
    desc: "React components generated on the fly based on user context and permissions.",
    githubUrl: "https://github.com/tehlil/dynamic-ui",
    longDesc: "A prototype that builds custom client side layouts dynamically. An LLM compiles customized, isolated, and styles-secured React structures on-the-fly depending on user attributes, billing plans, and data models, returning functional layouts instantly.",
    techStack: ["Next.js", "Tailwind CSS", "React 19", "Claude Sonnet API"],
    features: [
      "Sandboxed server-side rendering of generated JSX elements",
      "Vibrant styles styling with tailwind integration",
      "Real-time user authorization and permission validation",
      "Dynamic widget mounting with live state synchronization"
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = LABS_DATA[slug];
  return {
    title: data ? `${data.title} | AI Lab` : "AI Lab Experiment",
    description: data?.desc || "Explore AI Lab experiments.",
  };
}

export default async function LabSubPage({ params }: Props) {
  const { slug } = await params;
  const data = LABS_DATA[slug];

  if (!data) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Experiment Not Found</h1>
        <p className="text-neutral-400 mb-8">The requested AI Lab resource could not be found.</p>
        <Link href="/ai-lab" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 flex flex-col gap-8 min-h-[80vh]">
      <div>
        <Link href="/ai-lab" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase
                ${data.type === 'Experiment' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 
                  data.type === 'Automation' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 
                  'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                {data.type}
              </span>
              <span className="flex items-center gap-1 text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
                Prototype v1.0
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-foreground)]">{data.title}</h1>
          </div>
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors self-start sm:self-auto"
          >
            <Github className="w-4 h-4" /> GitHub Repository
          </a>
        </div>
      </div>

      <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed">
        <p>{data.longDesc}</p>
        
        <div>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--color-text-glow-primary)]" /> Key Features
          </h2>
          <ul className="space-y-3">
            {data.features.map((feature, i) => (
              <li key={i} className="flex gap-3 text-sm text-neutral-400">
                <span className="text-[var(--color-text-glow-primary)] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8 mb-4 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[var(--color-text-glow-secondary)]" /> Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
