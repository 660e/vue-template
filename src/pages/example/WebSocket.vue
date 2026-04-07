<script setup>
const messages = ref([]);

onMounted(() => {
  const socket = new WebSocket('ws://localhost:8080');

  socket.addEventListener('open', () => {
    console.log('WebSocket connection established');

    socket.send('Hello, server!');
  });

  socket.addEventListener('message', (event) => {
    messages.value.push(JSON.parse(event.data).message);
  });

  socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
  });

  socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
  });
});
</script>

<template>
  <div class="p-4 font-mono">
    <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
  </div>
</template>
