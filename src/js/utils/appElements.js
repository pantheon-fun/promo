const elementsAndTheirIdsFromTemplate = {
  app: 'app',
  firstSection: 'first-section',
  mastheadElement: 'masthead-element'
};

export const elements = Object.fromEntries(
  Object.entries(elementsAndTheirIdsFromTemplate).map(([name, id]) => [
    name,
    document.getElementById(id)
  ])
);
