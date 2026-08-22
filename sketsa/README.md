# Website Profil Trip Organizer — Mockup / Template

Static multi-page site (HTML + CSS + JS biasa, tanpa build step). Semua konten
masih **placeholder** dan siap diganti per prospek.

## Menjalankan

Buka `index.html` langsung di browser, atau:

```bash
python3 -m http.server 8000   # lalu buka http://localhost:8000
```

## Struktur

```
index.html        Beranda — hero + search bar, trust bar, preview 3 trip,
                  grid destinasi, 6 alasan, alur booking, testimoni, galeri
jadwal.html       Jadwal Trip — filter (destinasi/bulan/sisa kursi) + grid keberangkatan
itinerary.html    Itinerary harian trip unggulan (Labuan Bajo 4H3M)
tentang.html      Profil organizer + testimoni
kontak.html       FAQ + blok kontak WhatsApp/Instagram
assets/css/style.css
assets/js/data.js   <-- SATU-SATUNYA file konten yang perlu diedit
assets/js/app.js    render kartu trip, isi brand, menu mobile
```

## Cara ganti klien (5 menit)

Semua ada di **`assets/js/data.js`**:

| Bagian | Isi |
|---|---|
| `BRAND` | nama usaha, nomor WA, handle IG, kota basis, angka trust bar, nama admin |
| `DESTINASI` | kartu destinasi di beranda; `slug`-nya harus sama dengan field `destinasi` di `TRIPS` supaya filter jalan |
| `TRIPS` | array jadwal trip — dipakai otomatis di Beranda (3 teratas yang masih ada kuota) dan halaman Jadwal |
| `ALASAN` | 6 kartu "kenapa lewat kami"; `ikon` = id sprite tanpa awalan `ic-` |
| `LANGKAH` | alur booking 3 tahap di beranda |
| `ITINERARY` | rundown harian untuk 1 trip unggulan (`tripId` menunjuk ke salah satu id di `TRIPS`) |
| `TESTIMONI` | testimoni di halaman Tentang |
| `FAQ` | pertanyaan di halaman Kontak |

Nomor WhatsApp cukup diubah di `BRAND.waNomor` (format `628xxx`, tanpa `+`).
Semua tombol WA di seluruh situs otomatis ikut, lengkap dengan teks chat
yang sudah terisi.

### Cara kerja penggantian otomatis

- `data-brand="nama"` → diisi dari `BRAND.nama`
- `data-wa="teks chat"` → jadi `https://wa.me/<nomor>?text=<teks>`
- `data-ig` → diisi `BRAND.instagramUrl`
- `data-trip="semua"` / `data-trip="preview"` → tempat kartu trip dirender
- `data-destinasi`, `data-alasan`, `data-langkah`, `data-testimoni` → seksi lain
  yang ikut dirender dari `data.js`
- `data-cari="beranda"` (form hero, meneruskan pilihan lewat query string) dan
  `data-cari="jadwal"` (filter yang menyaring kartu langsung di halaman).
  Isi `<select>` destinasi & bulan dibuat otomatis dari data — tidak perlu diedit manual.

Judul halaman memakai token `{BRAND}` yang diganti saat load.

## Foto

Semua foto **sementara** diambil dari Unsplash (gratis, boleh dipakai komersial,
boleh hotlink). Dua tempat menggantinya:

1. **Foto kartu trip** → field `foto:` di tiap trip dalam `assets/js/data.js`.
   Helper `FOTO("photo-xxxx", 900)` menyusun URL Unsplash; kalau sudah punya foto
   sendiri, cukup tulis `foto: "assets/img/padar.jpg"`.
2. **Foto hero, galeri, dan profil** → `<img src="https://images.unsplash.com/...">`
   langsung di masing-masing halaman HTML. Cari `images.unsplash.com` lalu ganti
   `src`-nya, `alt` dan `figcaption` menyesuaikan.

Sebelum dipakai untuk klien sungguhan, ganti dengan dokumentasi trip asli — foto
stok bikin halaman terasa generik dan tidak menunjukkan grup yang sebenarnya.

## Yang sengaja TIDAK ada

- Tidak ada form pendaftaran, keranjang, pembayaran, atau login.
  Semua aksi booking mengarah ke `wa.me` dengan pesan yang sudah terisi.

## Catatan teknis

- Font dari Google Fonts: **Source Serif 4** (judul) + **Inter** (teks & UI).
  Kalau mau full offline, self-host font-nya dan ganti `<link>` di tiap halaman.
- Ikon SVG disuntikkan sebagai sprite dari `app.js` (`SPRITE`), dipakai lewat
  `<svg class="ikon"><use href="#ic-nama"></use></svg>`.
- Nav & footer ditulis di tiap halaman (identik). Kalau nanti mau pakai
  templating/SSG, dua blok ini yang pertama dijadikan partial.
- Palet & tipografi ada di `:root` `style.css` — ganti variabel warna saja
  kalau prospek punya warna brand sendiri.
