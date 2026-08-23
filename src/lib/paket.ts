import { getCollection, type CollectionEntry } from "astro:content";
import { FITUR } from "../data/konten";
import { hariIni, kunciBulan, rentangPendek, rentangTanggal } from "./tanggal";

export type Paket = CollectionEntry<"paket">;
export type Keberangkatan = Paket["data"]["keberangkatan"][number];

/** Satu keberangkatan beserta tanggal yang sudah diformat. */
export type Batch = {
  data: Keberangkatan;
  tanggal: string;
  tanggalPendek: string;
  bulan: string;
};

// Dibandingkan saat build, jadi situs harus di-build ulang tiap hari (cron)
// supaya jadwal lama benar-benar hilang. Hanya relevan kalau FITUR.jadwal aktif.
function belumLewat(b: Keberangkatan): boolean {
  return b.selesai.getTime() >= hariIni().getTime();
}

/** Keberangkatan yang masih relevan, terurut dari yang terdekat. */
export function batchAktif(p: Paket): Keberangkatan[] {
  if (!FITUR.jadwal) return [];
  return p.data.keberangkatan
    .filter(belumLewat)
    .sort((a, b) => a.mulai.getTime() - b.mulai.getTime());
}

/** Keberangkatan terdekat, sudah diformat. Null kalau situs tanpa jadwal. */
export function batchTerdekat(p: Paket): Batch | null {
  const b = batchAktif(p)[0];
  if (!b) return null;
  return {
    data: b,
    tanggal: rentangTanggal(b.mulai, b.selesai),
    tanggalPendek: rentangPendek(b.mulai, b.selesai),
    bulan: kunciBulan(b.mulai),
  };
}

/**
 * Harga terendah paket ini. Diambil dari keberangkatan kalau jadwalnya aktif,
 * kalau tidak dari `hargaMulai` yang ditulis langsung di berkas paket.
 */
export function hargaMulaiDari(p: Paket): number | null {
  const aktif = batchAktif(p);
  if (aktif.length) return Math.min(...aktif.map((b) => b.harga));
  return p.data.hargaMulai ?? null;
}

/** Benar kalau paket punya lebih dari satu titik harga, pemicu label "mulai". */
export function hargaBervariasi(p: Paket): boolean {
  const aktif = batchAktif(p);
  return new Set(aktif.map((b) => b.harga)).size > 1;
}

/** Catatan harga: dari batch terdekat kalau ada, kalau tidak dari paket. */
export function catatanHarga(p: Paket): string {
  return batchTerdekat(p)?.data.hargaCatatan || p.data.hargaCatatan;
}

/** Benar kalau paket masih punya kursi. Tanpa jadwal, selalu benar. */
export function masihTersedia(p: Paket): boolean {
  if (!FITUR.jadwal) return true;
  return batchAktif(p).some((b) => b.kuotaSisa > 0);
}

/**
 * Semua paket untuk ditampilkan sebagai kartu.
 * Dengan jadwal: yang masih punya keberangkatan aktif, terurut tanggal terdekat.
 * Tanpa jadwal: semuanya, terurut dari yang termurah.
 */
export async function semuaPaket(): Promise<Paket[]> {
  const daftar = await getCollection("paket");

  if (!FITUR.jadwal) {
    return daftar.sort((a, b) => (hargaMulaiDari(a) ?? 0) - (hargaMulaiDari(b) ?? 0));
  }

  return daftar
    .filter((p) => batchAktif(p).length > 0)
    .sort((a, b) => {
      const ta = batchTerdekat(a)?.data.mulai.getTime() ?? Infinity;
      const tb = batchTerdekat(b)?.data.mulai.getTime() ?? Infinity;
      return ta - tb;
    });
}

/** Semua bulan yang punya keberangkatan, untuk isi dropdown filter. */
export async function bulanTersedia(): Promise<string[]> {
  if (!FITUR.jadwal) return [];
  const daftar = await getCollection("paket");
  const bulan = daftar.flatMap((p) => batchAktif(p).map((b) => kunciBulan(b.mulai)));
  return [...new Set(bulan)].sort();
}

/** Jumlah seluruh keberangkatan aktif di semua paket. */
export async function jumlahKeberangkatan(): Promise<number> {
  if (!FITUR.jadwal) return 0;
  const daftar = await getCollection("paket");
  return daftar.reduce((n, p) => n + batchAktif(p).length, 0);
}

export function statusBatch(b: Keberangkatan): { kelas: "tersedia" | "penuh"; teks: string } {
  return b.kuotaSisa > 0
    ? { kelas: "tersedia", teks: "Tersedia" }
    : { kelas: "penuh", teks: "Kuota penuh" };
}
