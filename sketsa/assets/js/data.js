/* =============================================================
   data.js — SATU-SATUNYA file yang perlu diedit untuk ganti klien
   -------------------------------------------------------------
   1. BRAND  : nama usaha, nomor WhatsApp, Instagram, kota basis
   2. TRIPS  : jadwal trip (dipakai di Beranda & halaman Jadwal)
   3. ITIN   : itinerary hari-per-hari untuk 1 trip unggulan
   Semua isi di bawah ini masih PLACEHOLDER.
   ============================================================= */

/* -------------------------------------------------------------
   FOTO — sementara pakai Unsplash (gratis, boleh hotlink).
   Ganti nilai di bawah dengan path foto asli, misal "assets/img/padar.jpg".
   ------------------------------------------------------------- */
const FOTO = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const BRAND = {
  nama: "Ombak Lepas",              // [ganti] nama trip organizer
  tagline: "Open Trip & Private Trip",
  // Nomor WA format internasional tanpa "+" dan tanpa spasi.
  waNomor: "628123456789",          // [ganti] nomor WhatsApp admin
  waTampil: "+62 812-3456-789",     // [ganti] versi yang ditampilkan
  instagram: "@ombaklepas.trip",    // [ganti] handle Instagram
  instagramUrl: "https://instagram.com/", // [ganti] URL Instagram
  kota: "Malang, Jawa Timur",       // [ganti] kota basis / titik kumpul utama
  sejak: 2019,                      // [ganti] tahun mulai jalan
  statTrip: "120+",                 // [ganti] jumlah trip yang sudah jalan
  statPeserta: "1.400+",            // [ganti] jumlah peserta yang sudah diantar
  statRating: "4,9/5",              // [ganti] rata-rata ulasan
  adminNama: "Bara",                // [ganti] nama admin yang membalas WA
};

/* -------------------------------------------------------------
   DESTINASI — grid "jelajah destinasi" di beranda.
   Pola ini dipakai hampir semua trip organizer (IndonesiaJuara,
   Inspire Travel, G Adventures): pintu masuk kedua selain jadwal.
   `slug` harus sama dengan field `destinasi` di TRIPS.
   ------------------------------------------------------------- */
const DESTINASI = [
  { slug: "labuan-bajo",  nama: "Labuan Bajo",      sub: "Komodo · Padar · Pink Beach", foto: FOTO("photo-1559128010-7c1ad6e1b6a5", 700) },
  { slug: "raja-ampat",   nama: "Raja Ampat",       sub: "Piaynemo · Arborek",          foto: FOTO("photo-1570789210967-2cac24afeb00", 700) },
  { slug: "kep-seribu",   nama: "Kepulauan Seribu", sub: "Dekat Jakarta · pemula",      foto: FOTO("photo-1519046904884-53103b34b206", 700) },
  { slug: "bromo",        nama: "Bromo & Malang",   sub: "Sunrise · Tumpak Sewu",       foto: FOTO("photo-1526772662000-3f88f10405ff", 700) },
  { slug: "karimunjawa",  nama: "Karimunjawa",      sub: "Snorkeling · hiu",            foto: FOTO("photo-1518815231560-8f41ec531527", 700) },
  { slug: "nusa-penida",  nama: "Nusa Penida",      sub: "Kelingking · Diamond Beach",  foto: FOTO("photo-1537996194471-e657df975ab4", 700) },
];

/* -------------------------------------------------------------
   JADWAL TRIP
   status : "open" | "hampir-penuh" | "penuh"
   ------------------------------------------------------------- */
