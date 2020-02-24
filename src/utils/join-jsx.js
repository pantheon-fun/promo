export const joinJSX = (array, separatorInitiator) => {
  return array.reduce((acc, el, i) => {
    return acc === null ? [el] : [...acc, separatorInitiator(-i), el];
  }, null);
};
