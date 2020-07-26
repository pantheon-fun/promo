import React from 'react';

import css from './price-table.module.scss';

import { Icon } from '../../../../common/icon';
import { LinkToSection } from '../../../../common/link-to-section';

// TODO: Clean it up
const PriceElement = ({ price }) => {
  return (
    <LinkToSection to="reservation-section" block="center" className={css.priceElement}>
      {price} <Icon name="rouble" />
    </LinkToSection>
  );
};

const PriceTable = ({ className, tableData, title }) => {
  const playersData = tableData.rows[0].cells.slice(1);
  const timeData = tableData.rows.slice(1).map((row) => row.cells[0]);
  const priceData = tableData.rows.slice(1).map((row) => row.cells.slice(1));

  return (
    <div className={`${className} ${css.priceListCard}`}>
      <h4 className={css.heading}>{title}</h4>
      <div className={css.players}>
        {playersData.map((numberOfPlayers, idx) => {
          return (
            <div key={idx} className={css.numberOfPlayers}>
              <Icon name="user" /> {numberOfPlayers}
            </div>
          );
        })}
      </div>
      <div className={css.session}>
        {timeData.map((timeValue, idx) => {
          const [value, unit] = timeValue.split(' ');

          return (
            <div key={idx} className={css.time}>
              {value === '+' ? <Icon name="plus" /> : value}
              <br />
              {unit}
            </div>
          );
        })}
      </div>
      <div className={css.prices}>
        {priceData.map((row, rowIdx) => {
          const isEveryEqual = row.every((price, idx, row) => price === row[0]);

          return (
            <div
              key={rowIdx}
              className={`${css.pricesRow} ${isEveryEqual ? css.pricesRow_3 : css.pricesRow_1_1_1}`}
            >
              {isEveryEqual ? (
                <PriceElement price={row[0]} />
              ) : (
                row.map((price, idx) => {
                  return <PriceElement price={price} key={(rowIdx + 1) * (idx + 1)} />;
                })
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceTable;
