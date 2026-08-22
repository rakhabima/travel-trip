/* =============================================================
   app.js — logika bersama semua halaman
   - inject sprite ikon
   - isi otomatis nama brand, nomor WA, IG, kota dari data.js
   - render kartu trip (beranda & jadwal)
   - menu mobile
   ============================================================= */

/* ---------- sprite ikon (dipakai lewat <use href="#ic-...">) ---------- */
const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
<symbol id="ic-wa" viewBox="0 0 24 24"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4a8.4 8.4 0 1 1 15.4-4.5Z"/><path d="M8.9 9.2c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3 0 .6a6 6 0 0 0 2.6 2.2c.3.1.4 0 .6-.1l.5-.6c.2-.2.3-.1.5 0l1.6.8c.2.1.4.2.4.4 0 .5-.2 1.2-.6 1.4-.4.3-1.4.6-2.5.2a9 9 0 0 1-5.2-5c-.4-1-.2-2 .2-2.6Z"/></symbol>
<symbol id="ic-ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.4" cy="6.6" r=".9" fill="currentColor" stroke="none"/></symbol>
<symbol id="ic-pin" viewBox="0 0 24 24"><path d="M19 10.4c0 5.1-7 11-7 11s-7-5.9-7-11a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10.2" r="2.6"/></symbol>
<symbol id="ic-kalender" viewBox="0 0 24 24"><rect x="3.2" y="5" width="17.6" height="16" rx="3"/><path d="M3.2 10h17.6M8 3v4M16 3v4"/></symbol>
<symbol id="ic-jam" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3.2 1.9"/></symbol>
<symbol id="ic-orang" viewBox="0 0 24 24"><path d="M16.5 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H7.6A3.6 3.6 0 0 0 4 18.2V20"/><circle cx="10.2" cy="8" r="3.6"/><path d="M20 20v-1.8a3.6 3.6 0 0 0-2.7-3.5M15.4 4.6a3.6 3.6 0 0 1 0 7"/></symbol>
<symbol id="ic-cek" viewBox="0 0 24 24"><path d="m4.5 12.5 4.7 4.7L19.5 6.9"/></symbol>
<symbol id="ic-foto" viewBox="0 0 24 24"><rect x="2.8" y="5.6" width="18.4" height="14" rx="3"/><path d="M8.4 5.6 10 3h4l1.6 2.6"/><circle cx="12" cy="12.8" r="3.6"/></symbol>
<symbol id="ic-ombak" viewBox="0 0 24 24"><path d="M2 16.5c2.2 0 2.2 1.8 4.4 1.8s2.2-1.8 4.4-1.8 2.2 1.8 4.4 1.8S17.8 16.5 20 16.5"/><path d="M2 11c2.2 0 2.2 1.8 4.4 1.8S8.6 11 10.8 11s2.2 1.8 4.4 1.8S17.8 11 20 11"/><path d="M2 5.5c2.2 0 2.2 1.8 4.4 1.8S8.6 5.5 10.8 5.5s2.2 1.8 4.4 1.8S17.8 5.5 20 5.5"/></symbol>
<symbol id="ic-panah" viewBox="0 0 24 24"><path d="M4.5 12h15M13.5 6l6 6-6 6"/></symbol>
<symbol id="ic-panah-kiri" viewBox="0 0 24 24"><path d="M19.5 12h-15M10.5 6l-6 6 6 6"/></symbol>
<symbol id="ic-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
<symbol id="ic-tas" viewBox="0 0 24 24"><rect x="3" y="7.5" width="18" height="13" rx="3"/><path d="M8.5 7.5v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/></symbol>
<symbol id="ic-perisai" viewBox="0 0 24 24"><path d="M12 3 5 6v5.5c0 4.3 3 7.6 7 9.5 4-1.9 7-5.2 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="ic-bintang" viewBox="0 0 24 24"><path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.9L12 3.6Z" fill="currentColor" stroke="none"/></symbol>
<symbol id="ic-dompet" viewBox="0 0 24 24"><path d="M3.5 7.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2"/><rect x="3.5" y="7.5" width="17" height="12" rx="2.6"/><path d="M20.5 11.5h-3.6a2 2 0 0 0 0 4h3.6"/></symbol>
<symbol id="ic-chat" viewBox="0 0 24 24"><path d="M20.5 12.2a7.6 7.6 0 0 1-11.3 6.6L4 20l1.3-4.4a7.6 7.6 0 1 1 15.2-3.4Z"/></symbol>
<symbol id="ic-kompas" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></symbol>
<symbol id="ic-filter" viewBox="0 0 24 24"><path d="M3.5 6.5h17M6.5 12h11M10 17.5h4"/></symbol>
<symbol id="ic-cari" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m20 20-4.4-4.4"/></symbol>
</svg>`;

/* ---------- util ---------- */
const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

function waLink(pesan) {
  return `https://wa.me/${BRAND.waNomor}?text=${encodeURIComponent(pesan)}`;
}

