import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import map from 'lodash/map';

import Styles from './games-section.module.scss';
import { Container } from '../../components/container/container.component';
import { Heading } from '../../components/heading/heading.component';
import { GameCard } from '../../components/game-card/game-card.component';

const GamesSection = () => {
  const {
    sanityGamesSection: { heading, gameCards },
  } = useStaticQuery(
    graphql`
      query {
        sanityGamesSection {
          heading
          gameCards {
            icon {
              img {
                asset {
                  fixed(width: 140) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
              alt
            }
            title
            description
          }
        }
      }
    `
  );

  return (
    <section className={Styles.section} id="games-section">
      <Container>
        <Heading>{heading}</Heading>
        <ul className={Styles.gamesList}>
          {map(gameCards, (cardData, i) => (
            <GameCard key={i} cardData={cardData} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GamesSection;
