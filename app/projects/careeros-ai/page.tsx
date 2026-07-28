import Link from "next/link";

export default function CareerOSPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <div>
        <h1 className="text-5xl font-bold mb-4">CareerOS AI</h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          An AI-powered career automation workflow that discovers job
          opportunities, analyzes job descriptions, extracts structured company
          information, and streamlines application tracking.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="https://github.com/tehlil"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            GitHub
          </Link>
        </div>
      </div>

      <section>
        <img
          src="/images/careeros-ai.png"
          alt="CareerOS Workflow"
          className="rounded-2xl border"
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          CareerOS AI automates the process of finding suitable software
          engineering opportunities. It continuously collects job listings,
          filters them based on predefined criteria, extracts company
          information using AI, and organizes the results into a structured
          workflow for efficient application management.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Automated job discovery</li>
          <li>• AI-powered company analysis</li>
          <li>• Intelligent job filtering</li>
          <li>• Company information extraction</li>
          <li>• Workflow automation with n8n</li>
          <li>• Structured application tracking</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "n8n",
            "DeepSeek",
            "REST APIs",
            "AI Agents",
            "Workflow Automation",
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
    </main>
  );
}
