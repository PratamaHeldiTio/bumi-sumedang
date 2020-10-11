import { openDB } from 'idb';

const dbPromise = openDB('bumi-sumedang', 1, {
  upgrade(database) {
    database.createObjectStore('store-favorite', { keyPath: 'id' });
  },
});

const FavoriteStoreIdb = {
  async getAllStore() {
    return (await dbPromise).getAll('store-favorite');
  },
  async addStore(Store) {
    return (await dbPromise).add('store-favorite', Store);
  },
  async deleteStore(id) {
    return (await dbPromise).delete('store-favorite', id);
  },
};

export default FavoriteStoreIdb;
