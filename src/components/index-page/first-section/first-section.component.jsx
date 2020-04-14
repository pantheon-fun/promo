import PropTypes from 'prop-types';
import React, { useState, useLayoutEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './first-section.module.scss';

import { Contacts } from './components/contacts';
import { Banner } from './components/banner';
import { ArrowToDown } from './components/arrow-to-down';
import { Carousel, SwipeArrow } from './components/carousel/carousel.component';

const useFirstScreenHeight = () => {
  const [firstScreenHeight, setfirstScreenHeight] = useState('100vh');

  useLayoutEffect(() => {
    const correctSizing = () => {
      let vh = window.innerHeight;

      if (vh > window.screen.height) {
        vh /= window.devicePixelRatio;
      }

      setfirstScreenHeight(vh);
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

const FirstSection = ({ sectionRef }) => {
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

  const maxHeight = useFirstScreenHeight();

  console.log(maxHeight);

  return (
    <header className={Styles.first} ref={sectionRef} style={{ maxHeight }} id="first-section">
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
        <SwipeArrow swipeTo="next" className={Styles.swipeNext} />
        <SwipeArrow swipeTo="prev" className={Styles.swipePrev} />
      </div>
      <Carousel slides={carousel} />
    </header>
  );
};

FirstSection.propTypes = {
  sectionRef: PropTypes.func,
};

FirstSection.defaultProps = {
  sectionRef: null,
};

export default FirstSection;
