// import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

import replace from 'lodash/replace';

import {
  addMastheadEl,
  addForbiddenMastheadZoneObserver,
} from '../../../stores/is-masthead-shown/store';

import Favicon from '../../../images/favicon.svg';
import { Container } from '../container';
import { LinkToSection } from '../../common/link-to-section';

import Styles from './masthead.module.scss';

const Masthead = () => {
  const {
    sanityReferences: { telNumber },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          telNumber
        }
      }
    `
  );

  const mastheadRef = useRef(null);
  const mastheadEl = mastheadRef && mastheadRef.current;

  const [observerRef, isForbiddenMastheadZoneInView, entry] = useInView({
    rootMargin: `${mastheadEl ? -mastheadEl.offsetHeight : '0'}px 0px 0px 0px`,
  });

  const isHidden = isForbiddenMastheadZoneInView || !entry;

  useEffect(() => {
    addMastheadEl(mastheadEl);
    addForbiddenMastheadZoneObserver(observerRef);
  }, [mastheadEl, observerRef]);

  return (
    <div ref={mastheadRef} className={cx(Styles.masthead, { [Styles.hidden]: isHidden })}>
      <Container className={Styles.inner}>
        <LinkToSection
          to="first-section"
          aria-label="Кнопка в виде маленького логотипа, что ведет на верх страницы"
          className={Styles.logo}
        >
          <img
            className={Styles.logoIcon}
            src={Favicon}
            alt="Маленький логотип лазертаг-клуба Пантеон"
          />
        </LinkToSection>
        <nav className={Styles.navigation}>
          <ul>
            <li className={Styles.navigationItem}>
              <LinkToSection to="about-us-section" className={cx(Styles.link, 'underline')}>
                О нас
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="gallery-section" className={cx(Styles.link, 'underline')}>
                Фото
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="faq-section" className={cx(Styles.link, 'underline')}>
                Вопросы
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="price-list-section" className={cx(Styles.link, 'underline')}>
                Цены
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="references-section" className={cx(Styles.link, 'underline')}>
                Контакты
              </LinkToSection>
            </li>
          </ul>
        </nav>
        <a href={`tel:${replace(telNumber, '', ' ')}`} className={Styles.tel}>
          {telNumber}
        </a>
        <LinkToSection to="reservation-section" block="center" className={Styles.reservationBtn}>
          {/* TODO: replace by "забронировать", remove phone number and add burger */}
          Забронировать
        </LinkToSection>
      </Container>
    </div>
  );
};

export default Masthead;
