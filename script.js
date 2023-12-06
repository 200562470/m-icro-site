// JavaScript to control slideshow behavior
const slides = document.querySelector('.slides');

function startSlide() {
  let slideWidth = slides.scrollWidth;
  slides.style.width = slideWidth + 'px';
}

window.onload = startSlide;
