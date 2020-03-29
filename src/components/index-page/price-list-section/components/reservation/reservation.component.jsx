import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import cn from 'classnames';
import replace from 'lodash/replace';

import Styles from './reservation.module.scss';

import { useModal } from '../../../../../hooks/use-modal';
import { RESERVATION_BOOKFORM_WIDGET_ID } from '../../../../../utils/constants';
import { initWidget } from '../../../../../utils/bookform';

import { Icon } from '../../../../common/icon';
import { Heading } from '../../../../common/heading';

const Calculator = ({ className }) => {
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

  const onBookformOptionClick = e => {
    initWidget(RESERVATION_BOOKFORM_WIDGET_ID);
    openModal(e);
  };

  return (
    <div className={cn(className, Styles.reservation)} id="reservation-section">
      <Heading className={Styles.heading} sub>
        Забронировать
      </Heading>
      <div className={Styles.wrapper}>
        <div className={Styles.options}>
          <a
            className={cn(Styles.option, Styles.vk)}
            href={vkLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Забронируйте игру через Вконтакте"
          >
            <Icon name="vk" />
          </a>
          <a
            className={cn(Styles.option, Styles.tel)}
            href={`tel:${replace(telNumber, ' ', '')}`}
            aria-label="Забронируйте игру по телефону"
          >
            <span className={Styles.small}>по</span>
            Телефону
          </a>
          <a
            className={cn(Styles.option, Styles.inst)}
            href={instLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Забронируйте игру через Инстаграм"
          >
            <Icon name="instagram" />
          </a>
          <button
            className={cn(Styles.option, Styles.form)}
            onClick={onBookformOptionClick}
            type="button"
          >
            <span className={Styles.small}>через</span>
            Яндекс форму
          </button>
          {isOpen && (
            <Modal>
              <div
                className={Styles.bookformContainer}
                id={`bookform-embedded-widget-${RESERVATION_BOOKFORM_WIDGET_ID}`}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  className: PropTypes.string,
};

Calculator.defaultProps = {
  className: '',
};

export default Calculator;
