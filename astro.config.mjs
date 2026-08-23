// @ts-check
import { defineConfig } from "astro/config";

// site dipakai untuk canonical dan og:url, harus sama dengan alamat yang tayang.
export default defineConfig({
  site: "https://travel-trip.radentafabian.workers.dev",
  output: "static",
  build: {
    // URL rapi tanpa ".html"
    format: "directory",
  },
});
