import React from 'react';

import Styles from './container.module.scss';

export const Container = ({ children, inner }) => (
  <div className={Styles[inner ? 'innerContainer' : 'container']}>{children}</div>
);
