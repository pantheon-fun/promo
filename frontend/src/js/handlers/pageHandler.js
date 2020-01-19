import { elements } from '../utils/elements';

const { page } = elements;

export const appendPageChild = child => {
  page.appendChild(child);
};

export const preventPageScroll = () => {
  page.style.overflow = 'hidden';
};

export const allowPageScroll = () => {
  page.style.overflow = 'auto';
};
