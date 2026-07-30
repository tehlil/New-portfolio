import Link from "next/link";

export default function QuantForgePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Hero */}
      <div>
        <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-blue-400 text-sm mb-5">
          Live Project
        </span>

        <h1 className="text-5xl font-bold mb-4">
          QuantForge AI Fraud Detection Platform
        </h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          A modern fraud detection platform that enables financial institutions
          to monitor transactions, detect suspicious activities, visualize risk
          analytics, and improve fraud investigation through an intuitive
          dashboard.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="https://quantforge-gamma.vercel.app"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Live Demo
          </Link>

          <Link
            href="https://github.com/tehlil/Quantforge"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900 transition"
          >
            GitHub
          </Link>
        </div>
      </div>

      {/* Screenshot */}
      <section>
        <img
          src="/images/projects/quantforge.png"
          alt="QuantForge Dashboard"
          className="rounded-2xl border border-neutral-800"
        />
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          QuantForge is a financial intelligence dashboard designed to help
          organizations identify fraudulent transactions through advanced data
          visualization, transaction monitoring, and AI-powered risk analysis.
          The platform centralizes fraud insights into a modern interface that
          enables analysts to investigate suspicious activities efficiently.
        </p>
      </section>

      {/* Problem */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Problem</h2>

        <p className="text-neutral-400 leading-8">
          Financial organizations process thousands of transactions every day.
          Detecting suspicious behaviour manually is slow, error-prone, and
          often results in delayed fraud detection. Teams need a centralized
          platform that highlights anomalies before financial losses occur.
        </p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Solution</h2>

        <p className="text-neutral-400 leading-8">
          QuantForge provides an intelligent fraud monitoring dashboard capable
          of visualizing transaction data, generating fraud alerts, calculating
          risk scores, and delivering actionable insights for financial analysts
          through an intuitive user experience.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-4 text-neutral-300">
          <div className="border border-neutral-800 rounded-xl p-5">
            💳 Transaction Monitoring
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            🚨 Fraud Alert Dashboard
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📈 Risk Analytics
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📊 Interactive Charts
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            👤 Customer Risk Profiles
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            📑 Transaction History
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            🔍 Search & Filtering
          </div>

          <div className="border border-neutral-800 rounded-xl p-5">
            ⚡ Real-Time Dashboard
          </div>
        </div>
      </section>

      {/* Technology */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "REST APIs",
            "Charts",
            "Responsive UI",
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
        <h2 className="text-3xl font-semibold mb-4">Platform Architecture</h2>

        <div className="rounded-xl border border-neutral-800 p-6 space-y-3 text-neutral-300">
          <p>Financial Transactions</p>
          <p>⬇</p>
          <p>Fraud Detection Engine</p>
          <p>⬇</p>
          <p>Risk Scoring Module</p>
          <p>⬇</p>
          <p>Analytics Dashboard</p>
          <p>⬇</p>
          <p>Fraud Investigation & Reporting</p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Future Enhancements</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Machine Learning Fraud Detection Models</li>
          <li>• Real-Time Transaction Streaming</li>
          <li>• Graph-Based Fraud Network Analysis</li>
          <li>• Explainable AI Risk Scores</li>
          <li>• Customer Behaviour Analytics</li>
          <li>• Automated Compliance Reporting</li>
          <li>• Kafka-Based Event Processing</li>
          <li>• Multi-Bank Fraud Intelligence Platform</li>
        </ul>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Project Goals</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>✅ Visualize financial transactions in real time</li>
          <li>✅ Simplify fraud investigations</li>
          <li>✅ Improve fraud detection workflows</li>
          <li>✅ Build a scalable AI-ready fintech platform</li>
        </ul>
      </section>
    </main>
  );
}
