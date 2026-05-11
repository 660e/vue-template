<script setup>
import { User, Lock } from '@lucide/vue';

const formData = reactive({
  username: '',
  password: '',
});
</script>

<template>
  <div class="bg-background flex h-screen items-center justify-center">
    <form class="bg-card text-card-foreground w-100 space-y-4 rounded-lg p-8 shadow">
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
      <div class="relative">
        <Lock :size="20" class="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          v-model="formData.password"
          autocomplete="current-password"
          class="border-border focus:border-primary focus:ring-primary/30 h-10 w-full rounded-md border pr-3 pl-10 duration-200 outline-none focus:ring-3"
          name="password"
          type="password"
        />
      </div>
      <div>
        <span>Forgot password?</span>
      </div>
      <button class="bg-primary hover:bg-primary-hover text-primary-foreground w-full cursor-pointer rounded-md py-2 duration-200" type="submit">
        Sign in
      </button>
      <div>
        <span>Create an account</span>
      </div>
    </form>
  </div>
</template>
