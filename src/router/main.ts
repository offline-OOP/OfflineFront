import {RouteRecordRaw} from 'vue-router';

const routes : RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TheMain.vue'),
    children: [
      {
        path: '',
        redirect: '/map'
      },
      {
        path: 'list',
        component: () => import('pages/TheMainList.vue')
      },
      {
        path: 'map',
        component: () => import('pages/TheMainMap.vue')
      }

    ],
  },
];

export default routes;
