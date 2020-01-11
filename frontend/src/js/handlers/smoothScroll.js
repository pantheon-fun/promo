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
  const links = [...document.querySelectorAll('[data-smooth-scroll-to]')];

  links.forEach(link => {
    link.addEventListener('click', e => {
      smoothScrollTo(e.currentTarget.dataset.smoothScrollTo);
    });
  });
};
