"use client";

import {
  BrainCircuit,
  Bot,
  Database,
  Server,
  Cloud,
  Workflow,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Designing AI-powered applications using LLMs, intelligent workflows, prompt engineering, and AI agent architectures.",
    skills: ["OpenAI", "DeepSeek", "AI Agents", "Prompt Engineering"],
    color: "text-cyan-400",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description:
      "Building enterprise automation workflows that connect CRMs, APIs, spreadsheets, databases, and AI services.",
    skills: ["n8n", "REST APIs", "HubSpot", "Google Workspace"],
    color: "text-violet-400",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Developing scalable backend systems with authentication, APIs, business logic, and modular architecture.",
    skills: ["Node.js", "Express", "FastAPI", "JWT"],
    color: "text-emerald-400",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Designing efficient database schemas, caching strategies, analytics pipelines, and data-driven applications.",
    skills: ["PostgreSQL", "Prisma", "Redis", "SQL"],
    color: "text-orange-400",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Deploying production-ready applications with CI/CD pipelines and cloud infrastructure.",
    skills: ["Docker", "Vercel", "Render", "GitHub Actions"],
    color: "text-blue-400",
  },
  {
    icon: Bot,
    title: "AI Products",
    description:
      "Creating AI-first SaaS platforms for healthcare, finance, automation, and enterprise operations.",
    skills: ["Healthcare", "Fraud Detection", "Analytics", "Automation"],
    color: "text-pink-400",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Implementing secure authentication, role-based access control, API protection, and data security.",
    skills: ["JWT", "RBAC", "Encryption", "Validation"],
    color: "text-green-400",
  },
  {
    icon: Cpu,
    title: "System Design",
    description:
      "Architecting modular, scalable software systems that remain maintainable as products grow.",
    skills: ["Microservices", "Scalability", "Architecture", "Performance"],
    color: "text-yellow-400",
  },
];

export default function CapabilityGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
          Engineering Capabilities
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          From AI to Infrastructure
        </h2>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          I build complete software systems—from intelligent automation and
          scalable APIs to cloud-native platforms and enterprise dashboards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-neutral-900"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-800 ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-7">
                {item.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300 transition-colors group-hover:border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
