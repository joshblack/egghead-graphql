import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { instructorFields } from './fields/instructor';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...instructorFields,
    },
  }),
});

export default schema;
