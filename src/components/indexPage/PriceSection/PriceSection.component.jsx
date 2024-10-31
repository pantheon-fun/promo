import React from 'react';

import { make as Container } from '@/components/ContainerComponent.bs';
import { make as Heading } from '@/components/HeadingComponent.bs';
import { Picture } from '@/components/Picture';

import { use as usePageContent } from '../../../utils/IndexPageContent.bs.js';

import { make as PriceSectionPlusComponent } from './PriceSectionPlusComponent.bs.js';

import css from './PriceSection.module.scss';

const PriceSection = () => {
  const pageContent = usePageContent();
  const {
    priceSection: { heading, pricePluses, backgroundImage },
  } = pageContent;

  return (
    <section className={css.priceSection} id="price-section">
      <Picture className={css.backgroundImage} picture={backgroundImage} layout="fill" />
      <Container className={css.inner}>
        <Heading className={css.heading}>{heading}</Heading>
        <ul className={css.plusPoints}>
          {pricePluses.map(({ plus, description }) => {
            return <PriceSectionPlusComponent key={plus} title={plus} description={description} />;
          })}
        </ul>
      </Container>
    </section>
  );
};

export default PriceSection;
