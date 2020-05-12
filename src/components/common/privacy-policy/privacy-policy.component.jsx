import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cn from 'classnames';

import { Text } from '../text';
import { useModal } from '../../../hooks/use-modal';

import Styles from './privacy-policy.module.scss';

const PrivacyPolicy = ({ className }) => {
  const {
    sanityPrivacyPolicy: { privacyPolicyContent },
  } = useStaticQuery(
    graphql`
      query {
        sanityPrivacyPolicy {
          privacyPolicyContent
        }
      }
    `
  );

  const { openModal, Modal, isOpen } = useModal();

  return (
    <>
      <button
        className={cn(Styles.privacyPolicyButton, className)}
        type="button"
        onClick={openModal}
      >
        Политика конфиденциальности
      </button>
      {isOpen && (
        <Modal>
          <div className={Styles.privacyPolicyModal}>
            <Text>{privacyPolicyContent}</Text>
          </div>
        </Modal>
      )}
    </>
  );
};

PrivacyPolicy.propTypes = {
  className: PropTypes.string,
};

PrivacyPolicy.defaultProps = {
  className: '',
};

export default PrivacyPolicy;