function pesanTrip(trip) {
  return `Halo ${BRAND.adminNama}, saya mau tanya open trip ${trip.nama} tanggal ${trip.tanggal}. Apakah kursinya masih ada?`;
}

function statusKuota(trip) {
  if (trip.kuotaSisa <= 0) return { kelas: "habis", teks: "Kuota penuh" };
  if (trip.kuotaSisa <= 4) return { kelas: "tipis", teks: `Sisa ${trip.kuotaSisa} kursi` };
  return { kelas: "aman", teks: `Sisa ${trip.kuotaSisa} dari ${trip.kuotaTotal} kursi` };
}

const ikon = (id, kelas = "ikon") => `<svg class="${kelas}" aria-hidden="true"><use href="#ic-${id}"></use></svg>`;

/* ---------- kartu trip ---------- */
function kartuTrip(trip, opsi = {}) {
  const k = statusKuota(trip);
  const penuh = trip.kuotaSisa <= 0;
  const include = (opsi.jumlahInclude ? trip.include.slice(0, opsi.jumlahInclude) : trip.include);
  const sisaInclude = trip.include.length - include.length;

  return `
  <article class="kartu ${penuh ? "kartu--penuh" : ""}">
    <div class="kartu__foto">
      <span class="kartu__badge ${trip.unggulan ? "kartu__badge--senja" : ""}">${trip.unggulan ? "Trip unggulan" : trip.tipe}</span>
      <span class="kartu__durasi">${ikon("jam")} ${trip.durasi}</span>
      <img src="${trip.foto}" alt="Suasana trip ${trip.nama} di ${trip.lokasi}" loading="lazy" width="900" height="560">
    </div>
    <div class="kartu__isi">
      <div class="kartu__atas">
        <div class="kartu__lokasi">${ikon("pin")} ${trip.lokasi}</div>
        <div class="kartu__rating">${ikon("bintang")} <b>${String(trip.rating).replace(".", ",")}</b> <span>(${trip.ulasan})</span></div>
      </div>
      <h3 class="kartu__judul">${trip.nama}</h3>
      <p class="kartu__ringkas">${trip.ringkas}</p>

      <div class="kartu__meta">
        <div class="kartu__baris">${ikon("kalender")}<span><b>${trip.tanggal}</b></span></div>
        <div class="kartu__baris">${ikon("kompas")}<span>Kumpul di ${trip.titikKumpul} · level ${trip.level}</span></div>
        <div class="kartu__baris">${ikon("orang")}<span class="kuota kuota--${k.kelas}">${k.teks}</span></div>
      </div>

      <div class="kartu__harga">
        ${trip.hargaCoret ? `<s>${rupiah(trip.hargaCoret)}</s>` : ""}
        <strong>${rupiah(trip.harga)}</strong><span>/ orang</span>
      </div>
      <div class="kartu__harga-cat">${trip.hargaCatatan}</div>

      <ul class="termasuk">
        ${include.map((i) => `<li>${ikon("cek")}<span>${i}</span></li>`).join("")}
        ${sisaInclude > 0 ? `<li>${ikon("cek")}<span>+${sisaInclude} fasilitas lain</span></li>` : ""}
      </ul>

      <div class="kartu__aksi">
        ${penuh
          ? `<a class="btn btn--garis btn--blok" href="${waLink(`Halo ${BRAND.adminNama}, trip ${trip.nama} sudah penuh ya? Saya mau masuk waiting list / tanya batch berikutnya.`)}" target="_blank" rel="noopener">${ikon("wa")} Tanya waiting list</a>`
          : `<a class="btn btn--wa btn--blok" href="${waLink(pesanTrip(trip))}" target="_blank" rel="noopener">${ikon("wa")} Tanya & booking via WA</a>`}
        ${trip.punyaItinerary ? `<a class="kartu__tautan" href="itinerary.html">Lihat itinerary harian →</a>` : ""}
      </div>
    </div>
  </article>`;
}