const TRIPS = [
  {
    id: "labuan-bajo-4d3n",
    foto: FOTO("photo-1559128010-7c1ad6e1b6a5", 900),
    nama: "Labuan Bajo 4H3M",
    lokasi: "Flores, NTT",
    destinasi: "labuan-bajo",
    bulan: "2026-09",
    tanggal: "12 – 15 September 2026",
    tanggalPendek: "12–15 Sep",
    durasi: "4 hari 3 malam",
    titikKumpul: "Bandara Komodo",
    level: "Santai",
    rating: 4.9,
    ulasan: 68,
    harga: 2850000,
    hargaCoret: 3200000,
    hargaCatatan: "belum termasuk tiket pesawat",
    kuotaTotal: 16,
    kuotaSisa: 5,
    tipe: "Open Trip",
    unggulan: true,                  // muncul sebagai trip unggulan
    punyaItinerary: true,            // ada halaman itinerary-nya
    ringkas: "Sailing 3 hari 2 malam ke Padar, Pink Beach, Manta Point, plus Komodo. Kapal phinisi sharing cabin.",
    highlight: ["Sunrise Pulau Padar", "Snorkeling Manta Point", "Live on boat 2 malam"],
    include: [
      "Kapal phinisi + kabin AC sharing",
      "Makan 8x + snack & air mineral",
      "Alat snorkeling & dokumentasi",
      "Tiket masuk TN Komodo & ranger",
      "Trip leader dari awal sampai akhir",
    ],
    exclude: ["Tiket pesawat PP", "Pengeluaran pribadi", "Tips crew kapal"],
  },
  {
    id: "raja-ampat-5d4n",
    foto: FOTO("photo-1570789210967-2cac24afeb00", 900),
    nama: "Raja Ampat 5H4M",
    lokasi: "Papua Barat Daya",
    destinasi: "raja-ampat",
    bulan: "2026-10",
    tanggal: "3 – 7 Oktober 2026",
    tanggalPendek: "3–7 Okt",
    durasi: "5 hari 4 malam",
    titikKumpul: "Bandara Sorong",
    level: "Sedang",
    rating: 5.0,
    ulasan: 24,
    harga: 6450000,
    hargaCoret: 0,
    hargaCatatan: "belum termasuk tiket pesawat",
    kuotaTotal: 12,
    kuotaSisa: 2,
    tipe: "Open Trip",
    unggulan: false,
    punyaItinerary: false,
    ringkas: "Piaynemo, Telaga Bintang, Arborek, dan spot snorkeling terbaik di Waigeo bagian selatan.",
    highlight: ["Puncak Piaynemo", "Homestay tepi laut", "Snorkeling Friwen Wall"],
    include: [
      "Homestay 4 malam (sharing)",
      "Makan 11x",
      "Speedboat antar pulau",
      "Pin masuk kawasan Raja Ampat",
      "Alat snorkeling & trip leader",
    ],
    exclude: ["Tiket pesawat PP", "Kapal Sorong–Waisai", "Pengeluaran pribadi"],
  },
  {
    id: "kepulauan-seribu-2d1n",
    foto: FOTO("photo-1519046904884-53103b34b206", 900),
    nama: "Kepulauan Seribu 2H1M",
    lokasi: "DKI Jakarta",
    destinasi: "kep-seribu",
    bulan: "2026-10",
    tanggal: "25 – 26 Oktober 2026",
    tanggalPendek: "25–26 Okt",
    durasi: "2 hari 1 malam",
    titikKumpul: "Marina Ancol",
    level: "Santai",
    rating: 4.8,
    ulasan: 132,
    harga: 685000,
    hargaCoret: 795000,
    hargaCatatan: "dari Marina Ancol",
    kuotaTotal: 20,
    kuotaSisa: 11,
    tipe: "Open Trip",
    unggulan: false,
    punyaItinerary: false,
    ringkas: "Trip santai buat pemula: Pulau Harapan, hopping 4 pulau, sunset di Pulau Bulat.",
    highlight: ["Hopping 4 pulau", "Cocok untuk pemula", "Berangkat dari Jakarta"],
    include: [
      "Kapal PP Ancol – Pulau Harapan",
      "Homestay AC (sharing)",
      "Makan 3x + BBQ malam",
      "Alat snorkeling & pelampung",
      "Dokumentasi underwater",
    ],
    exclude: ["Transport menuju Marina Ancol", "Pengeluaran pribadi"],
  },
  {
    id: "bromo-tumpak-sewu-3d2n",
    foto: FOTO("photo-1526772662000-3f88f10405ff", 900),
    nama: "Bromo & Tumpak Sewu 3H2M",
    lokasi: "Jawa Timur",
    destinasi: "bromo",
    bulan: "2026-11",
    tanggal: "14 – 16 November 2026",
    tanggalPendek: "14–16 Nov",
    durasi: "3 hari 2 malam",
    titikKumpul: "Stasiun Malang",
    level: "Sedang",
    rating: 4.9,
    ulasan: 210,
    harga: 1150000,
    hargaCoret: 1350000,
    hargaCatatan: "meeting point Malang",
    kuotaTotal: 14,
    kuotaSisa: 9,
    tipe: "Open Trip",
    unggulan: false,
    punyaItinerary: false,
    ringkas: "Sunrise Penanjakan, lautan pasir, lanjut air terjun Tumpak Sewu dan Goa Tetes.",
    highlight: ["Sunrise Penanjakan", "Jeep lautan pasir", "Tumpak Sewu"],
    include: [
      "Transport AC selama trip",
      "Jeep Bromo sharing",
      "Penginapan 2 malam",
      "Makan 5x",
      "Tiket masuk & guide lokal",
    ],
    exclude: ["Transport menuju Malang", "Sewa jaket & sarung tangan"],
  },
  {
    id: "karimunjawa-3d2n",
    foto: FOTO("photo-1518815231560-8f41ec531527", 900),
    nama: "Karimunjawa 3H2M",
    lokasi: "Jepara, Jawa Tengah",
    destinasi: "karimunjawa",
    bulan: "2026-12",
    tanggal: "5 – 7 Desember 2026",
    tanggalPendek: "5–7 Des",
    durasi: "3 hari 2 malam",
    titikKumpul: "Pelabuhan Jepara",
    level: "Santai",
    rating: 4.7,
    ulasan: 95,
    harga: 1390000,
    hargaCoret: 0,
    hargaCatatan: "dari Pelabuhan Jepara",
    kuotaTotal: 18,
    kuotaSisa: 0,
    tipe: "Open Trip",
    unggulan: false,
    punyaItinerary: false,
    ringkas: "Snorkeling Menjangan Kecil, penangkaran hiu, sunset Bukit Love. Batch ini sudah penuh.",
    highlight: ["Penangkaran hiu", "Sunset Bukit Love", "Ikan bakar tepi pantai"],
    include: [
      "Kapal PP Jepara – Karimunjawa",
      "Homestay 2 malam",
      "Makan 6x + BBQ seafood",
      "Hopping island + snorkeling",
      "Dokumentasi & trip leader",
    ],
    exclude: ["Transport menuju Jepara", "Pengeluaran pribadi"],
  },
  {
    id: "labuan-bajo-des",
    foto: FOTO("photo-1552733407-5d5c46c3bb3b", 900),
    nama: "Labuan Bajo 4H3M — Batch Akhir Tahun",
    lokasi: "Flores, NTT",
    destinasi: "labuan-bajo",
    bulan: "2026-12",
    tanggal: "27 – 30 Desember 2026",
    tanggalPendek: "27–30 Des",
    durasi: "4 hari 3 malam",
    titikKumpul: "Bandara Komodo",
    level: "Santai",
    rating: 4.9,
    ulasan: 68,
    harga: 3250000,
    hargaCoret: 0,
    hargaCatatan: "high season, belum termasuk pesawat",
    kuotaTotal: 16,
    kuotaSisa: 14,
    tipe: "Open Trip",
    unggulan: false,
    punyaItinerary: true,
    ringkas: "Rute sama dengan batch September, jadwal khusus libur akhir tahun. Kuota baru dibuka.",
    highlight: ["Libur akhir tahun", "Kuota baru dibuka", "Rute favorit"],
    include: [
      "Kapal phinisi + kabin AC sharing",
      "Makan 8x + snack & air mineral",
      "Alat snorkeling & dokumentasi",
      "Tiket masuk TN Komodo & ranger",
      "Trip leader dari awal sampai akhir",
    ],
    exclude: ["Tiket pesawat PP", "Pengeluaran pribadi", "Tips crew kapal"],
  },
];

