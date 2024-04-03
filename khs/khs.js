document.addEventListener("DOMContentLoaded", function() {
     const navLinks = document.querySelectorAll(".nav-link");
   
     // Menambahkan event listener untuk setiap tautan navigasi
     navLinks.forEach(function(navLink) {
       navLink.addEventListener("click", function(event) {
         const targetId = this.getAttribute("href").substring(1);
   
         // Menampilkan/menyembunyikan elemen dengan ID yang sesuai
         const targetElement = document.getElementById(targetId);
         if (targetElement) {
           // Menampilkan elemen target
           targetElement.style.display = "block";
   
           // Menyembunyikan elemen-elemen sibling yang memiliki kelas "reguler"
           const siblings = targetElement.parentElement.querySelectorAll(".reguler");
           siblings.forEach(function(sibling) {
             if (sibling !== targetElement) {
               sibling.style.display = "none";
             }
           });
   
           // Menghapus kelas "active" dari semua tautan navigasi
           navLinks.forEach(function(link) {
             link.classList.remove("active");
           });
   
           // Menambahkan kelas "active" ke tautan navigasi yang sedang aktif
           this.classList.add("active");
         }
   
         event.preventDefault();
       });
     });
   
     // Menandai tautan navigasi "Reguler" sebagai aktif saat halaman dimuat
     const regulerNavLink = document.getElementById("nav-reguler");
     if (regulerNavLink) {
       regulerNavLink.classList.add("active");
     }
   });

  //  khs
  //    SMT 1
function toggleDetailsSatu() {
  var details = document.querySelector('.bg-matkul-1');
  var button = document.querySelector('.toggle-button-krs-smt-1');
  if (details.style.display === 'none') {
    details.style.display = 'block';
    button.innerHTML = '<i class="fas fa-chevron-up"></i>'; // Mengubah teks dan ikon tombol
    
    // Animasi scroll smooth
    details.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    details.style.display = 'none';
    button.innerHTML =  '<i class="fas fa-chevron-down"></i>'; // Mengubah teks dan ikon tombol
  }
}
   

  //  scrol smooth
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.getElementById("scrollToTop").style.display = "block";
     } else {
       document.getElementById("scrollToTop").style.display = "none";
     }
   }
   