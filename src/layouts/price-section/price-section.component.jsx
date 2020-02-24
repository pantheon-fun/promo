import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './price-section.module.scss';

import { Container } from '../../components/container/container.component';
import { Heading } from '../../components/heading/heading.component';
import { PricePlus } from '../../components/price-plus/price-plus.component';
import { Icon } from '../../components/icon/icon.component';

export const PriceSection = () => {
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
          {pricePluses.map(({ plus, description }, i) => (
            <PricePlus key={i} plus={plus} description={description} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
