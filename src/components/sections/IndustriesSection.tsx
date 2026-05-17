import { Container } from "@/components/ui/Container";
import { industries } from "@/constants/homepageData";

export function IndustriesSection() {
  const firstRow = industries.slice(0, 5);
  const secondRow = industries.slice(5, 10);

  return (
    <section id="industries" className="bg-warm py-20 lg:py-32">
      <Container>
        <div className="mb-14 max-w-4xl">
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 bg-yellow" />
            Industrial Reach
          </p>
          <h2 className="font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            Industries We Serve
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            Supporting manufacturing teams that require reliable surface finishing, corrosion protection, and electroplating systems.
          </p>
        </div>

        <div className="industrial-mobile-marquee" aria-label="Industrial reach marquee">
          <div className="industrial-marquee-edge">
            <div className="industrial-marquee-row forward" tabIndex={0}>
              <div className="industrial-marquee-track">
                {[...firstRow, ...firstRow].map((industry, index) => (
                  <div className="industrial-marquee-item" key={`${industry.title}-forward-${index}`}>
                    {industry.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="industrial-marquee-edge">
            <div className="industrial-marquee-row reverse" tabIndex={0}>
              <div className="industrial-marquee-track">
                {[...secondRow, ...secondRow].map((industry, index) => (
                  <div className="industrial-marquee-item" key={`${industry.title}-reverse-${index}`}>
                    {industry.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="industrial-desktop-grid grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div className="group min-h-32 border-b border-r border-line p-5 transition hover:bg-executive" key={industry.title}>
              <span className="mb-8 block h-1.5 w-1.5 bg-yellow opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-display text-xl font-semibold leading-tight text-ink transition group-hover:text-white">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
