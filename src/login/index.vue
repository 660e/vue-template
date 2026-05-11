<script setup>
import { User } from '@lucide/vue';

const formData = reactive({
  username: '',
  password: '',
});
</script>

<template>
  <div class="bg-background flex h-screen items-center justify-center">
    <div class="bg-card w-100 rounded-lg p-8 shadow">
      <div class="relative">
        <User :size="20" class="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          v-model="formData.username"
          autocomplete="username"
          class="border-border focus:border-primary focus:ring-primary/30 h-10 w-full rounded-md border pr-3 pl-10 duration-200 outline-none focus:ring-3"
          name="username"
          type="text"
        />
      </div>
    </div>
  </div>
</template>
