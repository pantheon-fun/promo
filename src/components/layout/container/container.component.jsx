import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Styles from './container.module.scss';

const Container = ({ children, inner, className }) => (
  <div className={cn(className, Styles[inner ? 'innerContainer' : 'container'])}>{children}</div>
);

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
