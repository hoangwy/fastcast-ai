// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

// The CDN origin that hosts /__l5e/ assets for this Lovable project.
const ASSET_ORIGIN = "https://f08340a6-dd65-41a3-a7b1-d686a669b191.lovableproject.com";

// At build time, rewrite relative /__l5e/ URLs in .asset.json imports to
// absolute CDN URLs so they resolve correctly on Cloudflare Pages.
function rewriteAssetUrls(): Plugin {
  return {
    name: "rewrite-asset-urls",
    apply: "build",
    transform(code, id) {
      if (!id.endsWith(".asset.json")) return null;
      return code.replace(/"(\/__l5e\/[^"]+)"/g, `"${ASSET_ORIGIN}$1"`);
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force-enable nitro with the Cloudflare Pages preset.
  nitro: {
    preset: "cloudflare-pages",
    cloudflare: {
      deployConfig: false,
    },
  },
  vite: {
    plugins: [rewriteAssetUrls()],
    server: {
      proxy: {
        // Dev only: forward /__l5e/ asset requests to the Lovable project CDN.
        "/__l5e": {
          target: ASSET_ORIGIN,
          changeOrigin: true,
          secure: true,
          headers: { origin: ASSET_ORIGIN },
        },
      },
    },
  },
});
