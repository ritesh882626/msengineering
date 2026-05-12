import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InsightSection } from "@/components/sections/InsightSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MS Engineering",
    url: "https://msengineeringindia.com",
    description:
      "MS Engineering provides electroplating plant and industrial surface treatment solutions designed for reliable manufacturing operations.",
    telephone: "+91 95604 43119",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Khasra No. 990/336/1, Near Basai Flyover, Basai Village, Sector 9B",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122006",
      addressCountry: "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MS Engineering",
    url: "https://msengineeringindia.com",
    telephone: "+91 95604 43119",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Khasra No. 990/336/1, Near Basai Flyover, Basai Village, Sector 9B",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122006",
      addressCountry: "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electroplating Plant Solutions",
    provider: {
      "@type": "Organization",
      name: "MS Engineering"
    },
    serviceType: "Electroplating plant technology and surface treatment systems",
    areaServed: "India"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MS Engineering",
    url: "https://msengineeringindia.com"
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <SolutionsSection />
        <ProcessSection />
        <IndustriesSection />
        <WhyChooseSection />
        <ProjectsSection />
        <QualitySection />
        <InsightSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
