import Link from "next/link";

export default function PulseFlowPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Hero */}
      <div>
        <span className="inline-block px-3 py-1 rounded-full border border-emerald-500 text-emerald-400 text-sm mb-5">
          Live Project
        </span>
        <h1 className="text-5xl font-bold mb-4">
          PulseFlow Healthcare Platform
        </h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          A modern AI-powered healthcare platform built to streamline hospital
          operations through secure patient management, appointment scheduling,
          role-based access control, clinical intelligence, and predictive
          healthcare analytics.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

         <Link
             href="https://pulse-flow-omega.vercel.app"
    target="_blank"
    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
  >
    Live Demo
  </Link>

  <Link
    href="https://github.com/tehlil/PulseFlow"
    target="_blank"
    className="px-6 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900 transition"
  >
    GitHub
  </Link>

</div>s
      {/* Project Screenshot */}
      <section>
        <img
          src="/images/pulseflow-dashboard.png"
          alt="PulseFlow Dashboard"
          className="rounded-2xl border border-neutral-800"
        />
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          PulseFlow is a scalable healthcare management platform designed for
          hospitals and clinics. It centralizes patient records, appointments,
          departments, medical staff, and AI-powered clinical insights into one
          secure system while providing role-based access for administrators,
          doctors, nurses, analysts, and other healthcare professionals.
        </p>
      </section>

      {/* Problem */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Problem</h2>

        <p className="text-neutral-400 leading-8">
          Many hospitals still rely on disconnected software solutions,
          spreadsheets, and manual workflows. This results in inefficient
          appointment scheduling, fragmented patient data, limited reporting,
          security challenges, and slow clinical decision-making.
        </p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Solution</h2>

        <p className="text-neutral-400 leading-8">
          PulseFlow combines modern web technologies, secure authentication,
          scalable backend services, and AI-driven healthcare intelligence into
          one integrated platform that simplifies hospital operations while
          improving efficiency and patient care.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-4 text-neutral-300">
          <div className="border border-neutral-800 rounded-xl p-5">
            🏥 Multi-Hospital Support
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            👥 Role-Based Access Control (RBAC)
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📅 Appointment Scheduling
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            🩺 Patient Management
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            🧠 AI Clinical Predictions
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📊 Healthcare Analytics Dashboard
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📂 Document Management
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            🔔 Notification System
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📝 Audit Logs
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            🔒 JWT Authentication & Authorization
          </div>
        </div>
      </section>

      {/* Technology */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
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
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">System Architecture</h2>

        <div className="rounded-xl border border-neutral-800 p-6 space-y-3 text-neutral-300">
          <p>Frontend (Next.js + React)</p>
          <p>⬇</p>
          <p>REST API (Node.js + Express)</p>
          <p>⬇</p>
          <p>Authentication & RBAC</p>
          <p>⬇</p>
          <p>Redis Cache</p>
          <p>⬇</p>
          <p>PostgreSQL Database</p>
          <p>⬇</p>
          <p>AI Prediction Service (FastAPI + Python)</p>
        </div>
      </section>

      {/* Current Progress */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Current Development Progress
        </h2>

        <ul className="space-y-3 text-neutral-300">
          <li> Multi-Tenant Architecture</li>
          <li> Authentication & Authorization</li>
          <li> Role & Permission Management</li>
          <li> Hospital & Department Management</li>
          <li> Database Schema & Prisma ORM</li>
          <li> Appointment Scheduling Module</li>
          <li> Patient Clinical Prediction Engine</li>
          <li> Dashboard Analytics</li>
          <li> Production Deployment</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Future Roadmap</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• AI Disease Risk Prediction</li>
          <li>• Medical Report Generation</li>
          <li>• Real-time Notifications</li>
          <li>• Telemedicine Integration</li>
          <li>• Electronic Health Record (EHR) Support</li>
          <li>• Healthcare Analytics Dashboard</li>
          <li>• Docker & Kubernetes Deployment</li>
        </ul>
      </section>
    </main>
  );
}
