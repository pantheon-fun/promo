import { elements } from '../utils/elements';

const { accordion } = elements;

const onAccordionElClick = (el, allEls) => {
  const isClickOnActive = el.classList.contains('active');

  allEls.forEach((tmpEl) => {
    tmpEl.classList.remove('active');
  });

  if (!isClickOnActive) {
    el.classList.add('active');
  }
};

export const activateAccordion = () => {
  const accordionEls = [...accordion.children];

  accordionEls.forEach((el, i, allEls) => {
    el.addEventListener('click', e => {
      onAccordionElClick(e.currentTarget, allEls);
    });
  });
};
