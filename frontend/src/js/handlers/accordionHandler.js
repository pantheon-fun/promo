import { elements } from '../utils/appElements';

const { accordion } = elements;

export const toggleAccordionElement = el => {
  el.classList.toggle('active');
};
export const activateAccordion = () => {
  const accordionElements = [...accordion.children];

  accordionElements.forEach(item => {
    item.addEventListener('click', e => {
      toggleAccordionElement(e.currentTarget);
    });
  });
};
