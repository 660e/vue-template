export default {
  path: '/example',
  children: [
    {
      path: 'playground',
      component: () => import('@/pages/example/Playground.vue'),
    },
  ],
};
