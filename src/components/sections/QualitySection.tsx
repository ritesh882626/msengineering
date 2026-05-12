import { Container } from "@/components/ui/Container";
import { qualityCards } from "@/constants/homepageData";

export function QualitySection() {
  return (
    <section className="bg-soft py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 bg-yellow" />
              Quality & Lifecycle Support
            </p>
            <h2 className="font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Designed for Safe and Reliable Operation
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal">
              Electroplating plant systems require careful planning around safety, chemical handling, workflow, ventilation, electrical systems, maintenance access, and operational consistency.
            </p>
          </div>

          <div className="grid gap-10">
            <div className="min-h-[280px] border border-line bg-paper p-7">
              <p className="max-w-sm text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Abstract technical diagram / replace with real maintenance access or plant operations image.
              </p>
              <div className="mt-16 grid gap-6">
                <div className="h-px bg-ink" />
                <div className="ml-[18%] h-px bg-line" />
                <div className="ml-[36%] h-px bg-line" />
                <div className="ml-[54%] h-px bg-yellow" />
              </div>
            </div>
            <div className="grid border-t border-line sm:grid-cols-2">
              {qualityCards.map((card, index) => (
                <div className="border-b border-line py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8" key={card.title}>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
