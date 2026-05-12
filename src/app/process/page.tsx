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
import { processTimeline, siteUrl } from "@/constants/siteData";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo";

const title = "Our Process | Electroplating Plant Planning & Industrial System Execution | MS Engineering";
const description =
  "See how MS Engineering plans and executes electroplating plant, surface treatment, automation, and industrial engineering projects from requirement study to support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { title, description, url: `${siteUrl}/process`, siteName: "MS Engineering", type: "website" }
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Process", href: "/process" }
];

const differences = [
  {
    title: "Process-first approach",
    description: "The project begins with production logic, not just equipment selection."
  },
  {
    title: "Custom plant thinking",
    description: "Layouts and systems are shaped around capacity, space, movement, and handling needs."
  },
  {
    title: "Practical production planning",
    description: "Every recommendation is tested against real operating conditions and maintenance access."
  },
  {
    title: "Support after setup",
    description: "Clients need guidance, optimization, and long-term operational confidence."
  }
];

export default function ProcessPage() {
  const jsonLd = [organizationSchema, breadcrumbSchema(crumbs.map((item) => ({ name: item.label, href: item.href })))];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-warm">
        <Breadcrumbs items={crumbs} />
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-5xl">
              <SectionLabel>Our Process</SectionLabel>
              <div className="mb-8 h-px w-28 bg-yellow" />
              <h1 className="font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[76px]">
                A Process Designed for Precision, Reliability, and Industrial Performance
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-charcoal">
                Successful industrial systems depend on decisions made before fabrication and installation. MS Engineering follows a structured process that connects requirements, layout, equipment, workflow, testing, and long-term support.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <SectionLabel>Process Thinking</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  Process Thinking Before Plant Execution
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal">
                  An electroplating plant or industrial system is not just equipment. It is a complete operating environment. The right process must consider tank sequence, movement, chemical handling, control systems, safety, maintenance access, and production goals.
                </p>
              </div>
              <EditorialImageBlock alt="Electroplating plant layout with process tanks" label="Layout and movement planning" src="/images/electroplating-plant-layout.webp" />
            </div>
          </Container>
        </section>

        <section className="bg-warm py-20 lg:py-32">
          <Container>
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_0.25fr]">
              <div>
                <SectionLabel>Our Working Process</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  Our Working Process
                </h2>
              </div>
              <p className="self-end text-base leading-7 text-muted">
                A precise sequence for moving from requirement clarity to operational readiness.
              </p>
            </div>
            <div className="grid border-t border-line lg:grid-cols-4">
              {processTimeline.map((step, index) => (
                <article className="relative border-b border-line py-8 lg:min-h-[280px] lg:border-r lg:px-6 lg:last:border-r-0" key={step.title}>
                  <span className="mb-10 block h-3 w-3 bg-yellow" />
                  <p className="font-display text-5xl font-semibold tracking-[-0.06em] text-ink/20">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-executive py-20 text-white lg:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
              <div>
                <SectionLabel light>Process Difference</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  What Makes the Process Different
                </h2>
              </div>
              <NumberedList items={differences} light />
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Every Decision Impacts Output
              </h2>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-charcoal">
                  From layout to maintenance access, every small decision can impact production flow, consistency, safety, and long-term reliability. MS Engineering approaches every project with practical industrial thinking.
                </p>
                <Button className="mt-8" href="/contact">Start a Project Discussion</Button>
              </div>
            </div>
          </Container>
        </section>
        <CTASection heading="Start with the right process conversation." text="A focused technical discussion can clarify the plant direction before major decisions are made." buttonLabel="Start a Project Discussion" />
      </main>
      <Footer />
    </>
  );
}
