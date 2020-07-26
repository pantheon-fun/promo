import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Icon = ({ className, name }) => {
  return <i className={cx(className, `icon-${name}`)} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
