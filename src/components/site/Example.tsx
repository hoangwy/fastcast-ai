import imagePickerImg from "@/assets/image_picker.jpg";

export function Example() {
  return (
    <section className="hairline-t">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-32 md:py-48">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2 className="font-display text-7xl md:text-9xl tracking-[-0.035em] leading-[0.9]">
            Own The Category.
          </h2>
          <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-snug tracking-tight text-balance">
            Attach your brand to categories people actively seek out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-[0_40px_80px_-40px_oklch(0_0_0/0.35)]">
              <img
                src={imagePickerImg}
                alt="The Daily News Now! Music News — Presented by UJ.fm"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <ul className="divide-y divide-border border-y border-border">
              {[
                { title: "Music News Today.", partner: "— Presented by UJ.fm" },
                { title: "AI News Today.", partner: "— Available" },
                { title: "NBA News Today.", partner: "— Available" },
                { title: "Real Estate News Today.", partner: "— Available" },
              ].map((row) => (
                <li key={row.title} className="flex items-baseline justify-between gap-6 py-6">
                  <p className="font-display text-2xl md:text-3xl leading-[1.05] tracking-[-0.02em]">
                    {row.title}
                  </p>
                  <p className="shrink-0 text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {row.partner}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
