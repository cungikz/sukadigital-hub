# Ruang Lingkup & Rencana Pengembangan

## Tujuan

Membuat prototipe terbuka yang mempermudah pengenalan konsep tata kelola layanan TIK pada pemerintah daerah, menggunakan data fiktif, dan mudah direplikasi untuk keperluan pendidikan atau portofolio.

## Modul

| Modul | Ruang lingkup MVP | Usulan pengembangan |
| --- | --- | --- |
| Tiket | Entri, status, filter, hapus, ekspor | Penugasan PIC, notifikasi, SLA, riwayat audit |
| Katalog aplikasi | Daftar aplikasi contoh dan status | Metadata standar, status integrasi, penilaian risiko |
| Keamanan informasi | Catatan insiden **simulasi** | Penanganan tertutup dengan RBAC dan penyimpanan aman |
| Statistik | Grafik sederhana berdasarkan data lokal | Data warehouse, ringkasan layanan non-sensitif |
| Pengaturan | Ekspor/impor lokal, tema | SSO dan administrasi multi-pengguna |

## Non-tujuan versi saat ini

- Mengganti aplikasi resmi pemerintah.
- Mengumpulkan identitas penduduk atau data sensitif milik perangkat daerah.
- Menguji, memindai, atau mengakses sistem pemerintah.
- Membuat klaim bahwa data demo merupakan performa asli instansi.

## Definisi selesai MVP

- Tampilan desktop dan ponsel dapat dipakai.
- Semua tombol tambah, cari, filter, status, hapus, ekspor/impor berfungsi.
- Data simulasi tersimpan secara lokal.
- Tidak ada login, backend, atau permintaan API yang mengirim data pengguna.
- Ada dokumentasi, lisensi, disclaimer, dan roadmap.

## Ide issue GitHub pertama

1. Tambahkan unit test untuk fungsi pemfilteran dan ekspor CSV.
2. Tambahkan pilihan rentang tanggal di halaman statistik.
3. Perbaiki aksesibilitas keyboard dan pembaca layar pada dialog.
4. Buat fitur edit isi tiket, bukan hanya status.
5. Tambahkan internationalization (bahasa Indonesia/Inggris).
