import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { PrivacyPolicy } from '../../common/privacy-policy';
import { Container } from '../container';

import Styles from './footer.module.scss';

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
    <footer className={Styles.footer}>
      <Container className={Styles.inner}>
        <PrivacyPolicy className={Styles.privacy} />
        <h3 className={Styles.company}>«Pantheon», 2019-{currentYear}</h3>
        <a href={devLink} className={Styles.creator} target="_blank" rel="noopener noreferrer">
          Разработал @DZakh
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
