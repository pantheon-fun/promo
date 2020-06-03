import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { fixedImageType } from '../../../../../utils/common-types';

import { Heading } from '../../../../common/heading';
import { Text } from '../../../../common/text';

import Styles from './game-card.module.scss';

const GameCard = ({ cardData: { icon, title, description } }) => {
  return (
    <li className={Styles.gameCard}>
      <Img fixed={icon.img.asset.fixed} className={Styles.icon} alt={icon.alt} />
      <Heading sub>{title}</Heading>
      <Text>{description}</Text>
    </li>
  );
};

GameCard.propTypes = {
  cardData: PropTypes.exact({
    icon: fixedImageType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
