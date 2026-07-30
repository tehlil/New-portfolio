import Link from "next/link";

export default function GSTBillingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <div>
        <span className="inline-block px-3 py-1 rounded-full border border-emerald-500 text-emerald-400 text-sm mb-5">
          SaaS Product
        </span>

        <h1 className="text-5xl font-bold mb-4">GST Billing System</h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          A production-grade GST billing and invoicing platform built for Indian
          businesses to automate invoice generation, GST calculation, inventory
          management, customer records, and financial reporting through a modern
          cloud-based dashboard.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="#"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Live Demo
          </Link>

          <Link
            href="#"
            className="px-6 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900"
          >
            GitHub
          </Link>
        </div>
      </div>

      <section>
        <img
          src="/images/projects/gst-billing.png"
          alt="GST Billing Dashboard"
          className="rounded-2xl border"
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>

        <p className="text-neutral-400 leading-8">
          GST Billing System simplifies business invoicing by providing an
          all-in-one platform for invoice generation, GST compliance, inventory
          management, customer management, and business analytics. The platform
          enables businesses to reduce manual accounting work while maintaining
          accurate tax calculations and professional financial records.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Problem</h2>

        <p className="text-neutral-400 leading-8">
          Many small and medium-sized businesses still rely on spreadsheets and
          manual calculations for billing, inventory, and GST filing. This often
          leads to calculation errors, duplicate records, delayed invoicing, and
          compliance issues that negatively impact business operations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Solution</h2>

        <p className="text-neutral-400 leading-8">
          Developed a cloud-based GST billing platform that automates invoice
          creation, calculates GST in real time, manages products and customers,
          tracks inventory, and provides business insights through an intuitive
          dashboard. The system minimizes manual effort while improving
          accounting accuracy and operational efficiency.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• GST Invoice Generation</li>
          <li>• Automatic CGST / SGST / IGST Calculation</li>
          <li>• Customer Management</li>
          <li>• Product & Inventory Management</li>
          <li>• Invoice History & Search</li>
          <li>• PDF Invoice Export</li>
          <li>• Revenue Analytics Dashboard</li>
          <li>• Business Profile Management</li>
          <li>• Role-Based Authentication</li>
          <li>• Responsive Admin Dashboard</li>
        </ul>
      </section>

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
            "JWT",
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

      <section>
        <h2 className="text-3xl font-semibold mb-4">Architecture</h2>

        <p className="text-neutral-400 leading-8">
          Next.js Frontend → Express REST API → Prisma ORM → PostgreSQL → Redis
          Cache → Authentication Layer → Invoice Engine → Analytics & Reporting
          Module
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Modules</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Dashboard & Business Analytics</li>
          <li>• Customer Management</li>
          <li>• Product Catalog</li>
          <li>• GST Invoice Generator</li>
          <li>• Inventory Management</li>
          <li>• Sales Reports</li>
          <li>• Financial Reports</li>
          <li>• User Management</li>
          <li>• Business Settings</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Impact</h2>

        <ul className="space-y-3 text-neutral-300">
          <li>• Reduced manual billing operations</li>
          <li>• Automated GST calculations</li>
          <li>• Improved inventory visibility</li>
          <li>• Faster invoice generation</li>
          <li>• Centralized customer and product management</li>
          <li>• Business insights through real-time analytics</li>
        </ul>
      </section>
    </main>
  );
}
