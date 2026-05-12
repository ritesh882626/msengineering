import Image from "next/image";
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
            <div className="relative min-h-[280px] overflow-hidden border border-line bg-executive">
              <Image
                alt="Electroplating plant layout with process tanks and operator access"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                src="/images/electroplating-plant-layout.webp"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.68),rgba(0,0,0,0.14))]" />
              <p className="absolute left-7 top-7 max-w-sm text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100">
                Layouts planned for workflow, access, and uptime.
              </p>
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
