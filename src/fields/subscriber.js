import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { subscriberType } from '../types/subscriber';
import { getAllOfSubscriber, getSubscriber } from '../data/subscribers';

export const subscriberFields = {
  allSubscribers: {
    type: new GraphQLList(subscriberType),
    resolve: getAllOfSubscriber,
  },
  subscriber: {
    type: subscriberType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the subscriber.',
      },
    },
    resolve: (_, args) => getSubscriber(args.id),
  },
};
