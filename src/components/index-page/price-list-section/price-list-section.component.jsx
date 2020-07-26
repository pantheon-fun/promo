/* eslint-disable camelcase */
import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import css from './price-list-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';

import { GamePrice } from './components/game-price';
import { SpecialOffers } from './components/special-offers';
import { Schedule } from './components/schedule';
import { Reservation } from './components/reservation';

const PriceListSection = () => {
  // const {
  //   sanityPriceListSection: { priceTable_weekdays, priceTable_weekends },
  // } = useStaticQuery(
  //   graphql`
  //     query {
  //       sanityPriceListSection {
  //         priceTable_weekdays {
  //           rows {
  //             cells
  //           }
  //         }
  //         priceTable_weekends {
  //           rows {
  //             cells
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <section className={css.priceListSection} id="price-list-section">
      <Heading pure className={css.heading}>
        Цены
      </Heading>
      <Container className={css.content}>
        <SpecialOffers className={css.specialOffers} />
        <GamePrice className={css.gamePrice} />
        <Schedule className={css.schedule} />
        <Reservation className={css.reservation} />
      </Container>
    </section>
  );
};

export default PriceListSection;
