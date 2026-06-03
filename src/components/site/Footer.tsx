export function Footer() {
  return (
    <footer className="hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-display text-4xl tracking-tight">Fastcast</p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              A Proprietary Relevance Infrastructure for Podcast Discovery.
            </p>
          </div>
          <ul className="flex items-center gap-8 text-sm">
            <li><a href="#proof" className="text-muted-foreground hover:text-foreground transition-colors">Proof</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="mt-16 pt-8 hairline-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Fastcast.ai</span>
          <span>One partner per category.</span>
        </div>
      </div>
    </footer>
  );
}
