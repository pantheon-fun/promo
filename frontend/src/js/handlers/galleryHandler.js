import { showLightbox, fillLightboxWithChild } from './lightboxHandler';

export const activateGallery = () => {
  const galleryImages = [...document.querySelectorAll('.gallery__image')];

  galleryImages.forEach(galleryImage => {
    galleryImage.addEventListener('click', () => {
      const img = document.createElement('img');
      img.src = galleryImage.currentSrc;

      showLightbox();
      fillLightboxWithChild(img);
    });
  });
};
