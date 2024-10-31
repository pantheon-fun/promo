import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { make as Icon } from '@/components/IconComponent.bs';
import { make as PageInnerLinkComponent } from '@/components/PageInnerLinkComponent.bs';

import { use as usePageContent } from '../../../../../utils/IndexPageContent.bs.js';

import css from './contacts.module.scss';

const Contacts = ({ className }) => {
  const {
    references: { address, telNumber },
  } = usePageContent();

  return (
    <div className={cx(className, css.contacts)}>
      <PageInnerLinkComponent to="references-section" className={css.address}>
        {address}
      </PageInnerLinkComponent>
      <br />
      <div className={css.tel}>
        <Icon className={css.telIcon} name="phone" />
        <a href={`tel:${telNumber.replace(/\s/g, '')}`} className={css.telNumber}>
          {telNumber}
        </a>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  className: PropTypes.string,
};

Contacts.defaultProps = {
  className: '',
};

export default Contacts;
