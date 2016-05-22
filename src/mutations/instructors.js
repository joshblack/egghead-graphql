import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import { Instructor } from '../data/instructors';
import { instructorType } from '../types/instructor';

const createInstructorInput = new GraphQLInputObjectType({
  name: 'createInstructorInput',
  description: 'Input for creating an Instructor',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
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
  },
});

export const createInstructor = {
  name: 'createInstructor',
  type: instructorType,
  description: 'Add an instructor to the Egghead database.',
  args: {
    instructor: {
      type: new GraphQLNonNull(createInstructorInput),
      description: 'The instructor data to add.',
    }
  },
  resolve: (_, { instructor }) => {
    return Instructor.create(instructor);
  },
};
