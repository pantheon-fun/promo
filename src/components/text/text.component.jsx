import React from 'react';

import ReactMarkdown from 'react-markdown';

import Styles from './text.module.scss';

const Text = ({ children }) => {
  return <ReactMarkdown className={Styles.text} source={children} />;
};

export default Text;
