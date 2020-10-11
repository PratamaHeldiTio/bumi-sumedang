import UrlParser from '../routs/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import Routes from '../routs/routes';

class App {
  constructor({ drawer, button, content }) {
    this._drawer = drawer;
    this._button = button;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      button: this._button,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
