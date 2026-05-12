import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { solutions } from "@/constants/homepageData";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-paper py-20 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 bg-yellow" />
              Solutions Overview
            </p>
            <h2 className="font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Electroplating Plant Solutions
            </h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-muted">
              Plant systems designed around production requirements, process flow, available space, and operational goals.
            </p>
          </div>

          <div className="border-t border-line">
            {solutions.map((solution, index) => (
              <article
                className="group grid gap-5 border-b border-line py-8 transition hover:bg-soft sm:grid-cols-[92px_1fr_40px] sm:px-5"
                key={solution.title}
              >
                <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-muted transition group-hover:text-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{solution.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{solution.description}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-ink opacity-50 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
