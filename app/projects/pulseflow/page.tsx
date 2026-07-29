// import Link from "next/link";

// export default function PulseFlowPage() {
//   return (
//     <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
//       {/* Hero */}
//         <span className="inline-block px-3 py-1 rounded-full border border-emerald-500 text-emerald-400 text-sm mb-5">
//           Live Project
//         </span>
//         <h1 className="text-5xl font-bold mb-4">
//           PulseFlow Healthcare Platform
//         </h1>

//         <p className="text-xl text-neutral-400 max-w-3xl">
//           A modern AI-powered healthcare platform built to streamline hospital
//           operations through secure patient management, appointment scheduling,
//           role-based access control, clinical intelligence, and predictive
//           healthcare analytics.
//         </p>

//         <div className="flex flex-wrap gap-4 mt-8">

//          <Link
//              href="https://pulse-flow-omega.vercel.app"
//     target="_blank"
//     className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
//   >
//     Live Demo
//   </Link>

//   <Link
//     href="https://github.com/tehlil/PulseFlow"
//     target="_blank"
//     className="px-6 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900 transition"
//   >
//     GitHub
//   </Link>

// </div>
//       {/* Project Screenshot */}
//       <section>
//         <img
//           src="/images/pulseflow-dashboard.png"
//           alt="PulseFlow Dashboard"
//           className="rounded-2xl border border-neutral-800"
//         />
//       </section>

//       {/* Overview */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">Overview</h2>

//         <p className="text-neutral-400 leading-8">
//           PulseFlow is a scalable healthcare management platform designed for
//           hospitals and clinics. It centralizes patient records, appointments,
//           departments, medical staff, and AI-powered clinical insights into one
//           secure system while providing role-based access for administrators,
//           doctors, nurses, analysts, and other healthcare professionals.
//         </p>
//       </section>

//       {/* Problem */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">Problem</h2>

//         <p className="text-neutral-400 leading-8">
//           Many hospitals still rely on disconnected software solutions,
//           spreadsheets, and manual workflows. This results in inefficient
//           appointment scheduling, fragmented patient data, limited reporting,
//           security challenges, and slow clinical decision-making.
//         </p>
//       </section>

//       {/* Solution */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">Solution</h2>

//         <p className="text-neutral-400 leading-8">
//           PulseFlow combines modern web technologies, secure authentication,
//           scalable backend services, and AI-driven healthcare intelligence into
//           one integrated platform that simplifies hospital operations while
//           improving efficiency and patient care.
//         </p>
//       </section>

//       {/* Features */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-6">Key Features</h2>

//         <div className="grid md:grid-cols-2 gap-4 text-neutral-300">
//           <div className="border border-neutral-800 rounded-xl p-5">
//              Multi-Hospital Support
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Role-Based Access Control (RBAC)
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Appointment Scheduling
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Patient Management
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              AI Clinical Predictions
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Healthcare Analytics Dashboard
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Document Management
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Notification System
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              Audit Logs
//           </div>

//           <div className="border border-neutral-800 rounded-xl p-5">
//              JWT Authentication & Authorization
//           </div>
//         </div>
//       </section>

//       {/* Technology */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

//         <div className="flex flex-wrap gap-3">
//           {[
//             "Next.js",
//             "React",
//             "TypeScript",
//             "Node.js",
//             "Express",
//             "Prisma",
//             "PostgreSQL",
//             "Redis",
//             "Python",
//             "FastAPI",
//             "JWT",
//             "Docker",
//             "Tailwind CSS",
//           ].map((tech) => (
//             <span
//               key={tech}
//               className="px-4 py-2 rounded-full border border-neutral-700"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Architecture */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">System Architecture</h2>

//         <div className="rounded-xl border border-neutral-800 p-6 space-y-3 text-neutral-300">
//           <p>Frontend (Next.js + React)</p>
//           <p>⬇</p>
//           <p>REST API (Node.js + Express)</p>
//           <p>⬇</p>
//           <p>Authentication & RBAC</p>
//           <p>⬇</p>
//           <p>Redis Cache</p>
//           <p>⬇</p>
//           <p>PostgreSQL Database</p>
//           <p>⬇</p>
//           <p>AI Prediction Service (FastAPI + Python)</p>
//         </div>
//       </section>

//       {/* Current Progress */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">
//           Project Highlights
//         </h2>

//         <ul className="space-y-3 text-neutral-300">
//           <li> Multi-Tenant Architecture</li>
//           <li> Authentication & Authorization</li>
//           <li> Role & Permission Management</li>
//           <li> Hospital & Department Management</li>
//           <li> Database Schema & Prisma ORM</li>
//           <li> Appointment Scheduling Module</li>
//           <li> Patient Clinical Prediction Engine</li>
//           <li> Dashboard Analytics</li>
//           <li> Production Deployment</li>
//         </ul>
//       </section>

