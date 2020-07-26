import React from 'react';
import Img from 'gatsby-image';
import map from 'lodash/map';
import { useStaticQuery, graphql } from 'gatsby';

import css from './price-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { PricePlus } from './components/price-plus';

const PriceSection = () => {
  const {
    sanityPriceSection: { heading, pricePluses, backgroundImage },
  } = useStaticQuery(
    graphql`
      query {
        sanityPriceSection {
          heading
          pricePluses {
            plus
            description
          }
          backgroundImage {
            img {
              asset {
                fluid(maxWidth: 1920) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alt
          }
        }
      }
    `
  );

  return (
    <section className={css.priceSection} id="price-section">
      <Img
        fluid={backgroundImage.img.asset.fluid}
        className={css.backgroundImage}
        alt={backgroundImage.alt}
      />
      <Container className={css.inner}>
        <Heading className={css.heading}>{heading}</Heading>
        <ul className={css.plusPoints}>
          {map(pricePluses, ({ plus, description }, idx) => (
            <PricePlus key={idx} plus={plus} description={description} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PriceSection;
