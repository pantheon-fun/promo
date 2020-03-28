import React from 'react';

import Styles from './calculator.module.scss';

import { Spinner } from '../spinner';

const Calculator = ({ className }) => {
  return (
    <div className={`${className} ${Styles.container}`}>
      <div class={Styles.widget} id="calculator">
        <Spinner />
      </div>
    </div>
  );
};

export default Calculator;