/* -------------------------------------------------------------
   ITINERARY TRIP UNGGULAN (dipakai di itinerary.html)
   ------------------------------------------------------------- */
const ITINERARY = {
  tripId: "labuan-bajo-4d3n",
  judul: "Labuan Bajo 4 Hari 3 Malam",
  subjudul: "Sailing Komodo · Padar · Pink Beach · Manta Point",
  catatan:
    "Urutan destinasi bisa berubah menyesuaikan cuaca, arus, dan arahan syahbandar. Perubahan selalu dikabari trip leader di grup WhatsApp H-3.",
  hari: [
    {
      label: "Hari 1",
      tema: "Tiba di Labuan Bajo & naik kapal",
      lokasi: "Bandara Komodo → Pelabuhan Labuan Bajo",
      agenda: [
        { jam: "10.00", isi: "Penjemputan di Bandara Komodo, transfer ke penginapan transit." },
        { jam: "12.30", isi: "Makan siang bersama & briefing trip oleh trip leader." },
        { jam: "14.00", isi: "Boarding kapal phinisi, pembagian kabin, safety briefing." },
        { jam: "15.30", isi: "Sailing ke Pulau Kelor — trekking singkat 20 menit ke puncak." },
        { jam: "17.30", isi: "Sunset di Pulau Kalong, menunggu ribuan kelelawar terbang." },
        { jam: "19.00", isi: "Makan malam di kapal, bebas ngobrol / mancing. Bermalam di kapal." },
      ],
    },
    {
      label: "Hari 2",
      tema: "Padar, Pink Beach & Komodo",
      lokasi: "Pulau Padar → Pink Beach → Loh Liang",
      agenda: [
        { jam: "04.30", isi: "Bangun, kopi hangat, tender boat ke dermaga Pulau Padar." },
        { jam: "05.15", isi: "Trekking 30–45 menit ke viewpoint Padar untuk sunrise." },
        { jam: "08.00", isi: "Sarapan di kapal sambil sailing ke Pink Beach." },
        { jam: "09.30", isi: "Snorkeling & santai di Pink Beach." },
        { jam: "12.00", isi: "Makan siang, lanjut ke Pulau Komodo (Loh Liang)." },
        { jam: "14.00", isi: "Trekking pendek bersama ranger, cari komodo di habitat aslinya." },
        { jam: "17.00", isi: "Sunset dari geladak kapal. Makan malam & bermalam di kapal." },
      ],
    },
    {
      label: "Hari 3",
      tema: "Manta Point & pulau-pulau kecil",
      lokasi: "Manta Point → Taka Makassar → Pulau Kanawa",
      agenda: [
        { jam: "06.30", isi: "Sarapan, sailing menuju Manta Point." },
        { jam: "08.00", isi: "Snorkeling bareng pari manta (durasi menyesuaikan arus)." },
        { jam: "10.30", isi: "Singgah di Taka Makassar — gundukan pasir di tengah laut." },
        { jam: "12.00", isi: "Makan siang, lanjut snorkeling di Pulau Kanawa." },
        { jam: "15.30", isi: "Sailing balik ke arah Labuan Bajo, sesi foto & santai." },
        { jam: "18.30", isi: "Makan malam terakhir di kapal. Bermalam di kapal." },
      ],
    },
    {
      label: "Hari 4",
      tema: "Goa Rangko & kembali",
      lokasi: "Goa Rangko → Bandara Komodo",
      agenda: [
        { jam: "06.00", isi: "Sarapan, sandar di dermaga, transfer ke Goa Rangko." },
        { jam: "07.30", isi: "Berenang di kolam air asin dalam goa." },
        { jam: "10.00", isi: "Belanja oleh-oleh di kota Labuan Bajo (opsional)." },
        { jam: "12.00", isi: "Drop off Bandara Komodo. Trip selesai — sampai jumpa di trip berikutnya!" },
      ],
    },
  ],
  bawa: [
    "Sunscreen & topi",
    "Baju ganti + sandal gunung",
    "Obat pribadi",
    "Powerbank",
    "Dry bag / plastik kedap air",
    "Uang tunai secukupnya",
  ],
};

