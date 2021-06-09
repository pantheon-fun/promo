import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import css from './reservation.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { Icon } from '../../common/icon';

const ReservationSection = () => {
  const { sanityReferences: references } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          vkLink
          instLink
          telNumber
          address
          email
        }
      }
    `
  );

  return (
    <section className={css.reservationSection} id="reservation-section">
      <Container className={css.inner}>
        <Heading className={css.heading}>Забронировать</Heading>
        <ul className={css.sources}>
          <li>
            <a className={css.source} href={`tel:${references}`}>
              <Icon className={css.sourceIcon} name="phone" />
              <div className={css.sourceLink}>
                По телефону: <span className={css.sourceLinkPhone}>{references.telNumber}</span>
              </div>
            </a>
          </li>
          <li>
            <a
              className={css.source}
              href={references.vkLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={css.sourceIcon} name="vk" />
              <div className={css.sourceLink}>Через ВКонтакте</div>
            </a>
          </li>
          <li>
            <a
              className={css.source}
              // TODO: Move to cms
              href="https://api.whatsapp.com/send?phone=79777220960"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={css.sourceIcon} name="whatsapp" />
              <div className={css.sourceLink}>По WhatsApp</div>
            </a>
          </li>
          <li>
            <a
              className={css.source}
              href={references.instLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={css.sourceIcon} name="instagram" />
              <div className={css.sourceLink}>Через Instagram</div>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ReservationSection;
