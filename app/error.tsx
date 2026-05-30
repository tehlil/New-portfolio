"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h2 className="text-2xl font-bold tracking-tight">Something went wrong</h2>
      <p className="max-w-md text-sm text-neutral-400">
        We encountered an error loading this section. Our systems have been notified.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
