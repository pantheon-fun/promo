import React from 'react';

import { make as Container } from '@/components/ContainerComponent.bs';
import { make as PrivacyPolicy } from '@/components/PrivacyPolicyComponent.bs';

import { use as usePageContent } from '../../../utils/IndexPageContent.bs.js';

import css from './Footer.module.scss';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const pageContent = usePageContent();
  const {
    references: { devLink },
  } = pageContent;

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
