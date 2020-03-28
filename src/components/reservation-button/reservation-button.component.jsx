import React from 'react';

const ReservationButton = ({ className, children }) => (
  <button
    data-smooth-scroll-to="reservation-section"
    data-smooth-scroll-block="center"
    className={`${className}`}
  >
    {children}
  </button>
);

export default ReservationButton;
