function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  document.querySelectorAll('.boton-expandir').forEach(function(boton) {
    boton.addEventListener('click', function(event) {
        event.preventDefault();
        var card = this.parentNode;
        var texto = card.querySelector('.texto-expandible');
        card.style.height = 'auto';
        texto.style.height = 'auto';
    });
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault();
  Swal.fire({
    title: '¡Éxito!',
    text: 'Formulario enviado con éxito.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});