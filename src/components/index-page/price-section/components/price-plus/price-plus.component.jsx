import React from 'react';
import PropTypes from 'prop-types';

import css from './price-plus.module.scss';

import { Heading } from '../../../../common/heading';

const PricePlus = ({ plus, description }) => {
  return (
    <li className={css.pricePlus}>
      <Heading sub className={css.heading}>
        {plus}
      </Heading>
      <p className={css.description}>{description}</p>
    </li>
  );
};

PricePlus.propTypes = {
  plus: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricePlus;
