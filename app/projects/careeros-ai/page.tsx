import Link from "next/link";

export default function CareerOSPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      <div>
        <span className="text-blue-400 uppercase tracking-widest">
          AI Workflow
        </span>

        <h1 className="text-5xl font-bold mb-4">CareerOS AI</h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          An AI-powered career automation platform that continuously discovers
          new job opportunities, extracts structured hiring information using
          LLMs, filters relevant positions, and prepares enriched datasets for
          CRM integration and application tracking.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="https://github.com/tehlil/CareerOS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            GitHub
          </Link>
        </div>
      </div>

      <section>
        <img
          src="/images/projects/careeros.png"
          alt="CareerOS AI Workflow"
          className="rounded-2xl border"
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          CareerOS AI is an intelligent recruitment automation system developed
          using n8n and Large Language Models. The workflow automatically
          monitors job platforms, retrieves new opportunities, filters listings
          based on predefined criteria, extracts structured company and hiring
          information using AI, and stores the processed data for application
          management and downstream automation. The platform eliminates
          repetitive manual job searching while providing a scalable pipeline
          for continuous career opportunity tracking.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Problem</h2>

        <p className="text-neutral-400 leading-8">
          Job seekers often spend significant time searching across multiple job
          boards, manually reviewing listings, researching companies, and
          maintaining application spreadsheets. This repetitive workflow slows
          down the application process and increases the likelihood of missing
          valuable opportunities.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Solution</h2>

        <p className="text-neutral-400 leading-8">
          CareerOS AI automates the complete opportunity discovery pipeline by
          combining scheduled execution, intelligent data filtering, AI-powered
          information extraction, and structured output generation. The workflow
          continuously collects relevant job opportunities and prepares clean,
          actionable datasets for career management and future outreach
          automation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Automated Job Discovery</li>
          <li>• Scheduled Workflow Execution</li>
          <li>• AI-Based Job Filtering</li>
          <li>• LLM-Powered Information Extraction</li>
          <li>• Company Data Enrichment</li>
          <li>• Structured Dataset Generation</li>
          <li>• CRM Integration</li>
          <li>• Scalable n8n Workflow Architecture</li>
          <li>• Modular AI Pipeline</li>
          <li>• Application Tracking Ready</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "n8n",
            "DeepSeek AI",
            "LLMs",
            "HTTP Request",
            "REST APIs",
            "JSON",
            "Workflow Automation",
            "CRM Integration",
            "Data Processing",
            "Scheduling",
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
        <h2 className="text-3xl font-semibold mb-4">Workflow Architecture</h2>

        <p className="text-neutral-400 leading-8">
          Schedule Trigger → HTTP Request → Split Processing → Intelligent
          Filtering → DeepSeek LLM → Information Extraction → Structured Output
          → CRM & Data Storage
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Impact</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Eliminated repetitive job searching</li>
          <li>• Automated opportunity discovery</li>
          <li>• Reduced manual company research</li>
          <li>• Generated structured hiring datasets</li>
          <li>• Improved application management efficiency</li>
          <li>• Built a scalable AI-powered career assistant</li>
        </ul>
      </section>
    </main>
  );
}
