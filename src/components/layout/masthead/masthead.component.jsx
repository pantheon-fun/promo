import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cn from 'classnames';
import replace from 'lodash/replace';

import Favicon from '../../../images/favicon.svg';
import { Container } from '../container';
import { LinkToSection } from '../../common/link-to-section';

import Styles from './masthead.module.scss';

const Masthead = ({ mastheadRef, hidden, className }) => {
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

  return (
    <div ref={mastheadRef} className={cn(Styles.masthead, className, { [Styles.hidden]: hidden })}>
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
              <LinkToSection to="about-us-section" className={cn(Styles.link, 'underline')}>
                О нас
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="gallery-section" className={cn(Styles.link, 'underline')}>
                Фото
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="faq-section" className={cn(Styles.link, 'underline')}>
                Вопросы
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="price-list-section" className={cn(Styles.link, 'underline')}>
                Цены
              </LinkToSection>
            </li>
            <li className={Styles.navigationItem}>
              <LinkToSection to="references-section" className={cn(Styles.link, 'underline')}>
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

Masthead.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool,
  mastheadRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};

Masthead.defaultProps = {
  className: '',
  hidden: false,
};

export default Masthead;
