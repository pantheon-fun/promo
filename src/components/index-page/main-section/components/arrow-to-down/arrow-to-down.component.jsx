import React from 'react';
import PropTypes from 'prop-types';

import { LinkToSection } from '../../../../common/link-to-section';

import Styles from './arrow-to-down.module.scss';
import icon from './arrow-to-down.icon.svg';

const ArrowToDown = ({ className }) => (
  <div className={`${className} ${Styles.arrowToDown}`}>
    <LinkToSection to="about-us-section" className={Styles.button}>
      <img
        className={Styles.icon}
        src={icon}
        alt="Стрелочка вниз. Листайте дальше, там много интересного!"
      />
    </LinkToSection>
  </div>
);

ArrowToDown.propTypes = {
  className: PropTypes.string,
};

ArrowToDown.defaultProps = {
  className: '',
};

export default ArrowToDown;
