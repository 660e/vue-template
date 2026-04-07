export default {
  path: '/example',
  children: [
    {
      path: 'playground',
      component: () => import('@/pages/example/Playground.vue'),
    },
    {
      path: 'websocket',
      component: () => import('@/pages/example/WebSocket.vue'),
    },
  ],
};
