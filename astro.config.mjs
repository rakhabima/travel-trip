// @ts-check
import { defineConfig } from "astro/config";

// `site` dipakai untuk URL kanonik, sitemap, dan tautan Open Graph (B2, B4, B5).
// Ganti ke domain klien saat situsnya dipasang.
export default defineConfig({
  site: "https://contoh.ombaklepas.id",
  output: "static",
  build: {
    // URL rapi tanpa ".html" — B5
    format: "directory",
  },
});
