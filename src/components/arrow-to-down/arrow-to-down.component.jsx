import React from 'react';

import { LinkToSection } from '../link-to-section';

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

export default ArrowToDown;
