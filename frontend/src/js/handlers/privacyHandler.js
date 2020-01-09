import { showLightbox, fillLightboxWithChild } from './lightboxHandler';

import { privacyHtml } from '../data/privacyData';

export const activatePrivacy = () => {
  const privacyButtons = document.querySelectorAll('[data-button="privacy"]');

  privacyButtons.forEach(privacyButton => {
    privacyButton.addEventListener('click', () => {
      const privacy = document.createElement('div');

      privacy.innerHTML = privacyHtml;

      showLightbox();
      fillLightboxWithChild(privacy);
    });
  });
};
