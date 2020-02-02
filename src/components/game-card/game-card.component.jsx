import React from 'react';
import Img from 'gatsby-image';

import Styles from './game-card.module.scss';
import { Heading } from '../../components/heading/heading.component';
import { Text } from '../../components/text/text.component';

export const GameCard = ({ cardData: { icon, title, description } }) => {
  return (
    <li className={Styles.gameCard}>
      <Img fixed={icon.img.asset.fixed} className={Styles.icon} alt={icon.alt} />
      <Heading sub>{title}</Heading>
      <Text>{description}</Text>
    </li>
  );
};
