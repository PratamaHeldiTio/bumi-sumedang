import 'regenerator-runtime';
import '../styles/clear-css.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/register.css';
import ServiceWorkerRegister from './utils/servisWorker-register';

import App from './views/app';

const app = new App({
  drawer: document.querySelector('#drawer'),
  button: document.querySelector('#nav-icon'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  ServiceWorkerRegister();
});
