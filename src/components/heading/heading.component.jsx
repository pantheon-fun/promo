import React from 'react';

import Styles from './heading.module.scss';

export const Heading = ({ children, sub, className }) => {
  if (sub) {
    return <h3 className={`${className} ${Styles.subHeading}`}>{children}</h3>;
  }

  return <h2 className={`${className} ${Styles.heading}`}>{children}</h2>;
};
