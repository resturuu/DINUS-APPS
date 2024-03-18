// Ambil elemen yang diperlukan
const popupTrigger = document.querySelector('.users img');
const popup = document.getElementById('popup');
const closeBtn = document.createElement('span'); // Buat elemen tombol close
const darkOverlay = document.createElement('div'); // Buat elemen latar belakang gelap

// Tambahkan class dan simbol untuk tombol close
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';

// Tambahkan class ke elemen latar belakang gelap
darkOverlay.classList.add('dark-overlay');

// Tambahkan event listener untuk menampilkan popup ketika gambar di-klik
popupTrigger.addEventListener('click', function() {
  popup.style.display = 'block';
  document.body.appendChild(darkOverlay); // Tambahkan latar belakang gelap ke dalam body
  popup.appendChild(closeBtn); // Tambahkan tombol close ke dalam popup
});

// Tambahkan event listener untuk menutup popup ketika tombol ditutup diklik
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
  darkOverlay.remove(); // Hapus latar belakang gelap saat popup ditutup
});

// baca slengkapnya
function toggleInfo() {
  var info = document.querySelector('.additional-info');
  var btn = document.querySelector('.toggle-btn i');

  if (info.style.display === 'none') {
      info.style.display = 'block';
      btn.classList.remove('fa-chevron-down');
      btn.classList.add('fa-chevron-up');
      document.querySelector('.toggle-btn').innerHTML = '<i class="fas fa-chevron-up"></i>';
  } else {
      info.style.display = 'none';
      btn.classList.remove('fa-chevron-up');
      btn.classList.add('fa-chevron-down');
      document.querySelector('.toggle-btn').innerHTML = '<i class="fas fa-chevron-down"></i>';
  }
}

// data ortu
function toggleOrtuInfo() {
  var infoOrtu = document.querySelector('.additional-info-ortu');
  var btnOrtu = document.querySelector('.toggle-btn-ortu i');

  if (infoOrtu.style.display === 'none') {
      infoOrtu.style.display = 'block';
      btnOrtu.classList.remove('fa-chevron-down');
      btnOrtu.classList.add('fa-chevron-up');
      document.querySelector('.toggle-btn-ortu').innerHTML = '<i class="fas fa-chevron-up"></i>';
  } else {
      infoOrtu.style.display = 'none';
      btnOrtu.classList.remove('fa-chevron-up');
      btnOrtu.classList.add('fa-chevron-down');
      document.querySelector('.toggle-btn-ortu').innerHTML = '<i class="fas fa-chevron-down"></i>';
  }
}

// log out
function logout() {
  // Tampilkan notifikasi
  alert("Anda telah berhasil logout");

  // Pindah ke halaman index.html
  window.location.href = "index.html";
}
