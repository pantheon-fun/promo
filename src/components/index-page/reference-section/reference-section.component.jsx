import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ScriptTag from 'react-script-tag';

import { WIDGET_OBERVER_OPTIONS } from '../../../utils/constants';

import { Spinner } from '../../common/spinner';
import { Container } from '../../layout/container';
import { ContactCard } from './components/contact-card';

import Styles from './reference-section.module.scss';

const MapScript = () => {
  return (
    <ScriptTag
      src={`https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true`}
    />
  );
};

const ReferenceSection = () => {
  const [mapWidget, setMapWidget] = useState(null);
  const [observerRef, inView] = useInView(WIDGET_OBERVER_OPTIONS);

  useEffect(() => {
    if (inView === true) {
      setMapWidget(<MapScript />);
    }
  }, [inView]);

  return (
    <section ref={observerRef} className={Styles.section} id="references-section">
      <div className={Styles.mapWidget}>
        <Spinner />
        {mapWidget}
      </div>
      <Container className={Styles.inner}>
        <ContactCard />
      </Container>
    </section>
  );
};

export default ReferenceSection;
