import { Container } from "@/components/ui/Container";
import { reasons } from "@/constants/homepageData";

export function WhyChooseSection() {
  return (
    <section className="bg-executive py-20 text-white lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 bg-yellow" />
              Why MS Engineering
            </p>
            <h2 className="font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Why MS Engineering
            </h2>
          </div>
          <div className="grid border-t border-zinc-800 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article className="border-b border-zinc-800 py-9 md:px-8 md:even:border-l" key={reason.title}>
                <span className="font-display text-5xl font-semibold tracking-[-0.06em] text-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em] text-white">{reason.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
