export default {
  path: '/',
  redirect: { name: 'home' },
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/pages/home.vue'),
    },
    {
      path: 'login',
      name: 'login',
      component: () => import('@/login/index.vue'),
    },
  ],
};
