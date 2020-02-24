import React from 'react';

import Styles from './price-table.module.scss';

import { Icon } from '../../components/icon/icon.component';

const PriceElement = ({ price }) => {
  return (
    <button
      data-smooth-scroll-to="reservation-section"
      data-smooth-scroll-block="center"
      className={Styles.priceElement}
    >
      {price} <Icon name="rouble" />
    </button>
  );
};

export const PriceTable = ({ className, tableData, title }) => {
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

// <button
//   data-smooth-scroll-to="reservation-section"
//   data-smooth-scroll-block="center"
//   className="price-card__price price-card__price_sm-1h"
// >
//   600
//           <i className="icon-rouble"></i>
// </button>
//   <button
//     data-smooth-scroll-to="reservation-section"
//     data-smooth-scroll-block="center"
//     className="price-card__price price-card__price_md-1h"
//   >
//     500
//           <i className="icon-rouble"></i>
//   </button>
//   <button
//     data-smooth-scroll-to="reservation-section"
//     data-smooth-scroll-block="center"
//     className="price-card__price price-card__price_lg-1h"
//   >
//     400
//           <i className="icon-rouble"></i>
//   </button>
//   <button
//     data-smooth-scroll-to="reservation-section"
//     data-smooth-scroll-block="center"
//     className="price-card__price price-card__price_sm-2h"
//   >
//     900
//           <i className="icon-rouble"></i>
//   </button>
//   <button
//     data-smooth-scroll-to="reservation-section"
//     data-smooth-scroll-block="center"
//     className="price-card__price price-card__price_md-2h"
//   >
//     800
//           <i className="icon-rouble"></i>
//   </button>
//   <button
//     data-smooth-scroll-to="reservation-section"
//     data-smooth-scroll-block="center"
//     className="price-card__price price-card__price_lg-2h"
//   >
//     700
//           <i className="icon-rouble"></i>
//   </button>
//   <button
//     data-smooth-scroll-to="reservation-section"
//     data-smooth-scroll-block="center"
//     className="price-card__price price-card__price_add-hour"
//   >
//     200
//           <i className="icon-rouble"></i>
//   </button>
