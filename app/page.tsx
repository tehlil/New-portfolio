// // import Link from "next/link";
// // import OpsStudioCard from "@/components/OpsStudioCard";
// // import ProjectCard, { Project } from "@/components/ProjectCard";

// // import { Project } from "@/components/ProjectCard";

// // const projects: Project[] = [
// //   {
// //     title: "Apple iPhone 15 Pro Clone",
// //     url: "https://tehlil.github.io/website/",
// //     description:
// //       "An interactive 3D product showcase of the Apple iPhone 15 Pro. Features premium scroll-driven animations, 3D model interaction, and custom lighting models.",
// //     iconName: "Smartphone",
// //     techTags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
// //     glowColor: "rgba(56, 189, 248, 0.15)",
// //   },
// //   {
// //     title: "Brainwave AI",
// //     url: "https://tehlil.github.io/NeuroLink/",
// //     description:
// //       "A sleek, modern AI-first landing page template. Implements premium glassmorphism, responsive grid components, and parallax scroll effects.",
// //     iconName: "Brain",
// //     techTags: ["React", "Framer Motion", "Tailwind CSS"],
// //     glowColor: "rgba(168, 85, 247, 0.15)",
// //   },
// //   {
// //     title: "Voice Expense Tracker",
// //     url: "https://tehlil.github.io/tracker/",
// //     description:
// //       "A smart budget and transaction tracker powered by Speechly voice commands. Speak naturally to manage transactions and visualize budgets instantly.",
// //     iconName: "Mic",
// //     techTags: ["React", "Speechly", "Chart.js", "CSS3"],
// //     glowColor: "rgba(34, 197, 94, 0.15)",
// //   },
// //   {
// //     title: "Shoppy Dashboard",
// //     url: "https://tehlil.github.io/admin-dashboard/",
// //     description:
// //       "A professional React admin dashboard featuring fully customizable e-commerce analytics, scheduler modules, Kanban boards, and multi-format charting.",
// //     iconName: "LayoutDashboard",
// //     techTags: ["React", "Syncfusion", "Context API", "Tailwind"],
// //     glowColor: "rgba(239, 68, 68, 0.15)",
// //   },
// //   {
// //     title: "Appointment Scheduling System",
// //     url: "https://appointment-schedule-xi.vercel.app",
// //     description:
// //       "An AI-powered healthcare analytics dashboard predicting clinical patient lengths of stay, risk profiles, and resource optimization via XGBoost ML pipelines.",
// //     iconName: "HeartPulse",
// //     techTags: ["React", "FastAPI", "Python", "PostgreSQL"],
// //     glowColor: "rgba(245, 158, 11, 0.15)",
// //   },

// //   {
// //     title: "QuantForge",
// //     url: "https://quantforge-gamma.vercel.app",
// //     description:
// //       "A modern fraud detection dashboard featuring transaction monitoring, risk analytics, fraud alerts, and interactive visualizations for financial systems.",
// //     iconName: "Shield",
// //     techTags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
// //     glowColor: "rgba(59, 130, 246, 0.15)",
// //   },
// // ];

// // export default function Home() {
// //   return (
// //     <div className="mx-auto max-w-5xl px-6 py-12 md:py-24 flex flex-col min-h-[80vh] gap-20">
// //       {/* Hero Section */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //         <div>
// //           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
// //             AI-First Product Engineer building scalable{" "}
// //             <span className="text-[var(--color-text-glow-primary)]">
// //               intelligent systems
// //             </span>
// //           </h1>
// //           <p className="text-xl md:text-2xl text-neutral-400 mb-12">
// //             I bridge engineering, product thinking, and operations.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4">
// //             <Link
// //               href="/systems"
// //               className="rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-3 font-semibold text-center hover:bg-neutral-200 transition-colors"
// //             >
// //               View Systems
// //             </Link>
// //             <Link
// //               href="/contact"
// //               className="rounded-full border border-[var(--color-border)] px-8 py-3 font-semibold text-center hover:bg-[var(--color-surface)] transition-colors"
// //             >
// //               Get in Touch
// //             </Link>
// //           </div>
// //         </div>
// //         <div className="w-full flex justify-center items-center">
// //           <OpsStudioCard />
// //         </div>
// //       </div>

