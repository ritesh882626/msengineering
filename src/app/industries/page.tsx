import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { IndustryTile } from "@/components/ui/IndustryTile";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { industriesServed, siteUrl } from "@/constants/siteData";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo";

const title = "Industries We Serve | Electroplating & Surface Treatment Solutions | MS Engineering";
const description =
  "MS Engineering supports automotive, hardware, electrical, metal fabrication, fastener, industrial equipment, and manufacturing businesses with electroplating and surface treatment systems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: { title, description, url: `${siteUrl}/industries`, siteName: "MS Engineering", type: "website" }
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" }
];

const requirements = ["Corrosion resistance", "Consistent finish", "Process control", "Durable systems", "Safe operations", "Long-term support"];

export default function IndustriesPage() {
  const jsonLd = [organizationSchema, breadcrumbSchema(crumbs.map((item) => ({ name: item.label, href: item.href })))];
  const midpoint = Math.ceil(industriesServed.length / 2);
  const industryRows = [industriesServed.slice(0, midpoint), industriesServed.slice(midpoint)];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-warm">
        <Breadcrumbs items={crumbs} />
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-5xl">
              <SectionLabel>Industries</SectionLabel>
              <div className="mb-8 h-px w-28 bg-yellow" />
              <h1 className="font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[76px]">
                Supporting Industries That Depend on Reliable Surface Treatment
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-charcoal">
                MS Engineering works with manufacturing and industrial businesses that require surface treatment, corrosion protection, metal finishing, process automation, and durable plant systems.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Built for Manufacturing Environments
              </h2>
              <p className="max-w-2xl text-xl leading-9 text-charcoal">
                Different industries have different surface treatment requirements. Components may need corrosion resistance, durability, finish quality, coating consistency, handling efficiency, or production scalability. MS Engineering helps businesses plan systems around those needs.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-warm py-20 lg:py-32">
          <Container>
            <div className="mb-14">
              <SectionLabel>Industries We Support</SectionLabel>
              <h2 className="max-w-4xl font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Industries We Support
              </h2>
            </div>
            <div className="industries-support-mobile" aria-label="Industries we support">
              {industryRows.map((row, rowIndex) => (
                <div
                  aria-label={`Industries we support row ${rowIndex + 1}`}
                  className="industries-support-row"
                  key={`industry-row-${rowIndex}`}
                  tabIndex={0}
                >
                  {row.map((industry) => (
                    <div className="industries-support-card" key={`mobile-${industry.title}`}>
                      <IndustryTile {...industry} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="industries-support-desktop grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {industriesServed.map((industry) => (
                <IndustryTile key={industry.title} {...industry} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-28">
          <Container>
            <SectionLabel>Shared Requirements</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Common Requirements Across Industries
              </h2>
              <div className="grid border-t border-line sm:grid-cols-2">
                {requirements.map((item, index) => (
                  <article className="border-b border-line py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8" key={item}>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item}</h3>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <CTASection
          buttonLabel="Request Industry Consultation"
          heading="Need a Plant System for Your Industry?"
          text="Discuss your production environment, components, and surface treatment goals with MS Engineering."
        />
      </main>
      <Footer />
    </>
  );
}
