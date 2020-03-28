import React from 'react';
import PropTypes from 'prop-types';

import Styles from './heading.module.scss';

const Heading = ({ children, sub, className, pure }) => {
  if (sub) {
    return <h3 className={`${className} ${pure ? Styles.pure : Styles.subHeading}`}>{children}</h3>;
  }

  return <h2 className={`${className} ${pure ? Styles.pure : Styles.heading}`}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.string,
  sub: PropTypes.bool,
  className: PropTypes.string,
  pure: PropTypes.bool,
};

Heading.defaultProps = {
  children: '',
  sub: false,
  className: '',
  pure: true,
};

export default Heading;
