import { cn } from "@/lib/utils";

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card-hover border border-line bg-paper p-6", className)}>
      {children}
    </div>
  );
}
