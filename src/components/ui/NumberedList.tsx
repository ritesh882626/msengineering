import { cn } from "@/lib/utils";

export function NumberedList({
  items,
  light = false
}: {
  items: { title: string; description: string }[];
  light?: boolean;
}) {
  return (
    <div className={cn("border-t", light ? "border-zinc-800" : "border-line")}>
      {items.map((item, index) => (
        <article className={cn("grid gap-5 border-b py-7 sm:grid-cols-[96px_1fr]", light ? "border-zinc-800" : "border-line")} key={item.title}>
          <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-yellow">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3 className={cn("font-display text-2xl font-semibold tracking-[-0.02em]", light ? "text-white" : "text-ink")}>{item.title}</h3>
            <p className={cn("mt-3 max-w-2xl text-base leading-7", light ? "text-zinc-400" : "text-muted")}>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
