import React from 'react';
import Img from 'gatsby-image';

import Styles from './gallery.module.scss';

export const Gallery = ({ galleryImages }) => {
  return (
    <ul className={Styles.gallery}>
      {galleryImages.map((galleryImage, i) => (
        <li key={i} className={Styles.item}>
          <Img
            fluid={galleryImage.img.asset.fluid}
            className={Styles.image}
            alt={galleryImage.alt}
          />
        </li>
      ))}
    </ul>
  );
};
