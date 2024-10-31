import React from 'react';

import { useMainScreenHeight } from '@/hooks/useMainScreenHeight';

import { use as usePageContent } from '../../../utils/IndexPageContent.bs.js';

import { ArrowToDown } from './components/arrow-to-down';
import { Banner } from './components/banner';
import {
  CustomCarouselProvider,
  CustomCarousel,
  CustomButtonNext,
  CustomButtonBack,
} from './components/carousel';
import { Contacts } from './components/contacts';

import css from './MainSection.module.scss';

const MainSection = ({ mastheadForbiddenZoneRef }) => {
  const pageContent = usePageContent();
  const maxHeight = useMainScreenHeight();

  return (
    <header
      className={css.first}
      style={{ maxHeight }}
      id="first-section"
      ref={mastheadForbiddenZoneRef}
    >
      <CustomCarouselProvider slides={pageContent.mainSection.carousel}>
        <div className={css.inner}>
          <Contacts className={css.contacts} />
          <Banner
            className={css.banner}
            siteTitle={pageContent.mainSection.siteTitle}
            hints={pageContent.mainSection.hints}
            siteLogo={pageContent.mainSection.siteLogo}
            mainReservationButton={pageContent.mainSection.mainReservationButton}
          />
          <ArrowToDown className={css.arrowToDown} />
          <CustomButtonNext className={css.swipeNext} />
          <CustomButtonBack className={css.swipePrev} />
        </div>
        <CustomCarousel slides={pageContent.mainSection.carousel} />
      </CustomCarouselProvider>
    </header>
  );
};

export default MainSection;
