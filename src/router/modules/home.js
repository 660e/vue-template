export default {
  path: '/',
  children: [
    {
      path: '',
      component: () => import('@/pages/home/index.vue'),
    },
  ],
};
