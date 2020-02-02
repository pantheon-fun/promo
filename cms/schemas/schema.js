import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import picture from './components/picture';
import references from './components/references';
import gameCard from './components/game-card';

import firstSection from './sections/first-section';
import aboutUsSection from './sections/about-us-section';
import gamesSection from './sections/games-section';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    references,
    picture,
    gameCard,
    firstSection,
    aboutUsSection,
    gamesSection,
  ]),
});
