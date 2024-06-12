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