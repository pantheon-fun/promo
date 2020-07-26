import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Heading } from '../../../../common/heading';
import { Text } from '../../../../common/text';

import css from './special-offers.module.scss';

const GamePrice = ({ className }) => {
  return (
    <div className={cx(className, css.wrapper)}>
      <Heading className={css.heading} sub>
        Акции
      </Heading>
      <h5 className={css.subHeading}>Комплекс «День Рождения»</h5>
      <Text className={css.offerContent}>
        {`
- Именинник играет **бесплатно**
- Дополнительный раунд против *«Монстра»*
- Фотосъёмка
- Банкетный зал
- Дополнительные **30&nbsp;минут** на поздравления

_Минимальное время игры **2&nbsp;часа**_

_Минимальная оплата за **5** человек_
      `}
      </Text>

      <h5 className={css.subHeading}>Спеццена для больших групп</h5>
      <Text className={css.offerContent}>
        {`
Скидка **10%** от **12** игроков

Скидка **20%** от **22** игроков

**\\*** Спеццена **распространяется** на *Комплекс&nbsp;«День&nbsp;Рождения»*
      `}
      </Text>
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
