<script setup>
import { User, Lock, ScanBarcode } from '@lucide/vue';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  code: z.string().min(1, 'Code is required'),
});
const formData = reactive({
  username: '',
  password: '',
  code: '',
});

const codeImage = ref('');
function refreshCode() {
  if (submitting.value) return;
  codeImage.value = `https://picsum.photos/200/200?${Date.now()}`;
}

onMounted(() => {
  refreshCode();
});

const submitting = ref(false);
const errorMessage = ref('');
function handleSubmit() {
  const result = formSchema.safeParse(formData);
  if (result.success) {
    console.log(result.data);

    submitting.value = true;
    errorMessage.value = '';
    setTimeout(() => {
      submitting.value = false;
    }, 2000);
  } else {
    console.log(result);
    console.log(result.error.issues);
    console.log(z.treeifyError(result.error));
    console.log(result.error.message);

    errorMessage.value = result.error.issues[0].message;
  }
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <form @submit.prevent="handleSubmit" class="bg-card w-100 space-y-4 rounded-lg p-8 shadow">
      <div class="text-muted-foreground relative">
        <User :size="20" class="absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          v-model="formData.username"
          :disabled="submitting"
          autocomplete="username"
          class="border-border focus:border-brand focus:ring-brand/30 h-10 w-full rounded-md border pr-3 pl-10 duration-200 outline-none placeholder:text-sm focus:ring-3 disabled:opacity-50"
          name="username"
          placeholder="Username"
          type="text"
          autofocus
        />
      </div>
      <div class="text-muted-foreground relative">
        <Lock :size="20" class="absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          v-model="formData.password"
          :disabled="submitting"
          autocomplete="current-password"
          class="border-border focus:border-brand focus:ring-brand/30 h-10 w-full rounded-md border pr-3 pl-10 duration-200 outline-none placeholder:text-sm focus:ring-3 disabled:opacity-50"
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div class="text-muted-foreground relative flex gap-4">
        <ScanBarcode :size="20" class="absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          v-model="formData.code"
          :disabled="submitting"
          autocomplete="one-time-code"
          class="border-border focus:border-brand focus:ring-brand/30 h-10 w-full rounded-md border pr-3 pl-10 duration-200 outline-none placeholder:text-sm focus:ring-3 disabled:opacity-50"
          name="code"
          placeholder="Code"
          type="text"
        />
        <img :src="codeImage" @click="refreshCode" class="border-border h-10 w-30 shrink-0 cursor-pointer rounded-md border" />
      </div>
      <button
        :disabled="submitting"
        class="bg-brand hover:bg-brand-hover text-brand-foreground w-full cursor-pointer rounded-md py-2 duration-200 disabled:opacity-50"
        type="submit"
      >
        {{ submitting ? 'Signing in...' : 'Sign in' }}
      </button>
      <div v-if="errorMessage && !submitting" class="text-error border-error bg-error-subtle rounded border p-2 text-sm leading-none">
        {{ errorMessage }}
      </div>
      <div class="flex justify-between">
        <button class="text-brand cursor-pointer text-sm leading-none hover:underline" type="button">Forgot password?</button>
        <button class="text-brand cursor-pointer text-sm leading-none hover:underline" type="button">Create an account</button>
      </div>
    </form>
  </div>
</template>
