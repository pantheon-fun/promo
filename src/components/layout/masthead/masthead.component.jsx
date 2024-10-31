import cx from 'classnames';
import React, { useRef, useEffect } from 'react';

import { make as Container } from '@/components/ContainerComponent.bs';
import { make as LocalImageComponent } from '@/components/LocalImageComponent.bs';
import { make as PageInnerLinkComponent } from '@/components/PageInnerLinkComponent.bs';
import { make as SimpleReservationButtonComponent } from '@/components/SimpleReservationButtonComponent.bs';

import faviconIconParams from '@/images/favicon.svg';

import { use as usePageContent } from '../../../utils/IndexPageContent.bs.js';

import css from './Masthead.module.scss';

const Masthead = ({ isHidden, setMastheadEl }) => {
  const pageContent = usePageContent();
  const {
    references: { telNumber },
  } = pageContent;

  const mastheadRef = useRef(null);

  useEffect(() => {
    setMastheadEl(mastheadRef.current || null);
  }, [setMastheadEl]);

  return (
    <div ref={mastheadRef} className={cx(css.masthead, { [css.hidden]: isHidden })}>
      <Container className={css.inner}>
        <PageInnerLinkComponent
          to="first-section"
          aria-label="Кнопка в виде маленького логотипа, что ведет на верх страницы"
          className={css.logo}
        >
          <LocalImageComponent
            src={faviconIconParams.src}
            alt="Логотип лазертаг-клуба Пантеон"
            width="35"
            height="35"
          />
        </PageInnerLinkComponent>
        <nav className={css.navigation}>
          <ul>
            <li className={css.navigationItem}>
              <PageInnerLinkComponent to="about-us-section" className={cx(css.link, 'underline')}>
                О нас
              </PageInnerLinkComponent>
            </li>
            <li className={css.navigationItem}>
              <PageInnerLinkComponent to="gallery-section" className={cx(css.link, 'underline')}>
                Фото
              </PageInnerLinkComponent>
            </li>
            <li className={css.navigationItem}>
              <PageInnerLinkComponent to="faq-section" className={cx(css.link, 'underline')}>
                Вопросы
              </PageInnerLinkComponent>
            </li>
            <li className={css.navigationItem}>
              <PageInnerLinkComponent
                to="prices-info-section"
                className={cx(css.link, 'underline')}
              >
                Цены
              </PageInnerLinkComponent>
            </li>
            <li className={css.navigationItem}>
              <PageInnerLinkComponent to="references-section" className={cx(css.link, 'underline')}>
                Контакты
              </PageInnerLinkComponent>
            </li>
          </ul>
        </nav>
        <a href={`tel:${telNumber.replace('', ' ')}`} className={css.tel}>
          {telNumber}
        </a>
        <SimpleReservationButtonComponent className={css.reservationButton} />
      </Container>
    </div>
  );
};

export default Masthead;
