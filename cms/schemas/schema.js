import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import picture from './picture';
import references from './references';

import firstSection from './first-section';
import aboutUsSection from './about-us-section';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([references, picture, firstSection, aboutUsSection]),
});