/* -------------------------------------------------------------
   ALASAN — grid "kenapa pilih kami" 6 kartu ikon.
   `ikon` merujuk ke id sprite di app.js tanpa awalan "ic-".
   ------------------------------------------------------------- */
const ALASAN = [
  { ikon: "orang",   judul: "Grup maksimal 16 orang", isi: "Semua kebagian spot foto dan perhatian trip leader. Bukan rombongan bus." },
  { ikon: "dompet",  judul: "Harga tertulis = harga akhir", isi: "Rincian termasuk & tidak termasuk ada di tiap kartu trip. Tanpa biaya kejutan." },
  { ikon: "foto",    judul: "Dokumentasi sudah termasuk", isi: "Foto darat & underwater dibagikan maksimal 7 hari setelah trip selesai." },
  { ikon: "chat",    judul: "Dibalas orangnya langsung", isi: "Chat masuk ke WhatsApp admin, bukan bot. Biasanya dibalas di bawah 1 jam." },
  { ikon: "perisai", judul: "Aman untuk non-perenang", isi: "Pelampung wajib saat snorkeling dan selalu ada pendamping di air." },
  { ikon: "kompas",  judul: "Guide & kru lokal", isi: "Kapal, jeep, dan homestay dari operator setempat yang sudah lama kami pakai." },
];

