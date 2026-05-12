"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/constants/homepageData";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container>
        <nav aria-label="Primary navigation" className="flex min-h-[76px] items-center justify-between gap-8">
          <Link className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow" href="#home">
            <span className="h-3 w-3 bg-yellow transition group-hover:bg-deepYellow" />
            <span className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">MS Engineering</span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                className="relative text-[15px] font-medium text-charcoal transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
                href={item.href}
                key={item.href}
              >
                {item.label}
                <span className="absolute -bottom-7 left-0 h-0.5 w-0 bg-yellow transition-all hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="px-5" href="#contact">
              Request a Quote
            </Button>
          </div>

          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center border border-line text-ink lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="py-6">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  className="py-4 text-2xl font-semibold text-ink"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-5 w-full" href="#contact">
                Request a Quote
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
