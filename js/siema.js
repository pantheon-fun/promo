const mySiema = new Siema({
  selector: '.carousel',
  duration: 350,
  loop: true,
});

const delay = 2500;
let autoplay = setInterval(() => mySiema.next(), delay);
function cancelAutoplay(e) {
  clearInterval(autoplay);
}
function reAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => mySiema.next(), delay);
}

let slides = document.querySelectorAll(".carousel__slide");
slides.forEach(function(slide) {
  slide.addEventListener("mousedown", cancelAutoplay);
  slide.addEventListener("mouseup", reAutoplay);
  slide.addEventListener("mouseleave", reAutoplay);
  slide.addEventListener("touchstart", cancelAutoplay);
  slide.addEventListener("touchend", reAutoplay);
});

let arrows = document.querySelectorAll(".swipe-arrow");
arrows.forEach(function(arrow) {
  arrow.addEventListener("mouseenter", cancelAutoplay);
  arrow.addEventListener("touchstart", cancelAutoplay);
  arrow.addEventListener("mouseleave", reAutoplay);
  arrow.addEventListener("touchend", reAutoplay);
});
