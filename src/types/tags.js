import { GraphQLEnumType } from 'graphql';

export const tagsEnum = new GraphQLEnumType({
  name: 'Tags',
  values: {
    javascript: {},
    graphql: {},
    graphiql: {},
    elm: {},
    d3: {},
    express: {},
  }
});
