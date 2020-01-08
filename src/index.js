import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateSiemaSlider } from './js/packages/siema';

import { activateRealVhHeight } from './js/handlers/realVhHeight';
import { activateSmoothScroll } from './js/handlers/smoothScroll';
import { activateMasthead } from './js/handlers/mastheadHandler';
import { activateGallery } from './js/handlers/galleryHandler';
import { activateAccordion } from './js/handlers/accordionHandler';
import { activateBookform } from './js/handlers/bookformHandler';
import { activateContactCard } from './js/handlers/contactCardHandler';
import { activatePrivacy } from './js/handlers/privacyHandler';
import { activateForm } from './js/handlers/formHandler';

import { activateLazyloadObserver } from './js/observers/lazyload';

activateSiemaSlider();

activateRealVhHeight();
activateSmoothScroll();
activateMasthead();
activateGallery();
activateAccordion();
activateBookform();
activateContactCard();
activatePrivacy();
activateForm();

activateLazyloadObserver();
