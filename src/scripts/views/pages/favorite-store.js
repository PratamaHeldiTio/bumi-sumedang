import TemplateComponent from '../templates/templates-component';
import StoreDataSources from '../../data/store-data-sources';

const FavoritStore = {
  render() {
    return `
      <div class="store">
        <h1 class="main-title" tabindex="0">Ayok langsung beli barang favorit anda</h1>
        <div id="storeList"></div>
      </div>
      `;
  },

  async afterRender() {
    const storeList = await StoreDataSources.storeList();
    const storeListContainer = document.querySelector('#storeList');
    storeList.forEach((store) => {
      storeListContainer.innerHTML += TemplateComponent.templateStoreList(store);
    });
  },
};

export default FavoritStore;
