import React from 'react';

import { Text } from '../text/text.component';

import Styles from './accordion.module.scss';
import { getContent } from './accordion.helpers';

export class Accordion extends React.Component {
  handleAccordionPanelClick = e => {
    const HEIGHT_CORRECTION = 20;

    const target = e.currentTarget;
    const accordionPanels = [...target.parentElement.children];

    const isCurActive = target.classList.contains(Styles.active);

    accordionPanels.forEach(el => {
      el.classList.remove(Styles.active);
      getContent(el).style.height = null;
    });

    if (!isCurActive) {
      target.classList.add(Styles.active);
      getContent(target).style.height = `
        ${getContent(target).scrollHeight + HEIGHT_CORRECTION}px
      `;
    }
  };

  render() {
    return (
      <ul className={`${this.props.className} ${Styles.accodion}`} id="accordion">
        {this.props.questionsAndAnswers.map((qa, i) => (
          <li key={i} className={Styles.panel} onClick={this.handleAccordionPanelClick}>
            <h3 className={Styles.question}>{qa.question}</h3>
            <div className={Styles.answer}>
              <Text>{qa.answer}</Text>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
