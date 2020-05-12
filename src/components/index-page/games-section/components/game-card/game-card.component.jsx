import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Styles from './game-card.module.scss';
import { Heading } from '../../../../common/heading';
import { Text } from '../../../../common/text';

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
    icon: PropTypes.shape({
      img: PropTypes.shape({
        asset: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
