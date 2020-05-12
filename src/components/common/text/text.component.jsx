import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import Styles from './text.module.scss';

const Text = ({ children }) => {
  return <ReactMarkdown className={Styles.text} source={children} />;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
