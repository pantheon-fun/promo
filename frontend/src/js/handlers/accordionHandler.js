import { elements } from '../utils/elements';

const { accordion } = elements;

const getContent = el => el.children[1];

const toggleAccordionPanel = (curPanel, panels) => {
  const HEIGHT_CORRECTION = 20;

  const isCurActive = curPanel.classList.contains('active');

  panels.forEach(el => {
    el.classList.remove('active');
    getContent(el).style.height = null;
  });

  if (!isCurActive) {
    curPanel.classList.add('active');
    getContent(curPanel).style.height = `
      ${getContent(curPanel).scrollHeight + HEIGHT_CORRECTION}px
    `;
  }
};

export const activateAccordion = () => {
  const panels = [...accordion.children];

  panels.forEach((el, i, els) => {
    el.addEventListener('click', e => {
      toggleAccordionPanel(e.currentTarget, els);
    });
  });
};
