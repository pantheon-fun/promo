'use strict';

/* When there will be more than one section, activate the code
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	correctSizing();
	window.addEventListener('orientationchange', function() {
		let afterOrientationChange = function() {
			correctSizing();
			window.removeEventListener('resize', afterOrientationChange);
		};
		window.addEventListener('resize', afterOrientationChange);
	});
}
*/

correctSizing();
window.addEventListener('resize', function() {
	correctSizing();
} );

function correctSizing() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}