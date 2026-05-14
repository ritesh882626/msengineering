import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, coreSolutions, industriesServed, navItems } from "@/constants/siteData";

export function Footer() {
  return (
    <footer className="bg-executive py-14 text-white">
      <Container>
        <div className="mb-12 h-px w-full bg-gradient-to-r from-yellow via-zinc-800 to-zinc-800" />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <div className="mb-5 inline-flex bg-white px-4 py-3">
              <Image alt="MS Engineering" className="h-auto w-[170px]" height={69} src="/images/logo-with-wordmark.svg" width={420} />
            </div>
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              {company.description}
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
              {coreSolutions.slice(0, 5).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Industries</h3>
            <ul className="grid gap-3 text-sm text-zinc-400">
              {industriesServed.slice(0, 5).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Contact</h3>
            <address className="grid gap-3 text-sm not-italic leading-6 text-zinc-400">
              <span>{company.address}</span>
              {company.phones.map((phone) => (
                <a className="hover:text-white" href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                  {phone}
                </a>
              ))}
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
