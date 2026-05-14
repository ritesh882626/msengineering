import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  size?: LogoSize;
  showText?: boolean;
  href?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  text?: string;
  priority?: boolean;
};

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-7 sm:h-8",
  md: "h-8 sm:h-9",
  lg: "h-10 sm:h-11"
};

export function Logo({
  size = "md",
  showText = false,
  href = "/",
  alt = "MS Engineering logo",
  className,
  imageClassName,
  text = "MS Engineering",
  priority = false
}: LogoProps) {
  return (
    <Link
      aria-label="Go to home"
      className={cn(
        "group flex shrink-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow",
        className
      )}
      href={href}
    >
      <Image
        alt={alt}
        className={cn(sizeClasses[size], "w-auto object-contain select-none transition group-hover:opacity-85", imageClassName)}
        height={303}
        priority={priority}
        src="/logo.svg"
        width={1162}
      />

      {showText ? <span className="text-base font-semibold tracking-tight text-ink">{text}</span> : null}
    </Link>
  );
}
