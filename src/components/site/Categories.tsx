const groups = [
  { label: "Own London News.", items: ["London", "Toronto", "Miami"] },
  { label: "Own AI News.", items: ["Artificial Intelligence", "Business", "Real Estate"] },
  { label: "Own NBA News.", items: ["NBA", "College Basketball", "NFL"] },
];

export function Categories() {
  return (
    <section id="categories" className="hairline-t">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-32 md:py-48">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2 className="font-display text-7xl md:text-9xl tracking-[-0.035em] leading-[0.9]">
            Own A Category.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden border border-border rounded-sm">
          {groups.map((g) => (
            <div key={g.label} className="bg-background p-20 md:p-28 min-h-[680px] flex flex-col">
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] leading-[0.92]">
                {g.label}
              </h3>
              <ul className="mt-auto pt-20 space-y-4">
                {g.items.map((it) => (
                  <li key={it} className="border-t border-border pt-4 text-base md:text-lg tracking-tight text-foreground/80">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
