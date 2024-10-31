import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { pictureType } from '@/utils/common-types';
import { joinJSX } from '@/utils/join-jsx';

import { make as Icon } from '@/components/IconComponent.bs';
import { Picture } from '@/components/Picture';

import { ReservationButton } from '../reservation-button';

import css from './banner.module.scss';

const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  return (
    <div className={cx(className, css.banner)}>
      <Picture
        picture={siteLogo}
        className={css.siteLogo}
        priority
        layout="responsive"
        sizes="(max-width: 576px) 150px, 230px"
      />
      <h1 className={css.siteTitle}>{siteTitle}</h1>
      <p className={css.hints}>
        {joinJSX(
          hints.map((hint) => {
            return <span key={hint}>{hint}</span>;
          }),
          (id) => {
            return <Icon key={id} className={css.crosshairsIcon} name="crosshairs" />;
          }
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
  siteLogo: pictureType.isRequired,
  mainReservationButton: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  className: '',
};

export default Banner;
