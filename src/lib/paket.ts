import { getCollection, type CollectionEntry } from "astro:content";
import { hariIni, kunciBulan, rentangPendek, rentangTanggal } from "./tanggal";

export type Paket = CollectionEntry<"paket">;
export type Keberangkatan = Paket["data"]["keberangkatan"][number];

/** Satu baris jadwal: keberangkatan beserta paket induknya. */
export type Jadwal = {
  paket: Paket;
  batch: Keberangkatan;
  tanggal: string;
  tanggalPendek: string;
  bulan: string;
  kunci: string;
};

// Dibandingkan saat build, jadi situs harus di-build ulang tiap hari
// (cron) supaya jadwal lama benar-benar hilang.
function belumLewat(b: Keberangkatan): boolean {
  return b.selesai.getTime() >= hariIni().getTime();
}

export function batchAktif(p: Paket): Keberangkatan[] {
  return p.data.keberangkatan
    .filter(belumLewat)
    .sort((a, b) => a.mulai.getTime() - b.mulai.getTime());
}

export function batchTerdekat(p: Paket): Keberangkatan | null {
  return batchAktif(p)[0] ?? null;
}

export function hargaMulaiDari(p: Paket): number | null {
  const aktif = batchAktif(p);
  return aktif.length ? Math.min(...aktif.map((b) => b.harga)) : null;
}

export async function semuaPaket(): Promise<Paket[]> {
  const daftar = await getCollection("paket");
  return daftar
    .filter((p) => batchAktif(p).length > 0)
    .sort((a, b) => {
      const ta = batchTerdekat(a)?.mulai.getTime() ?? Infinity;
      const tb = batchTerdekat(b)?.mulai.getTime() ?? Infinity;
      return ta - tb;
    });
}

/**
 * Semua keberangkatan diratakan jadi satu daftar terurut tanggal.
 * Halaman jadwal menampilkan satu kartu per keberangkatan, bukan per paket,
 * jadi paket dengan dua tanggal muncul dua kali.
 */
export async function semuaJadwal(): Promise<Jadwal[]> {
  const daftar = await getCollection("paket");
  const baris: Jadwal[] = [];

  for (const paket of daftar) {
    for (const batch of paket.data.keberangkatan) {
      if (!belumLewat(batch)) continue;
      baris.push({
        paket,
        batch,
        tanggal: rentangTanggal(batch.mulai, batch.selesai),
        tanggalPendek: rentangPendek(batch.mulai, batch.selesai),
        bulan: kunciBulan(batch.mulai),
        kunci: `${paket.id}-${kunciBulan(batch.mulai)}-${batch.mulai.getDate()}`,
      });
    }
  }

  return baris.sort((a, b) => a.batch.mulai.getTime() - b.batch.mulai.getTime());
}

export function statusKuota(b: Keberangkatan): { kelas: string; teks: string } {
  if (b.kuotaSisa <= 0) return { kelas: "habis", teks: "Kuota penuh" };
  if (b.kuotaSisa <= 4) return { kelas: "tipis", teks: `Sisa ${b.kuotaSisa} kursi` };
  return { kelas: "aman", teks: `Sisa ${b.kuotaSisa} dari ${b.kuotaTotal} kursi` };
}
