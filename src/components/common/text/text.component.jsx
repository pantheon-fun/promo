import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './text.module.scss';

const Text = ({ children, className }) => {
  return <ReactMarkdown className={cx(css.text, className)} source={children} />;
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  className: '',
};

export default Text;
