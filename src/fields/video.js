import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { videoType } from '../types/video';
import { getAllOfVideo, getVideo } from '../data/videos';

export const videoFields = {
  allVideos: {
    type: new GraphQLList(videoType),
    description: 'Get all of the videos on egghead.',
    resolve: getAllOfVideo,
  },
  video: {
    type: videoType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Get a specific video on egghead.',
        description: 'The id of the video',
      },
    },
    resolve: (_, args) => getVideo(args.id),
  },
};
