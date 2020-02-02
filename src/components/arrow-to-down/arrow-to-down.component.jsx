import React from 'react';

import { LinkToSection } from '../../components/link-to-section/link-to-section.component';

import Styles from './arrow-to-down.module.scss';
import icon from './arrow-to-down.icon.svg';

export const ArrowToDown = ({ className }) => (
  <div className={`${className} ${Styles.arrowToDown}`}>
    <LinkToSection href="about-us-section" className={Styles.button}>
      <img
        className={Styles.icon}
        src={icon}
        alt="Стрелочка вниз. Листайте дальше, там много интересного!"
      />
    </LinkToSection>
  </div>
);
