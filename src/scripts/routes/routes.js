import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Cafelist from '../views/pages/listCafe';

const routes = {
  '/': Cafelist,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
