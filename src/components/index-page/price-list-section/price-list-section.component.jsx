/* eslint-disable camelcase */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './price-list-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { PriceTable } from './components/price-table';
import { Calculator } from './components/calculator';
import { Schedule } from './components/schedule';
import { Reservation } from './components/reservation';

const PriceListSection = () => {
  const {
    sanityPriceListSection: { priceTable_weekdays, priceTable_weekends },
  } = useStaticQuery(
    graphql`
      query {
        sanityPriceListSection {
          priceTable_weekdays {
            rows {
              cells
            }
          }
          priceTable_weekends {
            rows {
              cells
            }
          }
        }
      }
    `
  );

  return (
    <section className={Styles.priceListSection} id="price-list-section">
      <Heading pure className={Styles.heading}>
        Цены
      </Heading>
      <Container className={Styles.content}>
        <PriceTable
          className={Styles.priceTable_weekdays}
          tableData={priceTable_weekdays}
          title="Понедельник - Четверг"
        />
        <PriceTable
          className={Styles.priceTable_weekends}
          tableData={priceTable_weekends}
          title="Пятница - Воскресенье"
        />
        <Calculator className={Styles.calculator} />
        <Schedule className={Styles.schedule} />
        <Reservation className={Styles.reservation} />
      </Container>
    </section>
  );
};

export default PriceListSection;