//       {/* Roadmap */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-4">Future Roadmap</h2>

//         <ul className="space-y-3 text-neutral-300">
//           <li>• AI Disease Risk Prediction</li>
//           <li>• Medical Report Generation</li>
//           <li>• Real-time Notifications</li>
//           <li>• Telemedicine Integration</li>
//           <li>• Electronic Health Record (EHR) Support</li>
//           <li>• Healthcare Analytics Dashboard</li>
//           <li>• Docker & Kubernetes Deployment</li>
//         </ul>
//       </section>
//    </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";

const features = [
  "Multi-Tenant Architecture",
  "Role-Based Access Control",
  "Patient Management",
  "Appointment Scheduling",
  "Healthcare Analytics",
  "AI Clinical Predictions",
  "Document Management",
  "Notifications",
  "Audit Logs",
  "Redis Caching",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Python",
  "FastAPI",
  "JWT",
  "Docker",
  "Tailwind CSS",
];

export default function PulseFlowPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* HERO */}
      <section className="text-center mb-20">
        <span className="inline-block border border-emerald-500 text-emerald-400 rounded-full px-4 py-2 text-sm">
          Enterprise Healthcare Platform
        </span>

        <h1 className="text-6xl font-bold mt-6">PulseFlow</h1>

        <p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-8">
          AI-powered healthcare management platform built with a scalable
          multi-tenant architecture supporting secure patient management,
          scheduling, clinical intelligence and predictive analytics.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">
          <Link
            href="https://pulse-flow-omega.vercel.app"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
          >
            Live Demo
          </Link>

          <Link
            href="https://github.com/tehlil/PulseFlow"
            target="_blank"
            className="border border-neutral-700 hover:bg-neutral-900 px-7 py-3 rounded-xl transition"
          >
            GitHub
          </Link>
        </div>
      </section>

      {/* SCREENSHOT */}

      <section className="mb-24">
        <Image
          src="/images/pulseflow-dashboard.png"
          alt="PulseFlow Dashboard"
          width={1600}
          height={900}
          className="rounded-3xl border border-neutral-800"
        />
      </section>

      {/* STATS */}

      <section className="grid md:grid-cols-4 gap-6 mb-24">
        {[
          ["12+", "Modules"],
          ["6", "User Roles"],
          ["99.9%", "Availability"],
          ["AI", "Prediction Engine"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-neutral-800 p-8 text-center"
          >
            <h2 className="text-4xl font-bold">{value}</h2>
            <p className="text-neutral-400 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* OVERVIEW */}

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-8">Project Overview</h2>

        <p className="text-neutral-400 leading-9 text-lg">
          PulseFlow centralises hospital operations into a unified healthcare
          platform. It provides secure authentication, patient management,
          scheduling, department administration, AI-powered analytics and
          scalable backend services for healthcare organisations.
        </p>
      </section>

      {/* ARCHITECTURE */}

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-10">System Architecture</h2>

        <div className="space-y-5 text-center">
          {[
            "Next.js Frontend",
            "Express REST API",
            "JWT Authentication",
            "Redis Cache",
            "PostgreSQL Database",
            "FastAPI AI Service",
          ].map((item) => (
            <div key={item}>
              <div className="rounded-xl border border-neutral-800 p-5">
                {item}
              </div>

              {item !== "FastAPI AI Service" && (
                <div className="text-2xl py-3">↓</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-10">Key Features</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-neutral-800 p-6 hover:border-blue-500 transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* TECH */}

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-8">Technology Stack</h2>

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-5 py-3 rounded-full border border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ROADMAP */}

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-8">Future Roadmap</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Disease Risk Prediction",
            "Medical Report Generation",
            "Real-time Notifications",
            "Telemedicine Integration",
            "Electronic Health Records",
            "Kubernetes Deployment",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-neutral-800 p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="rounded-3xl border border-neutral-800 text-center py-20">
        <h2 className="text-5xl font-bold">Explore PulseFlow</h2>

        <p className="text-neutral-400 mt-5 text-lg">
          View the live platform or explore the source code.
        </p>

        <div className="flex justify-center gap-5 mt-10">
          <Link
            href="https://pulse-flow-omega.vercel.app"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl"
          >
            Live Demo
          </Link>

          <Link
            href="https://github.com/tehlil/PulseFlow"
            target="_blank"
            className="border border-neutral-700 px-8 py-3 rounded-xl hover:bg-neutral-900"
          >
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
