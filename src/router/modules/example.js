export default {
  path: '/example',
  children: [
    {
      path: 'import-meta',
      component: () => import('@/pages/example/ImportMeta.vue'),
    },
    {
      path: 'playground',
      component: () => import('@/pages/example/Playground.vue'),
    },
    {
      path: 'random-user',
      component: () => import('@/pages/example/RandomUser.vue'),
    },
  ],
};
