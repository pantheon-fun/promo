/* eslint-disable react/jsx-filename-extension */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import PropTypes from 'prop-types';

import './src/styles/main.scss';

export const wrapRootElement = ({ element }) => {
  return element;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
