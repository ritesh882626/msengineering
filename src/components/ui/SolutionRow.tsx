import { TextLink } from "@/components/ui/TextLink";

export function SolutionRow({
  applications,
  description,
  index,
  title
}: {
  applications: string[];
  description: string;
  index: number;
  title: string;
}) {
  return (
    <article className="group border-b border-line py-9 transition hover:bg-soft sm:px-5">
      <div className="grid gap-6 lg:grid-cols-[92px_0.9fr_1fr]">
        <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-muted transition group-hover:text-yellow">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink">{title}</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">{description}</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Key Applications</p>
          <div className="flex flex-wrap gap-2">
            {applications.map((application) => (
              <span className="border border-line bg-paper px-3 py-2 text-sm text-charcoal" key={application}>
                {application}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <TextLink href="/contact">Discuss This Solution</TextLink>
          </div>
        </div>
      </div>
    </article>
  );
}
