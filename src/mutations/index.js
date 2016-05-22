import { GraphQLObjectType } from 'graphql';

import { createInstructor } from './instructors';

export const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createInstructor,
  },
});
