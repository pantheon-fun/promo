import React from 'react';

export const ReservationButton = ({ className, children }) => (
  <button
    data-smooth-scroll-to="reservation-section"
    data-smooth-scroll-block="center"
    className={`${className}`}
  >
    {children}
  </button>
);
