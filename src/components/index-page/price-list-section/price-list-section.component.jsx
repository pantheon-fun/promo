import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import css from './price-list-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';

import { GamePrice } from './components/game-price';
import { SpecialOffers } from './components/special-offers';

const PriceListSection = () => {
  const {
    sanityPriceListSection: { priceDetails, specialOffers },
  } = useStaticQuery(
    graphql`
      query {
        sanityPriceListSection {
          priceDetails
          specialOffers {
            offerBody
            offerName
          }
        }
      }
    `
  );

  // TODO: Move to the cms
  const prices = [
    // {
    //   priceTitle: 'Понедельник - Четверг',
    //   priceThreeHours: 1400,
    //   priceTwoHours: 900,
    // },
    {
      priceTitle: 'Пятница - Воскресенье и праздники',
      priceThreeHours: 1800,
      priceTwoHours: 1200,
    },
  ];

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
