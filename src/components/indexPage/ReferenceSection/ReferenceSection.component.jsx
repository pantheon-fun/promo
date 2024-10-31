import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { WIDGET_OBERVER_OPTIONS } from '@/utils/constants';

import { make as Spinner } from '@/components/SpinnerComponent.bs';

import css from './ReferenceSection.module.scss';

const MAP_HEIGHT = 500;

const MapWidget = ({ height, src }) => {
  const [mapWidget, setMapWidget] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [observerRef, inView] = useInView(WIDGET_OBERVER_OPTIONS);

  useEffect(() => {
    if (inView === true) {
      setMapWidget(
        <iframe
          src={src}
          frameBorder={0}
          title="Карта"
          onLoad={() => {
            // Дергается верстка в айфрейме
            setTimeout(() => {
              setIsLoading(false);
            }, 777);
          }}
          allowFullScreen
          style={{
            height,
          }}
          className={css.mapWidgetIframe}
        />
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className={cx(css.mapWidget, { [css.mapWidgetLoading]: isLoading })} ref={observerRef}>
      <Spinner />
      {mapWidget}
    </div>
  );
};

const ReferenceSection = () => {
  return (
    <section className={css.section} style={{ height: MAP_HEIGHT }} id="references-section">
      <MapWidget src="https://yandex.ru/map-widget/v1/-/CCUiz2Ex2D" height={MAP_HEIGHT} />
    </section>
  );
};

export default ReferenceSection;
