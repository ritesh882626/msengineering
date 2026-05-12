import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { EditorialImageBlock } from "@/components/ui/EditorialImageBlock";
import { NumberedList } from "@/components/ui/NumberedList";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { coreSolutions, siteUrl } from "@/constants/siteData";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo";

const title = "About MS Engineering | Electroplating Plant & Surface Treatment Experts";
const description =
  "Learn about MS Engineering, an industrial engineering company providing electroplating plant, surface treatment, automation, and manufacturing support solutions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: `${siteUrl}/about`, siteName: "MS Engineering", type: "website" }
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" }
];

const values = [
  {
    title: "Precision",
    description: "Every system should be planned with technical clarity, correct sequencing, and practical usability."
  },
  {
    title: "Reliability",
    description: "Industrial plants must support consistent operation, durability, and long-term performance."
  },
  {
    title: "Customization",
    description: "Every factory has different space, process, capacity, and operational needs."
  },
  {
    title: "Support",
    description: "The relationship does not end after setup. Clients need guidance, optimization, and maintenance support."
  }
];

export default function AboutPage() {
  const jsonLd = [organizationSchema, breadcrumbSchema(crumbs.map((item) => ({ name: item.label, href: item.href })))];

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
                <SectionLabel>About MS Engineering</SectionLabel>
                <div className="mb-8 h-px w-28 bg-yellow" />
                <h1 className="max-w-4xl font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[78px]">
                  Engineering Industrial Systems Built for Performance
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal">
                  MS Engineering works with manufacturing businesses that need reliable electroplating plant systems, surface treatment solutions, industrial automation support, and practical engineering execution.
                </p>
              </div>
              <EditorialImageBlock
                alt="MS Engineering manufacturing facility exterior"
                label="Industrial engineering partner"
                src="/images/mse-hero-section-image.webp"
              />
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-32">
          <Container>
            <div className="grid gap-12 border-b border-line pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Built Around Practical Engineering
              </h2>
              <div>
                <p className="text-xl leading-9 text-charcoal">
                  MS Engineering focuses on designing and delivering industrial systems that support real production environments. Our work is driven by process understanding, plant layout planning, equipment integration, and long-term operational reliability.
                </p>
                <div className="mt-10 grid gap-0 border-y border-line">
                  {["Process-first planning", "Industrial-grade execution", "Reliable operational support", "Custom system approach"].map((item) => (
                    <div className="flex items-center gap-4 border-b border-line py-5 last:border-b-0" key={item}>
                      <span className="h-2 w-2 bg-yellow" />
                      <p className="text-lg font-semibold text-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-executive py-20 text-white lg:py-32">
          <Container>
            <SectionLabel light>What We Stand For</SectionLabel>
            <h2 className="max-w-4xl font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              What We Stand For
            </h2>
            <div className="mt-14">
              <NumberedList items={values} light />
            </div>
          </Container>
        </section>

        <section className="bg-warm py-20 lg:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel>Our Capabilities</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  Our Capabilities
                </h2>
              </div>
              <NumberedList items={coreSolutions.map(({ title, description }) => ({ title, description }))} />
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                A Partner for Manufacturing Teams
              </h2>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-charcoal">
                  MS Engineering works with businesses that need more than equipment. We help manufacturing teams think through layout, process flow, safety, maintenance, and operational continuity.
                </p>
                <Button className="mt-8" href="/contact">Discuss Your Requirement</Button>
              </div>
            </div>
          </Container>
        </section>
        <CTASection heading="Ready to discuss an industrial system requirement?" text="Share your plant, automation, or surface treatment requirement and we will help define the right technical direction." />
      </main>
      <Footer />
    </>
  );
}
