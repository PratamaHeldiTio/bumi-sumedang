import TemplateComponent from '../templates/templates-component';

const RegisterStore = {
  render() {
    return `
    <div class="store-register">
      <h1 class="main-title" tabindex="0">Daftarkan hasil panen anda untuk untuk jangkauan yang lebih luas</h1>
      <div id="storeRegister"></div>
    </div>
    `;
  },

  afterRender() {
    const storeRegisterContainer = document.querySelector('#storeRegister');
    storeRegisterContainer.innerHTML = TemplateComponent.templateStoreRegister();
  },
};
export default RegisterStore;
