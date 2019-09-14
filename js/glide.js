"use strict";

new Glide('.glide').mount()
var glide = new Glide('.glide', {
	type: 'carousel',
	perView: 1,
	gap: 0,
	autoplay: 3250,
	animationDuration: 700,
	hoverpause: false,
	keyboard: true,
	animationTimingFunc: 'ease-out'
})
glide.mount()