// Konten situs di luar paket trip. Paket ada di src/content/paket/*.md.
// Semua isi masih placeholder. Ganti per klien.

// Saklar paket layanan.
//
// jadwal: false  Paket basic. Tidak ada tanggal, status kuota, atau filter bulan.
//                Harga diambil dari `hargaMulai` di tiap berkas paket dan
//                di-hardcode, karena klien tidak dapat admin panel.
//                Tidak ada yang perlu diperbarui rutin, jadi cron tidak perlu.
//
// jadwal: true   Paket premium. Tanggal keberangkatan, status tersedia/penuh,
//                dan filter bulan aktif. Perlu build ulang harian lewat cron.
export const FITUR = {
  jadwal: false,
};

// h ikut dikirim supaya Unsplash yang memotong. Kalau cuma w, foto potret tetap
// datang sebagai potret lalu dipaksa masuk kotak lanskap dan subjeknya hilang.
export const FOTO = (id: string, w = 1200, h = Math.round((w * 3) / 4)) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=60`;

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

// Tampil di halaman Tentang. Field yang dikosongkan akan muncul sebagai slot
// bertanda "belum diisi". Ini disengaja, supaya klien tahu di mana datanya masuk.
//
// JANGAN mengarang nomor dokumen. Nomor NIB, TDUP, atau akta yang bentuknya
// meyakinkan tapi fiktif itu masalah lain sama sekali dari testimoni contoh.
// Seluruh seksi ini otomatis hilang kalau `badanUsaha` kosong.
export const LEGALITAS = {
  badanUsaha: "CV Ombak Lepas Nusantara",
  alamat: "",
  petaUrl: "",
  rekeningAtasNama: "CV Ombak Lepas Nusantara",
  // `gambar` diisi path foto dokumen, mis. "/dokumen/nib.jpg" (taruh di public/).
  // Kosong = tampil sebagai slot bertanda, bukan hilang.
  dokumen: [
    { nama: "Akta pendirian", nomor: "", keterangan: "Disahkan Kementerian Hukum RI", gambar: "" },
    { nama: "NIB", nomor: "", keterangan: "Terbit lewat sistem OSS", gambar: "" },
    { nama: "TDUP", nomor: "", keterangan: "Terdaftar di Dinas Pariwisata Kota Malang", gambar: "" },
  ],
};

// Sebarannya jauh antar operator (30%, 50%, atau nominal tetap), jadi
// disimpan sebagai data supaya bisa diganti tanpa menyentuh halaman.
export const KEBIJAKAN = {
  dp: "Rp500.000 per orang",
  dpTenggat: "maksimal 2×24 jam setelah konfirmasi admin",
  pelunasan: "paling lambat H-7 sebelum keberangkatan",
  pembatalan:
    "DP tidak dikembalikan, tapi bisa dipindah ke batch lain dalam 6 bulan atau dialihkan ke nama orang lain. Kabari admin maksimal H-10.",
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
  { slug: "karimunjawa", nama: "Karimunjawa", sub: "Snorkeling · hiu", foto: FOTO("photo-1619017107453-3d950380f0a9", 700) },
  { slug: "nusa-penida", nama: "Nusa Penida", sub: "Kelingking · Diamond Beach", foto: FOTO("photo-1537996194471-e657df975ab4", 700) },
  { slug: "pahawang", nama: "Pahawang", sub: "Taman nemo · homestay warga", foto: FOTO("photo-1583212292454-1fe6229603b7", 700) },
  { slug: "gili", nama: "Gili Trawangan", sub: "Snorkeling bareng penyu · tanpa motor", foto: FOTO("photo-1519046904884-53103b34b206", 700) },
  { slug: "belitung", nama: "Belitung", sub: "Batu granit · mercusuar Lengkuas", foto: FOTO("photo-1547036967-23d11aacaee0", 700) },
  { slug: "banyuwangi", nama: "Banyuwangi", sub: "Api biru Ijen · Pulau Merah", foto: FOTO("photo-1552733407-5d5c46c3bb3b", 700) },
  { slug: "derawan", nama: "Derawan", sub: "Danau ubur-ubur · penyu", foto: FOTO("photo-1544551763-46a013bb70d5", 700) },
  { slug: "ora", nama: "Ora Beach", sub: "Cottage di atas air · Maluku", foto: FOTO("photo-1590523278191-995cbcda646b", 700) },
];

// `ikon` merujuk id sprite tanpa awalan "ic-".
// Tiap poin sengaja memuat bagian yang merugikan kami sendiri, karena itu yang
// membedakan janji dari klaim kosong.
export const ALASAN = [
  { ikon: "orang", judul: "Satu trip maksimal 16 orang", isi: "Opentrip maks 16 orang sekali jalan, bisa lebih untuk trip private." },
  { ikon: "dompet", judul: "Harga paket sudah final", isi: "Yang tertulis di situ yang dibayar. Nggak ada biaya nyusul." },
  { ikon: "perisai", judul: "Uang gak akan hangus", isi: "Kalau rute atau jadwal berubah karena cuaca atau hal lain, uang dijamin aman." },
  { ikon: "foto", judul: "Dokumentasi tanpa biaya tambahan", isi: "Foto dan video trip kami kirim maksimal 7 hari setelah trip selesai." },
  { ikon: "kompas", judul: "Kru dan guide warga lokal", isi: "Kapal, jeep, dan homestay dari partner lokal yang sudah lama jadi partner kami." },
];

export const LANGKAH = [
  { no: "01", judul: "Pilih tripnya", isi: "Buka halaman Paket Trip, cek rincian harga dan rundown hariannya, lalu pilih yang paling sesuai." },
  { no: "02", judul: "Chat dan booking paket liburan", isi: "Admin memeriksa ketersediaan kursi dan mengirimkan rincian lengkap." },
  { no: "03", judul: "Berangkat", isi: `Pelunasan ${KEBIJAKAN.pelunasan}. Grup WhatsApp trip dibuka H-7.` },
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
    t: "Saya berangkat sendirian, nanti gimana?",
    j: "Separuh peserta kami memang datang sendiri. Grup WhatsApp dibuka H-7, jadi kamu sudah kenal beberapa orang sebelum ketemu di titik kumpul. Kalau tripnya menginap dan kamu sendirian, kami satukan sekamar dengan peserta lain yang sama jenis kelaminnya.",
  },
  {
    t: "Belum bisa berenang, aman ikut trip laut?",
    j: "Aman. Pelampung wajib dipakai saat snorkeling dan selalu ada pendamping di air. Kabari saja waktu daftar, biar trip leader bisa perhatikan lebih.",
  },
  {
    t: "Berapa DP-nya, dan apa saja yang termasuk?",
    j: "Beda tiap trip, jadi ditulis lengkap di halaman paketnya masing-masing: titik jemput, yang termasuk dan tidak termasuk, barang bawaan, sampai aturan DP dan pembatalan. Buka paket yang kamu incar, semuanya ada di sana.",
  },
  {
    t: "Transfernya ke mana? Perlu kirim bukti?",
    j: "Ke rekening atas nama badan usaha kami, nomornya dikirim admin setelah kamu konfirmasi. Bukti transfer dikirim ke chat yang sama, nanti kami balas konfirmasinya. Kalau ada yang mengarahkan kamu transfer ke rekening pribadi atas nama orang, itu bukan kami.",
  },
  {
    t: "Boleh bawa anak? Ada batas usia?",
    j: "Boleh, tapi tergantung tripnya. Trip santai seperti Kepulauan Seribu dan Pahawang aman untuk anak di atas 7 tahun kalau didampingi. Trip yang ada pendakian seperti Ijen kami sarankan minimal 15 tahun. Chat dulu dan sebutkan umurnya.",
  },
  {
    t: "Kalau saya telat di titik kumpul gimana?",
    j: "Kami tunggu sampai 30 menit dari jam yang dijanjikan. Lewat itu rombongan berangkat, karena jadwal kapal dan jeep nggak bisa digeser. Kamu masih bisa menyusul sendiri ke lokasi, tapi biayanya di luar paket. Kalau tahu bakal telat, kabari secepatnya.",
  },
  {
    t: "Harga bisa nego kalau rombongan?",
    j: "Untuk open trip harganya tetap, berapa pun jumlah orangnya. Kalau rombonganmu 6 orang ke atas, biasanya lebih masuk akal ambil private trip. Tanggalnya bebas dan harganya kami hitung ulang.",
  },
  {
    t: "Saya punya alergi makanan atau kondisi kesehatan tertentu.",
    j: "Kabari waktu daftar, jangan waktu sudah di lokasi. Alergi makanan biasanya bisa diatur dengan katering. Kondisi seperti asma atau masalah jantung perlu kami tahu supaya trip leader bisa mengatur kecepatan rombongan.",
  },
];

// -------------------------------------------------------------------
// SYARAT & KETENTUAN
//
// PERINGATAN: ini satu-satunya naskah di situs yang MENCIPTAKAN KEWAJIBAN.
// Naskah pemasaran yang belum diganti cuma bikin situs terasa generik;
// syarat yang belum diganti mengikat klien pada janji yang mungkin tidak
// sanggup dia penuhi. Klien wajib membaca baris per baris.
//
// Selama `contoh: true`, halaman menampilkan pemberitahuan bahwa isinya
// masih contoh. Ubah ke false setelah klien meninjau dan menyetujui.
// -------------------------------------------------------------------
export const SYARAT = {
  contoh: true,
  diperbarui: "23 Agustus 2026",
  bagian: [
    {
      judul: "Pendaftaran dan pembayaran",
      isi: [
        "Kursi baru dihitung terisi setelah DP masuk, bukan setelah chat atau janji lisan.",
        `DP ${KEBIJAKAN.dp}, dibayar ${KEBIJAKAN.dpTenggat}. Lewat batas itu kursi dilepas ke peminat lain tanpa pemberitahuan ulang.`,
        `Pelunasan ${KEBIJAKAN.pelunasan}. Peserta yang belum melunasi sampai batas itu dianggap membatalkan, dan DP-nya mengikuti ketentuan pembatalan di bawah.`,
        "Pembayaran hanya diterima lewat rekening atas nama badan usaha yang tercantum di halaman Tentang. Kami tidak pernah meminta transfer ke rekening pribadi atas nama perorangan.",
      ],
    },
    {
      judul: "Pembatalan oleh peserta",
      isi: [
        "DP tidak dikembalikan.",
        "DP bisa dipindah ke batch lain dalam 6 bulan, atau dialihkan ke nama orang lain, dengan mengabari admin maksimal H-10.",
        "Kalau pembatalan terjadi setelah pelunasan, biaya yang sudah kami bayarkan ke pihak ketiga seperti kapal, penginapan, dan tiket masuk tidak bisa ditarik kembali. Sisa yang belum terpakai dikembalikan.",
      ],
    },
    {
      judul: "Pembatalan atau perubahan dari kami",
      isi: [
        "Kalau minimum peserta tidak terpenuhi sampai H-7, trip ditunda atau dipindah ke batch lain. Peserta boleh memilih pindah, atau meminta pengembalian penuh.",
        `${KEBIJAKAN.pembatalanKami}`,
        "Urutan destinasi bisa berubah menyesuaikan cuaca, arus, dan arahan syahbandar atau pengelola kawasan. Perubahan urutan bukan dasar pembatalan, dan tidak menimbulkan pengembalian biaya.",
      ],
    },
    {
      judul: "Titik kumpul dan keterlambatan",
      isi: [
        "Peserta ditunggu paling lama 30 menit dari jam yang tertulis di halaman paket.",
        "Lewat itu rombongan berangkat, karena jadwal kapal dan kendaraan tidak bisa digeser. Peserta yang tertinggal boleh menyusul sendiri ke lokasi dengan biaya sendiri, dan tidak ada pengembalian biaya paket.",
      ],
    },
    {
      judul: "Kesehatan dan keselamatan",
      isi: [
        "Peserta wajib memberitahu kondisi kesehatan yang bisa memengaruhi keikutsertaan sebelum keberangkatan: asma, masalah jantung, kehamilan, alergi berat, atau cedera yang belum pulih.",
        "Pelampung wajib dipakai selama kegiatan di air. Peserta yang menolak memakainya tidak diizinkan turun.",
        "Trip leader berhak melarang peserta mengikuti kegiatan tertentu kalau kondisinya dinilai tidak aman. Keputusan ini tidak menimbulkan pengembalian biaya.",
      ],
    },
    {
      judul: "Barang bawaan",
      isi: [
        "Barang pribadi sepenuhnya tanggung jawab masing-masing peserta.",
        "Kami tidak menanggung kehilangan atau kerusakan barang, termasuk barang elektronik yang terkena air.",
      ],
    },
    {
      judul: "Perilaku peserta",
      isi: [
        "Peserta yang mengganggu kenyamanan rombongan, dalam pengaruh alkohol atau obat terlarang, atau melanggar aturan setempat bisa dikeluarkan dari trip.",
        "Peserta yang dikeluarkan menanggung sendiri biaya kepulangan, dan tidak ada pengembalian biaya paket.",
      ],
    },
    {
      judul: "Dokumentasi",
      isi: [
        "Foto dan video yang kami ambil selama trip bisa kami pakai untuk promosi di media sosial dan website.",
        "Peserta yang tidak bersedia wajahnya dipakai cukup memberitahu sebelum keberangkatan, dan kami hormati.",
      ],
    },
    {
      judul: "Keadaan memaksa",
      isi: [
        "Bencana alam, kerusuhan, wabah, atau kebijakan pemerintah yang membuat trip tidak mungkin dijalankan.",
        "Dalam keadaan ini kami mengembalikan biaya yang belum terpakai. Biaya yang sudah dibayarkan ke pihak ketiga mengikuti kebijakan pihak tersebut, dan kami bantu mengurusnya sebisa kami.",
      ],
    },
    {
      judul: "Batas tanggung jawab",
      isi: [
        "Kami bertanggung jawab atas pelaksanaan trip sesuai yang tertulis di halaman paket masing-masing.",
        "Di luar itu, hal seperti kecelakaan yang bukan karena kelalaian kami, keterlambatan transportasi umum menuju titik kumpul, dan perubahan kebijakan kawasan wisata berada di luar tanggung jawab kami.",
        "Asuransi perjalanan tersedia sebagai tambahan opsional di tiap paket, dan kami sarankan diambil.",
      ],
    },
  ],
};
