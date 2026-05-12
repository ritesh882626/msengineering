import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary: "bg-ink text-white hover:bg-charcoal focus-visible:ring-yellow",
  secondary:
    "border border-ink bg-transparent text-ink hover:border-yellow hover:bg-yellow focus-visible:ring-yellow",
  dark: "bg-ink text-white hover:bg-charcoal focus-visible:ring-yellow",
  ghost: "border border-line bg-paper text-ink hover:border-ink focus-visible:ring-yellow"
};

export function Button({ children, href, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
