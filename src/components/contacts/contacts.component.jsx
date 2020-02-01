import PropTypes from 'prop-types';
import React from 'react';

import Styles from './contacts.module.scss';

export const Contacts = ({ className, address, telNumber }) => (
  <div className={`${className} ${Styles.contacts}`}>
    <button data-smooth-scroll-to="references-section" className={Styles.address}>
      {address}
    </button>
    <br />
    <div className={Styles.tel}>
      <i className={`icon-phone ${Styles.telIcon}`}></i>
      <a href={`tel:${telNumber.replace(/\s/g, '')}`} className={Styles.telNumber}>
        {telNumber}
      </a>
    </div>
  </div>
);

Contacts.propTypes = {
  className: PropTypes.string,
};
