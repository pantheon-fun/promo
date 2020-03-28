import React from 'react';
import Img from 'gatsby-image';

import Styles from './game-card.module.scss';
import { Heading } from '../heading';
import { Text } from '../text';

const GameCard = ({ cardData: { icon, title, description } }) => {
  return (
    <li className={Styles.gameCard}>
      <Img fixed={icon.img.asset.fixed} className={Styles.icon} alt={icon.alt} />
      <Heading sub>{title}</Heading>
      <Text>{description}</Text>
    </li>
  );
};

export default GameCard;
