import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { subscriberType } from '../types/subscriber';
import { getAllOfSubscriber, getSubscriber } from '../data/subscribers';

export const subscriberFields = {
  allSubscribers: {
    type: new GraphQLList(subscriberType),
    description: 'Get all of the subscribers on egghead.',
    resolve: getAllOfSubscriber,
  },
  subscriber: {
    type: subscriberType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Get a specific egghead subscriber.',
        description: 'The id of the subscriber.',
      },
    },
    resolve: (_, args) => getSubscriber(args.id),
  },
};
