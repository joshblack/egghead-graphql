import { GraphQLInputObjectType, GraphQLObjectType } from 'graphql';

// WIP
const createVideoInput = new GraphQLInputObjectType({
  name: 'createVideoInput',
  description: 'Fields for creating a new Egghead video',
  fields: {
    title: {
      type: GraphQLString,
      description: 'The title of the video.',
    },
  },
});

export const createVideo = new GraphQLObjectType({

});
