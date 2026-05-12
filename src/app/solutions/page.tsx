import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { EditorialImageBlock } from "@/components/ui/EditorialImageBlock";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SolutionRow } from "@/components/ui/SolutionRow";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { coreSolutions, siteUrl } from "@/constants/siteData";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo";

const title = "Industrial Solutions | Electroplating Plants, Automation & Surface Treatment | MS Engineering";
const description =
  "Explore MS Engineering solutions including surface treatment plants, industrial automation, heating and cooling coils, material handling systems, auto/manual barrel systems, and transport wagons.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title, description, url: `${siteUrl}/solutions`, siteName: "MS Engineering", type: "website" }
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" }
];

export default function SolutionsPage() {
  const jsonLd = [
    organizationSchema,
    breadcrumbSchema(crumbs.map((item) => ({ name: item.label, href: item.href }))),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Industrial Engineering Solutions",
      provider: { "@type": "Organization", name: "MS Engineering" },
      serviceType: "Surface treatment plants, electroplating plants, automation, material handling, heating and cooling coils"
    }
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-warm">
        <Breadcrumbs items={crumbs} />
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
              <div>
                <SectionLabel>Solutions</SectionLabel>
                <div className="mb-8 h-px w-28 bg-yellow" />
                <h1 className="max-w-5xl font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[76px]">
                  Industrial Solutions for Surface Treatment and Manufacturing Operations
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal">
                  MS Engineering provides industrial systems designed to support electroplating, surface treatment, automation, material handling, process control, and manufacturing operations.
                </p>
              </div>
              <EditorialImageBlock alt="Automated surface treatment plant with overhead handling system" label="Production systems" src="/images/automation-plant.webp" />
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Solutions Built Around Your Production Needs
              </h2>
              <p className="max-w-2xl text-xl leading-9 text-charcoal">
                Every industrial setup requires a different combination of process planning, equipment design, layout thinking, automation, and support. MS Engineering helps manufacturers choose systems that match their workflow, capacity, and operating environment.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-warm py-20 lg:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel>Our Core Solutions</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  Our Core Solutions
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted">
                  Structured systems for surface treatment, automation, movement, control, and plant support.
                </p>
              </div>
              <div className="border-t border-line">
                {coreSolutions.map((solution, index) => (
                  <SolutionRow key={solution.title} index={index} {...solution} />
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-28">
          <Container>
            <SectionLabel>From Requirement to Operating System</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                From Requirement to Operating System
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-charcoal">
                A solution is only useful when it works inside your real production environment. MS Engineering focuses on understanding your process, space, production flow, and support needs before recommending any system.
              </p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {["Understand the Requirement", "Design Around the Process", "Support Long-Term Operation"].map((item, index) => (
                <article className="border-t border-line py-7" key={item}>
                  <span className="font-display text-4xl font-semibold text-yellow">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">{item}</h3>
                </article>
              ))}
            </div>
          </Container>
        </section>
        <CTASection
          heading="Need the Right Industrial Solution for Your Plant?"
          secondaryHref="/contact"
          secondaryLabel="Talk to an Expert"
          text="Tell us what you are planning, upgrading, or troubleshooting. We will help align the solution to your production environment."
        />
      </main>
      <Footer />
    </>
  );
}
