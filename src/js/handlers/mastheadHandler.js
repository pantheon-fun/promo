import { elements } from '../utils/appElements';

const { firstSection, mastheadElement } = elements;

export const activateMasthead = () => {
  window.addEventListener('scroll', () => {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const firstSectionHeight = firstSection.offsetHeight;

    if (scroll > firstSectionHeight - 10) {
      mastheadElement.classList.add('shown');
    } else {
      mastheadElement.classList.remove('shown');
    }
  });
};
