import { showLightbox, fillLightboxWithChild } from './lightboxHandler';

import { elements } from '../utils/elements';

const { bookform } = elements;

export const activateBookform = () => {
  const bookformWidget = document.createElement('div');
  bookformWidget.id = 'bookform-embedded-widget-3458';

  bookform.addEventListener('click', () => {
    showLightbox();

    window.BookformObject = 'Bookform';
    window.Bookform = window.Bookform || { q: [] };

    fillLightboxWithChild(bookformWidget);

    const js = document.createElement('script');
    const fjs = document.getElementsByTagName('script')[0];
    js.id = 'Bookform';
    js.src = 'https://widget.bookform.ru/3458/js';
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);

    window.Bookform.q.push(['embedded', { id: 3458 }]);
  });
};
