import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { fixedImageType } from '../../../../../utils/common-types';
import { ReservationButton } from '../reservation-button';
import { Icon } from '../../../../common/icon';

import { joinJSX } from '../../../../../utils/join-jsx';

import css from './banner.module.scss';

const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  return (
    <div className={`${className} ${css.banner}`}>
      <Img fixed={siteLogo.img.asset.fixed} className={css.siteLogo} alt={siteLogo.alt} />
      <h1 className={css.siteTitle}>{siteTitle}</h1>
      <p className={css.hints}>
        {joinJSX(
          map(hints, (hint, idx) => <span key={idx}>{hint}</span>),
          (id) => (
            <Icon key={id} className={css.crosshairsIcon} name="crosshairs" />
          )
        )}
      </p>
      <ReservationButton className={css.reservationButton}>
        {mainReservationButton}
      </ReservationButton>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
  hints: PropTypes.arrayOf(PropTypes.string).isRequired,
  siteLogo: fixedImageType.isRequired,
  mainReservationButton: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  className: '',
};

export default Banner;
