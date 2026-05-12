import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, solutions } from "@/constants/homepageData";

export function Footer() {
  return (
    <footer className="bg-executive py-14 text-white">
      <Container>
        <div className="mb-12 h-px w-full bg-gradient-to-r from-yellow via-zinc-800 to-zinc-800" />
        <div className="grid gap-12 md:grid-cols-[1.25fr_0.7fr_0.9fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-3 w-3 bg-yellow" />
              <span className="font-display text-2xl font-semibold tracking-[-0.03em]">MS Engineering</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              MS Engineering provides electroplating plant and industrial surface treatment solutions designed for reliable manufacturing operations.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Quick Links</h3>
            <ul className="grid gap-3 text-sm text-zinc-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Solutions</h3>
            <ul className="grid gap-3 text-sm text-zinc-400">
              {solutions.slice(0, 5).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Contact</h3>
            <address className="grid gap-3 text-sm not-italic leading-6 text-zinc-400">
              <span>Khasra No. 990/336/1, Near Basai Flyover, Basai Village, Sector 9B, Gurugram, Haryana 122006</span>
              <a className="hover:text-white" href="tel:+919560443119">
                +91 95604 43119
              </a>
              <a className="hover:text-white" href="tel:+919818845807">
                +91 9818845807
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          Copyright © 2026 MS Engineering. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
