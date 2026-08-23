// Konten situs di luar paket trip. Paket ada di src/content/paket/*.md.
// Semua isi masih placeholder — ganti per klien.

export const FOTO = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BRAND = {
  nama: "Ombak Lepas",
  tagline: "Open Trip & Private Trip",
  waNomor: "628123456789", // format internasional, tanpa "+" dan tanpa spasi
  waTampil: "+62 812-3456-789",
  instagram: "@ombaklepas.trip",
  instagramUrl: "https://instagram.com/ombaklepas.trip",
  kota: "Malang, Jawa Timur",
  sejak: 2019,
  adminNama: "Bara",
  statTrip: "120+",
  statPeserta: "1.400+",
  statRating: "4,9/5",
  jamOperasional: "08.00–21.00 WIB",
  waktuBalas: "biasanya di bawah 1 jam",
};

// Belum tampil di mana-mana. Disiapkan untuk blok legalitas yang mau
// ditambahkan setelah port selesai.
export const LEGALITAS = {
  badanUsaha: "",
  nib: "",
  tdup: "",
  alamat: "",
  petaUrl: "",
  ulasanUrl: "",
};

// Sebarannya jauh antar operator (30%, 50%, atau nominal tetap), jadi
// disimpan sebagai data supaya bisa diganti tanpa menyentuh halaman.
export const KEBIJAKAN = {
  dp: "Rp500.000 per orang",
  dpTenggat: "maksimal 2×24 jam setelah konfirmasi admin",
  pelunasan: "paling lambat H-7 sebelum keberangkatan",
  pembatalan:
    "DP tidak dikembalikan, tapi bisa dipindah ke batch lain dalam 6 bulan atau dialihkan ke nama orang lain — kabari admin maksimal H-10.",
  pembatalanKami:
    "Kalau trip dibatalkan dari pihak kami (cuaca ekstrem atau kuota tidak terpenuhi), seluruh pembayaran dikembalikan 100%.",
  grupWa: "Grup WhatsApp trip dibuka H-7, info titik kumpul dikirim H-3.",
};

// `slug` dipakai filter jadwal, harus sama dengan field `destinasi` di paket.
export const DESTINASI = [
  { slug: "labuan-bajo", nama: "Labuan Bajo", sub: "Komodo · Padar · Pink Beach", foto: FOTO("photo-1559128010-7c1ad6e1b6a5", 700) },
  { slug: "raja-ampat", nama: "Raja Ampat", sub: "Piaynemo · Arborek", foto: FOTO("photo-1570789210967-2cac24afeb00", 700) },
  { slug: "kep-seribu", nama: "Kepulauan Seribu", sub: "Dekat Jakarta · pemula", foto: FOTO("photo-1519046904884-53103b34b206", 700) },
  { slug: "bromo", nama: "Bromo & Malang", sub: "Sunrise · Tumpak Sewu", foto: FOTO("photo-1526772662000-3f88f10405ff", 700) },
  { slug: "karimunjawa", nama: "Karimunjawa", sub: "Snorkeling · hiu", foto: FOTO("photo-1518815231560-8f41ec531527", 700) },
  { slug: "nusa-penida", nama: "Nusa Penida", sub: "Kelingking · Diamond Beach", foto: FOTO("photo-1537996194471-e657df975ab4", 700) },
  { slug: "pahawang", nama: "Pahawang", sub: "Taman nemo · homestay warga", foto: FOTO("photo-1583212292454-1fe6229603b7", 700) },
  { slug: "gili", nama: "Gili Trawangan", sub: "Snorkeling bareng penyu · tanpa motor", foto: FOTO("photo-1519046904884-53103b34b206", 700) },
  { slug: "belitung", nama: "Belitung", sub: "Batu granit · mercusuar Lengkuas", foto: FOTO("photo-1547036967-23d11aacaee0", 700) },
  { slug: "banyuwangi", nama: "Banyuwangi", sub: "Api biru Ijen · Pulau Merah", foto: FOTO("photo-1552733407-5d5c46c3bb3b", 700) },
  { slug: "derawan", nama: "Derawan", sub: "Danau ubur-ubur · penyu", foto: FOTO("photo-1544551763-46a013bb70d5", 700) },
  { slug: "ora", nama: "Ora Beach", sub: "Cottage di atas air · Maluku", foto: FOTO("photo-1590523278191-995cbcda646b", 700) },
];

