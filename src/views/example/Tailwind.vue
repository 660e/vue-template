<script setup>
import { Pencil } from '@lucide/vue';
</script>

<template>
  <div class="bg-background text-foreground flex h-screen items-center justify-center">
    <div class="bg-card w-80 rounded-lg p-4 shadow">
      <div>
        <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-md">
          <Pencil :size="20" class="text-background" />
        </div>
      </div>
    </div>
  </div>
</template>
