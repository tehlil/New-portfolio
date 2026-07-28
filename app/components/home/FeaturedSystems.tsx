"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  HeartPulse,
  CalendarDays,
  ShieldCheck,
  Bot,
  Briefcase,
  Receipt,
} from "lucide-react";

const systems = [
  {
    title: "PulseFlow AI",
    href: "/projects/pulseflow",
    description:
      "Enterprise healthcare management platform featuring authentication, patient management, AI analytics and scalable backend architecture.",
    icon: HeartPulse,
    color: "from-cyan-500/20 to-blue-500/10",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Appointment Scheduling",
    href: "/projects/appointment-schedule",
    description:
      "Healthcare scheduling platform for patient booking, doctor management and hospital operations.",
    icon: CalendarDays,
    color: "from-orange-500/20 to-yellow-500/10",
    tags: ["React", "FastAPI", "Python"],
  },
  {
    title: "QuantForge",
    href: "/projects/quantforge",
    description:
      "Fraud detection platform for monitoring financial transactions using real-time dashboards and analytics.",
    icon: ShieldCheck,
    color: "from-green-500/20 to-emerald-500/10",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "AI Lead Automation",
    href: "/projects/lead-automation",
    description:
      "Automated B2B lead generation, CRM enrichment and personalised outreach powered by AI Agents.",
    icon: Bot,
    color: "from-violet-500/20 to-purple-500/10",
    tags: ["n8n", "OpenAI", "HubSpot"],
  },
  {
    title: "CareerOS AI",
    href: "/projects/careeros-ai",
    description:
      "AI workflow for discovering jobs, analysing companies and automating application management.",
    icon: Briefcase,
    color: "from-blue-500/20 to-indigo-500/10",
    tags: ["n8n", "DeepSeek", "Automation"],
  },
  {
    title: "GST Billing System",
    href: "/projects/gst-billing",
    description:
      "Business billing platform supporting GST invoices, inventory, reporting and customer management.",
    icon: Receipt,
    color: "from-red-500/20 to-orange-500/10",
    tags: ["React", "Node.js", "Prisma"],
  },
];

export default function FeaturedSystems() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
        <div>
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm">
            Portfolio
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Featured Systems
          </h2>

          <p className="mt-5 text-neutral-400 max-w-2xl text-lg">
            Products engineered to solve operational challenges using AI,
            backend engineering and scalable architectures.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {systems.map((system) => {
          const Icon = system.icon;

          return (
            <Link
              key={system.title}
              href={system.href}
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
            >
              {/* Gradient Background */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-30`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800">
                    <Icon className="text-cyan-400" size={30} />
                  </div>

                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:rotate-45"
                    size={22}
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold">{system.title}</h3>

                <p className="mt-5 text-neutral-400 leading-8">
                  {system.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {system.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-700 px-4 py-2 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-3 font-medium text-cyan-400">
                  View Case Study
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
