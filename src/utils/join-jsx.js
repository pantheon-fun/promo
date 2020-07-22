import reduce from 'lodash/reduce';

export const joinJSX = (array, separatorInitiator) => {
  return reduce(
    array,
    (acc, el, idx) => {
      return acc === null ? [el] : [...acc, separatorInitiator(-idx), el];
    },
    null
  );
};
