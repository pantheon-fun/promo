import PropTypes from 'prop-types';
import React from 'react';

import Styles from './contacts.module.scss';

export const Contacts = ({ className }) => {
  console.log(Styles);

  return (
    <div className={`${className} ${Styles.contacts}`}>
      <button data-smooth-scroll-to="references-section" className={Styles.address}>
        Олимпийский проспект 20к1, Мытищи
      </button>
      <br />
      <div className={Styles.tel}>
        <i className={`icon-phone ${Styles.telIcon}`}></i>
        <a href="tel:+79777220960" className={Styles.telNumber}>
          +7 977 722 09 60
        </a>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  className: PropTypes.string,
};
