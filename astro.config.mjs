// @ts-check
import { defineConfig } from "astro/config";

// Dipakai untuk URL kanonik dan tautan Open Graph. Harus sama persis dengan
// alamat situs yang tayang, kalau tidak pratinjau tautan di WhatsApp akan
// menunjuk domain yang salah. Ganti ke domain klien saat situsnya dipasang.
export default defineConfig({
  site: "https://travel-trip.pages.dev",
  output: "static",
  build: {
    // URL rapi tanpa ".html"
    format: "directory",
  },
});
