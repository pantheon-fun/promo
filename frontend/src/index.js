import '@babel/polyfill';

import './js/packages/lazysizes';

import 'smooth-smooth-scroll/polyfill';
import { initSmoothScroll } from 'smooth-smooth-scroll';

import { activateSiemaSlider } from './js/packages/siema';

import { activateRealVhHeight } from './js/handlers/realVhHeight';
import { activateMasthead } from './js/handlers/mastheadHandler';
import { activateGallery } from './js/handlers/galleryHandler';
import { activateAccordion } from './js/handlers/accordionHandler';
import { activateBookform } from './js/handlers/bookformHandler';
import { activateContactCard } from './js/handlers/contactCardHandler';
import { activatePrivacy } from './js/handlers/privacyHandler';
import { activateForm } from './js/handlers/formHandler';

import { activateLazyloadObserver } from './js/observers/lazyload';

import { elements } from './js/utils/elements';

const { mastheadElement } = elements;

activateSiemaSlider();
activateRealVhHeight();

initSmoothScroll({
  offsetTop: mastheadElement.offsetHeight - 3,
});

activateMasthead();
activateGallery();
activateAccordion();
activateBookform();
activateContactCard();
activatePrivacy();
activateForm();

activateLazyloadObserver();
