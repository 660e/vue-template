<script setup>
import { Lock, Mail } from '@lucide/vue';
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-neutral-100">
    <div class="w-100 space-y-4 rounded-lg bg-white p-8 shadow">
      <div class="relative">
        <Mail :size="20" class="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
        <input
          class="h-12 w-full rounded border border-neutral-200 pl-10 duration-200 outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/30"
          type="text"
        />
      </div>
      <div class="relative">
        <Lock :size="20" class="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
        <input
          class="h-12 w-full rounded border border-neutral-200 pl-10 duration-200 outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/30"
          type="password"
        />
      </div>
    </div>
  </div>
</template>
