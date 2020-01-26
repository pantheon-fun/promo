import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import firstSection from './first-section';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([firstSection]),
});
