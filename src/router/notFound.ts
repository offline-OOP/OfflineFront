import {RouteRecordRaw} from 'vue-router';

const route : RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  component: () => import('pages/TheNotFound.vue'),
};

export default route;
