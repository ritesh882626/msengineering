import { Container } from "@/components/ui/Container";
import { trustItems } from "@/constants/homepageData";

export function TrustBar() {
  return (
    <section aria-label="MS Engineering capabilities" className="border-y border-line bg-paper">
      <Container>
        <div className="flex gap-10 overflow-x-auto py-6 lg:grid lg:grid-cols-5 lg:gap-0">
          {trustItems.map((item) => (
            <div className="flex min-w-max items-center gap-3 border-line lg:min-w-0 lg:border-r lg:px-7 first:lg:pl-0 last:lg:border-r-0" key={item.title}>
              <span className="h-2 w-2 shrink-0 bg-yellow" />
              <span className="text-sm font-semibold text-ink">{item.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
