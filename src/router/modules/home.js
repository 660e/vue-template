export default {
  path: '/',
  redirect: { name: 'home' },
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/pages/home/index.vue'),
    },
  ],
};
