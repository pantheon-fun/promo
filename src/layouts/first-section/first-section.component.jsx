import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './first-section.module.scss';

import { Contacts } from '../../components/contacts/contacts.component';
import { Banner } from '../../components/banner/banner.component';

export const FirstSection = () => {
  const data = useStaticQuery(
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
            _key
            _type
          }
        }
      }
    `
  );

  console.log(data);

  const {
    sanityFirstSection: { siteTitle, hints, siteLogo, mainReservationButton },
  } = data;

  return (
    <header className={Styles.first}>
      <div className={Styles.inner}>
        <Contacts className={Styles.contacts} />
        <Banner
          className={Styles.banner}
          siteTitle={siteTitle}
          hints={hints}
          siteLogo={siteLogo}
          mainReservationButton={mainReservationButton}
        />
      </div>
    </header>
  );
};

//       </div>
//       <button class="swipe-arrow swipe-arrow_left" data-siema-arrow="prev">
//         <img class="swipe-arrow__icon" src="./images/icons/care-left-icon.svg" alt="Стрелочка влево. Посмотреть предыдущую фотографию в слайдере." />
//       </button>
//       <button class="swipe-arrow swipe-arrow_right" data-siema-arrow="next">
//         <img class="swipe-arrow__icon" src="./images/icons/care-right-icon.svg" alt="Стрелочка вправо. Посмотреть следующую фотографию в слайдере." />
//       </button>
//       <div class="first__arrow-to-down arrow-to-down">
//         <button class="arrow-to-down__btn" data-smooth-scroll-to="about-us-section">
//           <img class="arrow-to-down__icon" src="./images/icons/angel-down-icon.svg" alt="Стрелочка вниз. Листайте дальше, там много интересного!" />
//         </button>
//       </div>
