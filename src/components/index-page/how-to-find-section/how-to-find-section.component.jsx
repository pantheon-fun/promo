import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './how-to-find-section.module.scss';

const HowToFindSection = () => {
  const {
    sanityReferences: { detailedRouteLink },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          detailedRouteLink
        }
      }
    `
  );

  return (
    <section className={Styles.section}>
      <h2 className={Styles.lable}>Как нас найти?</h2>
      <div className={Styles.route}>
        <a
          href={detailedRouteLink}
          className={Styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={Styles.caption}>подробный</span>
          Маршрут
        </a>
      </div>
    </section>
  );
};

export default HowToFindSection;
