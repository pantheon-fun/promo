import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import css from './about-us-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { Text } from '../../common/text';

const AboutUsSection = () => {
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
    <section className={css.section} id="about-us-section">
      <Container inner>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Container>
    </section>
  );
};

export default AboutUsSection;
