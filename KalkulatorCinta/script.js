const nameInputs = document.querySelectorAll('.name-input');

const namaKamu = nameInputs[0];
const namaDia = nameInputs[1];

const button = document.querySelector('.calculate-button');
const result = document.querySelector('.result');
const notification = document.querySelector('.notif');
const loveImage = document.querySelector('.love-image');

button.addEventListener('click', hitungCinta);

function hitungCinta() {
    const nama1 = namaKamu.value.toLowerCase();
    const nama2 = namaDia.value.toLowerCase();

    if (nama1 === '' || nama2 === '') {
        notification.textContent = 'MOHON ISI DULU NAMA YA!';
        notification.style.backgroundColor = '#F44336';
        result.textContent = '??';
        triggerAnimation();
        return;
    }

    loveImage.style.transition = 'opacity 0.5s';
    loveImage.style.opacity = '0.4';

    const gabungNama = nama1 + nama2;

    let total = 0;
    for (let i = 0; i < gabungNama.length; i++) {
        total += gabungNama.charCodeAt(i);
    }

    let persentase = total % 101;
    if (nama1 === 'rislan' && nama2 === 'risma') {
        persentase = 100;
    } else if (nama1 === 'risma' && nama2 === 'rislan') {
        persentase = 100;
    }
    
    // Logika untuk menentukan pesan dan WARNA notifikasi
    let pesan = "";
    if (persentase > 75) {
        pesan = "Wow! Kalian berjodoh banget! 💑";
        notification.style.backgroundColor = "#4CAF50"; // Hijau
    } else if (persentase > 50) {
        pesan = "Ada harapan nih, kalian cocok! 😊";
        notification.style.backgroundColor = "#FFC107"; // Kuning
    } else {
        pesan = "Hmm, lebih cocok jadi teman. 😅";
        notification.style.backgroundColor = "#F44336"; // Merah
    }

    result.textContent = persentase + "%";
    notification.textContent = pesan;
    triggerAnimation();
}

function triggerAnimation() {
    notification.style.animation = 'none';
    void notification.offsetWidth;
    notification.style.animation = 'fadeInOut 4s ease';
}