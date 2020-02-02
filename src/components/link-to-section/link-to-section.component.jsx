import React from 'react';

export const LinkToSection = ({ className, children, href }) => (
  <button data-smooth-scroll-to={href} data-smooth-scroll-block="start" className={`${className}`}>
    {children}
  </button>
);
