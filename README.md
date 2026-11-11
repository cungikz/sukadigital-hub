# SukaDigital Hub

**Dashboard Layanan TIK, Katalog Aplikasi, dan Pemantauan Keamanan Informasi — Open-source MVP**

SukaDigital Hub adalah prototipe aplikasi web **independen dan tidak resmi** yang mengambil inspirasi dari ruang lingkup kerja Dinas Komunikasi, Informatika dan Persandian Kabupaten Sukabumi: komunikasi dan informatika, aplikasi informatika, persandian/keamanan informasi, dan statistik. Proyek ini dibuat untuk pembelajaran, portofolio, serta percobaan kolaborasi pengembangan aplikasi open-source.

> **Penting:** Aplikasi ini **bukan** produk, layanan, maupun sistem resmi Pemerintah Kabupaten Sukabumi. Nama proyek, data tiket, nama aplikasi, dan insiden di dalamnya adalah **data simulasi**. Tidak ada akses ke sistem pemerintah. Jangan masukkan data pribadi, data dinas rahasia, kredensial, atau informasi teknis keamanan yang sensitif.

## Fitur MVP

- **Dashboard:** ringkasan tiket, aplikasi aktif, simulasi insiden, tren mingguan, dan distribusi kategori.
- **Tiket Layanan TIK:** tambah tiket, cari dan filter, ubah status, hapus, ekspor laporan CSV.
- **Katalog Aplikasi:** inventaris aplikasi contoh, tambah entri, cari/filter, ubah status, ekspor CSV.
- **Keamanan Informasi:** catatan **simulasi** insiden yang tidak sensitif, tambah, ubah status, cari/filter, hapus, ekspor CSV.
- **Statistik & Laporan:** grafik tren, distribusi kategori, jumlah permintaan per perangkat daerah.
- **Pengaturan:** tema terang/gelap, ekspor/impor seluruh data JSON, reset data simulasi.
- **Mobile-friendly, offline-first setelah font ter-cache, dan tanpa dependensi JavaScript.**

## Cara menjalankan

### Cara cepat — tanpa instalasi
1. Ekstrak ZIP.
2. Buka `index.html` di browser modern (Chrome, Edge, Firefox).
3. Tambah tiket, ubah status, dan unduh CSV untuk mencoba fiturnya.

### Server lokal (opsional)

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

### GitHub Pages

1. Buat repository baru, misalnya `sukadigital-hub` (public).
2. Upload seluruh isi folder proyek (termasuk `index.html` dan `assets/`).
3. Buka **Settings → Pages → Build and deployment**.
4. Pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu **Save**.
5. Tunggu GitHub Pages menampilkan tautan situs.

## Teknologi

- HTML semantik
- CSS responsif
- Vanilla JavaScript
- Web Storage API (`localStorage`)
- CSV/JSON export menggunakan browser Blob API

Tidak memerlukan backend, database, token API, atau akun layanan eksternal. Font memakai Google Fonts jika tersedia, dengan fallback font sistem ketika offline.

## Batasan keamanan dan privasi

Proyek ini adalah **mockup interaktif/prototipe**, bukan aplikasi siap produksi:

- Tidak ada login, otorisasi berbasis peran, atau audit trail yang tahan manipulasi.
- `localStorage` tidak cocok untuk data sensitif atau data dinas resmi.
- Semua data hanya disimpan di browser/perangkat lokal dan tidak tersinkron ke perangkat lain.
- Tidak ada server, enkripsi data pada penyimpanan aplikasi, SLA, atau integrasi ke sistem SPBE.
- Ekspor CSV/JSON menghasilkan file lokal, sehingga pengguna perlu menjaganya.
- Jangan publikasikan data aktual ke repo GitHub atau GitHub Pages.

### Roadmap menuju implementasi sesungguhnya

1. Autentikasi SSO/akun dan kontrol akses berbasis peran.
2. Backend API dan database PostgreSQL dengan kebijakan retensi.
3. Validasi server, pencatatan audit, backup dan pemulihan terenkripsi.
4. Pemantauan SLA, notifikasi, penugasan PIC, serta alur persetujuan.
5. Integrasi resmi hanya melalui persetujuan pemilik sistem dan penilaian keamanan.
6. Uji aksesibilitas WCAG, pengujian otomatis, dokumentasi pengguna, dan pengujian penetrasi terotorisasi.

## Struktur proyek

```
sukabumi-digital-hub/
├── index.html
├── assets/
│   ├── app.js
│   ├── favicon.svg
│   └── styles.css
├── docs/
│   └── PROJECT_SCOPE.md
├── tests/
│   └── smoke.test.cjs
├── README.md
├── SECURITY.md
├── package.json
└── LICENSE
```

## Pengujian sederhana

Dengan Node.js 18 atau lebih baru:

```bash
npm test
```

Pengujian memeriksa render halaman, penyimpanan lokal, input tiket, perubahan status, input katalog, dan catatan simulasi keamanan tanpa akses ke server eksternal.

## Kontribusi

Isu, perbaikan bug, dokumentasi, dan pull request sangat diterima. Silakan sertakan deskripsi masalah, langkah reproduksi, dan tangkapan layar jika terkait UI. **Gunakan data fiktif saat membuat issue atau PR.**

## Referensi lingkup tugas

- Website Dinas Komunikasi, Informatika dan Persandian Kabupaten Sukabumi: https://diskominfosan.sukabumikab.go.id/
- Tugas dan fungsi: https://diskominfosan.sukabumikab.go.id/hal/tugas-dan-fungsi
- Bidang Aplikasi Informatika: https://diskominfosan.sukabumikab.go.id/bidang/Aplikasi-dan-Informatika
- Bidang Persandian dan Keamanan Informasi: https://diskominfosan.sukabumikab.go.id/bidang/Persandian-dan-Keamanan-Informasi

Referensi hanya digunakan untuk memahami ruang lingkup; **tidak menyiratkan afiliasi, persetujuan, atau endorsement** instansi yang disebut.

## Lisensi

MIT License — lihat [LICENSE](LICENSE).
