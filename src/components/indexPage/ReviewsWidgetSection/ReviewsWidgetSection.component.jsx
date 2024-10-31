import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { WIDGET_OBERVER_OPTIONS } from '@/utils/constants';

import { make as Container } from '@/components/ContainerComponent.bs';
import { make as Heading } from '@/components/HeadingComponent.bs';
import { make as Spinner } from '@/components/SpinnerComponent.bs';

import css from './ReviewsWidgetSection.module.scss';

const ReviewsWidget = ({ src, mapSrc }) => {
  const [widget, setWidget] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [observerRef, inView] = useInView(WIDGET_OBERVER_OPTIONS);

  useEffect(() => {
    if (inView === true) {
      setWidget(
        <iframe
          title="Виджет с отзывами"
          className={css.widgetIframe}
          src={src}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      className={cx(css.widgetContainer, { [css.widgetContainerLoading]: isLoading })}
      ref={observerRef}
    >
      <Spinner inverted />
      {widget}
      <a href={mapSrc} target="_blank" rel="noreferrer" className={css.widgetFooter}>
        Pantheon на карте — Яндекс.Карты
      </a>
    </div>
  );
};

const ReviewsWidgetSection = () => {
  return (
    <section className={css.reviewsWidgetSection} id="reviews-widget-section">
      <Container className={css.inner}>
        <Heading className={css.heading}>Отзывы</Heading>
        <ReviewsWidget
          src="https://yandex.ru/maps-reviews-widget/52710844172?comments"
          mapSrc="https://yandex.ru/maps/org/pantheon/52710844172/"
        />
      </Container>
    </section>
  );
};

export default ReviewsWidgetSection;
