import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Satu paket bisa punya banyak tanggal berangkat. Harga dan kuota melekat di
// tanggalnya, bukan di paketnya — batch high season bisa lebih mahal.
const keberangkatan = z.object({
  mulai: z.date(),
  selesai: z.date(),
  harga: z.number(),
  hargaCoret: z.number().optional(),
  hargaCatatan: z.string().default(""),
  kuotaTotal: z.number(),
  kuotaSisa: z.number(),
});

// `tambahan` bisa negatif — Muara Angke lebih murah dari Ancol.
const titikKumpul = z.object({
  nama: z.string(),
  jam: z.string().optional(),
  tambahan: z.number().default(0),
});

const hari = z.object({
  label: z.string(),
  tema: z.string(),
  lokasi: z.string(),
  agenda: z.array(z.object({ jam: z.string(), isi: z.string() })),
});

const paket = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/paket" }),
  schema: z.object({
    nama: z.string(),
    lokasi: z.string(),
    destinasi: z.string(), // harus cocok dengan slug di DESTINASI
    durasi: z.string(),
    level: z.string(),
    tipe: z.string().default("Open Trip"),
    unggulan: z.boolean().default(false),
    foto: z.string(),
    ringkas: z.string(),
    highlight: z.array(z.string()).default([]),
    rating: z.number(),
    ulasan: z.number(),

    titikKumpul: z.array(titikKumpul).min(1),

    include: z.array(z.string()).default([]),
    exclude: z.array(z.string()).default([]),
    opsional: z.array(z.object({ nama: z.string(), harga: z.number() })).default([]),

    minimumPeserta: z.number().optional(),
    keberangkatan: z.array(keberangkatan).min(1),

    itinerary: z.array(hari).default([]),
    catatanItinerary: z.string().default(""),
    bawa: z.array(z.string()).default([]),
  }),
});

const artikel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artikel" }),
  schema: z.object({
    judul: z.string(),
    deskripsi: z.string(),
    tanggal: z.date(),
    penulis: z.string().default(""),
    foto: z.string().optional(),
  }),
});

export const collections = { paket, artikel };
