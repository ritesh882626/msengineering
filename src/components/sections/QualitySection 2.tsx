import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { qualityCards } from "@/constants/homepageData";

export function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-light-grid bg-[length:36px_36px] lg:block" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Quality, Safety & Support"
              title="Designed for Safe and Reliable Industrial Operation"
              description="Electroplating plant systems require careful planning around safety, chemical handling, workflow, ventilation, electrical systems, maintenance access, and operational consistency."
            />
            <p className="mt-5 text-base leading-7 text-muted">
              MS Engineering focuses on practical plant design that supports reliable day-to-day production and keeps long-term serviceability in view from the start.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {qualityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-lg border border-borderSteel bg-industrial p-5">
                  <Icon aria-hidden="true" className="mb-4 h-6 w-6 text-copper" />
                  <h3 className="font-display text-xl font-semibold text-charcoal">{card.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
