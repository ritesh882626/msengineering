import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({
  buttonLabel = "Request a Quote",
  heading,
  secondaryHref,
  secondaryLabel,
  text
}: {
  buttonLabel?: string;
  heading: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  text: string;
}) {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <Container>
        <div className="border-l-4 border-yellow bg-executive px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-4xl font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">{heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="bg-white text-ink hover:bg-yellow" href="/contact">
                {buttonLabel}
              </Button>
              {secondaryHref && secondaryLabel ? (
                <Button className="border-white/30 text-white hover:border-yellow hover:bg-transparent hover:text-yellow" href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
