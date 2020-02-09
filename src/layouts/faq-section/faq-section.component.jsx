import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './faq-section.module.scss';
import { Container } from '../../components/container/container.component';
import { Heading } from '../../components/heading/heading.component';
import { Accordion } from '../../components/accordion/accordion.component';

export const FaqSection = () => {
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
    <section className={Styles.faqSection} id="faq-section">
      <Container inner>
        <Heading>{heading}</Heading>
        <Accordion questionsAndAnswers={faq} />
      </Container>
    </section>
  );
};