// `ikon` merujuk id sprite tanpa awalan "ic-".
// Tiap poin sengaja memuat bagian yang merugikan kami sendiri — itu yang
// membedakan janji dari klaim kosong.
export const ALASAN = [
  { ikon: "orang", judul: "Maksimal 16 orang", isi: "Kuotanya nggak akan ditambah, walaupun ada yang mau bayar lebih." },
  { ikon: "dompet", judul: "Harga yang tertulis adalah harga akhir", isi: "Biaya di luar tanggungan kami tertulis di halaman paketnya, bukan disebut waktu kamu sudah berangkat." },
  { ikon: "perisai", judul: "Uang kamu tidak hangus", isi: "Kalau nggak memungkinkan untuk berangkat, rutenya diubah atau tripnya ditunda. Uang kamu aman." },
  { ikon: "chat", judul: "Yang balas chat orangnya", isi: "Pesan kamu langsung masuk ke kami, bukan bot, bukan CS." },
  { ikon: "foto", judul: "Dokumentasi nggak nambah biaya", isi: "Foto dibagikan maksimal 7 hari setelah trip. Kalau lewat, tagih saja." },
  { ikon: "kompas", judul: "Kru dan guide warga lokal", isi: "Kapal, jeep, dan homestay dari partner yang sudah lama kami pakai, bukan hanya cari yang paling murah." },
];

export const LANGKAH = [
  { no: "01", judul: "Pilih tanggal", isi: "Buka halaman Jadwal, saring berdasarkan destinasi atau bulan, lalu lihat tanggal yang masih tersedia." },
  { no: "02", judul: "Chat dan amankan kursi", isi: `Admin cek kuota dan kirim rincian. DP ${KEBIJAKAN.dp} untuk mengunci kursi.` },
  { no: "03", judul: "Berangkat", isi: `Pelunasan ${KEBIJAKAN.pelunasan}. ${KEBIJAKAN.grupWa}` },
];

export const TESTIMONI = [
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

export const FAQ = [
  {
    t: "Berapa DP untuk booking dan kapan pelunasannya?",
    j: `DP ${KEBIJAKAN.dp} untuk mengunci kursi, dibayar ${KEBIJAKAN.dpTenggat}. Pelunasan ${KEBIJAKAN.pelunasan}. Kursi baru dihitung terisi setelah DP masuk.`,
  },
  {
    t: "Kalau batal ikut, DP bisa kembali?",
    j: `${KEBIJAKAN.pembatalan} ${KEBIJAKAN.pembatalanKami}`,
  },
  {
    t: "Meeting point-nya di mana?",
    j: "Tergantung trip — titik jemput dan jamnya tertulis di tiap kartu. Detail lokasi persis, beserta share location dan nama trip leader, dikirim di grup WhatsApp H-3.",
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
    t: "Kalau pesertanya kurang, tripnya tetap berangkat?",
    j: "Tiap paket punya minimum peserta yang tertulis di halamannya. Kalau tidak terpenuhi sampai H-7, trip ditunda atau dipindah ke batch lain, dan seluruh pembayaran dikembalikan penuh kalau kamu tidak mau pindah.",
  },
  {
    t: "Bisa private trip atau rombongan kantor?",
    j: "Bisa. Minimal 6 orang, tanggal dan itinerary menyesuaikan permintaan. Chat admin untuk penawaran harganya.",
  },
];
