import React, { useState, useRef } from 'react';

import { Text } from '../text';

import Styles from './accordion.module.scss';

const Accordion = ({ className, questionsAndAnswers }) => {
  const [openedPanel, setOpenedPanel] = useState(null);
  const accordionRef = useRef(null);

  return (
    <ul ref={accordionRef} className={`${className} ${Styles.accodion}`}>
      {questionsAndAnswers.map((qa, idx) => {
        const isOpen = openedPanel === idx;
        const getAnswerElHeight = () => {
          const HEIGHT_CORRECTION = 20;

          return (
            accordionRef.current.children[idx].querySelector('div').scrollHeight + HEIGHT_CORRECTION
          );
        };

        return (
          <li
            key={idx}
            className={`${Styles.panel} ${isOpen ? Styles.opened : ''}`}
            onClick={() => {
              setOpenedPanel(isOpen ? null : idx);
            }}
          >
            <h3 className={Styles.question}>{qa.question}</h3>
            <div
              className={Styles.answer}
              style={{
                height: isOpen ? getAnswerElHeight() : 0,
              }}
            >
              <Text>{qa.answer}</Text>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
