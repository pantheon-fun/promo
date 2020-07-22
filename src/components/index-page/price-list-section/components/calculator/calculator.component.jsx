import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

import Styles from './calculator.module.scss';

import { Spinner } from '../../../../common/spinner';

import { CALC_WIDGET_ID, WIDGET_OBERVER_OPTIONS } from '../../../../../utils/constants';

const loadCalculator = () => {
  const calcScript = document.createElement('script');

  calcScript.async = true;
  calcScript.src = `${
    window.location.protocol === 'https:' ? 'https:' : 'http:'
  }//ucalc.pro/api/widget.js?id=${CALC_WIDGET_ID}&t=${Math.floor(new Date() / 18e5)}`;

  document.head.appendChild(calcScript);
};

const Calculator = ({ className }) => {
  const [ref, inView] = useInView(WIDGET_OBERVER_OPTIONS);

  useEffect(() => {
    if (inView === true) {
      loadCalculator();
    }
  }, [inView]);

  return (
    <div ref={ref} className={cx(className, Styles.container)}>
      <div className={cx(`uCalc_${CALC_WIDGET_ID}`, Styles.widget)}>
        <Spinner />
      </div>
    </div>
  );
};

Calculator.propTypes = {
  className: PropTypes.string,
};

Calculator.defaultProps = {
  className: '',
};

export default Calculator;
