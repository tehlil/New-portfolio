// "use client";

// import Link from "next/link";
// import { ArrowRight, Github, Sparkles } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
//         <div className="absolute right-10 bottom-10 h-[250px] w-[250px] rounded-full bg-purple-600/20 blur-[120px]" />
//       </div>

//       <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
//           <Sparkles size={16} className="text-cyan-400" />

//           <span className="text-sm tracking-wide text-neutral-300">
//             AI • Backend • Cloud • Automation
//           </span>
//         </div>

//         {/* Heading */}
//         <div className="mt-8 max-w-5xl">
//           <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
//             Building
//             <br />
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Intelligent Systems
//             </span>
//             <br />
//             that Scale.
//           </h1>

//           <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-400">
//             AI-First Product Engineer focused on building production-grade
//             healthcare platforms, workflow automation systems, fraud detection
//             engines, and scalable backend architectures.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="mt-12 flex flex-wrap gap-5">
//           <Link
//             href="/projects/pulseflow"
//             className="group flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-lg font-semibold transition hover:bg-blue-700"
//           >
//             Explore Systems
//             <ArrowRight
//               size={20}
//               className="transition group-hover:translate-x-1"
//             />
//           </Link>

//           <Link
//             href="/case-studies"
//             className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-lg font-semibold backdrop-blur-xl transition hover:bg-white/10"
//           >
//             Case Studies
//           </Link>

//           <Link
//             href="https://github.com/tehlil"
//             target="_blank"
//             className="rounded-2xl border border-white/10 bg-transparent px-7 py-4 text-lg font-semibold transition hover:border-blue-500"
//           >
//             <div className="flex items-center gap-2">
//               <Github size={20} />
//               GitHub
//             </div>
//           </Link>
//         </div>

//         {/* Stats */}
//         <div className="mt-24 grid gap-6 md:grid-cols-4">
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
//             <h2 className="text-4xl font-bold text-cyan-400">5+</h2>

//             <p className="mt-3 text-neutral-400">Production Systems</p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
//             <h2 className="text-4xl font-bold text-blue-400">20+</h2>

//             <p className="mt-3 text-neutral-400">AI Workflows</p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
//             <h2 className="text-4xl font-bold text-purple-400">15+</h2>

//             <p className="mt-3 text-neutral-400">Full-Stack Projects</p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
//             <h2 className="text-4xl font-bold text-emerald-400">99.9%</h2>

//             <p className="mt-3 text-neutral-400">Infrastructure Focus</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, Database, Bot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-52 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28">
        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
          <Sparkles size={15} />
          AI-First Product Engineer
        </div>

        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Building
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            {" "}
            Intelligent Systems
          </span>
          <br />
          that automate businesses,
          <br />
          not just websites.
        </h1>

        {/* Subtitle */}

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-400">
          I design AI-powered products, automation platforms, scalable backend
          systems and enterprise dashboards that solve real operational
          problems.
          <br />
          From AI agents and workflow automation to healthcare platforms and
          fraud detection systems.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-5">
          <Link
            href="/projects/pulseflow"
            className="group flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Projects
            <ArrowRight
              className="transition group-hover:translate-x-1"
              size={18}
            />
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-neutral-700 px-7 py-4 font-semibold transition hover:border-cyan-400 hover:bg-neutral-900"
          >
            Let's Build Together
          </Link>
        </div>

        {/* Bottom Cards */}

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-7 backdrop-blur">
            <Cpu className="mb-5 text-cyan-400" size={34} />

            <h3 className="text-lg font-semibold">AI Automation</h3>

            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Enterprise automation using OpenAI, n8n, AI Agents, CRMs and
              custom APIs.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-7 backdrop-blur">
            <Database className="mb-5 text-violet-400" size={34} />

            <h3 className="text-lg font-semibold">Backend Systems</h3>

            <p className="mt-3 text-sm leading-7 text-neutral-400">
              High-performance APIs, scalable databases, authentication and
              cloud-native architectures.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-7 backdrop-blur">
            <Bot className="mb-5 text-emerald-400" size={34} />

            <h3 className="text-lg font-semibold">AI Products</h3>

            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Healthcare intelligence, fraud detection, predictive analytics and
              enterprise SaaS platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
