import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/constants/homepageData";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Industries We Serve"
          description="MS Engineering supports manufacturers and industrial businesses that require reliable surface finishing, corrosion protection, and electroplating plant systems."
        />
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="min-w-[220px] snap-start rounded-lg border border-borderSteel bg-industrial p-5 transition hover:border-steel md:min-w-0">
                <Icon aria-hidden="true" className="mb-4 h-6 w-6 text-steel" />
                <h3 className="font-display text-lg font-semibold leading-snug text-charcoal">{industry.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
