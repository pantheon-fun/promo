import PropTypes from 'prop-types';
import React from 'react';

import { pictureType } from '@/utils/common-types';

import { Picture } from '@/components/Picture';

import css from './Gallery.module.scss';

const Gallery = ({ galleryImages }) => {
  return (
    <ul className={css.gallery}>
      {galleryImages.map((galleryImage, idx) => {
        return (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className={css.item}
          >
            <Picture picture={galleryImage} layout="fill" className={css.image} />
          </li>
        );
      })}
    </ul>
  );
};

Gallery.propTypes = {
  galleryImages: PropTypes.arrayOf(pictureType.isRequired).isRequired,
};

export default Gallery;
