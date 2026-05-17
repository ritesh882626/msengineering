import { Container } from "@/components/ui/Container";
import { processSteps } from "@/constants/homepageData";

const processMobileCopy = [
  "Capture capacity, parts, chemistry, space, and operating priorities.",
  "Map tank sequence, movement paths, access, and service clearance.",
  "Define durable plant hardware for the production environment.",
  "Align treatment stages for consistency, safety, and repeatable output.",
  "Support setup planning, alignment, and commissioning readiness.",
  "Review performance and tune the line for dependable operation.",
  "Prepare teams for maintenance, uptime, and long-term reliability."
];

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

        <div
          aria-label="Process expertise flow"
          className="mobile-process-slider mt-12"
          tabIndex={0}
        >
          {processSteps.map((step, index) => (
            <article className="mobile-process-card" key={`mobile-${step}`}>
              {index < processSteps.length - 1 ? (
                <svg
                  aria-hidden="true"
                  className="mobile-process-connector"
                  focusable="false"
                  viewBox="0 0 150 64"
                >
                  <path d="M4 46 C44 60 82 6 146 22" pathLength="1" />
                  <circle cx="4" cy="46" r="3.5" />
                  <circle cx="146" cy="22" r="3.5" />
                </svg>
              ) : null}
              <span className="mobile-process-node" />
              <p className="font-display text-5xl font-semibold tracking-[-0.06em] text-ink/20">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">{step}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{processMobileCopy[index]}</p>
            </article>
          ))}
        </div>

        <div className="process-desktop-grid mt-16 grid gap-0 border-y border-line lg:grid-cols-7">
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
