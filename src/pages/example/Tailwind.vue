<script setup>
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-red-100 sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100">
    <div @click="toggleDarkMode" class="flex h-40 w-80 flex-col rounded-md bg-white p-4 shadow dark:bg-neutral-900">
      <div class="h-10 w-10 rounded bg-blue-500"></div>
    </div>
  </div>
</template>
