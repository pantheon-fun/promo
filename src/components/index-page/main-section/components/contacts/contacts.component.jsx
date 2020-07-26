import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import replace from 'lodash/replace';

import { Icon } from '../../../../common/icon';
import { LinkToSection } from '../../../../common/link-to-section';

import css from './contacts.module.scss';

const Contacts = ({ className }) => {
  const {
    sanityReferences: { address, telNumber },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          address
          telNumber
        }
      }
    `
  );

  return (
    <div className={cx(className, css.contacts)}>
      <LinkToSection to="references-section" className={css.address}>
        {address}
      </LinkToSection>
      <br />
      <div className={css.tel}>
        <Icon className={css.telIcon} name="phone" />
        <a href={`tel:${replace(telNumber, /\s/g, '')}`} className={css.telNumber}>
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
