/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cx from 'classnames';

import replace from 'lodash/replace';

import { LinkToSection } from '../../../../common/link-to-section';
import { Heading } from '../../../../common/heading';

import VkIcon from './icons/vk-icon.inline.svg';
import InstIcon from './icons/inst-icon.inline.svg';

import Styles from './contact-card.module.scss';

const ContactCard = ({ references }) => {
  const { vkLink, instLink, telNumber, address, email, ymapLink } = references;

  const [isActive, setIsActive] = useState(false);

  const toggleActive = e => {
    const isOnLinkClick = e.target.nodeName === 'A';

    if (!isOnLinkClick) {
      setIsActive(!isActive);
    }
  };

  return (
    <div className={cx({ [Styles.card]: true, [Styles.active]: isActive })} onClick={toggleActive}>
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
          <a className={Styles.link} href={ymapLink} target="_blank" rel="noopener noreferrer">
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

ContactCard.propTypes = {
  references: PropTypes.shape({
    vkLink: PropTypes.string.isRequired,
    instLink: PropTypes.string.isRequired,
    telNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    ymapLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;
