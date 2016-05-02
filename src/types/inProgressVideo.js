import { GraphQLObjectType, GraphQLString } from 'graphql';
import { videoType } from './video';
import { getVideo } from '../data/videos';

export const inProgressVideoType = new GraphQLObjectType({
  name: 'InProgressVideo',
  descripton: 'A representation of the current stopping point in a video for a user',
  fields: () => ({
    video: {
      type: videoType,
      resolve: (inProgressVideo) => getVideo(inProgressVideo.videoId),
    },
    currentTime: {
      type: GraphQLString,
      description: 'The current time spot in the video that the user stopped at.',
      resolve: (inProgressVideo) => inProgressVideo.currentTime,
    },
  }),
});
