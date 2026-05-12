import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPoints } from "@/constants/homepageData";

export function AboutSection() {
  return (
    <section id="about" className="bg-industrial py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="About MS Engineering"
              title="Technology-Driven Electroplating Plant Solutions"
              description="MS Engineering helps industrial businesses build reliable electroplating plant systems designed for consistent output, operational efficiency, and long-term performance."
            />
            <p className="mt-5 text-base leading-7 text-muted">
              Our approach combines engineering understanding, process planning, equipment selection, and practical industrial execution. We focus on creating plant solutions that are easy to operate, safe to manage, and suitable for demanding manufacturing environments.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-md border border-borderSteel bg-white px-4 py-3">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-processGreen" />
                  <span className="text-sm font-semibold text-charcoal">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-borderSteel bg-white p-5 shadow-technical">
            <div className="rounded-md bg-navy p-5 text-white">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-mono text-xs uppercase text-copper">Process diagram</p>
                <p className="font-mono text-xs text-slate-400">MSE / CAD-01</p>
              </div>
              <div className="grid gap-4">
                {["Pre-treatment", "Electroplating", "Rinsing", "Inspection"].map((item, index) => (
                  <div key={item} className="grid grid-cols-[96px_1fr] items-center gap-4">
                    <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                    <div className="rounded-md border border-white/10 bg-white/7 p-4">
                      <div className="mb-2 h-2 rounded bg-copper" style={{ width: `${42 + index * 14}%` }} />
                      <p className="font-display text-lg font-semibold">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
