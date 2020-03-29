import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
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

  document.documentElement.appendChild(calcScript);

  return <div className={`uCalc_${CALC_WIDGET_ID}`} />;
};

const Calculator = ({ className }) => {
  const [ref, inView] = useInView(WIDGET_OBERVER_OPTIONS);
  const [widgetContent, setWidgetContent] = useState(<Spinner />);

  useEffect(() => {
    if (inView === true) {
      setWidgetContent(loadCalculator());
    }
  }, [inView]);

  return (
    <div ref={ref} className={cn(className, Styles.container)}>
      <div className={Styles.widget}>{widgetContent}</div>
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
