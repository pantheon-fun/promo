import PropTypes from 'prop-types';
import React from 'react';

import { make as PageInnerLinkComponent } from '@/components/PageInnerLinkComponent.bs';

const ReservationButton = ({ className, children }) => {
  return (
    <PageInnerLinkComponent to="reservation-section" block={1} className={className}>
      {children}
    </PageInnerLinkComponent>
  );
};

ReservationButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ReservationButton.defaultProps = {
  className: '',
};

export default ReservationButton;
