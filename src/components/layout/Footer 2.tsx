import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, solutions } from "@/constants/homepageData";

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_0.9fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-copper/50 bg-white/8 font-display text-lg font-semibold">
                MS
              </span>
              <span className="font-display text-xl font-semibold">MS Engineering</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              MS Engineering provides electroplating plant and industrial surface treatment solutions designed for reliable manufacturing operations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold">Quick Links</h3>
            <ul className="grid gap-3 text-sm text-slate-300">
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
            <h3 className="mb-4 font-display text-base font-semibold">Solutions</h3>
            <ul className="grid gap-3 text-sm text-slate-300">
              {solutions.slice(0, 5).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold">Contact</h3>
            <address className="grid gap-3 text-sm not-italic leading-6 text-slate-300">
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

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright © 2026 MS Engineering. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
