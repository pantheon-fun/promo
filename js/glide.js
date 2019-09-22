"use strict";

new Glide('.glide').mount()
var glide = new Glide('.glide', {
	type: 'carousel',
	perView: 1,
	gap: 0,
	autoplay: 3500,
	animationDuration: 350,
	hoverpause: false,
	keyboard: true,
  animationTimingFunc: 'ease-out',
  dragThreshold: 80,
  swipeThreshold: 60,
  perTouch: 1
})
glide.mount()