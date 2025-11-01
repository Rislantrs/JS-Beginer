let programBerjalan = true;

function validasiAngka(pesan) {
  while (true) {
    const input = prompt(pesan);
    if (input === null) {
      alert("DEBUG: User CANCEL pada input angka");
      return { batal: true };
    }

    const trimmed = input.trim();
    if (trimmed === "") {
      alert("Error: Input tidak boleh kosong");
      console.log("Error: Input tidak boleh kosong");
      continue;
    }

    const nilai = Number(trimmed.replace(",", "."));
    if (Number.isNaN(nilai)) {
      alert("Error: Input harus berupa angka");
      console.log("Error: Input harus berupa angka");
      continue;
    }

    alert("DEBUG: Angka valid: " + nilai);
    return { nilai };
  }
}

function inputUser() {
  const angka1 = validasiAngka("Masukan angka pertama:");
  if (angka1.batal) return null;

  const angka2 = validasiAngka("Masukan angka kedua:");
  if (angka2.batal) return null;

  alert(`DEBUG: Pasangan input = [${angka1.nilai}, ${angka2.nilai}]`);
  return [angka1.nilai, angka2.nilai];
}

function tambah() {
  alert("MODE: TAMBAH");
  const pasangan = inputUser();
  if (!pasangan) {
    alert("Aksi dibatalkan.");
    console.log("Error: Aksi dibatalkan.");
    return;
  }
  const [angka1, angka2] = pasangan;
  const hasil = angka1 + angka2;
  alert(`HASIL: ${angka1} + ${angka2} = ${hasil}`);
  console.log(`Hasilnya adalah ${hasil}`);
}

function kurang() {
  alert("MODE: KURANG");
  const pasangan = inputUser();
  if (!pasangan) {
    alert("Aksi dibatalkan.");
    console.log("Error: Aksi dibatalkan.");
    return;
  }
  const [angka1, angka2] = pasangan;

  if (angka1 < angka2) {
    alert("Error: Angka pertama harus lebih besar dari angka kedua");
    console.log("Error: Angka pertama harus lebih besar dari angka kedua");
    return;
  }

  const hasil = angka1 - angka2;
  alert(`HASIL: ${angka1} - ${angka2} = ${hasil}`);
  console.log(`Hasilnya adalah ${hasil}`);
}

function kali() {
  alert("MODE: KALI");
  const pasangan = inputUser();
  if (!pasangan) {
    alert("Aksi dibatalkan.");
    console.log("Error: Aksi dibatalkan.");
    return;
  }
  const [angka1, angka2] = pasangan;
  const hasil = angka1 * angka2;
  alert(`HASIL: ${angka1} × ${angka2} = ${hasil}`);
  console.log(`Hasilnya adalah ${hasil}`);
}

function bagi() {
  alert("MODE: BAGI");
  const pasangan = inputUser();
  if (!pasangan) {
    alert("Aksi dibatalkan.");
    console.log("Aksi dibatalkan.");
    return;
  }

  const [angka1, angka2] = pasangan;
  if (angka2 === 0) {
    alert("Error: Tidak bisa membagi dengan nol");
    console.log("Error: Tidak bisa membagi dengan nol");
    return;
  }

  const hasil = angka1 / angka2;
  alert(`HASIL: ${angka1} ÷ ${angka2} = ${hasil}`);
  console.log(`Hasilnya adalah ${hasil}`);
}

while (programBerjalan) {
  console.log(`Selamat Datang di Kalkulator Sederhana
(1) tambah
(2) kurang
(3) kali
(4) bagi
(5) keluar`);

  let pilihan = window.prompt("Masukan nomor pilihan pada menu yang tersedia (1-5):");
  if (pilihan === null) {
    alert("DEBUG: Menu dibatalkan (Cancel ditekan)");
    console.log("Error: Aksi dibatalkan.");
    continue;
  }

  pilihan = pilihan.trim();
  alert("DEBUG: Pilihan diterima = >" + pilihan + "<");

  switch (pilihan) {
    case "1":
      tambah();
      break;
    case "2":
      kurang();
      break;
    case "3":
      kali();
      break;
    case "4":
      bagi();
      break;
    case "5":
      alert("Keluar program.");
      programBerjalan = false; 
      console.log("Terima kasih sudah mencoba kalkulator ini");
      break;
    default:
      alert("Error: Pilihan tidak valid. Pilih 1–5.");
      console.log("Error: Pilihan tidak valid");
      break;
  }
}
