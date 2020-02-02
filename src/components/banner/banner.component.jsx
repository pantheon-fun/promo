import React from 'react';
import Img from 'gatsby-image';

import { ReservationButton } from '../reservation-button/reservation-button.component';
import { joinJSX } from '../../helpers/join-jsx';

import Styles from './banner.module.scss';

export const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  // console.log(siteLogo.alt);
  return (
    <div className={`${className} ${Styles.banner}`}>
      <Img fixed={siteLogo.img.asset.fixed} className={Styles.siteLogo} alt={siteLogo.alt} />
      <h1 className={Styles.siteTitle}>{siteTitle}</h1>
      <p className={Styles.hints}>
        {joinJSX(
          hints.map((hint, i) => <span key={i}>{hint}</span>),
          id => (
            <i key={id} className={`icon-crosshairs ${Styles.crosshairsIcon}`}></i>
          )
        )}
      </p>
      <ReservationButton className={Styles.reservationButton}>
        {mainReservationButton}
      </ReservationButton>
    </div>
  );
};
