import PropTypes from 'prop-types';
import React from 'react';

import Styles from './container.module.scss';

export const Container = ({ children, inner }) => (
  <div className={Styles[inner ? 'inner-container' : 'container']}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
  inner: PropTypes.bool,
};
