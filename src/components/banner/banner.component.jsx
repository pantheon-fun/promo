import React from 'react';
import Img from 'gatsby-image';

import { ReservationButton } from '../reservation-button';
import { Icon } from '../icon';

import { joinJSX } from '../../utils/join-jsx';

import Styles from './banner.module.scss';

const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  // TODO: console.log(siteLogo.alt);
  return (
    <div className={`${className} ${Styles.banner}`}>
      <Img fixed={siteLogo.img.asset.fixed} className={Styles.siteLogo} alt={siteLogo.alt} />
      <h1 className={Styles.siteTitle}>{siteTitle}</h1>
      <p className={Styles.hints}>
        {joinJSX(
          hints.map((hint, i) => <span key={i}>{hint}</span>),
          id => (
            <Icon key={id} className={Styles.crosshairsIcon} name="crosshairs" />
          )
        )}
      </p>
      <ReservationButton className={Styles.reservationButton}>
        {mainReservationButton}
      </ReservationButton>
    </div>
  );
};

export default Banner;
