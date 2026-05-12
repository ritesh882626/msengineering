import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-industrial py-12">
      <Container>
        <div className="rounded-lg border border-copper/45 bg-navy p-6 text-white shadow-darkpanel sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase text-copper">Factory planning support</p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Planning an Electroplating Plant for Your Factory?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Share your plant requirement with MS Engineering. We will help you understand the right setup, layout, process flow, and technical direction for your industrial needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="#contact" className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button href="tel:+919560443119" variant="secondary" className="w-full sm:w-auto">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
