export default {
  path: '/',
  redirect: { name: 'home' },
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/login/index.vue'),
    },
    {
      path: 'home',
      name: 'home',
      component: () => import('@/pages/home.vue'),
    },
  ],
};
