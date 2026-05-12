import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function TextLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-8 transition hover:text-deepYellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
      href={href}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
