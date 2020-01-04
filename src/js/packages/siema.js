import Siema from 'siema';

export const activateSiemaSlider = () => {
  const DELAY_TIME = 2500;

  const mySiema = new Siema({
    selector: '.carousel',
    duration: 350,
    loop: true
  });

  let autoplay = setInterval(() => mySiema.next(), DELAY_TIME);

  const cancelAutoplay = () => {
    clearInterval(autoplay);
  };

  const reAutoplay = () => {
    clearInterval(autoplay);
    autoplay = setInterval(() => mySiema.next(), DELAY_TIME);
  };

  const slides = document.querySelectorAll('.carousel__slide');
  slides.forEach(slide => {
    slide.addEventListener('mousedown', cancelAutoplay);
    slide.addEventListener('touchstart', cancelAutoplay);
    slide.addEventListener('mouseup', reAutoplay);
    slide.addEventListener('mouseleave', reAutoplay);
    slide.addEventListener('touchend', reAutoplay);
  });

  const arrows = document.querySelectorAll('.swipe-arrow');
  arrows.forEach(arrow => {
    arrow.addEventListener('mouseenter', cancelAutoplay);
    arrow.addEventListener('touchstart', cancelAutoplay);
    arrow.addEventListener('mouseleave', reAutoplay);
    arrow.addEventListener('touchend', reAutoplay);
    arrow.addEventListener('click', e => {
      switch (e.target.dataset.siemaArrow) {
        case 'next':
          mySiema.next();
          break;
        case 'prev':
          mySiema.prev();
          break;
        default:
          throw new Error('Wrong dataset for siema control arrows.');
      }
    });
  });
};
