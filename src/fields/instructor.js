import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { instructorType } from '../types/instructor';
import { getAllOfInstructor, getInstructor } from '../data/instructors';

export const instructorFields = {
  allInstructors: {
    type: new GraphQLList(instructorType),
    description: 'Get all of the egghead instructors.',
    resolve: getAllOfInstructor,
  },
  instructor: {
    type: instructorType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Get a specific egghead instructor.',
        description: 'The id of the instructor.',
      },
    },
    resolve: (_, args) => getInstructor(args.id),
  },
};
