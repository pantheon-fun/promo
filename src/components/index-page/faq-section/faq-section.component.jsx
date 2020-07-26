import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import css from './faq-section.module.scss';
import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { Accordion } from './components/accordion';

const FaqSection = () => {
  const {
    sanityFaqSection: { heading, faq },
  } = useStaticQuery(
    graphql`
      query {
        sanityFaqSection {
          heading
          faq {
            question
            answer
          }
        }
      }
    `
  );

  return (
    <section className={css.faqSection} id="faq-section">
      <Container inner>
        <Heading>{heading}</Heading>
        <Accordion questionsAndAnswers={faq} />
      </Container>
    </section>
  );
};

export default FaqSection;
