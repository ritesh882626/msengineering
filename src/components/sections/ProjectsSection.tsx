import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { showcase } from "@/constants/homepageData";

function ImageBlock() {
  return (
    <div className="relative min-h-[360px] overflow-hidden bg-executive text-white lg:min-h-[520px]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%),linear-gradient(0deg,rgba(0,0,0,0.22),rgba(0,0,0,0.22))]" />
      <p className="absolute left-6 top-6 max-w-xs border-l-2 border-yellow pl-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
        TODO: Replace with real MS Engineering plant/project image.
      </p>
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-sm uppercase tracking-[0.18em] text-yellow">Production capability</p>
        <h3 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em]">Plant systems planned for real operating conditions.</h3>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-paper py-20 lg:py-32">
      <Container>
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_0.25fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 bg-yellow" />
              Capability Showcase
            </p>
            <h2 className="max-w-4xl font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Plant Capabilities Built for Production
            </h2>
          </div>
          <p className="self-end text-base leading-7 text-muted">
            A focused capability view for project discussions, audits, and procurement evaluation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <ImageBlock />
          <div className="grid gap-5">
            <div className="border border-line bg-soft p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Technical direction</p>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">Process before equipment.</h3>
              <p className="mt-4 text-base leading-7 text-muted">The right plant begins with sequence, movement, safety, and maintenance logic.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {showcase.slice(0, 4).map((item, index) => (
                <div className="min-h-40 border border-line bg-paper p-5 transition hover:bg-soft" key={item}>
                  <span className="font-display text-3xl font-semibold text-yellow">0{index + 1}</span>
                  <h3 className="mt-7 font-display text-xl font-semibold leading-tight text-ink">{item}</h3>
                </div>
              ))}
            </div>
            <a className="group flex items-center justify-between border border-line bg-executive p-6 text-white" href="#contact">
              <span className="font-display text-xl font-semibold">Discuss a plant requirement</span>
              <ArrowUpRight className="h-6 w-6 text-yellow transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
