import Link from "next/link";

export default function GSTBillingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <span className="inline-block px-3 py-1 rounded-full border border-emerald-500 text-emerald-400 text-sm mb-5">
        Live Project
      </span>

      <h1 className="text-5xl font-bold mb-4">GST Billing System</h1>

      <p className="text-xl text-neutral-400 max-w-3xl">
        A production-grade GST billing platform for Indian businesses featuring
        invoice generation, customer management, automated GST calculations,
        inventory tracking, and financial reporting.
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="#" className="px-6 py-3 rounded-xl bg-blue-600">
          Live Demo
        </Link>

        <Link
          href="#"
          className="px-6 py-3 rounded-xl border border-neutral-700"
        >
          GitHub
        </Link>
      </div>
    </main>
  );
}
