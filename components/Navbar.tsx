"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Systems", href: "/systems" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "AI Lab", href: "/ai-lab" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="mx-auto max-w-5xl flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-6 py-3 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] relative">
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative h-7 w-7 overflow-hidden rounded-md border border-[var(--color-border)] bg-black p-0.5 transition-all duration-300 group-hover:border-[var(--color-text-glow-primary)] group-hover:shadow-[0_0_8px_var(--color-glow-primary)]">
            <Image
              src="/logo.png"
              alt="TK Logo"
              width={24}
              height={24}
              className="object-contain rounded-[4px]"
            />
          </div>
          <span className="text-lg font-bold tracking-tighter text-[var(--color-foreground)] group-hover:text-[var(--color-text-glow-primary)] transition-colors">
            Tehlil Khan
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-[var(--color-foreground)] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-foreground)] focus:outline-none p-1 transition-transform duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-lg p-6 shadow-2xl md:hidden z-50"
            >
              <ul className="flex flex-col gap-4 text-base font-medium text-neutral-400">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[var(--color-foreground)] transition-colors block py-1 w-full"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
