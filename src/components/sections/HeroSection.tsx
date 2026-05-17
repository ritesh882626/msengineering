import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function EditorialPlantImage() {
  return (
    <div
      className="relative min-h-[330px] overflow-hidden bg-executive sm:min-h-[430px] lg:min-h-[520px]"
    >
      <Image
        alt="MS Engineering manufacturing facility exterior"
        className="object-cover"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        src="/images/mse-hero-section-image.webp"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.58))]" />
      <div className="absolute left-8 top-8 border-l-2 border-yellow pl-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100">
        Precision. Performance. Excellence.
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
            <h1 className="max-w-4xl break-words font-display text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] text-ink min-[400px]:text-[44px] sm:text-6xl sm:tracking-[-0.055em] lg:text-[84px]">
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
