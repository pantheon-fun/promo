import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './container.module.scss';

const Container = ({ children, inner, className }) => {
  return (
    <div className={cx(className, css[inner ? 'innerContainer' : 'container'])}>{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  inner: PropTypes.bool,
  className: PropTypes.string,
};

Container.defaultProps = {
  inner: false,
  className: '',
};

export default Container;
