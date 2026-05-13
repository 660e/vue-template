export default {
  path: '/example',
  children: [
    {
      path: 'playground',
      component: () => import('@/views/example/Playground.vue'),
    },
    {
      path: 'tailwind',
      component: () => import('@/views/example/Tailwind.vue'),
    },
    {
      path: 'websocket',
      component: () => import('@/views/example/WebSocket.vue'),
    },
    {
      path: 'zod',
      component: () => import('@/views/example/Zod.vue'),
    },
  ],
};
