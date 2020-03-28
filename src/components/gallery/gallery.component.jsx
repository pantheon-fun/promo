import React, { useState } from 'react';
import Img from 'gatsby-image';
import useModal from '../../hooks/use-modal/use-modal.hook';

import Styles from './gallery.module.scss';

const Gallery = ({ galleryImages }) => {
  const [openedImageIdx, setOpenedImageIdx] = useState(null);

  const { openModal, Modal } = useModal();

  return (
    <ul className={Styles.gallery}>
      {galleryImages.map((galleryImage, idx) => (
        <li
          key={idx}
          onClick={e => {
            setOpenedImageIdx(idx);
            openModal(e);
          }}
          className={Styles.item}
        >
          <Img
            fluid={galleryImage.img.asset.fluid}
            className={Styles.image}
            alt={galleryImage.alt}
          />
        </li>
      ))}
      {openedImageIdx !== null && (
        <Modal>
          <Img
            fluid={galleryImages[openedImageIdx].img.asset.fluid}
            style={{ width: '80vw', maxHeight: '80vh' }}
            alt={galleryImages[openedImageIdx].alt}
          />
        </Modal>
      )}
    </ul>
  );
};

export default Gallery;
