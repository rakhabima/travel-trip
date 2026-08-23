const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const BULAN_PENDEK = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

/** "12 – 15 September 2026" · "29 September – 2 Oktober 2026" · "8 November 2026" */
export function rentangTanggal(mulai: Date, selesai: Date): string {
  if (mulai.getTime() === selesai.getTime()) {
    return `${mulai.getDate()} ${BULAN[mulai.getMonth()]} ${mulai.getFullYear()}`;
  }

  const bulanSama =
    mulai.getMonth() === selesai.getMonth() && mulai.getFullYear() === selesai.getFullYear();
  if (bulanSama) {
    return `${mulai.getDate()} – ${selesai.getDate()} ${BULAN[selesai.getMonth()]} ${selesai.getFullYear()}`;
  }

  // Tahun cuma ditulis sekali kalau rentangnya tidak lintas tahun.
  const tahunSama = mulai.getFullYear() === selesai.getFullYear();
  const kiri = tahunSama
    ? `${mulai.getDate()} ${BULAN[mulai.getMonth()]}`
    : `${mulai.getDate()} ${BULAN[mulai.getMonth()]} ${mulai.getFullYear()}`;
  return `${kiri} – ${selesai.getDate()} ${BULAN[selesai.getMonth()]} ${selesai.getFullYear()}`;
}

/** "12–15 Sep" · "29 Sep–2 Okt" · "8 Nov" */
export function rentangPendek(mulai: Date, selesai: Date): string {
  if (mulai.getTime() === selesai.getTime()) {
    return `${mulai.getDate()} ${BULAN_PENDEK[mulai.getMonth()]}`;
  }
  if (mulai.getMonth() === selesai.getMonth()) {
    return `${mulai.getDate()}–${selesai.getDate()} ${BULAN_PENDEK[selesai.getMonth()]}`;
  }
  return `${mulai.getDate()} ${BULAN_PENDEK[mulai.getMonth()]}–${selesai.getDate()} ${BULAN_PENDEK[selesai.getMonth()]}`;
}

/** Kunci filter bulan: "2026-09" */
export function kunciBulan(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

/** "2026-09" -> "September 2026" */
export function namaBulan(kunci: string): string {
  const [th, bl] = kunci.split("-");
  return `${BULAN[Number(bl) - 1]} ${th}`;
}

export function hariIni(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
