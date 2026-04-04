export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center pointer-events-none">
      <div className="w-1/4 h-[1px] bg-outline/20 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-primary animate-loading-bar" />
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-on-surface/50 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
