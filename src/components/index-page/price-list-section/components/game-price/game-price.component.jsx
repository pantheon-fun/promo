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

const GamePrice = ({ className }) => {
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
      <h5 className={css.subHeading}>Понедельник - Четверг</h5>
      <div className={css.columnsContainer}>
        <PriceElement price="600" />
        <PriceElement price="900" />
        <PriceElement price="500" />
      </div>
      <div className={css.columnsContainer}>{sessions}</div>
      <h5 className={css.subHeading}>Пятница - Воскресенье и праздники</h5>
      <div className={css.columnsContainer}>
        <PriceElement price="800" />
        <PriceElement price="1200" />
        <PriceElement price="600" />
      </div>
      <div className={css.columnsContainer}>{sessions}</div>
      <Text className={css.details}>Стоимость указана за одного участника</Text>
      <Text className={css.details}>Минимальная оплата за **6** человек</Text>
      <Text className={css.details}>Максимальное количество игрков&nbsp;-&nbsp;**30**</Text>
    </div>
  );
};

GamePrice.propTypes = {
  className: PropTypes.string,
};

GamePrice.defaultProps = {
  className: '',
};

export default GamePrice;
