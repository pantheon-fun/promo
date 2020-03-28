import React from 'react';

import Styles from './container.module.scss';

const Container = ({ children, inner, className }) => (
  <div className={`${className} ${Styles[inner ? 'innerContainer' : 'container']}`}>{children}</div>
);

export default Container;
