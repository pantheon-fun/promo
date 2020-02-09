import React from 'react';

import { Text } from '../text/text.component';

import Styles from './accordion.module.scss';

import { handleAccordionPanelClick } from './accordion.actions';

export const Accordion = ({ className, questionsAndAnswers }) => {
  // TODO: onKeyDown and htmlFromMarkdown
  return (
    <ul className={`${className} ${Styles.accodion}`} id="accordion">
      {questionsAndAnswers.map((qa, i) => (
        <li key={i} className={Styles.panel} onClick={handleAccordionPanelClick}>
          <h3 className={Styles.question}>{qa.question}</h3>
          <div className={Styles.answer}>
            <Text>{qa.answer}</Text>
          </div>
        </li>
      ))}
    </ul>
  );
};
