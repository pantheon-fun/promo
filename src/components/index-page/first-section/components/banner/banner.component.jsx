import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { ReservationButton } from '../reservation-button';
import { Icon } from '../../../../common/icon';

import { joinJSX } from '../../../../../utils/join-jsx';

import Styles from './banner.module.scss';

const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  return (
    <div className={`${className} ${Styles.banner}`}>
      <Img fixed={siteLogo.img.asset.fixed} className={Styles.siteLogo} alt={siteLogo.alt} />
      <h1 className={Styles.siteTitle}>{siteTitle}</h1>
      <p className={Styles.hints}>
        {joinJSX(
          map(hints, (hint, idx) => <span key={idx}>{hint}</span>),
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

Banner.propTypes = {
  className: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
  hints: PropTypes.arrayOf(PropTypes.string).isRequired,
  siteLogo: PropTypes.shape({
    img: PropTypes.shape({
      asset: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  mainReservationButton: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  className: '',
};

export default Banner;
