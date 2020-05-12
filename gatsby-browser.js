/* eslint-disable react/jsx-filename-extension */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'intersection-observer';
import 'smooth-smooth-scroll/polyfill';

import React from 'react';
import PropTypes from 'prop-types';

import './src/styles/main.scss';

const App = ({ children }) => {
  return children;
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
