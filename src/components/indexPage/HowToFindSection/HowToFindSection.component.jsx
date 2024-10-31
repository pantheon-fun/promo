import React from 'react';

import { use as usePageContent } from '../../../utils/IndexPageContent.bs.js';

import css from './HowToFindSection.module.scss';

const HowToFindSection = () => {
  const pageContent = usePageContent();
  const {
    references: { detailedRouteLink },
  } = pageContent;

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
