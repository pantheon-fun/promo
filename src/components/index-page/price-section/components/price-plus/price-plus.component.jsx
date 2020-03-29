import React from 'react';
import PropTypes from 'prop-types';

import Styles from './price-plus.module.scss';

import { Heading } from '../../../../common/heading';

const PricePlus = ({ plus, description }) => {
  return (
    <li className={Styles.pricePlus}>
      <Heading sub className={Styles.heading}>
        {plus}
      </Heading>
      <p className={Styles.description}>{description}</p>
    </li>
  );
};

PricePlus.propTypes = {
  plus: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricePlus;
