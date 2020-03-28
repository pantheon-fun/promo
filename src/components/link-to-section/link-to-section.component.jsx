import React from 'react';

const LinkToSection = ({ className, children, to, inline = 'nearest', block = 'start' }) => (
  <button
    data-smooth-scroll-to={to}
    data-smooth-scroll-inline={inline}
    data-smooth-scroll-block={block}
    className={className}
  >
    {children}
  </button>
);

export default LinkToSection;
