import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { instructorFields } from './fields/instructor';
import { videoFields } from './fields/video';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...instructorFields,
      ...videoFields,
    },
  }),
});

export default schema;
