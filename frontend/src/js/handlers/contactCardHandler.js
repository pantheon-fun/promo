import { elements } from '../utils/appElements';

const { contactCard } = elements;

export const activateContactCard = () => {
  contactCard.addEventListener('click', e => {
    if (e.target.nodeName !== 'A') {
      e.currentTarget.classList.toggle('active');
    }
  });
};
