"use client";

import {
  Globe,
  Monitor,
  Server,
  Database,
  Bot,
  Workflow,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const layers = [
  {
    title: "Client Layer",
    description:
      "Responsive interfaces built with modern frontend technologies.",
    icon: Monitor,
    tech: ["Next.js", "React", "TypeScript"],
    color: "text-cyan-400",
  },
  {
    title: "API Layer",
    description:
      "Scalable backend services with authentication and business logic.",
    icon: Server,
    tech: ["Node.js", "Express", "REST APIs"],
    color: "text-blue-400",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent workflows powered by LLMs and automation engines.",
    icon: Bot,
    tech: ["OpenAI", "n8n", "DeepSeek"],
    color: "text-violet-400",
  },
  {
    title: "Data Layer",
    description: "Reliable storage, caching and analytics infrastructure.",
    icon: Database,
    tech: ["PostgreSQL", "Prisma", "Redis"],
    color: "text-emerald-400",
  },
];

export default function Architecture() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
          Architecture
        </span>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Engineering systems,
          <span className="text-cyan-400"> not isolated applications.</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Every product follows a modular architecture focused on scalability,
          automation, security, and maintainability—from frontend experiences to
          AI-powered backend services.
        </p>
      </div>

      {/* Architecture Flow */}

      <div className="grid gap-8 lg:grid-cols-4">
        {layers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <div
              key={layer.title}
              className="relative rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-2"
            >
              {index !== layers.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 border-t border-dashed border-neutral-700"></div>
              )}

              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-800 ${layer.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {layer.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-7">
                {layer.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {layer.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Capabilities */}

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <Globe className="text-cyan-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold">Cloud Ready</h3>
          <p className="mt-3 text-neutral-400">
            Applications designed for cloud deployment and horizontal scaling.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <Workflow className="text-violet-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold">Workflow Automation</h3>
          <p className="mt-3 text-neutral-400">
            Automated pipelines connecting AI, CRMs, APIs and business tools.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <ShieldCheck className="text-emerald-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold">Security</h3>
          <p className="mt-3 text-neutral-400">
            Authentication, role-based access, secure APIs and protected data
            flows.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <Cloud className="text-orange-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold">Scalable Infrastructure</h3>
          <p className="mt-3 text-neutral-400">
            Modular services designed for performance, reliability and future
            growth.
          </p>
        </div>
      </div>

      {/* Workflow Diagram */}

      <div className="mt-24 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-10 overflow-x-auto">
        <h3 className="text-2xl font-semibold text-white mb-10 text-center">
          Typical System Flow
        </h3>

        <div className="flex items-center justify-between gap-6 min-w-[900px]">
          {[
            "Users",
            "Next.js",
            "Node API",
            "AI Agents",
            "Database",
            "Cloud",
          ].map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-4 text-center font-medium text-white min-w-[120px]">
                {step}
              </div>

              {index !== 5 && (
                <div className="mx-4 h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-violet-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
