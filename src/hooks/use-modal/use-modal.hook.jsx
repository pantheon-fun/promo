import React from 'react';
import usePortal from 'react-useportal';

import CloseIcon from '../../../public/icons/close.svg';

import Styles from './use-modal.module.scss';

export const useModal = () => {
  const { openPortal, isOpen, togglePortal, closePortal, Portal } = usePortal();

  const Modal = ({ children }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <Portal>
        <div className={Styles.background} onClick={closePortal} />
        <div className={Styles.modal}>
          <img
            src={CloseIcon}
            alt="Иконка закрыть"
            className={Styles.closeIcon}
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
