import Link from "next/link";

export default function AppointmentSchedulingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <div>
        <span className="inline-block px-3 py-1 rounded-full border border-emerald-500 text-emerald-400 text-sm mb-5">
          Live Project
        </span>

        <h1 className="text-5xl font-bold mb-4">
          Appointment Scheduling System
        </h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          A modern healthcare appointment management platform that streamlines
          patient bookings, doctor availability, scheduling, and hospital
          operations through an intuitive dashboard.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="https://appointment-schedule-xi.vercel.app"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Live Demo
          </Link>

          <Link
            href="https://github.com/tehlil/Appointment-Schedule"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900"
          >
            GitHub
          </Link>
        </div>
      </div>

      <section>
        <img
          src="/images/appointment-system.png"
          alt="Appointment Scheduling Dashboard"
          className="rounded-2xl border"
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          This platform centralizes hospital appointment management by enabling
          patients, doctors, and administrators to manage appointments from a
          single interface. The system improves scheduling efficiency while
          reducing waiting times and administrative workload.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Problem</h2>

        <p className="text-neutral-400 leading-8">
          Traditional appointment booking systems often involve manual
          scheduling, inconsistent availability tracking, and fragmented patient
          records, leading to delays and scheduling conflicts.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Solution</h2>

        <p className="text-neutral-400 leading-8">
          Built a responsive scheduling platform with role-based access,
          centralized appointment management, patient records, and real-time
          scheduling updates to improve operational efficiency.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Patient Appointment Booking</li>
          <li>• Doctor Availability Management</li>
          <li>• Department Scheduling</li>
          <li>• Appointment Status Tracking</li>
          <li>• Secure Authentication</li>
          <li>• Responsive Dashboard</li>
          <li>• Patient Record Management</li>
          <li>• Search & Filtering</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "TypeScript",
            "FastAPI",
            "Python",
            "PostgreSQL",
            "Tailwind CSS",
            "JWT",
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

      <section>
        <h2 className="text-3xl font-semibold mb-4">Architecture</h2>

        <p className="text-neutral-400 leading-8">
          React Frontend → FastAPI Backend → PostgreSQL Database →
          Authentication Layer → Appointment Management Engine
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Impact</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Centralized appointment management</li>
          <li>• Improved scheduling efficiency</li>
          <li>• Role-based healthcare workflows</li>
          <li>• Scalable architecture for multi-department hospitals</li>
        </ul>
      </section>
    </main>
  );
}
