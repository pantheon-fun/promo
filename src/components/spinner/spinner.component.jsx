import React from 'react';

import Styles from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={Styles.spinner}>
      <div className={Styles.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
