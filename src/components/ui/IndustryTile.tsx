export function IndustryTile({ description, title }: { description: string; title: string }) {
  return (
    <article className="group min-h-[230px] border border-line bg-paper p-6 transition hover:border-executive hover:bg-executive">
      <span className="mb-8 block h-2 w-2 bg-yellow" />
      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink transition group-hover:text-white">{title}</h3>
      <p className="mt-5 text-base leading-7 text-muted transition group-hover:text-zinc-300">{description}</p>
    </article>
  );
}
