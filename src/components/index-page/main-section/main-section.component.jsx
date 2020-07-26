// import PropTypes from 'prop-types';
import React, { useState, useLayoutEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useStore } from 'effector-react';

import { forbiddenMastheadZoneObserverStore } from '../../../stores/is-masthead-shown/store';

import { Contacts } from './components/contacts';
import { Banner } from './components/banner';
import { ArrowToDown } from './components/arrow-to-down';
import {
  CustomCarouselProvider,
  CustomCarousel,
  CustomButtonNext,
  CustomButtonBack,
} from './components/carousel';

import css from './main-section.module.scss';

const useMainScreenHeight = () => {
  const [mainScreenHeight, setMainScreenHeight] = useState('100vh');

  useLayoutEffect(() => {
    const correctSizing = () => {
      setMainScreenHeight(window.innerHeight);
    };

    const onOrientationchange = () => {
      window.addEventListener('resize', correctSizing, { once: true });
    };

    correctSizing();
    window.addEventListener('orientationchange', onOrientationchange);

    return () => window.removeEventListener('orientationchange', onOrientationchange);
  }, []);

  return mainScreenHeight;
};

const MainSection = () => {
  const {
    sanityMainSection: { siteTitle, hints, siteLogo, mainReservationButton, carousel },
  } = useStaticQuery(
    graphql`
      query {
        sanityMainSection {
          siteTitle
          hints
          siteLogo {
            alt
            img {
              asset {
                fixed(width: 200) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
          mainReservationButton
          carousel {
            img {
              asset {
                fluid(maxWidth: 1920) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alt
          }
        }
      }
    `
  );

  const forbiddenMastheadZoneObserverRef = useStore(forbiddenMastheadZoneObserverStore);

  const maxHeight = useMainScreenHeight();

  return (
    <header
      className={css.first}
      ref={forbiddenMastheadZoneObserverRef}
      style={{ maxHeight }}
      id="first-section"
    >
      <CustomCarouselProvider slides={carousel}>
        <div className={css.inner}>
          <Contacts className={css.contacts} />
          <Banner
            className={css.banner}
            siteTitle={siteTitle}
            hints={hints}
            siteLogo={siteLogo}
            mainReservationButton={mainReservationButton}
          />
          <ArrowToDown className={css.arrowToDown} />
          <CustomButtonNext className={css.swipeNext} />
          <CustomButtonBack className={css.swipePrev} />
        </div>
        <CustomCarousel slides={carousel} />
      </CustomCarouselProvider>
    </header>
  );
};

export default MainSection;
