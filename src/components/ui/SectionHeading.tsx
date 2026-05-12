import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("mb-5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted", align === "center" && "justify-center", light && "text-zinc-400")}>
          <span className="h-1.5 w-1.5 bg-yellow" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-display text-[32px] font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl", light && "text-white")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-6 text-base leading-8 text-muted sm:text-lg", light && "text-zinc-300")}>{description}</p>
      ) : null}
    </div>
  );
}
