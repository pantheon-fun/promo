/* eslint-disable react/jsx-filename-extension */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'intersection-observer';
import 'smooth-smooth-scroll/polyfill';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { initSmoothScroll } from 'smooth-smooth-scroll';

import './src/styles/main.scss';

const App = ({ children }) => {
  useEffect(() => {
    return initSmoothScroll();
  }, []);

  return children;
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
