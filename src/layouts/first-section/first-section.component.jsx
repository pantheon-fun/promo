import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './first-section.module.scss';

import { Contacts } from '../../components/contacts/contacts.component';

export const FirstSection = () => {
  const { sanityReferences } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          address
          telNumber
        }
      }
    `
  );

  return (
    <header className={Styles.first}>
      <div className={Styles.inner}>
        <Contacts
          className={Styles.contacts}
          address={sanityReferences.address}
          telNumber={sanityReferences.telNumber}
        />
      </div>
    </header>
  );
};

// <div class="first__content">
//         <div class="first__site-logo site-logo">
//         <picture>
//         <source type="image/webp"
//                 srcset="./images/logo/logo-345w-2x.webp 345w">
//         <source type="image/png"
//                 srcset="./images/logo/logo-345w-2x.png 345w">
//         <img src="./images/logo/logo-345w-2x.png" class="site-logo__img lazyload"
//              alt="Логотип клуба активно-тактических игр «Pantheon»" />
//       </picture>
//         </div>
//         <div class="first__banner">
//           <h1 class="first__heading">
//             Лазертаг-клуб в Мытищах
//           </h1>
//           <p class="first__events">
//             Дни рождения
//             <i class="icon-crosshairs first__crosshairs-icon"></i>
//             Праздники
//             <i class="icon-crosshairs first__crosshairs-icon"></i>
//             Открытые игры
//           </p>
//         </div>
//         <button data-smooth-scroll-to="reservation-section" data-smooth-scroll-block="center" class="first__reservation-btn reservation-btn">
//           Забронировать игру
//         </button>
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
