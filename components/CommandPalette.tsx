"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Command, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "/systems" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "AI Lab", href: "/ai-lab" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredLinks = query === "" 
    ? links 
    : links.filter((link) => link.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg hover:border-[var(--color-text-glow-primary)] transition-colors z-40 group flex items-center justify-center gap-2"
        aria-label="Open command palette"
      >
        <Command className="w-5 h-5 group-hover:text-[var(--color-text-glow-primary)] transition-colors" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm p-4">
          <div 
            className="w-full max-w-xl bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center px-4 py-3 border-b border-[var(--color-border)]">
              <Search className="w-5 h-5 text-neutral-400 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                className="flex-grow bg-transparent border-none outline-none text-[var(--color-foreground)] placeholder:text-neutral-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filteredLinks.length === 0 ? (
                <div className="p-4 text-center text-sm text-neutral-400">No results found.</div>
              ) : (
                filteredLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 hover:bg-neutral-800/50 rounded-xl transition-colors cursor-pointer text-sm"
                  >
                    {link.name}
                  </Link>
                ))
              )}
            </div>
          </div>
          {/* Invisible backdrop to click out */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
