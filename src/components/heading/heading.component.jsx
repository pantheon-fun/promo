import React from 'react';

import Styles from './heading.module.scss';

const Heading = ({ children, sub, className, pure }) => {
  if (sub) {
    return <h3 className={`${className} ${pure ? Styles.pure : Styles.subHeading}`}>{children}</h3>;
  }

  return <h2 className={`${className} ${pure ? Styles.pure : Styles.heading}`}>{children}</h2>;
};

export default Heading;
