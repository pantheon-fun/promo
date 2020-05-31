/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => {
  return children;
};

export const onClientEntry = async () => {
  await import('./src/styles/main.scss');
  await import('smooth-smooth-scroll/polyfill');

  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
