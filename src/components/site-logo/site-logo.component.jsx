import PropTypes from 'prop-types';
import React from 'react';

import Styles from './contacts.module.scss';

export const Contacts = ({ className }) => (
  <div className={`${className} ${Styles.contacts}`}>
    <div class="first__site-logo site-logo">
      <picture>
        <source type="image/webp" srcset="./images/logo/logo-345w-2x.webp 345w" />
        <source type="image/png" srcset="./images/logo/logo-345w-2x.png 345w" />
        <img
          src="./images/logo/logo-345w-2x.png"
          class="site-logo__img lazyload"
          alt="Логотип клуба активно-тактических игр «Pantheon»"
        />
      </picture>
    </div>
  </div>
);

Contacts.propTypes = {
  className: PropTypes.string,
};
