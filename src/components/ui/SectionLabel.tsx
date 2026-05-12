import { cn } from "@/lib/utils";

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={cn("mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted", light && "text-zinc-400")}>
      <span className="h-1.5 w-1.5 bg-yellow" />
      {children}
    </p>
  );
}
