export const resource = (name, collection) => {
  const collectionMap = collection.reduce((acc, item) => ({
    ...acc,
    [item.id]: item,
  }), {});

  return {
    [`getAllOf${name}`]: () => Promise.resolve(collection),
    [`get${name}`]: (id) => Promise.resolve(collectionMap[id]),
  };
};
