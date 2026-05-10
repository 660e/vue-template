<script setup>
import { Pencil } from '@lucide/vue';

const root = document.documentElement;

function setMode(mode) {
  root.dataset.mode = mode;
}

function setTheme(theme) {
  root.dataset.theme = theme;
}
</script>

<template>
  <div class="bg-background text-foreground flex h-screen items-center justify-center">
    <div class="bg-card w-80 rounded-lg p-4 shadow">
      <div>
        <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-md">
          <Pencil :size="20" class="text-white" />
        </div>
      </div>
      <div class="pt-2 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iste.</div>
      <div class="flex justify-center gap-2 text-sm leading-none">
        <div @click="setMode('light')" class="bg-background cursor-pointer rounded-full px-2 py-1">light</div>
        <div @click="setMode('dark')" class="bg-background cursor-pointer rounded-full px-2 py-1">dark</div>
        <div @click="setTheme('blue')" class="bg-background cursor-pointer rounded-full px-2 py-1">blue</div>
        <div @click="setTheme('green')" class="bg-background cursor-pointer rounded-full px-2 py-1">green</div>
        <div @click="setTheme('red')" class="bg-background cursor-pointer rounded-full px-2 py-1">red</div>
      </div>
    </div>
  </div>
</template>
