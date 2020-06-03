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

import Styles from './first-section.module.scss';

const useFirstScreenHeight = () => {
  const [firstScreenHeight, setfirstScreenHeight] = useState('100vh');

  useLayoutEffect(() => {
    const correctSizing = () => {
      setfirstScreenHeight(window.innerHeight);
    };

    const onOrientationchange = () => {
      window.addEventListener('resize', correctSizing, { once: true });
    };

    correctSizing();
    window.addEventListener('orientationchange', onOrientationchange);

    return () => window.removeEventListener('orientationchange', onOrientationchange);
  }, []);

  return firstScreenHeight;
};

const FirstSection = () => {
  const {
    sanityFirstSection: { siteTitle, hints, siteLogo, mainReservationButton, carousel },
  } = useStaticQuery(
    graphql`
      query {
        sanityFirstSection {
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

  const maxHeight = useFirstScreenHeight();

  return (
    <header
      className={Styles.first}
      ref={forbiddenMastheadZoneObserverRef}
      style={{ maxHeight }}
      id="first-section"
    >
      <CustomCarouselProvider slides={carousel}>
        <div className={Styles.inner}>
          <Contacts className={Styles.contacts} />
          <Banner
            className={Styles.banner}
            siteTitle={siteTitle}
            hints={hints}
            siteLogo={siteLogo}
            mainReservationButton={mainReservationButton}
          />
          <ArrowToDown className={Styles.arrowToDown} />
          <CustomButtonNext className={Styles.swipeNext} />
          <CustomButtonBack className={Styles.swipePrev} />
        </div>
        <CustomCarousel slides={carousel} />
      </CustomCarouselProvider>
    </header>
  );
};

export default FirstSection;
