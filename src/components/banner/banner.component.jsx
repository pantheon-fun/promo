import React from 'react';
import Img from 'gatsby-image';

import { ReservationButton } from '../reservation-button/reservation-button.component';

import Styles from './banner.module.scss';

export const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  // console.log(siteLogo.alt);
  return (
    <div className={`${className} ${Styles.banner}`}>
      <Img fixed={siteLogo.img.asset.fixed} className={Styles.siteLogo} alt={siteLogo.alt} />
      <h1 className={Styles.siteTitle}>{siteTitle}</h1>
      <p className={Styles.hints}>
        {hints
          .map((hint, i) => <span key={i}>{hint}</span>)
          .reduce((acc, el, i) => {
            return acc === null
              ? [el]
              : [
                  ...acc,
                  <i key={-i} className={`icon-crosshairs ${Styles.crosshairsIcon}`}></i>,
                  el,
                ];
          }, null)}
      </p>
      <ReservationButton className={Styles.reservationButton}>
        {mainReservationButton}
      </ReservationButton>
    </div>
  );
};
