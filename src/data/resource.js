import invariant from 'invariant';

export const resource = (name, collection) => {
  const createID = () => Math.random().toString(16).substr(2, 8);
  const collectionMap = collection.reduce((acc, item) => ({
    ...acc,
    [item.id]: item,
  }), {});

  const Entity = {
    all: () => Promise.resolve(collection),
    findBy: (spec) => {
      const filteredSet = collection.filter((record) => {
        return Object.keys(spec).every((rule) => {
          return record[rule] && record[rule] === spec[rule];
        });
      });

      return Promise.resolve(filteredSet[0]);
    },
    create: (spec) => {
      const id = createID();
      const record = {
        id,
        ...spec,
      };

      collection.push(record);
      collectionMap[id] = record;

      return Promise.resolve(record);
    },
    update: (id, spec) => {
      let record = collectionMap[id];

      record = {
        ...record,
        ...spec,
      };

      return Promise.resolve(record);
    },
    destroy: (id) => {
      invariant(
        collectionMap[id],
        'No record found with for the id: %s',
        id
      );

      delete collectionMap[id];
      let index;

      for (let i = 0; i < collection.length; i++) {
        const record = collection[i];

        if (record.id === id) {
          index = i;
          break;
        }
      }

      collection.splice(index, 1);

      return Promise.resolve();
    }
  };

  return Entity;
};
