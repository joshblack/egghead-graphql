import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { subscriberType } from '../types/subscriber';
import { Subscriber } from '../data/subscribers';

export const subscriberFields = {
  allSubscribers: {
    type: new GraphQLList(subscriberType),
    description: 'Get all of the subscribers on egghead.',
    resolve: Subscriber.all,
  },
  subscriber: {
    type: subscriberType,
    description: 'Get a specific egghead subscriber.',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the subscriber.',
      },
    },
    resolve: (_, args) => Subscriber.findBy({ id: args.id }),
  },
};
