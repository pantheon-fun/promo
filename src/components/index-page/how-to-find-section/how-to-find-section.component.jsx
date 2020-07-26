import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import css from './how-to-find-section.module.scss';

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
    <section className={css.section}>
      <h2 className={css.lable}>Как нас найти?</h2>
      <div className={css.route}>
        <a href={detailedRouteLink} className={css.link} target="_blank" rel="noopener noreferrer">
          <span className={css.caption}>подробный</span>
          Маршрут
        </a>
      </div>
    </section>
  );
};

export default HowToFindSection;
