import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/constants/homepageData";

export function WhyChooseSection() {
  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          light
          align="center"
          eyebrow="Why Choose MS Engineering"
          title="Why Choose MS Engineering?"
          description="A technical partner for industrial buyers who need practical plant planning, durable systems, and dependable support beyond setup."
        />
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="min-w-[290px] snap-start rounded-lg border border-white/12 bg-white/6 p-6 transition hover:border-copper/50 md:min-w-0">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-copper">0{index + 1}</span>
                  <Icon aria-hidden="true" className="h-6 w-6 text-copper" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
