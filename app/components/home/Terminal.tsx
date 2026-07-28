"use client";

import { useState } from "react";

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "about      - About me",
    "skills     - Technical skills",
    "projects   - Featured systems",
    "resume     - Resume summary",
    "contact    - Contact information",
    "clear      - Clear terminal",
  ],

  about: [
    "Tehlil Khan",
    "",
    "AI-First Product Engineer",
    "Backend Engineer",
    "Automation Engineer",
    "",
    "I build intelligent products combining AI,",
    "backend engineering, cloud infrastructure,",
    "and workflow automation.",
  ],

  skills: [
    "Core Technologies",
    "",
    "• Next.js",
    "• React",
    "• TypeScript",
    "• Node.js",
    "• Express",
    "• PostgreSQL",
    "• Prisma",
    "• Redis",
    "• Python",
    "• FastAPI",
    "• Docker",
    "• n8n",
    "• OpenAI",
  ],

  projects: [
    "Featured Systems",
    "",
    "• PulseFlow AI",
    "• Appointment Scheduling System",
    "• QuantForge",
    "• AI Lead Automation",
    "• CareerOS AI",
  ],

  resume: [
    "Summary",
    "",
    "AI-First Product Engineer focused on",
    "enterprise software, healthcare systems,",
    "AI automation, fraud detection,",
    "and scalable backend architecture.",
  ],

  contact: [
    "Email:",
    "tehlilkhan3@gmail.com",
    "",
    "Portfolio:",
    "tehlilkhan.netlify.app",
    "",
    "LinkedIn:",
    "linkedin.com/in/tehlilkhan123",
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Portfolio Terminal v1.0",
    "Type 'help' to get started.",
    "",
  ]);

  const [input, setInput] = useState("");

  const runCommand = () => {
    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[cmd] || [
      `Unknown command: ${cmd}`,
      "Type 'help' to see available commands.",
    ];

    setHistory((prev) => [...prev, `> ${cmd}`, ...output, ""]);

    setInput("");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
          Interactive Terminal
        </p>

        <h2 className="mt-4 text-5xl font-bold">Explore My Portfolio</h2>

        <p className="mt-6 max-w-3xl text-lg text-neutral-400">
          Try typing commands just like a real terminal.
        </p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-[#0B0B0B]">
        {/* Top Bar */}

        <div className="flex items-center gap-2 border-b border-neutral-800 px-5 py-4 bg-neutral-900">
          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-5 text-sm text-neutral-400">terminal</span>
        </div>

        {/* History */}

        <div className="h-[420px] overflow-y-auto p-6 font-mono text-sm">
          {history.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${
                line.startsWith(">") ? "text-cyan-400" : "text-neutral-300"
              }`}
            >
              {line}
            </div>
          ))}

          <div className="mt-4 flex items-center">
            <span className="mr-3 text-cyan-400">$</span>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  runCommand();
                }
              }}
              placeholder="Type help..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
