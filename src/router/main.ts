import {RouteRecordRaw} from 'vue-router';

const routes : RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/TheMain.vue')
  },
];

export default routes;
