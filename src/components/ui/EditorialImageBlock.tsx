import Image from "next/image";
import { cn } from "@/lib/utils";

export function EditorialImageBlock({
  alt,
  className,
  label,
  src
}: {
  alt: string;
  className?: string;
  label?: string;
  src: string;
}) {
  return (
    <div className={cn("relative min-h-[320px] overflow-hidden bg-executive sm:min-h-[440px]", className)}>
      <Image alt={alt} className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src={src} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      {label ? (
        <p className="absolute left-6 top-6 border-l-2 border-yellow pl-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {label}
        </p>
      ) : null}
    </div>
  );
}
