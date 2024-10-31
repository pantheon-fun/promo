import React from 'react';

import { use as usePageContent } from '../../../utils/IndexPageContent.bs.js';

import { Gallery } from './components/Gallery';

export const GallerySection = () => {
  const pageContent = usePageContent();
  const {
    gallerySection: { galleryImages },
  } = pageContent;

  return (
    <section id="gallery-section">
      <Gallery galleryImages={galleryImages} />
    </section>
  );
};

export default GallerySection;
