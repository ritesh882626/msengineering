import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-executive py-20 text-white lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-10 h-px w-28 bg-yellow" />
            <h2 className="max-w-4xl font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Planning an Electroplating Plant for Your Factory?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              Share your plant requirement with MS Engineering. Get guidance on the right setup, layout, process flow, and technical direction for your industrial needs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button className="w-full border border-yellow bg-yellow text-ink hover:bg-deepYellow sm:w-auto" href="#contact">
              Request a Quote
            </Button>
            <Button className="w-full border-white text-white hover:border-yellow hover:bg-transparent hover:text-yellow sm:w-auto" href="tel:+919560443119" variant="secondary">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
