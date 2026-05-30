import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] py-8 text-center text-sm text-neutral-400">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5 justify-center md:justify-start">
          <div className="relative h-6 w-6 overflow-hidden rounded-md border border-[var(--color-border)] bg-black p-0.5">
            <Image
              src="/logo.png"
              alt="TK Logo"
              width={20}
              height={20}
              className="object-contain rounded-[3px]"
            />
          </div>
          <p>© {new Date().getFullYear()} Tehlil Khan. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:text-[var(--color-foreground)] transition-colors">Contact</Link>
          <a href="https://www.linkedin.com/in/tehlilkhan123/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-foreground)] transition-colors">LinkedIn</a>
          <a href="https://github.com/tehlil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-foreground)] transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
