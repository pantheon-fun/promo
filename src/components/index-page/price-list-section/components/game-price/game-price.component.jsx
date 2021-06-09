import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import { Icon } from '../../../../common/icon';
import { LinkToSection } from '../../../../common/link-to-section';
import { Heading } from '../../../../common/heading';
import { Text } from '../../../../common/text';

import css from './game-price.module.scss';

const SESSIONS = ['2 часа', '3 часа'];

const PriceElement = ({ price, session, className }) => {
  return (
    <LinkToSection
      to="reservation-section"
      block="center"
      className={cx(css.priceElement, className)}
    >
      <div className={css.session}>{session}</div>
      <div className={css.price}>
        {price} <Icon className={css.priceIcon} name="rouble" />
      </div>
    </LinkToSection>
  );
};

PriceElement.propTypes = {
  className: PropTypes.string,
  price: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
};

PriceElement.defaultProps = {
  className: '',
};

const GamePrice = ({ className, prices, priceDetails }) => {
  return (
    <div className={cx(className, css.wrapper)}>
      <Heading className={css.heading} sub>
        Игра
      </Heading>
      {map(prices, ({ priceTitle, priceThreeHours, priceTwoHours }, idx) => {
        return (
          <React.Fragment key={idx}>
            <h5 className={css.subHeading}>{priceTitle}</h5>
            <div className={css.prices}>
              {map([priceTwoHours, priceThreeHours], (price, priceIdx) => {
                return (
                  <PriceElement
                    key={price}
                    className={css.priceElementOuter}
                    price={price}
                    session={SESSIONS[priceIdx]}
                  />
                );
              })}
            </div>
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
      priceThreeHours: PropTypes.number,
      priceTwoHours: PropTypes.number,
    })
  ).isRequired,
  priceDetails: PropTypes.arrayOf(PropTypes.string),
};

GamePrice.defaultProps = {
  className: '',
  priceDetails: [],
};

export default GamePrice;
