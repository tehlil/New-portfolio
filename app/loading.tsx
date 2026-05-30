export default function Loading() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-surface)] border-t-[var(--color-glow-primary)]"></div>
        <p className="text-sm text-neutral-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