function renderTrip(selector, daftar, opsi) {
  const wadah = document.querySelector(selector);
  if (!wadah) return;
  wadah.innerHTML = daftar.length
    ? daftar.map((t) => kartuTrip(t, opsi)).join("")
    : `<p class="kosong">Belum ada keberangkatan yang cocok dengan filter ini. Coba longgarkan pilihannya, atau tanya tanggal lain lewat WhatsApp.</p>`;
}

/* ---------- seksi statis lain ---------- */
function renderDestinasi(selector) {
  const wadah = document.querySelector(selector);
  if (!wadah) return;
  wadah.innerHTML = DESTINASI.map((d) => {
    const jumlah = TRIPS.filter((t) => t.destinasi === d.slug && t.kuotaSisa > 0).length;
    return `
    <a class="dest" href="jadwal.html?destinasi=${d.slug}">
      <img src="${d.foto}" alt="Pemandangan ${d.nama}" loading="lazy" width="700" height="500">
      <span class="dest__isi">
        <span class="dest__nama">${d.nama}</span>
        <span class="dest__sub">${d.sub}</span>
      </span>
      <span class="dest__jumlah">${jumlah ? `${jumlah} jadwal aktif` : "Segera dibuka"}</span>
    </a>`;
  }).join("");
}

function renderAlasan(selector) {
  const wadah = document.querySelector(selector);
  if (!wadah) return;
  wadah.innerHTML = ALASAN.map((a) => `
    <article class="alasan">
      <span class="alasan__ikon">${ikon(a.ikon)}</span>
      <h3>${a.judul}</h3>
      <p>${a.isi}</p>
    </article>`).join("");
}

function renderLangkah(selector) {
  const wadah = document.querySelector(selector);
  if (!wadah) return;
  wadah.innerHTML = LANGKAH.map((l) => `
    <article class="langkah">
      <span class="langkah__no">${l.no}</span>
      <h3>${l.judul}</h3>
      <p>${l.isi}</p>
    </article>`).join("");
}

function renderTestimoni(selector, batas) {
  const wadah = document.querySelector(selector);
  if (!wadah) return;
  const daftar = batas ? TESTIMONI.slice(0, batas) : TESTIMONI;
  wadah.innerHTML = daftar.map((t) => `
    <figure class="testi">
      <span class="testi__kutip">&ldquo;</span>
      <blockquote class="testi__isi">${t.isi}</blockquote>
      <figcaption class="testi__orang">
        <span class="testi__avatar">${t.nama.trim().charAt(0)}</span>
        <span>
          <span class="testi__nama">${t.nama}</span><br>
          <span class="testi__asal">${t.asal}</span>
        </span>
      </figcaption>
    </figure>`).join("");
}

