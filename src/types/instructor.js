import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { videoType } from './video';
import { courseType } from './course';

import { getVideo } from '../data/videos';

export const instructorType = new GraphQLObjectType({
  name: 'Instructor',
  description: 'A member of Egghead who produces videos to help teach subscribers.',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
      description: 'The name of an instructor',
    },
    handle: {
      type: GraphQLString,
      description: 'The Twitter handle of an instructor.',
    },
    bio: {
      type: GraphQLString,
      description: 'A brief description of an instructor.',
    },
    site: {
      type: GraphQLString,
      description: 'The personal website of the instructor.',
    },
    avatar: {
      type: GraphQLString,
      description: 'A URL to an avatar image of an instructor.',
    },
    videos: {
      type: new GraphQLList(videoType),
      description: 'All the videos that an instructor has created.',
      resolve: (instructor) => {
        return instructor.videos.map(getVideo);
      },
    },
    // courses: () => ({
      // type; new GraphQLList(courseType),
      // description: 'All the courses that an instructor has created.',
    // }),
  }),
});
