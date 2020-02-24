import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import picture from './components/picture';
import references from './components/references';
import gameCard from './components/game-card';
import link from './components/link';
import qa from './components/qa';
import pricePlus from './components/price-plus';

import firstSection from './sections/first-section';
import aboutUsSection from './sections/about-us-section';
import gamesSection from './sections/games-section';
import gallerySection from './sections/gallery-section';
import faqSection from './sections/faq-section';
import priceSection from './sections/price-section';
import priceListSection from './sections/price-list-section';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    /* elements */
    references,
    picture,
    gameCard,
    link,
    qa,
    pricePlus,
    /* sections */
    firstSection,
    aboutUsSection,
    gamesSection,
    gallerySection,
    faqSection,
    priceSection,
    priceListSection,
  ]),
});
