<script setup>
import { Pencil } from '@lucide/vue';

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};
</script>

<template>
  <div @click="toggleDarkMode" class="flex h-screen items-center justify-center bg-neutral-100 dark:bg-neutral-900">
    <div class="h-40 w-80 rounded-lg bg-white p-4 shadow dark:bg-neutral-800">
      <div>
        <div class="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500">
          <Pencil :size="20" class="text-white" />
        </div>
      </div>
    </div>
  </div>
</template>
