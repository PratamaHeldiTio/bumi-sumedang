import data from './DATA.json';

const StoreDataSources = {
  async storeList() {
    return data.store;
  },
};

export default StoreDataSources;
