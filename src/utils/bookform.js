export const initWidget = widgetId => {
  window.BFInit = false;
  window.BookformObject = 'Bookform';
  window.Bookform = window.Bookform || { q: [] };

  const script = document.createElement('script');
  script.id = `Bookform-${widgetId}`;
  script.src = `https://widget.bookform.ru/${widgetId}/js`;
  script.async = true;

  document.head.appendChild(script);

  window.Bookform.q = [['embedded', { id: widgetId }]];
};
