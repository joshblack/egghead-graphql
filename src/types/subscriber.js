import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { videoType } from './video';
import { inProgressVideoType } from './inProgressVideo';
import { getVideo } from '../data/videos';

export const subscriberType = new GraphQLObjectType({
  name: 'Subscriber',
  description: 'A member of Egghead',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
      description: 'The name of the subscriber.',
    },
    email: {
      type: GraphQLString,
      description: 'The email of the subscriber.',
    },
    videosWatched: {
      type: new GraphQLList(videoType),
      description: 'A collection of all the videos that the user has watched',
      resolve: (subscriber) => subscriber.videosWatched.map(getVideo),
    },
    videosWatching: {
      type: new GraphQLList(inProgressVideoType),
      description: 'A collection of all the videos that the user is current watching.',
    },
    videosQueued: {
      type: new GraphQLList(videoType),
      description: 'A collection of all the videos that the user has queued up to watched.',
      resolve: (subscriber) => subscriber.videosQueued.map(getVideo),
    },
  }
});
