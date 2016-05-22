import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLEnumType
} from 'graphql';

import { Instructor } from '../data/instructors';
import { instructorType } from '../types/instructor';

const sortType = new GraphQLEnumType({
  name: 'SortEnum',
  description: 'Possible ways to sort an instructor list',
  values: {
    ASCENDING: {},
    DESCENDING: {}
  },
});

export const instructorFields = {
  allInstructors: {
    type: new GraphQLList(instructorType),
    description: 'Get all of the egghead instructors.',
    args: {
      sortBy: {
        type: sortType,
        description: 'How you want to sort the result.'
      }
    },
    resolve: async (_, { sortBy }) => {
      const instructors = await Instructor.all();
      const sortAscending = (a, b) => {
        const strA = a.name.toUpperCase();
        const strB = b.name.toUpperCase();

        if (strA < strB) {
          return -1;
        }
 
        if (strA > strB) {
          return 1;
        }

        return 0;
      };
      const sorted = instructors.sort(sortAscending);

      if (sortBy === 'DESCENDING') {
        return sorted.reverse();
      }

      return sorted;
    },
  },
  instructor: {
    type: instructorType,
    description: 'Get a specific egghead instructor.',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the instructor.',
      },
    },
    resolve: (_, args) => Instructor.findBy({ id: args.id }),
  },
};