/* -------------------------------------------------------------
   LANGKAH — alur booking 3 tahap (dipakai di beranda & jadwal)
   ------------------------------------------------------------- */
const LANGKAH = [
  { no: "01", judul: "Pilih tanggal", isi: "Buka halaman Jadwal, saring per destinasi atau bulan, lalu cek sisa kursinya." },
  { no: "02", judul: "Chat & kunci kursi", isi: "Admin cek kuota dan kirim rincian. DP Rp500.000/orang untuk mengunci kursi." },
  { no: "03", judul: "Berangkat", isi: "Pelunasan H-7, grup WhatsApp dibuka H-7, info titik kumpul dikirim H-3." },
];

/* -------------------------------------------------------------
   TESTIMONI (halaman Tentang)
   ------------------------------------------------------------- */
const TESTIMONI = [
  {
    nama: "Dinda A.",
    asal: "Surabaya · Trip Labuan Bajo 2025",
    isi: "Ini trip pertama aku ikut open trip sendirian dan ternyata santai banget. Grup WA-nya aktif dari jauh-jauh hari, jadi udah kenal duluan sebelum ketemu di bandara.",
  },
  {
    nama: "Rendi & Sasa",
    asal: "Jakarta · Trip Karimunjawa 2025",
    isi: "Yang paling kerasa itu jumlah pesertanya nggak banyak, jadi nggak berasa rombongan. Trip leader-nya sabar bantuin yang belum bisa berenang.",
  },
  {
    nama: "Pak Hendra",
    asal: "Malang · Trip Bromo 2024",
    isi: "Bawa keluarga bertiga, semua diurus dari jemput sampai balik. Jadwal ontime dan harganya sesuai yang dijanjiin di awal, nggak ada biaya dadakan.",
  },
];

/* -------------------------------------------------------------
   FAQ (halaman Kontak)
   ------------------------------------------------------------- */
const FAQ = [
  {
    t: "Berapa DP untuk booking dan kapan pelunasannya?",
    j: "DP Rp500.000 per orang untuk mengunci kursi, dibayar maksimal 2×24 jam setelah konfirmasi dari admin. Pelunasan paling lambat H-7 sebelum keberangkatan. Kursi baru dihitung terisi setelah DP masuk.",
  },
  {
    t: "Kalau batal ikut, DP bisa kembali?",
    j: "DP tidak dikembalikan, tapi bisa dipindah ke batch lain dalam 6 bulan atau dialihkan ke nama orang lain — cukup kabari admin maksimal H-10. Kalau trip dibatalkan dari pihak kami (cuaca ekstrem atau kuota tidak terpenuhi), seluruh pembayaran dikembalikan 100%.",
  },
  {
    t: "Meeting point-nya di mana?",
    j: "Tergantung trip. Trip Flores dan Raja Ampat meeting point di bandara tujuan. Trip Jawa Timur meeting point di kota basis kami. Detail titik kumpul, jam, dan nama trip leader dikirim di grup WhatsApp H-3.",
  },
  {
    t: "Apa saja yang perlu dibawa?",
    j: "Baju ganti secukupnya, sunscreen, topi, sandal gunung atau sepatu yang nyaman, obat pribadi, powerbank, dry bag, dan uang tunai. Alat snorkeling dan pelampung sudah kami sediakan.",
  },
  {
    t: "Belum bisa berenang, aman ikut trip laut?",
    j: "Aman. Pelampung wajib dipakai saat snorkeling dan selalu ada pendamping di air. Kabari saja saat pendaftaran supaya trip leader bisa perhatikan lebih.",
  },
  {
    t: "Bisa private trip atau rombongan kantor?",
    j: "Bisa. Minimal 6 orang, tanggal dan itinerary menyesuaikan permintaan. Chat admin untuk penawaran harganya.",
  },
];
