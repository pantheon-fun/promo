import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './gallery-section.module.scss';
import { Heading } from '../../common/heading';
import { Gallery } from './components/gallery';

const GallerySection = () => {
  const {
    sanityGallerySection: { heading, galleryImages, albumBtn },
  } = useStaticQuery(
    graphql`
      query {
        sanityGallerySection {
          heading
          galleryImages {
            img {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alt
          }
          albumBtn {
            text
            url
          }
        }
      }
    `
  );

  return (
    <section className={Styles.gallerySection} id="gallery-section">
      <Heading>{heading}</Heading>
      <Gallery galleryImages={galleryImages} />
      <a
        href={albumBtn.url}
        className={Styles.albumBtn}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {albumBtn.text}
      </a>
    </section>
  );
};

export default GallerySection;
