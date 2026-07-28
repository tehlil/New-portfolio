import Link from "next/link";

export default function LeadAutomationPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <div>
        <h1 className="text-5xl font-bold mb-4">AI Lead Automation Platform</h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          An AI-powered workflow that automates lead discovery, company
          research, CRM updates, and personalized outreach using n8n, LLMs,
          Google Sheets, and HubSpot.
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
          src="/images/lead-automation.png"
          alt="Lead Automation Workflow"
          className="rounded-2xl border"
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          This workflow automates the complete B2B lead generation process. It
          retrieves companies from Google Sheets, researches them using AI,
          filters qualified businesses, enriches company information, updates
          CRM records, and prepares personalized outreach.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Automated lead discovery</li>
          <li>• AI-powered company research</li>
          <li>• CRM synchronization</li>
          <li>• Google Sheets integration</li>
          <li>• Personalized outreach generation</li>
          <li>• Scheduled execution with n8n</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "n8n",
            "DeepSeek",
            "Google Sheets API",
            "HubSpot",
            "REST APIs",
            "AI Agents",
            "Automation",
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
