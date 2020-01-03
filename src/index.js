import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateRealVhHeight } from './js/helpers/realVhHeight';
import { activateSmoothScroll } from './js/helpers/smoothScrollTo';
import { activateSiemaSlider } from './js/packages/siema';

activateRealVhHeight();
activateSmoothScroll();
activateSiemaSlider();
