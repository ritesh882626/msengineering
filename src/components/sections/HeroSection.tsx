import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function EditorialPlantImage() {
  return (
    <div
      aria-label="industrial electroplating plant setup placeholder"
      className="relative min-h-[330px] overflow-hidden bg-executive sm:min-h-[430px] lg:min-h-[520px]"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_42%),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_100%,72px_72px]" />
      <div className="absolute left-8 top-8 border-l-2 border-yellow pl-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
        TODO: Replace with real MS Engineering plant/project image.
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <div className="grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
          {["Tank sequence", "Control systems", "Process flow"].map((item, index) => (
            <div key={item}>
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-yellow">0{index + 1}</p>
              <p className="mt-2 text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-8 top-1/2 hidden w-[44%] -translate-y-1/2 lg:block">
        <div className="h-px bg-white/30" />
        <div className="mt-10 h-px bg-white/20" />
        <div className="mt-10 h-px bg-white/10" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="bg-warm pt-[118px]">
      <Container>
        <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24 lg:pt-20">
          <div className="section-fade">
            <div className="mb-8 h-16 w-px bg-yellow" />
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Electroplating Plant Engineering</p>
            <h1 className="max-w-4xl font-display text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[84px]">
              Precision-Built Electroplating Plants for Modern Manufacturing
            </h1>
            <p className="mt-8 max-w-[680px] text-lg leading-8 text-charcoal">
              MS Engineering designs electroplating plant systems for manufacturers that need reliable process flow, durable plant setup, and long-term operational performance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto" href="#contact">
                Request a Quote
              </Button>
              <Button className="w-full sm:w-auto" href="#solutions" variant="secondary">
                Explore Capabilities
              </Button>
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-muted">
              Plant design · Process engineering · Surface treatment systems · Lifecycle support
            </p>
          </div>

          <div className="section-fade lg:pt-10">
            <EditorialPlantImage />
          </div>
        </div>
      </Container>
    </section>
  );
}
