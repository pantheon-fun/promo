import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './about-us-section.module.scss';

import { Container } from '../../components/container';
import { Heading } from '../../components/heading';
import { Text } from '../../components/text';

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
    <section className={Styles.section} id="about-us-section">
      <Container inner>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Container>
    </section>
  );
};

export default AboutUsSection;
