import React from 'react';
// import Img from 'gatsby-image';
// import { useStaticQuery, graphql } from 'gatsby';

import Styles from './price-list-section.module.scss';

import { Container } from '../../components/container/container.component';
import { Heading } from '../../components/heading/heading.component';

const PriceTable = ({ className }) => {
  return <div className={className}>Hello</div>;
};

const Calculator = ({ className }) => {
  return <div className={className}>calc</div>;
};

const Schedule = ({ className }) => {
  return <div className={className}>calc</div>;
};

const Reservation = ({ className }) => {
  return <div className={className}>calc</div>;
};

export const PriceListSection = () => {
  // const {
  //   sanityPriceSection: { heading, pricePerPerson, pricePluses, backgroundImage },
  // } = useStaticQuery(
  //   graphql`
  //     query {
  //       sanityPriceSection {
  //         heading
  //         pricePerPerson
  //         pricePluses {
  //           plus
  //           description
  //         }
  //         backgroundImage {
  //           img {
  //             asset {
  //               fluid(maxWidth: 1920) {
  //                 ...GatsbySanityImageFluid
  //               }
  //             }
  //           }
  //           alt
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <section className={Styles.priceListSection} id="price-list-section">
      <Heading pure className={Styles.heading}>
        Цены
      </Heading>
      <Container className={Styles.content}>
        <PriceTable className={Styles.priceTable_weekdays} title="Понедельник - Четверг" />
        <PriceTable className={Styles.priceTable_weekends} title="Пятница - Воскресенье" />

        <Calculator className={Styles.calculator} />
        <Schedule className={Styles.schedule} />
        <Reservation className={Styles.reservation} />
      </Container>
    </section>
  );
};
