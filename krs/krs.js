function toggleDetails() {
     var details = document.querySelector('.bg-matkul');
     var button = document.querySelector('button');
     if (details.style.display === 'none') {
       details.style.display = 'block';
       button.innerHTML = '<i class="fas fa-chevron-up"></i>'; // Mengubah teks dan ikon tombol
       details.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
       details.style.display = 'none';
       button.innerHTML =  '<i class="fas fa-chevron-down"></i>'; // Mengubah teks dan ikon tombol
     }
   }

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
  