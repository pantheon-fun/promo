import { renderHtmlInContainer } from '../helpers/renderHelpers';

// import { spinnerHtml } from '../data/spinnerData';

import { elements } from '../utils/appElements';

const { calculator } = elements;

export const getCalculator = () => calculator;

export const observeCalculator = observer => {
  // renderHtmlInContainer(spinnerHtml, calculator);
  observer.observe(calculator);
};

export const loadCalculator = () => {
  const calcScript = document.createElement('script');
  const calcHtml = `<div class="uCalc_231405"></div>`;

  renderHtmlInContainer(calcHtml, calculator);

  calcScript.async = true;
  calcScript.src = `${
    document.location.protocol === 'https:' ? 'https:' : 'http:'
  }//ucalc.pro/api/widget.js?id=231405&t=${Math.floor(new Date() / 18e5)}`;
  document.querySelector('head').appendChild(calcScript);
};
