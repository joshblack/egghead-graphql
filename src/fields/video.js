import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { videoType } from '../types/video';
import { Video } from '../data/videos';

export const videoFields = {
  allVideos: {
    type: new GraphQLList(videoType),
    description: 'Get all of the videos on egghead.',
    resolve: Video.all,
  },
  video: {
    type: videoType,
    description: 'Get a specific video on egghead.',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the video',
      },
    },
    resolve: (_, args) => Video.findBy({ id: args.id }),
  },
};
