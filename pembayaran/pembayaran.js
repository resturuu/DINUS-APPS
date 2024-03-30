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
   

// gulir
   document.addEventListener("DOMContentLoaded", function() {
     const regulerSection = document.getElementById("reguler");
     const nonRegulerSection = document.getElementById("non-reguler");
   
     // Menambahkan event listener untuk peristiwa guliran
     document.addEventListener("scroll", function() {
       // Mendapatkan posisi vertikal dari bagian reguler dan non-reguler
       const regulerPosition = regulerSection.getBoundingClientRect().top;
       const nonRegulerPosition = nonRegulerSection.getBoundingClientRect().top;
   
       // Mengatur perilaku berdasarkan posisi guliran
       if (Math.abs(regulerPosition) < window.innerHeight / 2) {
         // Jika bagian reguler berada di tengah-tengah layar atau lebih dekat
         document.getElementById("nav-reguler").classList.add("active");
         document.getElementById("nav-non-reguler").classList.remove("active");
       } else if (Math.abs(nonRegulerPosition) < window.innerHeight / 2) {
         // Jika bagian non-reguler berada di tengah-tengah layar atau lebih dekat
         document.getElementById("nav-non-reguler").classList.add("active");
         document.getElementById("nav-reguler").classList.remove("active");
       }
     });
   });
   