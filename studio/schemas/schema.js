import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import * as documents from './documents';
import * as sections from './sections';
import * as objects from './objects';
import * as types from './types';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        ...Object.values(documents),
        ...Object.values(sections),
        ...Object.values(objects),
        ...Object.values(types),
    ]),
});
