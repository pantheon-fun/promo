import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './about-us-section.module.scss';

import { Container } from '../../components/container/container.component';
import { Heading } from '../../components/heading/heading.component';
import { Text } from '../../components/text/text.component';

export const AboutUsSection = () => {
  const {
    sanityAboutUsSection: { heading, text },
  } = useStaticQuery(
    graphql`
      query {
        sanityAboutUsSection {
          heading
          text
        }
      }
    `
  );

  return (
    <section className={Styles.section} id="about-us-section">
      <Container inner>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Container>
    </section>
  );
};
