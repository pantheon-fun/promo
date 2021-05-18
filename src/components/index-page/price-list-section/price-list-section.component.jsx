import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import css from './price-list-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';

import { GamePrice } from './components/game-price';
import { SpecialOffers } from './components/special-offers';

const PriceListSection = () => {
  const {
    sanityPriceListSection: { priceDetails, prices, specialOffers },
  } = useStaticQuery(
    graphql`
      query {
        sanityPriceListSection {
          priceDetails
          prices {
            priceTitle
            priceOneHour
            priceTwoHours
            pricePlusHour
          }
          specialOffers {
            offerBody
            offerName
          }
        }
      }
    `
  );

  return (
    <section className={css.priceListSection} id="price-list-section">
      <Heading pure className={css.heading}>
        Цены
      </Heading>
      <Container className={css.content}>
        <SpecialOffers className={css.specialOffers} specialOffers={specialOffers} />
        <GamePrice className={css.gamePrice} prices={prices} priceDetails={priceDetails} />
      </Container>
    </section>
  );
};

export default PriceListSection;
