import { renderHtmlInContainer } from '../helpers/renderHelpers';

// import { spinnerHtml } from '../data/spinnerData';

import { elements } from '../utils/elements';

const { schedule } = elements;

export const getSchedule = () => schedule;

export const observeSchedule = observer => {
  // renderHtmlInContainer(spinnerHtml, schedule);
  observer.observe(schedule);
};

export const loadSchedule = () => {
  const scheduleHtml = `<div id="bookform-embedded-widget-4487"></div>`;

  window.BookformObject = 'Bookform';
  window.Bookform = window.Bookform || { q: [] };

  const js = document.createElement('script');
  const fjs = document.getElementsByTagName('script')[0];
  js.id = 'Bookform';
  js.src = 'https://widget.bookform.ru/4487/js';
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);

  window.Bookform.q.push(['embedded', { id: 4487 }]);

  renderHtmlInContainer(scheduleHtml, schedule);
};
