import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { showcase } from "@/constants/homepageData";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-industrial py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Plant Showcase"
          title="Electroplating Plant Capabilities"
          description="Visual placeholders below show the intended project storytelling structure. Replace them with real MS Engineering plant photos, installation shots, and project evidence when available."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {showcase.map((item, index) => (
            <article key={item} className="overflow-hidden rounded-lg border border-borderSteel bg-white shadow-technical">
              <div className="relative min-h-44 bg-navy p-5 text-white">
                <div className="absolute inset-0 bg-technical-grid bg-[length:30px_30px] opacity-70" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase text-copper">TODO: Replace with real MS Engineering project image.</p>
                  <div className="mt-10 h-14 rounded-md border border-white/15 bg-white/8" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <span className="h-7 rounded border border-white/10 bg-steel/30" />
                    <span className="h-7 rounded border border-white/10 bg-steel/30" />
                    <span className="h-7 rounded border border-white/10 bg-steel/30" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-mono text-xs font-semibold text-copper">CAPABILITY {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-charcoal">{item}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
