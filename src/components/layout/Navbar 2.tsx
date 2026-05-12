"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants/homepageData";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/86 backdrop-blur-xl">
      <Container>
        <nav aria-label="Primary navigation" className="flex min-h-20 items-center justify-between gap-6">
          <Link href="#home" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-copper/50 bg-white/8 font-display text-lg font-semibold text-white">
              MS
            </span>
            <span className="font-display text-xl font-semibold text-white">MS Engineering</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" className="min-h-10 px-4 py-2">
              Request a Quote
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <div className={cn("border-t border-white/10 bg-navy lg:hidden", open ? "block" : "hidden")}>
        <Container className="py-5">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-medium text-slate-200 hover:bg-white/8"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="#contact" className="mt-3 w-full">
              Request a Quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
