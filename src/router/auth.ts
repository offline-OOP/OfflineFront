import {RouteRecordRaw} from 'vue-router';

const routes : RouteRecordRaw[] = [
  {
    path: '/welcome',
    component: () => import('pages/TheWelcome.vue')
  },
  {
    path: '/sign-in',
    component: () => import('layouts/TheSign.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/TheSignIn.vue')
      }
    ]
  },
  {
    path: '/sign-up',
    component: () => import('layouts/TheSign.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/TheSignUp.vue')
      }
    ]
  }
];

export default routes;
