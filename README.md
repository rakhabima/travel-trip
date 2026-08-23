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

Kalau tampilan di `dev` terlihat kosong atau aneh setelah skema konten berubah,
cache-nya basi. Hentikan server, lalu `rm -rf .astro && npm run dev`.

## Struktur

```
src/
  content/paket/*.md      satu berkas per paket trip
  content/artikel/*.md    artikel — belum ada isinya
  content.config.ts       skema paket & artikel
  data/konten.ts          brand, destinasi, alasan, FAQ, kebijakan DP
  lib/tanggal.ts          format tanggal Indonesia
  lib/paket.ts            query paket & keberangkatan
  lib/wa.ts               tautan WhatsApp + format rupiah
  layouts/Dasar.astro     head, meta, nav, footer — dipakai semua halaman
  components/             kartu trip, filter, seksi beranda, sprite ikon
  pages/                  beranda, jadwal, tentang, kontak
  pages/paket/[id].astro  halaman detail tiap paket, dibuat otomatis
  styles/style.css        seluruh CSS, belum dipecah
public/favicon.svg
sketsa/                   mockup HTML/CSS/JS awal, disimpan sebagai referensi
```

Halaman yang dihasilkan: empat halaman utama plus satu halaman per paket.

## Ganti klien

Dua tempat:

1. `src/data/konten.ts` — nama usaha, nomor WA, Instagram, kota, statistik,
   destinasi, alasan, FAQ, dan kebijakan DP/pembatalan.
2. `src/content/paket/*.md` — satu berkas per paket trip.

Nomor WhatsApp cukup diubah di `BRAND.waNomor` (format `628xxx`, tanpa `+`).
Semua tombol WA di seluruh situs ikut, lengkap dengan teks chat yang sudah terisi.

Ganti juga `site` di `astro.config.mjs` ke domain klien — dipakai untuk URL
kanonik dan tautan Open Graph.

Kalau menambah destinasi baru, `slug` di `DESTINASI` harus sama persis dengan
field `destinasi` di berkas paket. Kalau tidak cocok, kartu destinasinya akan
terus berbunyi "Segera dibuka".

## Model paket

Satu paket bisa punya banyak keberangkatan. Harga dan kuota melekat di
keberangkatan, bukan di paket, karena batch high season biasanya lebih mahal.

```yaml
keberangkatan:
  - mulai: 2026-09-12
    selesai: 2026-09-15
    harga: 2850000
    hargaCoret: 3200000     # opsional, untuk harga promo
    kuotaTotal: 16
    kuotaSisa: 5
```

Tanggal tampil (`12 – 15 September 2026`) diturunkan dari `mulai`/`selesai`,
tidak ditulis manual.

Biaya dipisah tiga: `include`, `exclude`, dan `opsional` — yang terakhir untuk
tambahan yang dibayar peserta sendiri di lokasi, seperti sewa alat atau asuransi.

`titikKumpul` berupa daftar, dan `tambahan` di tiap titik bisa negatif kalau
titik itu justru lebih murah.

### Kalimat yang memuat titik dua harus diberi tanda kutip

Jebakan YAML yang membuat build gagal, dan pesan errornya tidak menunjuk
kalimat penyebabnya:

```yaml
isi: Keliling darat: Bukit Love dan pantai      # SALAH — build gagal
isi: "Keliling darat: Bukit Love dan pantai"    # benar
```

YAML membaca titik dua yang diikuti spasi sebagai pemisah kunci dan nilai.
Berlaku untuk semua field, bukan cuma `isi`. Kalau ragu, beri tanda kutip.

### Jadwal lewat hilang sendiri

Keberangkatan yang tanggalnya sudah lewat disaring **saat build**, bukan saat
halaman dibuka. Artinya situs harus di-build ulang tiap hari lewat cron —
kalau tidak, jadwal lama akan tetap tampil sampai ada perubahan berikutnya.

Paket yang seluruh keberangkatannya sudah lewat hilang dari daftar, tapi
halaman detailnya tetap ada dan akan melempar error saat build. Tambah tanggal
baru atau hapus berkasnya.

## Sisa kursi tidak ditampilkan

`kuotaSisa` tetap disimpan di data dan dipakai filter "hanya yang masih
tersedia", tapi angkanya tidak muncul di layar. Yang tampil cuma dua keadaan:
**Tersedia** atau **Kuota penuh**.

Alasannya beban update: angka sisa kursi berubah tiap ada satu orang mendaftar,
sementara status tersedia/penuh cuma berubah sekali per batch.

## Foto

Masih memakai Unsplash lewat hotlink. Ganti dengan dokumentasi trip asli sebelum
dipakai klien sungguhan — dua tempat: field `foto:` di berkas paket, dan
`<img src="https://images.unsplash.com/...">` langsung di `src/pages/*.astro`.

## Yang sengaja tidak ada

Form pendaftaran, keranjang, pembayaran, login, akun peserta, dan ketersediaan
kursi real-time.

Ini batas produk, bukan pekerjaan yang belum selesai. Semua booking
dikoordinasikan lewat WhatsApp, dan kuota diperbarui manual oleh klien.
