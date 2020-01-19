const elementsAndTheirIdsFromTemplate = {
  page: 'page',
  firstSection: 'first-section',
  mastheadElement: 'masthead-element',
  accordion: 'accordion',
  calculator: 'calculator',
  schedule: 'schedule',
  bookform: 'bookform',
  map: 'map',
  contactCard: 'contact-card',
  form: 'form',
};

export const elements = Object.entries(elementsAndTheirIdsFromTemplate).reduce(
  (acc, [name, id]) => ({
    ...acc,
    [name]: document.getElementById(id),
  }),
  {}
);
