import React from 'react';

import Styles from './container.module.scss';

export const Container = ({ children, inner, className }) => (
  <div className={`${className} ${Styles[inner ? 'innerContainer' : 'container']}`}>{children}</div>
);
