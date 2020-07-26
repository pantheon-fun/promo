import React from 'react';
import PropTypes from 'prop-types';

import { LinkToSection } from '../../../../common/link-to-section';

const ReservationButton = ({ className, children }) => (
  <LinkToSection to="reservation-section" block="center" className={className}>
    {children}
  </LinkToSection>
);

ReservationButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ReservationButton.defaultProps = {
  className: '',
};

export default ReservationButton;
