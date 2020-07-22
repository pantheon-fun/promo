import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

import Styles from './schedule.module.scss';

import {
  SCHEDULE_BOOKFORM_WIDGET_ID,
  WIDGET_OBERVER_OPTIONS,
} from '../../../../../utils/constants';
import { initWidget } from '../../../../../utils/bookform';

import { Spinner } from '../../../../common/spinner';
import { Heading } from '../../../../common/heading';

const Schedule = ({ className }) => {
  const [ref, inView] = useInView(WIDGET_OBERVER_OPTIONS);

  useEffect(() => {
    if (inView === true) {
      initWidget(SCHEDULE_BOOKFORM_WIDGET_ID);
    }
  }, [inView]);

  return (
    <div className={cx(className, Styles.schedule)}>
      <Heading sub className={Styles.heading}>
        Выберите удобное время игры
      </Heading>
      <div
        ref={ref}
        className={Styles.container}
        id={`bookform-embedded-widget-${SCHEDULE_BOOKFORM_WIDGET_ID}`}
      >
        <Spinner />
      </div>
    </div>
  );
};

Schedule.propTypes = {
  className: PropTypes.string,
};

Schedule.defaultProps = {
  className: '',
};

export default Schedule;
