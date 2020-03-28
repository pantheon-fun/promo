import React from 'react';

import Styles from './price-plus.module.scss';
import { Heading } from '../heading';

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

export default PricePlus;
