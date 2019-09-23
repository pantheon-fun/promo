const mySiema = new Siema({
  selector: '.carousel',
  duration: 300,
  loop: true,
});

const delay = 3500;
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