import { renderHtmlInContainer } from '../helpers/renderHelpers';

import { elements } from '../utils/elements';

const { map } = elements;

export const getMap = () => map;

export const observeMap = observer => {
  observer.observe(map);
};

export const loadMap = () => {
  const mapScript = document.createElement('script');

  mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true`;

  renderHtmlInContainer('', map);
  map.appendChild(mapScript);
};
