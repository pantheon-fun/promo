import React from 'react';

import { joinJSX } from '../../helpers/join-jsx';

import Styles from './text.module.scss';

export const Text = ({ children }) => (
  <p className={Styles.text}>
    {joinJSX(children.split('\n'), id => (
      <br key={id} />
    ))}
  </p>
);