/* ---------- pencarian & filter jadwal ---------- */
// Isi <select> destinasi & bulan dari data, supaya tidak perlu diedit manual.
function isiPilihan(form) {
  const selDest = form.querySelector("[name='destinasi']");
  if (selDest && selDest.options.length <= 1) {
    DESTINASI.forEach((d) => selDest.add(new Option(d.nama, d.slug)));
  }
  const selBulan = form.querySelector("[name='bulan']");
  if (selBulan && selBulan.options.length <= 1) {
    [...new Set(TRIPS.map((t) => t.bulan))].sort().forEach((b) => {
      const [th, bl] = b.split("-");
      const nama = new Date(+th, +bl - 1, 1).toLocaleDateString("id-ID", { month: "long", year: "numeric" });
      selBulan.add(new Option(nama, b));
    });
  }
}

// Form di beranda hanya mengoper pilihan ke halaman jadwal lewat query string.
function cariBeranda() {
  const form = document.querySelector("[data-cari='beranda']");
  if (!form) return;
  isiPilihan(form);
}

function filterJadwal() {
  const form = document.querySelector("[data-cari='jadwal']");
  const grid = document.querySelector("[data-trip='semua']");
  if (!form || !grid) return;
  isiPilihan(form);

  // pre-isi dari query string (mis. dari kartu destinasi di beranda)
  const q = new URLSearchParams(location.search);
  ["destinasi", "bulan", "tersedia"].forEach((n) => {
    const el = form.querySelector(`[name='${n}']`);
    if (el && q.has(n)) el.value = q.get(n);
  });

  const terapkan = () => {
    const d = form.querySelector("[name='destinasi']").value;
    const b = form.querySelector("[name='bulan']").value;
    const sisa = form.querySelector("[name='tersedia']").value;
    const hasil = TRIPS.filter((t) =>
      (!d || t.destinasi === d) && (!b || t.bulan === b) && (!sisa || t.kuotaSisa > 0)
    );
    renderTrip("[data-trip='semua']", hasil);
    const info = document.querySelector("[data-hasil]");
    if (info) info.textContent = `${hasil.length} keberangkatan ditampilkan dari total ${TRIPS.length}.`;
  };

  form.addEventListener("change", terapkan);
  form.addEventListener("submit", (e) => { e.preventDefault(); terapkan(); });
  form.querySelector("[data-reset]")?.addEventListener("click", () => {
    form.reset();
    terapkan();
  });
  terapkan();
}

/* ---------- isi otomatis brand ---------- */
function isiBrand() {
  document.querySelectorAll("[data-brand]").forEach((el) => {
    const v = BRAND[el.dataset.brand];
    if (v !== undefined) el.textContent = v;
  });

  // tautan WhatsApp: teks pesan diambil dari atribut data-wa
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const pesan = el.dataset.wa || `Halo ${BRAND.adminNama}, saya mau tanya jadwal open trip terdekat.`;
    el.href = waLink(pesan);
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll("[data-ig]").forEach((el) => { el.href = BRAND.instagramUrl; });

  // judul halaman: "<judul> · <nama brand>"
  document.title = document.title.replace("{BRAND}", BRAND.nama);
}

/* ---------- menu mobile ---------- */
function menuMobile() {
  const burger = document.querySelector(".nav__burger");
  const daftar = document.querySelector(".nav__tautan");
  if (!burger || !daftar) return;
  burger.addEventListener("click", () => {
    const buka = daftar.classList.toggle("buka");
    burger.setAttribute("aria-expanded", String(buka));
  });
}

/* ---------- init ---------- */
// sprite disisipkan langsung (app.js dimuat di akhir <body>)
if (document.body) document.body.insertAdjacentHTML("afterbegin", SPRITE);

document.addEventListener("DOMContentLoaded", () => {
  isiBrand();
  menuMobile();

  // render kartu sesuai halaman
  renderTrip("[data-trip='semua']", TRIPS);
  renderTrip("[data-trip='preview']", TRIPS.filter((t) => t.kuotaSisa > 0).slice(0, 3), { jumlahInclude: 3 });

  renderDestinasi("[data-destinasi]");
  renderAlasan("[data-alasan]");
  renderLangkah("[data-langkah]");
  renderTestimoni("[data-testimoni='beranda']", 3);
  renderTestimoni("[data-testimoni='semua']");

  cariBeranda();
  filterJadwal();
});
