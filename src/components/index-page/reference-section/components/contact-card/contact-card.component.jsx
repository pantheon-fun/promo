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

import css from './contact-card.module.scss';

const ContactCard = ({ references }) => {
  const { vkLink, instLink, telNumber, address, email, ymapLink } = references;

  const [isActive, setIsActive] = useState(false);

  const toggleActive = (e) => {
    const isOnLinkClick = e.target.nodeName === 'A';

    if (!isOnLinkClick) {
      setIsActive(!isActive);
    }
  };

  return (
    <div className={cx({ [css.card]: true, [css.active]: isActive })} onClick={toggleActive}>
      <Heading className={css.heading} pure>
        Контакты
      </Heading>
      <ul className={css.list}>
        <li className={css.item}>
          <Heading sub className={css.type}>
            Телефон
          </Heading>
          <a className={css.link} href={`tel:${replace(telNumber, ' ', '')}`}>
            {telNumber}
          </a>
        </li>
        <li className={css.item}>
          <Heading sub className={css.type}>
            Почта
          </Heading>
          <a className={css.link} href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li className={css.item}>
          <Heading sub className={css.type}>
            Адрес
          </Heading>
          <a className={css.link} href={ymapLink} target="_blank" rel="noopener noreferrer">
            {address}
          </a>
        </li>
        <li className={css.item}>
          <Heading sub className={css.type}>
            Мы в соцсетях
          </Heading>
          <div className={css.socials}>
            <a className={css.social} href={vkLink} target="_blank" rel="noopener noreferrer">
              <VkIcon className={css.socialIcon} alt="Перейти в нашу группу во Вконтакте" />
            </a>
            <a className={css.social} href={instLink} target="_blank" rel="noopener noreferrer">
              <InstIcon className={css.socialIcon} alt="Перейти в наш Инстаграм" />
            </a>
            <LinkToSection to="reservation-section" block="center" className={css.reservation}>
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
