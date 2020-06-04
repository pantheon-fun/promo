import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './experemental-section.module.scss';

import { Container } from '../../layout/container';
import { Heading } from '../../common/heading';
import { Text } from '../../common/text';

// async function fetchSmth() {
//   const rowRes = await fetch(
//     'https://vk.com/dev/photos.getAlbums?params[owner_id]=185014513&params[need_system]=0&params[need_covers]=0&params[photo_sizes]=0&params[v]=5.107'
//   );
//   const res = await JSON.parse(rowRes);

//   console.log(res);
// }

const ExperementalSection = () => {
  useEffect(() => {
    fetchSmth();
  }, []);

  return (
    <section className={Styles.section}>
      <Container>
        <Heading>Test</Heading>
        <Text>Hello</Text>
      </Container>
    </section>
  );
};

export default ExperementalSection;