// //       {/* Featured Projects Section */}
// //       <div className="flex flex-col gap-10 mt-4">
// //         <div className="flex flex-col gap-3">
// //           <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
// //             Featured Projects
// //           </h2>
// //           <p className="text-lg text-neutral-400 max-w-2xl">
// //             A curated showcase of interactive products, AI applications, and
// //             predictive dashboards.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
// //           <div className="col-span-1 md:col-span-1 lg:col-span-3">
// //             <ProjectCard project={projects[0]} />
// //           </div>
// //           <div className="col-span-1 md:col-span-1 lg:col-span-3">
// //             <ProjectCard project={projects[1]} />
// //           </div>
// //           <div className="col-span-1 md:col-span-1 lg:col-span-2">
// //             <ProjectCard project={projects[2]} />
// //           </div>
// //           <div className="col-span-1 md:col-span-1 lg:col-span-2">
// //             <ProjectCard project={projects[3]} />
// //           </div>
// //           <div className="col-span-1 md:col-span-2 lg:col-span-2">
// //             <ProjectCard project={projects[4]} />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <Link
// //           href="/case-studies"
// //           className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-glow-secondary)] transition-colors"
// //         >
// //           <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-glow-secondary)] transition-colors">
// //             Case Studies
// //           </h2>
// //           <p className="text-sm text-neutral-400">
// //             Deep dives into complex problems.
// //           </p>
// //         </Link>
// //         <Link
// //           href="/dashboard"
// //           className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-glow-primary)] transition-colors"
// //         >
// //           <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-glow-primary)] transition-colors">
// //             Ops Dashboard
// //           </h2>
// //           <p className="text-sm text-neutral-400">
// //             Real-time performance metrics.
// //           </p>
// //         </Link>
// //         <Link
// //           href="/ai-lab"
// //           className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-white transition-colors"
// //         >
// //           <h2 className="text-lg font-semibold mb-2">AI Lab</h2>
// //           <p className="text-sm text-neutral-400">Experiments & prototypes.</p>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }

// import Link from "next/link";
// import OpsStudioCard from "@/components/OpsStudioCard";
// import ProjectCard, { Project } from "@/components/ProjectCard";

// const projects: Project[] = [
//   {
//     title: "PulseFlow AI",
//     url: "/projects/pulseflow",
//     description:
//       "Enterprise-grade healthcare management platform featuring multi-tenant architecture, RBAC, appointment scheduling, patient management, and AI-powered clinical workflows.",
//     iconName: "HeartPulse",
//     techTags: [
//       "Next.js",
//       "TypeScript",
//       "Node.js",
//       "Express",
//       "Prisma",
//       "PostgreSQL",
//       "Redis",
//     ],
//     glowColor: "rgba(59,130,246,0.15)",
//   },

//   {
//     title: "Appointment Scheduling System",
//     url: "/projects/appointment-schedule",
//     description:
//       "Healthcare scheduling platform enabling patient registration, doctor availability, appointment booking, authentication, and administrative workflows.",
//     iconName: "CalendarDays",
//     techTags: ["React", "FastAPI", "Python", "PostgreSQL"],
//     glowColor: "rgba(245,158,11,0.15)",
//   },

//   {
//     title: "QuantForge",
//     url: "/projects/quantforge",
//     description:
//       "Fraud detection dashboard for monitoring financial transactions, analysing suspicious activity, risk scoring, and operational insights.",
//     iconName: "Shield",
//     techTags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
//     glowColor: "rgba(34,197,94,0.15)",
//   },

//   {
//     title: "AI Lead Automation",
//     url: "/projects/lead-automation",
//     description:
//       "AI-powered lead generation workflow built with n8n, OpenAI, HubSpot, Google Sheets, and custom APIs for automated B2B outreach.",
//     iconName: "Bot",
//     techTags: ["OpenAI", "n8n", "HubSpot", "Google Sheets", "Automation"],
//     glowColor: "rgba(168,85,247,0.15)",
//   },

