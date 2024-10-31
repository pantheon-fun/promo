export const joinJSX = (array, separatorInitiator) => {
  return array.reduce((acc, el, idx) => {
    return acc === null ? [el] : [...acc, separatorInitiator(-idx), el];
  }, null);
};
