<script setup>
import { randomuser } from '@/api/example';

const data = ref({});

onMounted(async () => {
  data.value = await randomuser();
});
</script>

<template>
  <pre>{{ data }}</pre>
</template>
