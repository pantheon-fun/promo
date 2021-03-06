import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import Img from 'gatsby-image';
import map from 'lodash/map';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { fluidImageType } from '../../../../../utils/common-types';

import swipeNextIcon from './icons/swipe-next.icon.svg';
import swipePrevIcon from './icons/swipe-prev.icon.svg';

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
  slides: PropTypes.arrayOf(fluidImageType.isRequired).isRequired,
};

export const CustomCarousel = ({ slides }) => {
  return (
    <Slider className={css.carousel} moveThreshold={0.005}>
      {map(slides, (slide, i) => (
        <Slide className={css.slide} key={i} index={i}>
          <Img fluid={slide.img.asset.fluid} className={css.image} alt={slide.alt} />
        </Slide>
      ))}
    </Slider>
  );
};

CustomCarousel.propTypes = {
  slides: PropTypes.arrayOf(fluidImageType.isRequired).isRequired,
};

export const CustomButtonNext = ({ className }) => {
  return (
    <ButtonNext className={cx(className, css.swipeArrow)}>
      <img
        className={css.swipeIcon}
        src={swipeNextIcon}
        alt="Стрелочка вправо. Посмотреть следующую фотографию в слайдере."
      />
    </ButtonNext>
  );
};

export const CustomButtonBack = ({ className }) => {
  return (
    <ButtonBack className={cx(className, css.swipeArrow)}>
      <img
        className={css.swipeIcon}
        src={swipePrevIcon}
        alt="Стрелочка влево. Посмотреть предыдущую фотографию в слайдере."
      />
    </ButtonBack>
  );
};
