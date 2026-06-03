import londonImg from "@/assets/london.png.asset.json";
import entertainmentImg from "@/assets/entertainment.png.asset.json";
import lakersImg from "@/assets/lakers.png.asset.json";
import nbaImg from "@/assets/nba.png.asset.json";
import techImg from "@/assets/tech.png.asset.json";
import realestateImg from "@/assets/realestate.png.asset.json";

type Item = { title: string; query: string; image: { url: string } };

type LabeledItem = Item & { label: string };

const sections: { heading: string; items: LabeledItem[] }[] = [
  {
    heading: "Broad Discovery",
    items: [
      { label: "Location", title: "London News", query: "london news", image: londonImg },
      { label: "Entertainment", title: "Entertainment News", query: "entertainment news", image: entertainmentImg },
      { label: "Industry", title: "Tech News", query: "tech news", image: techImg },
    ],
  },
  {
    heading: "Niche Discovery",
    items: [
      { label: "Teams", title: "Lakers News", query: "lakers news", image: lakersImg },
      { label: "Sports", title: "NBA News", query: "nba news", image: nbaImg },
      { label: "Commercial", title: "Real Estate News", query: "real estate news", image: realestateImg },
    ],
  },
];

function ProofCard({ label, title, query, image }: LabeledItem) {
  return (
    <div>
      <div className="mb-8 md:mb-10">
        <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
      </div>
      <figure className="group mx-auto w-full max-w-[360px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.14_0_0)] p-2 shadow-[0_30px_60px_-30px_oklch(0_0_0/0.25),0_18px_36px_-18px_oklch(0_0_0/0.18)] ring-1 ring-black/5 transition-transform duration-500 group-hover:-translate-y-1">
          <div className="relative w-full overflow-hidden rounded-[1.65rem] bg-[oklch(0.98_0_0)]">
            <img
              src={image.url}
              alt={`Apple Podcasts search results for ${query}`}
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
        <figcaption className="mt-5 flex items-baseline justify-between">
          <span className="text-sm font-medium tracking-tight">{title}</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Apple Podcasts</span>
        </figcaption>
      </figure>
    </div>
  );
}

export function Proof() {
  return (
    <section id="proof" className="hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2 className="font-display text-7xl md:text-9xl tracking-[-0.035em] leading-[0.9]">Proof.</h2>
          <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-snug tracking-tight text-balance">
            Relevant discovery positions across locations, industries, sports, entertainment, and commercial categories.
          </p>
          <p className="mt-4 text-[11px] leading-relaxed tracking-[0.18em] text-muted-foreground/60">
            Examples shown are operated by <em>The Daily News Now</em>, Fastcast's flagship publishing network.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display text-3xl md:text-4xl tracking-[-0.02em] leading-[1.05] mb-10 md:mb-14">
                {section.heading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16">
                {section.items.map((item) => (
                  <ProofCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
