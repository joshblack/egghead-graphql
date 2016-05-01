import { GraphQLObjectType, GraphQLString } from 'graphql';

export const subscriberType = new GraphQLObjectType({
  name: 'Subscriber',
  description: 'A member of Egghead',
  fields: {
    name: {

    },
    email: {

    },
    videosWatched: {

    },
    videosWatching: {

    },
    videosQueued: {

    },
  }
});
