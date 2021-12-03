import {RouteRecordRaw} from 'vue-router';

const routes : RouteRecordRaw[] = [
  {
    path: '/welcome',
    component: () => import('pages/TheWelcome.vue')
  },
  {
    path: '/sign-in',
    component: () => import('pages/TheSignIn.vue')
  },
  {
    path: '/sign-up',
    component: () => import('pages/TheSignUp.vue')
  }
];

export default routes;
