import {RouteRecordRaw} from 'vue-router';

const routes : RouteRecordRaw[] = [
  {
    path: '/event/:short_name',
    component: () => import('layouts/TheEntity.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/TheEvent.vue')
      },
      {
        path: 'edit',
        component: () => import('pages/TheEvent.vue'),
        props: {
          edit: true
        }
      }
    ]
  },
  {
    path: '/profile/:short_name',
    component: () => import('layouts/TheEntity.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/TheProfile.vue')
      },
      {
        path: 'edit',
        component: () => import('pages/TheProfile.vue'),
        props: {
          edit: true
        }
      }
    ]
  }
];

export default routes;
