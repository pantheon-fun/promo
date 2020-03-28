import React from 'react';
import PropTypes from 'prop-types';

import Styles from './calculator.module.scss';

import { Spinner } from '../spinner';

const Calculator = ({ className }) => {
  return (
    <div className={`${className} ${Styles.container}`}>
      <div className={Styles.widget} id="calculator">
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
