import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tehlil Khan",
  description: "Learn more about Tehlil Khan, an AI-First Product Engineer building scalable intelligent systems.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
      </header>

      <div className="space-y-8 text-neutral-300 text-lg leading-relaxed">
        <p>
          I am an AI-First Product Engineer. My work lies at the intersection of <strong className="text-[var(--color-foreground)]">systems engineering, artificial intelligence, and business operations</strong>. I don't just build software; I design scalable intelligence engines that solve foundational business problems.
        </p>
        
        <div className="pl-6 border-l-2 border-[var(--color-glow-primary)]">
          <p className="italic text-neutral-400">
            "The best systems are the ones that learn, adapt, and eventually manage themselves."
          </p>
        </div>

        <p>
          Throughout my career, I've noticed a recurring pattern: great engineering often fails if it lacks product intuition, and great products fail if their underlying operations can't scale. My approach bridges these gaps. 
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mt-12 mb-4">Core Principles</h2>
        <ul className="space-y-4">
          <li className="flex gap-4">
            <span className="text-[var(--color-text-glow-primary)]">01.</span>
            <div>
              <strong className="block text-[var(--color-foreground)]">Systems Thinking</strong>
              <span className="text-sm text-neutral-400">Looking at the entire ecosystem rather than isolated components. A bottleneck in operations is an engineering problem.</span>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[var(--color-text-glow-primary)]">02.</span>
            <div>
              <strong className="block text-[var(--color-foreground)]">AI-First Mindset</strong>
              <span className="text-sm text-neutral-400">Treating machine intelligence not as an add-on, but as the foundational layer for routing, prediction, and automation.</span>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[var(--color-text-glow-primary)]">03.</span>
            <div>
              <strong className="block text-[var(--color-foreground)]">Product Intuition</strong>
              <span className="text-sm text-neutral-400">Building for the user. Technical elegance means nothing if the end product doesn't solve a real, pressing human need.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
