import smoothscroll from 'smoothscroll-polyfill';

import { getOffsetTop } from '../helpers/getOffsetTop';
import { elements } from '../utils/appElements';

smoothscroll.polyfill();

const { mastheadElement } = elements;

const smoothScrollTo = elementId => {
  const el = document.getElementById(elementId);

  const extraSpace = mastheadElement.offsetHeight - 1;

  if (el.id === 'reservation-section') {
    el.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  } else {
    window.scroll({
      top: getOffsetTop(el) - extraSpace,
      behavior: 'smooth',
    });
  }
};

export const activateSmoothScroll = () => {
  document.addEventListener(
    'click',
    e => {
      /* if you have some elements inside of your button,
         then set pointer-events: none; for them */
      if (e.target.hasAttribute('data-smooth-scroll-to')) {
        smoothScrollTo(e.target.dataset.smoothScrollTo);
      }
    },
    false
  );
};
