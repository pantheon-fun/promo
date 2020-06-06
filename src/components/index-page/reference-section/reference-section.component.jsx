import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useStaticQuery, graphql } from 'gatsby';
import ScriptTag from 'react-script-tag';

import { WIDGET_OBERVER_OPTIONS } from '../../../utils/constants';

import { Spinner } from '../../common/spinner';
import { Container } from '../../layout/container';
import { ContactCard } from './components/contact-card';

import Styles from './reference-section.module.scss';

const ReferenceSection = () => {
  const { sanityReferences: references } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          vkLink
          instLink
          telNumber
          address
          email
          ymapLink
          ymapScript
        }
      }
    `
  );

  const [mapWidget, setMapWidget] = useState(null);
  const [observerRef, inView] = useInView(WIDGET_OBERVER_OPTIONS);

  useEffect(() => {
    if (inView === true) {
      setMapWidget(<ScriptTag async src={references.ymapScript} />);
    }
  }, [inView, references.ymapScript]);

  return (
    <section ref={observerRef} className={Styles.section} id="references-section">
      <div className={Styles.mapWidget}>
        <Spinner />
        {mapWidget}
      </div>
      <Container className={Styles.inner}>
        <ContactCard references={references} />
      </Container>
    </section>
  );
};

export default ReferenceSection;
