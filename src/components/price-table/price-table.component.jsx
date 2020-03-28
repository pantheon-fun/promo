import React from 'react';

import Styles from './price-table.module.scss';

import { Icon } from '../icon';
import { LinkToSection } from '../link-to-section';

const PriceElement = ({ price }) => {
  return (
    <LinkToSection to="reservation-section" block="center" className={Styles.priceElement}>
      {price} <Icon name="rouble" />
    </LinkToSection>
  );
};

const PriceTable = ({ className, tableData, title }) => {
  const playersData = tableData.rows[0].cells.slice(1);
  const timeData = tableData.rows.slice(1).map(row => row.cells[0]);
  const priceData = tableData.rows.slice(1).map(row => row.cells.slice(1));

  return (
    <div className={`${className} ${Styles.priceListCard}`}>
      <h4 className={Styles.heading}>{title}</h4>
      <div className={Styles.players}>
        {playersData.map((numberOfPlayers, idx) => {
          return (
            <div key={idx} className={Styles.numberOfPlayers}>
              <Icon name="user" /> {numberOfPlayers}
            </div>
          );
        })}
      </div>
      <div className={Styles.session}>
        {timeData.map((timeValue, idx) => {
          const [value, unit] = timeValue.split(' ');

          return (
            <div key={idx} className={Styles.time}>
              {value === '+' ? <Icon name="plus" /> : value}
              <br />
              {unit}
            </div>
          );
        })}
      </div>
      <div className={Styles.prices}>
        {priceData.map((row, rowIdx) => {
          const isEveryEqual = row.every((price, idx, row) => price === row[0]);

          return (
            <div
              key={rowIdx}
              className={`${Styles.pricesRow} ${
                isEveryEqual ? Styles.pricesRow_3 : Styles.pricesRow_1_1_1
              }`}
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
