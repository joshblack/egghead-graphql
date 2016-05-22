import {
  GraphQLSchema, GraphQLObjectType } from 'graphql';

import { instructorFields } from './fields/instructor';
import { videoFields } from './fields/video';
import { subscriberFields } from './fields/subscriber';

import { RootMutationType } from './mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...instructorFields,
      ...videoFields,
      ...subscriberFields,
    },
  }),
  mutation: RootMutationType,
});

export default schema;
