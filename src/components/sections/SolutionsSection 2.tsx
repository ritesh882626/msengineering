import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/constants/homepageData";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Electroplating Plant Solutions"
          title="Electroplating Plant Solutions We Provide"
          description="Complete plant planning, tank systems, control infrastructure, and automation-ready solutions for production-grade surface finishing."
        />
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Card key={solution.title} className="min-w-[280px] snap-start md:min-w-0">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-steel/10 text-steel">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{solution.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
