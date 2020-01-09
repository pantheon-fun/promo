import { renderHtmlInContainer } from '../helpers/renderHelpers';

import { appendPageChild, preventPageScroll, allowPageScroll } from './pageHandler';

import { spinnerHtml } from '../data/spinnerData';

const initLightbox = () => {
  const element = document.createElement('div');
  element.id = 'lightbox';
  appendPageChild(element);

  return element;
};

const lightbox = initLightbox();

export const refreshLightbox = () => {
  renderHtmlInContainer(spinnerHtml, lightbox);
};

export const clearLightbox = () => {
  renderHtmlInContainer('', lightbox);
};

export const showLightbox = () => {
  refreshLightbox();
  lightbox.classList.add('active');
  preventPageScroll();
};

export const hideLightbox = () => {
  clearLightbox();
  lightbox.classList.remove('active');
  allowPageScroll();
};

export const listenToClose = () => {
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    hideLightbox();
  });
};

export const fillLightboxWithChild = child => {
  clearLightbox();
  lightbox.appendChild(child);
  listenToClose();
};

export const fillLightboxWithHtml = html => {
  renderHtmlInContainer(html, lightbox);
  listenToClose();
};
