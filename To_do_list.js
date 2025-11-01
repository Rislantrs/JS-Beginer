let todolist = [];
let programBerjalan = true;

function tambahTugas() {
    const tugas = prompt("Masukan tugas yang ingin kamu tambahkan!");
    if (tugas === null) {
        console.log("Aksi dibatalkan.");
        return;
    }

    if (tugas.trim() !== '') {
        todolist.push(tugas.trim());
        console.log(`"${tugas.trim()}" berhasil ditambahkan!`);
    } else {
        console.log("Gagal: tugas tidak boleh kosong.");
    }
}

function hapusTugas() {
    if (todolist.length === 0) {
        console.log("Tugas masih kosong.");
        return;
    }

    lihatTugas();
    const nomorInput = prompt("Masukan nomor tugas yang mau dihapus:");
    if (nomorInput === null) {
        console.log("Aksi dibatalkan.");
        return;
    }

    // pastikan angka valid
    const index = parseInt(nomorInput, 10) - 1;
    if (!Number.isInteger(index) || isNaN(index)) {
        console.log("Input tidak valid. Harap masukkan angka.");
        return;
    }

    if (index >= 0 && index < todolist.length) {
        const hapus = todolist.splice(index, 1);
        console.log(`"${hapus[0]}" berhasil dihapus.`);
    } else {
        console.log(`Gagal: nomor tidak valid. Rentang yang tersedia 1–${todolist.length}.`);
    }
}

function lihatTugas() {
    console.log("=== Daftar Tugas ===");
    if (todolist.length === 0) {
        console.log("Masih Kosong");
    } else {
        todolist.forEach((tugas, index) => {
            console.log(`${index + 1}. ${tugas}`);
        });
    }
    console.log("===================");
}

while (programBerjalan) {
    console.log(`Selamat Datang di Aplikasi To Do List
    (1) tambah
    (2) hapus
    (3) lihat
    (4) keluar`);

    let pilihan = prompt("Masukan Nomor Pilihan Menu: ");
    if (pilihan === null) {
        console.log("Aksi dibatalkan.");
        continue;
    }
    pilihan = pilihan.trim();

    switch (pilihan) {
        case '1':
            tambahTugas();
            break;
        case '2':
            hapusTugas();
            break;
        case '3':
            lihatTugas();
            break;
        case '4':
            programBerjalan = false;
            console.log("Terima Kasih Sudah Menggunakan Aplikasi Ini");
            break;
        default:
            console.log("Pilihan tidak tersedia. Masukkan angka 1–4.");
            break;
    }
}
