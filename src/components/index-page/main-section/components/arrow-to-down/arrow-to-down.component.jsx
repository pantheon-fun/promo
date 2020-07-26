import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { LinkToSection } from '../../../../common/link-to-section';

import css from './arrow-to-down.module.scss';
import icon from './arrow-to-down.icon.svg';

const ArrowToDown = ({ className }) => (
  <div className={cx(className, css.arrowToDown)}>
    <LinkToSection to="about-us-section" className={css.button}>
      <img
        className={css.icon}
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
