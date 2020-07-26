import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import split from 'lodash/split';

import { Icon } from '../../../../common/icon';
import { LinkToSection } from '../../../../common/link-to-section';
import { Heading } from '../../../../common/heading';
import { Text } from '../../../../common/text';

import css from './game-price.module.scss';

const SESSIONS = ['1 час', '2 часа', '+ час'];

const PriceElement = ({ price }) => {
  return (
    <LinkToSection to="reservation-section" block="center" className={css.priceElement}>
      {price} <Icon name="rouble" />
    </LinkToSection>
  );
};

PriceElement.propTypes = {
  price: PropTypes.string.isRequired,
};

const GamePrice = ({ className, prices, priceDetails }) => {
  const sessions = map(SESSIONS, (sessionTime, idx) => {
    const [value, unit] = split(sessionTime, ' ');

    return (
      <div key={idx} className={css.time}>
        {value === '+' ? <Icon name="plus" /> : value} {unit}
      </div>
    );
  });

  return (
    <div className={cx(className, css.wrapper)}>
      <Heading className={css.heading} sub>
        Игра
      </Heading>
      {map(prices, ({ priceTitle, priceOneHour, priceTwoHours, pricePlusHour }, idx) => {
        return (
          <React.Fragment key={idx}>
            <h5 className={css.subHeading}>{priceTitle}</h5>
            <div className={css.columnsContainer}>
              <PriceElement price={priceOneHour} />
              <PriceElement price={priceTwoHours} />
              <PriceElement price={pricePlusHour} />
            </div>
            <div className={css.columnsContainer}>{sessions}</div>
          </React.Fragment>
        );
      })}
      {map(priceDetails, (priceDetail, idx) => {
        return (
          <Text className={css.details} key={idx}>
            {priceDetail}
          </Text>
        );
      })}
    </div>
  );
};

GamePrice.propTypes = {
  className: PropTypes.string,
  prices: PropTypes.arrayOf(
    PropTypes.exact({
      priceTitle: PropTypes.string,
      priceOneHour: PropTypes.number,
      priceTwoHours: PropTypes.number,
      pricePlusHour: PropTypes.number,
    })
  ).isRequired,
  priceDetails: PropTypes.arrayOf(PropTypes.string),
};

GamePrice.defaultProps = {
  className: '',
  priceDetails: [],
};

export default GamePrice;