//   {
//     title: "CareerOS AI",
//     url: "/projects/careeros-ai",
//     description:
//       "Career automation system that discovers jobs, analyses opportunities using AI, extracts structured company information, and organises application workflows.",
//     iconName: "BriefcaseBusiness",
//     techTags: ["n8n", "DeepSeek", "AI Agents", "REST APIs", "Automation"],
//     glowColor: "rgba(14,165,233,0.15)",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="mx-auto max-w-6xl px-6 py-12 md:py-24 flex flex-col gap-24">
//       {/* Hero */}
//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
//             AI-First Product Engineer building{" "}
//             <span className="text-[var(--color-text-glow-primary)]">
//               scalable intelligent systems
//             </span>
//           </h1>

//           <p className="mt-8 text-xl text-neutral-400 max-w-xl">
//             I design and build AI-powered products, scalable backend systems,
//             workflow automation, and modern full-stack applications that solve
//             real business problems.
//           </p>

//           <div className="flex flex-wrap gap-4 mt-10">
//             <Link
//               href="/systems"
//               className="rounded-full bg-white text-black px-8 py-3 font-semibold hover:bg-neutral-200 transition"
//             >
//               Explore Systems
//             </Link>

//             <Link
//               href="/contact"
//               className="rounded-full border border-neutral-700 px-8 py-3 font-semibold hover:bg-neutral-900 transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <OpsStudioCard />
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section>
//         <div className="mb-10">
//           <h2 className="text-4xl font-bold">Featured Engineering Projects</h2>

//           <p className="text-neutral-400 mt-3 max-w-3xl">
//             A collection of AI platforms, healthcare systems, automation
//             workflows, and full-stack applications demonstrating product
//             engineering, backend architecture, and modern frontend development.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
//           <div className="lg:col-span-3">
//             <ProjectCard project={projects[0]} />
//           </div>

//           <div className="lg:col-span-3">
//             <ProjectCard project={projects[1]} />
//           </div>

//           <div className="lg:col-span-2">
//             <ProjectCard project={projects[2]} />
//           </div>

//           <div className="lg:col-span-2">
//             <ProjectCard project={projects[3]} />
//           </div>

//           <div className="lg:col-span-2">
//             <ProjectCard project={projects[4]} />
//           </div>
//         </div>
//       </section>

//       {/* Explore */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Link
//           href="/case-studies"
//           className="group rounded-2xl border border-neutral-800 p-6 hover:border-cyan-400 transition"
//         >
//           <h3 className="text-xl font-semibold group-hover:text-cyan-400">
//             Case Studies
//           </h3>

//           <p className="mt-2 text-neutral-400">
//             Explore detailed breakdowns of architecture, engineering decisions,
//             and implementation.
//           </p>
//         </Link>

//         <Link
//           href="/dashboard"
//           className="group rounded-2xl border border-neutral-800 p-6 hover:border-blue-400 transition"
//         >
//           <h3 className="text-xl font-semibold group-hover:text-blue-400">
//             Engineering Dashboard
//           </h3>

//           <p className="mt-2 text-neutral-400">
//             View technical metrics, product progress, and ongoing development.
//           </p>
//         </Link>

//         <Link
//           href="/ai-lab"
//           className="group rounded-2xl border border-neutral-800 p-6 hover:border-violet-400 transition"
//         >
//           <h3 className="text-xl font-semibold group-hover:text-violet-400">
//             AI Lab
//           </h3>

//           <p className="mt-2 text-neutral-400">
//             Experiments with AI agents, LLM orchestration, automation, and
//             emerging technologies.
//           </p>
//         </Link>
//       </section>
//     </div>
//   );
// }

import Architecture from "./components/home/Architecture";
import FeaturedSystems from "./components/home/FeaturedSystems";
import Hero from "./components/home/Hero";
import StatsGrid from "./components/home/StatsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsGrid />
      <Architecture />
      <FeaturedSystems />
    </>
  );
}
