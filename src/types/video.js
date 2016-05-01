import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { instructorType } from './instructor';
import { technologiesEnum } from './technology';
// import { courseType } from './course';
// import { tagsEnum } from './tags';

import { getInstructor } from '../data/instructors';

export const videoType = new GraphQLObjectType({
  name: 'Video',
  description: 'An instructional video made by an instructor at Egghead for subscribers.',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
      description: 'The title of a video.',
    },
    technology: {
      type: technologiesEnum,
      description: 'The technology used in the video.',
    },
    description: {
      type: GraphQLString,
      description: 'A couple sentences summarizing the objective of the video.',
    },
    duration: {
      type: GraphQLString,
      description: 'The duration of the video.',
    },
    instructor: {
      type: instructorType,
      description: 'The person who made the video.',
      resolve: (video) => {
        return getInstructor(video.instructorId);
      }
    },
    // tags: {
      // type: new GraphQLList(tagsEnum),
      // description: 'All the tags related to the topic of a video.',
    // },
    // course: () => ({
      // type: courseType,
      // description: 'The course that the video belongs to, if it exists.',
    // }),
  }),
});
