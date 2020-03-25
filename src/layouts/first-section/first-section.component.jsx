import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './first-section.module.scss';

import { Contacts } from '../../components/contacts/contacts.component';
import { Banner } from '../../components/banner/banner.component';
import { ArrowToDown } from '../../components/arrow-to-down/arrow-to-down.component';
import { Carousel, SwipeArrow } from '../../components/carousel/carousel.component';

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

  return (
    <header className={Styles.first} id="first-section">
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

export default FirstSection;
