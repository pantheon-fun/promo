import Styles from './accordion.module.scss';

const getContent = el => el.children[1];

export const handleAccordionPanelClick = e => {
  const HEIGHT_CORRECTION = 20;

  const target = e.currentTarget;
  const accordionPanels = [...target.parentElement.children];

  const isCurActive = target.classList.contains(Styles.active);

  accordionPanels.forEach(el => {
    el.classList.remove(Styles.active);
    getContent(el).style.height = null;
  });

  if (!isCurActive) {
    target.classList.add(Styles.active);
    getContent(target).style.height = `
        ${getContent(target).scrollHeight + HEIGHT_CORRECTION}px
      `;
  }
};
