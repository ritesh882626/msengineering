import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <Container className="pt-28">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li className="flex items-center gap-2" key={item.href}>
              {index > 0 ? <span aria-hidden="true" className="text-line">/</span> : null}
              {index === items.length - 1 ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {item.label}
                </span>
              ) : (
                <Link className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow" href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
