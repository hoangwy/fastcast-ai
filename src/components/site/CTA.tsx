export function CTA() {
  return (
    <section id="contact" className="hairline-t">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-40 md:py-56">
        <div className="max-w-5xl">
          <h2 className="font-display text-[clamp(3.5rem,10vw,11rem)] leading-[0.92] tracking-[-0.035em] text-balance">
            Reserve Your Category.
          </h2>
          <p className="mt-12 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
            One partner per category. Availability is limited.
          </p>
          <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
            Don't see your category? We can build it.
          </p>
          <div className="mt-14">
            <a
              href="mailto:partners@fastcast.ai?subject=Reserve%20a%20Category"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              Reserve a Category
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
