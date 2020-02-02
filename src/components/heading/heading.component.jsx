import React from 'react';

import Styles from './heading.module.scss';

export const Heading = ({ children, sub }) => {
  if (sub) {
    return <h3 className={Styles.subHeading}>{children}</h3>;
  }

  return <h2 className={Styles.heading}>{children}</h2>;
};
