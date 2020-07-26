import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { PrivacyPolicy } from '../../common/privacy-policy';
import { Container } from '../container';

import css from './footer.module.scss';

const Footer = () => {
  const {
    sanityReferences: { devLink },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          devLink
        }
      }
    `
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <Container className={css.inner}>
        <PrivacyPolicy className={css.privacy} />
        <h3 className={css.company}>«Pantheon», 2019-{currentYear}</h3>
        <a href={devLink} className={css.creator} target="_blank" rel="noopener noreferrer">
          Разработал @DZakh
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
