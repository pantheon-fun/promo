export const initWidget = widgetId => {
  window.BookformObject = 'Bookform';
  window.Bookform = window.Bookform || { q: [] };

  const js = document.createElement('script');
  const fjs = document.getElementsByTagName('script')[0];
  js.id = 'Bookform';
  js.src = `https://widget.bookform.ru/${widgetId}/js`;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);

  window.Bookform.q.push(['embedded', { id: widgetId }]);
};
