var images = document.querySelectorAll('.carousel-image');
var currentImage = 0;

function carousel() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

document.getElementById('prev').addEventListener('click', function() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
});

document.getElementById('next').addEventListener('click', function() {
    carousel();
});

setInterval(carousel, 3000); 