/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import usePortal from 'react-useportal';
import cx from 'classnames';

import CloseIcon from './icons/close.svg';

import css from './use-modal.module.scss';

const useModal = () => {
  const { openPortal, isOpen, togglePortal, closePortal, Portal } = usePortal();

  const Modal = ({ children, className }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <Portal>
        <div className={css.background} onClick={closePortal} />
        <div className={cx(css.modal, className)}>
          <img
            src={CloseIcon}
            alt="Иконка закрыть"
            className={css.closeIcon}
            onClick={closePortal}
          />
          {children}
        </div>
      </Portal>
    );
  };

  return {
    Modal,
    toggleModal: togglePortal,
    openModal: openPortal,
    closeModal: closePortal,
    isOpen,
  };
};

export default useModal;
