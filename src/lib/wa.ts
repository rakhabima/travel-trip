import { BRAND } from "../data/konten";

export function waLink(pesan: string): string {
  return `https://wa.me/${BRAND.waNomor}?text=${encodeURIComponent(pesan)}`;
}

export const WA_UMUM = `Halo ${BRAND.adminNama}, saya mau tanya jadwal open trip terdekat.`;

export function waPaket(nama: string, tanggal?: string): string {
  return tanggal
    ? `Halo ${BRAND.adminNama}, saya mau tanya open trip ${nama} tanggal ${tanggal}. Apakah kursinya masih ada?`
    : `Halo ${BRAND.adminNama}, saya mau tanya open trip ${nama}. Boleh minta detail dan tanggal terdekatnya?`;
}

export function waWaitingList(nama: string, tanggal: string): string {
  return `Halo ${BRAND.adminNama}, trip ${nama} tanggal ${tanggal} sudah penuh ya? Saya mau masuk waiting list / tanya batch berikutnya.`;
}

export const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");
