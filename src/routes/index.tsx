import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Proof } from "@/components/site/Proof";
import { Statement } from "@/components/site/Statement";
import { Example } from "@/components/site/Example";

import { Vision } from "@/components/site/Vision";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastcast — Own Podcast Discovery" },
      {
        name: "description",
        content:
          "Fastcast helps brands and organizations establish ownership of podcast discovery categories across platforms.",
      },
      { property: "og:title", content: "Fastcast — Own Podcast Discovery" },
      {
        property: "og:description",
        content:
          "Become the presenting partner of cities, industries, sports, and topics across podcast platforms.",
      },
      { property: "og:url", content: "https://fastcast1.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://fastcast1.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Statement />
        <Example />
        
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
