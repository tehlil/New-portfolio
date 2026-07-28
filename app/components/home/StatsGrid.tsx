"use client";

import { Bot, Workflow, Layers3, Server, ArrowUpRight } from "lucide-react";

const stats = [
  {
    title: "AI Workflows",
    value: "15+",
    description:
      "Automation pipelines built using n8n, OpenAI, DeepSeek and APIs.",
    icon: Workflow,
    color: "text-cyan-400",
  },
  {
    title: "Enterprise Systems",
    value: "8+",
    description: "Healthcare, finance, CRM, billing and operational platforms.",
    icon: Server,
    color: "text-emerald-400",
  },
  {
    title: "Technologies",
    value: "30+",
    description: "Modern frameworks, databases, cloud services and AI tools.",
    icon: Layers3,
    color: "text-violet-400",
  },
  {
    title: "AI Integrations",
    value: "10+",
    description: "LLMs, automation engines, APIs and intelligent workflows.",
    icon: Bot,
    color: "text-amber-400",
  },
];

export default function StatsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-3">
          Engineering Snapshot
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Building products with
          <span className="text-cyan-400"> measurable impact.</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
          From AI automation and backend systems to healthcare platforms and
          enterprise dashboards, every project is designed to solve operational
          challenges with scalable engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-800 ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-neutral-600 transition group-hover:text-cyan-400"
                />
              </div>

              <h3 className="mt-8 text-5xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </p>

              <p className="mt-4 leading-7 text-neutral-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
