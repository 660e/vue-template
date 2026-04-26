export default {
  path: '/example',
  children: [
    {
      path: 'playground',
      component: () => import('@/pages/example/Playground.vue'),
    },
    {
      path: 'tailwind',
      component: () => import('@/pages/example/Tailwind.vue'),
    },
    {
      path: 'websocket',
      component: () => import('@/pages/example/WebSocket.vue'),
    },
  ],
};
