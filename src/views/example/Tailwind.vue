<script setup>
import { Pencil } from '@lucide/vue';

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};
</script>

<template>
  <div @click="toggleDarkMode" class="bg-background flex h-screen items-center justify-center">
    <div class="h-40 w-80 rounded-lg bg-white p-4 shadow">
      <div>
        <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-md">
          <Pencil :size="20" class="text-white" />
        </div>
      </div>
    </div>
  </div>
</template>
