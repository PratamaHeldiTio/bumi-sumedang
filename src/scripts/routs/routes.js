import HomeStore from '../views/pages/home-store';
import RegisterStore from '../views/pages/register-store';

const Routes = {
  '/': HomeStore, // default page
  '/toko': HomeStore,
  '/register': RegisterStore,
};

export default Routes;
