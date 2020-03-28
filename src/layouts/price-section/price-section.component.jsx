import React from 'react';
import Img from 'gatsby-image';
import map from 'lodash/map';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './price-section.module.scss';

import { Container } from '../../components/container';
import { Heading } from '../../components/heading';
import { PricePlus } from '../../components/price-plus';
import { Icon } from '../../components/icon';

const PriceSection = () => {
  const {
    sanityPriceSection: { heading, pricePerPerson, pricePluses, backgroundImage },
  } = useStaticQuery(
    graphql`
      query {
        sanityPriceSection {
          heading
          pricePerPerson
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
    <section className={Styles.priceSection} id="price-section">
      <Img
        fluid={backgroundImage.img.asset.fluid}
        className={Styles.backgroundImage}
        alt={backgroundImage.alt}
      />
      <Container className={Styles.inner}>
        <Heading className={Styles.heading}>{heading}</Heading>
        <p className={Styles.perPerson}>
          от {pricePerPerson} <Icon name="rouble" /> за человека
        </p>
        <ul className={Styles.plusPoints}>
          {map(pricePluses, ({ plus, description }, idx) => (
            <PricePlus key={idx} plus={plus} description={description} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PriceSection;
