import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import cx from 'classnames';
import replace from 'lodash/replace';

import css from './reservation.module.scss';

import { useModal } from '../../../../../hooks/use-modal';
import { RESERVATION_BOOKFORM_WIDGET_ID } from '../../../../../utils/constants';
import { initWidget } from '../../../../../utils/bookform';

import { Icon } from '../../../../common/icon';
import { Heading } from '../../../../common/heading';

const Reservation = ({ className }) => {
  const {
    sanityReferences: { vkLink, instLink, telNumber },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          vkLink
          instLink
          telNumber
        }
      }
    `
  );

  const { openModal, Modal, isOpen } = useModal();

  const onBookformOptionClick = (e) => {
    openModal(e);
    initWidget(RESERVATION_BOOKFORM_WIDGET_ID);
  };

  return (
    <div className={cx(className, css.reservation)} id="reservation-section">
      <Heading className={css.heading} sub>
        Забронировать
      </Heading>
      <div className={css.wrapper}>
        <div className={css.options}>
          <a
            className={cx(css.option, css.vk)}
            href={vkLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Забронируйте игру через Вконтакте"
          >
            <Icon name="vk" />
          </a>
          <a
            className={cx(css.option, css.tel)}
            href={`tel:${replace(telNumber, ' ', '')}`}
            aria-label="Забронируйте игру по телефону"
          >
            <span className={css.small}>по</span>
            Телефону
          </a>
          <a
            className={cx(css.option, css.inst)}
            href={instLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Забронируйте игру через Инстаграм"
          >
            <Icon name="instagram" />
          </a>
          <button
            className={cx(css.option, css.form)}
            onClick={onBookformOptionClick}
            type="button"
          >
            <span className={css.small}>через</span>
            Яндекс форму
          </button>
          {isOpen && (
            <Modal>
              <div
                className={css.bookformContainer}
                id={`bookform-embedded-widget-${RESERVATION_BOOKFORM_WIDGET_ID}`}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

Reservation.propTypes = {
  className: PropTypes.string,
};

Reservation.defaultProps = {
  className: '',
};

export default Reservation;
