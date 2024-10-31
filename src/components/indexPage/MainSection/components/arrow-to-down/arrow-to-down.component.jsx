import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { make as LocalImageComponent } from '@/components/LocalImageComponent.bs';
import { make as PageInnerLinkComponent } from '@/components/PageInnerLinkComponent.bs';

import iconParams from './arrow-to-down.icon.svg';

import css from './arrow-to-down.module.scss';

const ArrowToDown = ({ className }) => {
  return (
    <div className={cx(className, css.arrowToDown)}>
      <PageInnerLinkComponent to="about-us-section" className={css.button}>
        <LocalImageComponent
          src={iconParams.src}
          className={css.icon}
          alt="Стрелочка вниз. Листайте дальше, там много интересного!"
        />
      </PageInnerLinkComponent>
    </div>
  );
};

ArrowToDown.propTypes = {
  className: PropTypes.string,
};

ArrowToDown.defaultProps = {
  className: '',
};

export default ArrowToDown;
