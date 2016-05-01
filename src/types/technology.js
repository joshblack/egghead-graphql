import { GraphQLEnumType } from 'graphql';

export const technologiesEnum = new GraphQLEnumType({
  name: 'Technologies',
  values: {
    Elm: {
      value: 'elm',
    },
    D3: {
      value: 'd3',
    },
    CSS: {
      value: 'css',
    },
    JavaScript: {
      value: 'js',
    },
    React: {
      value: 'react',
    },
    Tools: {
      value: 'tools',
    },
    'Nodejs': {
      value: 'nodejs',
    },
    'angular1x': {},
    'angular2': {},
    typescript: {},
    'rxjs': {},
  },
});
