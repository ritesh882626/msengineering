import { Container } from "@/components/ui/Container";
import { aboutPoints } from "@/constants/homepageData";

export function AboutSection() {
  return (
    <section id="about" className="bg-warm py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 border-b border-line pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-24">
          <h2 className="max-w-2xl font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            Built for Performance. Engineered for Continuity.
          </h2>
          <div>
            <p className="text-xl leading-9 text-charcoal">
              MS Engineering helps manufacturing businesses plan and build electroplating plant systems that support practical production, consistent output, and long-term reliability.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted">
              Our work focuses on process planning, tank layout, equipment integration, workflow efficiency, safety considerations, and maintenance-ready plant design.
            </p>
            <div className="mt-10 grid gap-0 border-y border-line">
              {aboutPoints.slice(0, 3).map((point, index) => (
                <div className="grid grid-cols-[72px_1fr] items-center border-b border-line py-5 last:border-b-0" key={point}>
                  <span className="font-display text-3xl font-semibold text-yellow">0{index + 1}</span>
                  <span className="text-lg font-semibold text-ink">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
