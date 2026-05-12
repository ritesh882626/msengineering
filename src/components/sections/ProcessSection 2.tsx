import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/constants/homepageData";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-industrial py-20 lg:py-28">
      <div className="absolute inset-0 bg-light-grid bg-[length:38px_38px]" />
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Process & Technology"
          title="Built Around Process, Precision, and Performance"
          description="A successful electroplating plant depends on more than equipment. It requires the right process flow, tank layout, chemical handling, safety planning, workflow design, and long-term maintenance approach."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-7 lg:gap-0">
          {processSteps.map((step, index) => (
            <div key={step} className="relative">
              {index < processSteps.length - 1 ? (
                <div className="absolute left-8 top-8 hidden h-px w-full bg-steel/35 lg:block" />
              ) : null}
              <div className="relative rounded-lg border border-borderSteel bg-white p-5 shadow-technical lg:mx-1">
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-navy font-mono text-sm font-semibold text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug text-charcoal">{step}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
