import { Container } from "@/components/ui/Container";
import { trustItems } from "@/constants/homepageData";

export function TrustBar() {
  return (
    <section aria-label="MS Engineering capabilities" className="bg-industrial">
      <Container className="-mt-8 relative z-10">
        <div className="overflow-x-auto rounded-lg border border-white/10 bg-graphite p-3 shadow-darkpanel">
          <div className="grid min-w-[760px] grid-cols-5 gap-2 lg:min-w-0">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex min-h-20 items-center gap-3 rounded-md border border-white/8 bg-white/5 px-4">
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-copper" />
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
