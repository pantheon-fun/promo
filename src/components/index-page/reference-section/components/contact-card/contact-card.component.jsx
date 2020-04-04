/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cn from 'classnames';

import replace from 'lodash/replace';

import { LinkToSection } from '../../../../common/link-to-section';
import { Heading } from '../../../../common/heading';

import VkIcon from './icons/vk-icon.inline.svg';
import InstIcon from './icons/inst-icon.inline.svg';

import Styles from './contact-card.module.scss';

const ContactCard = () => {
  const {
    sanityReferences: { vkLink, instLink, telNumber, address, email },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          vkLink
          instLink
          telNumber
          address
          email
        }
      }
    `
  );

  const [isActive, setIsActive] = useState(true);

  const toggleActive = e => {
    const isOnLinkClick = e.target.nodeName === 'A';

    if (!isOnLinkClick) {
      setIsActive(!isActive);
    }
  };

  return (
    <div className={cn({ [Styles.card]: true, [Styles.active]: isActive })} onClick={toggleActive}>
      <Heading className={Styles.heading} pure>
        Контакты
      </Heading>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <Heading sub className={Styles.type}>
            Телефон
          </Heading>
          <a className={Styles.link} href={`tel:${replace(telNumber, ' ', '')}`}>
            {telNumber}
          </a>
        </li>
        <li className={Styles.item}>
          <Heading sub className={Styles.type}>
            Почта
          </Heading>
          <a className={Styles.link} href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li className={Styles.item}>
          <Heading sub className={Styles.type}>
            Адрес
          </Heading>
          {/* TODO: добавить ссылку на Ymap в sanity */}
          <a
            className={Styles.link}
            href="https://yandex.ru/maps/10740/mytischi/?from=api-maps&ll=37.765531%2C55.920939&mode=search&oid=52710844172&ol=biz&utm_source=api-maps&z=18"
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        </li>
        <li className={Styles.item}>
          <Heading sub className={Styles.type}>
            Мы в соцсетях
          </Heading>
          <div className={Styles.socials}>
            <a className={Styles.social} href={vkLink} target="_blank" rel="noopener noreferrer">
              <VkIcon className={Styles.socialIcon} alt="Перейти в нашу группу во Вконтакте" />
            </a>
            <a className={Styles.social} href={instLink} target="_blank" rel="noopener noreferrer">
              <InstIcon className={Styles.socialIcon} alt="Перейти в наш Инстаграм" />
            </a>
            <LinkToSection to="reservation-section" block="center" className={Styles.reservation}>
              Забронировать
            </LinkToSection>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
