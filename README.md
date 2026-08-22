# Situs Open Trip Organizer

Situs profil + jadwal untuk open trip organizer. Static site, dibangun dengan
[Astro](https://astro.build). Tidak ada backend, tidak ada pembayaran — semua
tombol booking mengarah ke WhatsApp.

Klien demo saat ini: **Ombak Lepas** (fiktif, isinya placeholder).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
npm run preview  # cek hasil build
```

Butuh Node 18 ke atas.

## Struktur

```
src/
  content/paket/*.md    jadwal & detail paket trip
  content/artikel/*.md  artikel (belum diisi)
  data/konten.ts        brand, destinasi, FAQ, kebijakan DP
  lib/                  helper tanggal, query paket, tautan WA
  layouts/Dasar.astro   head, nav, footer — dipakai semua halaman
  components/           kartu trip, filter, seksi beranda
  pages/                satu berkas per halaman
  styles/style.css      seluruh CSS, belum dipecah
sketsa/                 mockup HTML/CSS/JS awal, dipertahankan sebagai referensi
```

## Ganti klien

Dua tempat:

1. `src/data/konten.ts` — nama usaha, nomor WA, Instagram, kota, statistik,
   FAQ, dan kebijakan DP/pembatalan.
2. `src/content/paket/*.md` — satu berkas per paket trip.

Nomor WhatsApp cukup diubah di `BRAND.waNomor` (format `628xxx`, tanpa `+`).
Semua tombol WA di seluruh situs ikut, lengkap dengan teks chat yang sudah terisi.

Ganti juga `site` di `astro.config.mjs` ke domain klien — dipakai untuk URL
kanonik dan tautan Open Graph.

## Model paket

Satu paket bisa punya banyak keberangkatan. Harga, kuota, dan sisa kursi
melekat di keberangkatan, bukan di paket, karena batch high season biasanya
lebih mahal.

```yaml
keberangkatan:
  - mulai: 2026-09-12
    selesai: 2026-09-15
    harga: 2850000
    kuotaTotal: 16
    kuotaSisa: 5
```

Tanggal tampil (`12 – 15 September 2026`) diturunkan dari `mulai`/`selesai`,
tidak ditulis manual.

**Penting:** keberangkatan yang sudah lewat disaring saat build. Situs harus
di-build ulang tiap hari (cron) supaya jadwal lama benar-benar hilang.

## Foto

Masih memakai Unsplash lewat hotlink. Ganti dengan dokumentasi trip asli sebelum
dipakai klien sungguhan — dua tempat: field `foto:` di berkas paket, dan
`<img src="https://images.unsplash.com/...">` langsung di `src/pages/*.astro`.

## Yang sengaja tidak ada

Form pendaftaran, keranjang, pembayaran, login, dan ketersediaan kursi real-time.
Sisa kursi diisi manual oleh klien.
