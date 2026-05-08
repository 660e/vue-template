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
          <Pencil :size="20" class="text-background" />
        </div>
      </div>
      <div></div>
      <div>
        <div @click="setMode('light')">light</div>
        <div @click="setMode('dark')">dark</div>
        <div @click="setTheme('blue')">blue</div>
        <div @click="setTheme('green')">green</div>
        <div @click="setTheme('red')">red</div>
      </div>
    </div>
  </div>
</template>
