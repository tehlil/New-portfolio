import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tehlil Khan",
  description: "Get in touch with Tehlil Khan to build intelligent, scalable systems together.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Let’s build intelligent systems together
      </h1>
      <p className="text-neutral-400 text-lg mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="mailto:contact@tehlilkhan.com" 
          className="rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-3 font-semibold hover:bg-neutral-200 transition-colors"
        >
          Email Me
        </a>
        <a 
          href="https://www.linkedin.com/in/tehlilkhan123/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--color-border)] px-8 py-3 font-semibold hover:bg-[var(--color-surface)] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
