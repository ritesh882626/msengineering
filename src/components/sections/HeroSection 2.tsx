import { CheckCircle2, Cpu, Gauge, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const floatingCards = [
  { label: "Custom Plant Design", icon: Layers },
  { label: "Process Automation", icon: Cpu },
  { label: "Corrosion Protection", icon: ShieldCheck },
  { label: "Surface Finishing", icon: Gauge }
];

function PlantVisual() {
  return (
    <div
      aria-label="electroplating plant technology by MS Engineering"
      className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/15 bg-graphite/70 p-5 shadow-darkpanel"
      role="img"
    >
      <div className="absolute inset-0 bg-technical-grid bg-[length:34px_34px] opacity-80" />
      <div className="absolute right-6 top-6 rounded border border-copper/35 bg-copper/10 px-3 py-1 font-mono text-xs text-copper">
        PROCESS LINE 07
      </div>
      <div className="relative mt-14 grid gap-5">
        <div className="grid grid-cols-4 gap-3">
          {["Pre-Treat", "Plate", "Rinse", "Dry"].map((stage, index) => (
            <div key={stage} className="min-h-28 rounded-md border border-steel/50 bg-navy/80 p-3">
              <div className="mb-3 h-2 rounded bg-copper/80" style={{ width: `${56 + index * 9}%` }} />
              <div className="h-16 rounded border border-white/10 bg-gradient-to-b from-steel/45 to-navy" />
              <p className="mt-3 font-mono text-[11px] text-slate-300">{stage}</p>
            </div>
          ))}
        </div>
        <div className="relative h-20 rounded-md border border-white/10 bg-white/5">
          <div className="absolute left-5 right-5 top-1/2 h-px bg-copper/60" />
          {[12, 36, 62, 86].map((left) => (
            <span key={left} className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-copper bg-navy" style={{ left: `${left}%` }} />
          ))}
          <div className="absolute bottom-3 left-5 font-mono text-[11px] text-slate-400">CAD FLOW / TANK ALIGNMENT / CONTROL PANEL</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["DC Power", "Ventilation", "PLC Ready"].map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/7 p-3 font-mono text-xs text-slate-300">
              <CheckCircle2 className="mb-2 h-4 w-4 text-processGreen" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pb-16 pt-32 text-white sm:pb-20 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-technical-grid bg-[length:40px_40px] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-steel/35 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div className="section-fade">
            <p className="mb-5 max-w-3xl font-mono text-xs font-semibold uppercase text-[#E2A36E] sm:text-sm">
              Electroplating Plant Technology & Industrial Surface Treatment Solutions
            </p>
            <h1 className="font-display text-[40px] font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Engineering Reliable Electroplating Plants for Modern Industries
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              MS Engineering designs and delivers electroplating plant solutions built for performance, durability, safety, and long-term industrial operations. From plant planning to process setup, we help manufacturers build efficient surface treatment systems with engineering precision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button href="#solutions" variant="secondary" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-300">Custom plant design • Industrial-grade systems • Reliable support</p>
          </div>

          <div className="section-fade lg:pl-4">
            <PlantVisual />
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:-mt-8 lg:px-6">
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="rounded-md border border-white/15 bg-white/10 p-3 backdrop-blur">
                    <Icon className="mb-2 h-4 w-4 text-copper" />
                    <p className="text-xs font-semibold leading-5 text-white">{card.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
