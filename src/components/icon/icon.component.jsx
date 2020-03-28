import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, name }) => {
  return <i className={`${className} icon-${name}`} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
