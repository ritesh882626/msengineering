import { Container } from "@/components/ui/Container";

export function InsightSection() {
  return (
    <section className="bg-warm py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 h-px w-32 bg-yellow" />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Technical Perspective</p>
          <h2 className="font-display text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
            Better Plant Design Starts with Better Process Thinking
          </h2>
          <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[0.55fr_0.45fr]">
            <p className="text-xl leading-9 text-charcoal">
              For industrial operations, plant performance is shaped by the decisions made before installation begins. Layout, tank sequencing, chemical handling, operator movement, control systems, and maintenance access all influence long-term output.
            </p>
            <blockquote className="border-l border-ink pl-7">
              <p className="font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-ink">
                MS Engineering approaches electroplating plant design as a complete operating system, not just a collection of equipment.
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
