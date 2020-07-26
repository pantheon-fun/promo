import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import map from 'lodash/map';

import css from './games-section.module.scss';
import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { GameCard } from './components/game-card';

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
    <section className={css.section} id="games-section">
      <Container>
        <Heading>{heading}</Heading>
        <ul className={css.gamesList}>
          {map(gameCards, (cardData, i) => (
            <GameCard key={i} cardData={cardData} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GamesSection;
