import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { videoType } from './video';
import { instructorType } from './instructor';

export const courseType = new GraphQLObjectType({
  name: 'Course',
  description: 'A collection of related videos based on a topic or technology.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
      description: 'The title of the course.',
    },
    summary: {
      type: GraphQLString,
      description: 'An overview of the objectives of the course.',
    },
    videos: {
      type: new GraphQLList(videoType),
      description: 'All the videos in the course.',
    },
    instructor: {
      type: instructorType,
      description: 'The instructor who created the course and its videos.',
    },
  }),
});
