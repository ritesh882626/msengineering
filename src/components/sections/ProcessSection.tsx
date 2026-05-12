import { Container } from "@/components/ui/Container";
import { processSteps } from "@/constants/homepageData";

export function ProcessSection() {
  return (
    <section id="process" className="bg-soft py-20 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 bg-yellow" />
              Process Expertise
            </p>
            <h2 className="font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              A Process Designed Around Precision
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-charcoal">
            A successful electroplating plant depends on more than equipment. It needs the right layout, tank sequence, workflow, safety planning, chemical handling, electrical support, and maintenance access.
          </p>
        </div>

        <div className="mt-16 grid gap-0 border-y border-line lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <div className="relative border-b border-line py-8 lg:border-b-0 lg:border-r lg:px-5 last:lg:border-r-0" key={step}>
              <span className="mb-14 block h-3 w-3 bg-yellow" />
              <p className="font-display text-5xl font-semibold tracking-[-0.06em] text-ink/20">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 max-w-[170px] font-display text-xl font-semibold leading-tight text-ink">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
