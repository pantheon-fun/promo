import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './heading.module.scss';

const Heading = ({ children, sub, className, pure }) => {
  if (sub) {
    return <h3 className={cx(className, pure ? css.pure : css.subHeading)}>{children}</h3>;
  }

  return <h2 className={cx(className, pure ? css.pure : css.heading)}>{children}</h2>;
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
  pure: false,
};

export default Heading;
