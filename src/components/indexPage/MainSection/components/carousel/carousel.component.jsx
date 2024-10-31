/* eslint-disable react/prop-types */
import cx from 'classnames';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import React from 'react';

import 'pure-react-carousel/dist/react-carousel.es.css';

import { pictureType } from '@/utils/common-types';

import { make as LocalImageComponent } from '@/components/LocalImageComponent.bs';
import { Picture } from '@/components/Picture';

import swipeNextIconParams from './icons/swipe-next.icon.svg';
import swipePrevIconParams from './icons/swipe-prev.icon.svg';

import css from './carousel.module.scss';

export const CustomCarouselProvider = ({ children, slides }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      isIntrinsicHeight
      totalSlides={slides.length}
      isPlaying
      lockOnWindowScroll
      infinite
      interval={2500}
      className={css.carouselProvider}
    >
      {children}
    </CarouselProvider>
  );
};

CustomCarouselProvider.propTypes = {
  children: PropTypes.node.isRequired,
  slides: PropTypes.arrayOf(pictureType.isRequired).isRequired,
};

export const CustomCarousel = ({ slides }) => {
  return (
    <Slider className={css.carousel} moveThreshold={0.005}>
      {slides.map((slide, idx) => {
        return (
          <Slide
            className={css.slide}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            index={idx}
          >
            <Picture picture={slide} className={css.image} layout="fill" />
          </Slide>
        );
      })}
    </Slider>
  );
};

CustomCarousel.propTypes = {
  slides: PropTypes.arrayOf(pictureType.isRequired).isRequired,
};

export const CustomButtonNext = ({ className }) => {
  return (
    <ButtonNext className={cx(className, css.swipeArrow)}>
      <LocalImageComponent
        className={css.swipeIcon}
        src={swipeNextIconParams.src}
        alt="Стрелочка вправо. Посмотреть следующую фотографию в слайдере."
      />
    </ButtonNext>
  );
};

CustomButtonNext.propTypes = {
  className: PropTypes.string,
};

CustomButtonNext.defaultProps = {
  className: '',
};

export const CustomButtonBack = ({ className }) => {
  return (
    <ButtonBack className={cx(className, css.swipeArrow)}>
      <LocalImageComponent
        className={css.swipeIcon}
        src={swipePrevIconParams.src}
        alt="Стрелочка влево. Посмотреть предыдущую фотографию в слайдере."
      />
    </ButtonBack>
  );
};

// CustomButtonBack.propTypes = {
//   className: PropTypes.string(),
// };

// CustomButtonBack.defaultProps = {
//   className: '',
// };
