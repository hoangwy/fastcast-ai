import heroVideo from "@/assets/hero.mp4.asset.json";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-40 pb-28 md:pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        <div className="lg:col-span-6">
          <h1 className="fc-reveal fc-reveal-delay-1 font-display text-[clamp(3.25rem,8.5vw,9rem)] leading-[0.92] tracking-[-0.035em] text-balance">
            Own What People Search For.
          </h1>
          <p className="fc-reveal fc-reveal-delay-2 mt-10 max-w-md text-lg md:text-xl text-muted-foreground leading-snug tracking-tight text-balance">
            Exclusive ownership of podcast discovery categories people actively search for.
          </p>
          <div className="fc-reveal fc-reveal-delay-3 mt-14 flex flex-wrap items-center gap-3">
            <a
              href="#proof"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              Proof
            </a>
            <a
              href="mailto:partners@fastcast.ai?subject=Reserve%20a%20Category"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-7 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              Reserve a Category
            </a>
          </div>
          <div className="fc-reveal fc-reveal-delay-3 mt-12 space-y-1.5">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-foreground">
              Hundreds Of Categories.
            </p>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-foreground">
              One Partner Per Category.
            </p>
            <div className="pt-3">
              <div className="h-px w-8 bg-border" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Fastcast powers podcast discovery across cities, industries, sports, and entertainment.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <FeaturedDevice />
        </div>
      </div>
    </section>
  );
}

function FeaturedDevice() {
  return (
    <figure className="fc-reveal fc-reveal-delay-2 group relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-[oklch(0.14_0_0)] p-2.5 shadow-[0_60px_120px_-40px_oklch(0_0_0/0.4),0_30px_60px_-30px_oklch(0_0_0/0.25)] ring-1 ring-black/5">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[oklch(0.98_0_0)]">
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </figure>
  );
}
