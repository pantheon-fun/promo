import React from 'react';
import PropTypes from 'prop-types';

const LinkToSection = ({ className, children, to, inline, block }) => (
  <button
    data-smooth-scroll-to={to}
    data-smooth-scroll-inline={inline}
    data-smooth-scroll-block={block}
    className={className}
    type="button"
  >
    {children}
  </button>
);

LinkToSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  inline: PropTypes.string,
  block: PropTypes.string,
};

LinkToSection.defaultProps = {
  className: '',
  inline: 'nearest',
  block: 'start',
};

export default LinkToSection;
