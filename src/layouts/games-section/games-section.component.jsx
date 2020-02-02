import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './games-section.module.scss';
import { Container } from '../../components/container/container.component';
import { Heading } from '../../components/heading/heading.component';
import { GameCard } from '../../components/game-card/game-card.component';

export const GamesSection = () => {
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
    <section id="games-section">
      <Container>
        <Heading>{heading}</Heading>
        <ul className={Styles.gamesList}>
          {gameCards.map((cardData, i) => (
            <GameCard key={i} cardData={cardData} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
