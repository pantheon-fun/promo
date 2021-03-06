import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import { Text } from '../text';
import { useModal } from '../../../hooks/use-modal';

import css from './privacy-policy.module.scss';

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
      <button className={cx(css.privacyPolicyButton, className)} type="button" onClick={openModal}>
        Политика конфиденциальности
      </button>
      {isOpen && (
        <Modal>
          <div className={css.privacyPolicyModal}>
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
