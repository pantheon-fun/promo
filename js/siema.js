const mySiema = new Siema({
  selector: '.carousel',
  duration: 300,
  loop: true,
});

const delay = 3000;
let autoplay = setInterval(() => mySiema.next(), delay);
function cancelAutoplay(e) {
  clearInterval(autoplay);
}
function reAutoplay() {
  autoplay = setInterval(() => mySiema.next(), delay);
}

let items = document.querySelectorAll(".carousel__slide");
items.forEach(function(item) {
  item.addEventListener("mousedown", cancelAutoplay);
  item.addEventListener("touchstart", cancelAutoplay);
  item.addEventListener("mouseup", reAutoplay);
  item.addEventListener("touchend", reAutoplay);
});

let arrows = document.querySelectorAll(".swipe-arrow");
arrows.forEach(function(arrow) {
  arrow.addEventListener("mouseenter", cancelAutoplay);
  arrow.addEventListener("touchstart", cancelAutoplay);
  arrow.addEventListener("mouseleave", reAutoplay);
  arrow.addEventListener("touchend", reAutoplay);
});
