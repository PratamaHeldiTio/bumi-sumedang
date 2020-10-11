import StoreDataSources from '../../data/store-data-sources';
import TemplateComponent from '../templates/templates-component';

const HomeStore = {
  render() {
    return `
      <div class="all-available"></div>
      <div class="store">
        <h1 class="main-title" tabindex="0">Pilih sesuka hati dan bayar tanpa menguras dompet</h1>
        <div id="storeList"></div>
      </div>
      `;
  },

  async afterRender() {
    const allAvailableContainer = document.querySelector('.all-available');
    allAvailableContainer.innerHTML = TemplateComponent.templateAllAvaialable();

    const storeList = await StoreDataSources.storeList();
    const storeListContainer = document.querySelector('#storeList');
    storeList.forEach((store) => {
      storeListContainer.innerHTML += TemplateComponent.templateStoreList(store);
    });
  },
};

export default HomeStore;
