import React from 'react';

import ReactMarkdown from 'react-markdown';

import Styles from './text.module.scss';

export const Text = ({ children }) => {
  return <ReactMarkdown className={Styles.text} source={children} />;
};
