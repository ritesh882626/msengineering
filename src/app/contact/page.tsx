import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { company, siteUrl } from "@/constants/siteData";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo";

const title = "Contact MS Engineering | Request Electroplating Plant & Industrial Solution Quote";
const description =
  "Contact MS Engineering for electroplating plant, surface treatment plant, automation, heating/cooling coils, material handling, and industrial engineering requirements.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: `${siteUrl}/contact`, siteName: "MS Engineering", type: "website" }
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" }
];

const nextSteps = [
  {
    title: "Requirement Review",
    description: "We review your submitted requirement and understand the project context."
  },
  {
    title: "Technical Discussion",
    description: "We connect with you to clarify process, capacity, layout, and operational needs."
  },
  {
    title: "Solution Direction",
    description: "We suggest the right system direction, next steps, and discussion path."
  }
];

export default function ContactPage() {
  const jsonLd = [
    organizationSchema,
    breadcrumbSchema(crumbs.map((item) => ({ name: item.label, href: item.href }))),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: title,
      url: `${siteUrl}/contact`
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
            <div className="max-w-5xl">
              <SectionLabel>Contact MS Engineering</SectionLabel>
              <div className="mb-8 h-px w-28 bg-yellow" />
              <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[78px]">
                Let&apos;s Discuss Your Industrial Requirement
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-charcoal">
                Share your plant, automation, surface treatment, or industrial system requirement. Our team will help you understand the right technical direction for your manufacturing operation.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 lg:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
              <div>
                <SectionLabel>Get in Touch</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  Get in Touch
                </h2>
                <p className="mt-7 text-lg leading-8 text-muted">
                  Send the basics of your requirement. A useful first discussion usually starts with process type, capacity, space, location, and timeline.
                </p>
                <div className="mt-10 border-t border-line">
                  <div className="border-b border-line py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Phone</p>
                    {company.phones.map((phone) => (
                      <a className="mt-3 block text-lg font-semibold text-ink hover:text-deepYellow" href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                        {phone}
                      </a>
                    ))}
                  </div>
                  <div className="border-b border-line py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Address</p>
                    <p className="mt-3 text-base leading-7 text-charcoal">{company.address}</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </Container>
        </section>

        <section className="bg-warm py-20 lg:py-28">
          <Container>
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_0.25fr]">
              <div>
                <SectionLabel>Next Steps</SectionLabel>
                <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  What Happens After You Contact Us?
                </h2>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {nextSteps.map((step, index) => (
                <article className="border-t border-line py-7" key={step.title}>
                  <span className="font-display text-4xl font-semibold text-yellow">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
        <CTASection
          heading="Request a Quote for Your Plant Requirement"
          text="Use the form above or call MS Engineering to start a clear technical conversation about your industrial system requirement."
        />
      </main>
      <Footer />
    </>
  );
}
