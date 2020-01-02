import { activateRealVhHeight } from '../helpers/realVhHeight';
import { activateSmoothScroll } from '../helpers/smoothScrollTo';
import { activateSiemaSlider } from '../packages/siema';

export const activateInterface = () => {
  activateRealVhHeight();
  activateSmoothScroll();
  activateSiemaSlider();
};
