import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import { Heading } from '../../../../common/heading';
import { Text } from '../../../../common/text';

import css from './special-offers.module.scss';

const GamePrice = ({ className, specialOffers }) => {
  return (
    <div className={cx(className, css.wrapper)}>
      <Heading className={css.heading} sub>
        Акции
      </Heading>
      {map(specialOffers, ({ offerBody, offerName }, idx) => {
        return (
          <React.Fragment key={idx}>
            <h5 className={css.subHeading}>{offerName}</h5>
            <Text className={css.offerContent}>{offerBody}</Text>
          </React.Fragment>
        );
      })}
    </div>
  );
};

GamePrice.propTypes = {
  className: PropTypes.string,
  specialOffers: PropTypes.arrayOf(
    PropTypes.exact({
      offerBody: PropTypes.string,
      offerName: PropTypes.string,
    })
  ).isRequired,
};

GamePrice.defaultProps = {
  className: '',
};

export default GamePrice;
