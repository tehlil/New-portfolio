"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="rounded-[40px] border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl p-12 md:p-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
              Let's Build Something Great
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-white">
              Building AI Products,
              <br />
              Intelligent Systems &
              <br />
              Enterprise Automation.
            </h2>

            <p className="mt-8 text-xl leading-9 text-neutral-400">
              I'm passionate about building scalable software, AI-powered
              platforms, enterprise automation, and cloud-native applications.
              Whether it's healthcare, fintech, SaaS, or intelligent workflows,
              I enjoy solving complex engineering problems.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-black font-semibold transition-all hover:scale-105 hover:bg-cyan-400"
              >
                Let's Connect
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-700 px-8 py-4 font-semibold text-white hover:border-cyan-500 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Bottom Row */}

          <div className="mt-20 grid gap-8 border-t border-neutral-800 pt-10 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Email
              </p>

              <a
                href="mailto:tehlilkhan3@gmail.com"
                className="mt-3 flex items-center gap-3 text-lg text-white hover:text-cyan-400"
              >
                <Mail size={18} />
                tehlilkhan3@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                GitHub
              </p>

              <a
                href="https://github.com/tehlil"
                target="_blank"
                className="mt-3 flex items-center gap-3 text-lg text-white hover:text-cyan-400"
              >
                <FaGithub size={18} />
                github.com/tehlil
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/tehlilkhan123"
                target="_blank"
                className="mt-3 flex items-center gap-3 text-lg text-white hover:text-cyan-400"
              >
                <FaLinkedin size={18} />
                linkedin.com/in/tehlilkhan123
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
