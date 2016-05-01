import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { videoType } from '../types/video';
import { getAllOfVideo, getVideo } from '../data/videos';

export const videoFields = {
  allVideos: {
    type: new GraphQLList(videoType),
    resolve: getAllOfVideo,
  },
  video: {
    type: videoType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the video',
      },
    },
    resolve: (_, args) => getVideo(args.id),
  },
};
