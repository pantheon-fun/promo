import React from 'react';

export const LinkToSection = ({ className, children, to, block = 'start' }) => (
  <button data-smooth-scroll-to={to} data-smooth-scroll-block={block} className={className}>
    {children}
  </button>
);
