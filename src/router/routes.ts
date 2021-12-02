import { RouteRecordRaw } from 'vue-router';
import auth from './auth';
import entities from './entities';
import main from './main';
import notFound from './notFound';

const routes: RouteRecordRaw[] = [
  ...main,
  ...entities,
  ...auth,

  notFound // Always leave this as last one
];

export default routes;
