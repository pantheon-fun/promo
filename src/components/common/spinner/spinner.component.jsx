import React from 'react';

import css from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={css.spinner}>
      <div className={css.ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
