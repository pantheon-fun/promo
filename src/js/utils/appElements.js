const elementsAndTheirIdsFromTemplate = {
  page: 'page',
  firstSection: 'first-section',
  mastheadElement: 'masthead-element',
  accordion: 'accordion'
};

export const elements = Object.fromEntries(
  Object.entries(elementsAndTheirIdsFromTemplate).map(([name, id]) => [
    name,
    document.getElementById(id)
  ])
);
