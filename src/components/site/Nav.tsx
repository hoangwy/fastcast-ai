import { useEffect, useState } from "react";

const links = [
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-tight">Fastcast</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5 hidden sm:inline">
            .ai
          </span>
        </a>
        <ul className="flex items-center gap-8 md:gap-10 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
