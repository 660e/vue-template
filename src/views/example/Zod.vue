<script setup>
import { z } from 'zod';

const schema = z.object({
  text: z.string().min(1, '请输入内容').min(6, '字符长度必须大于5个'),
});

const form = reactive({
  text: '',
});

const result = computed(() => schema.safeParse(form));
const hasInteracted = ref(false);
const hasSubmitted = ref(false);

const errorMessage = computed(() => {
  if (!hasInteracted.value && !hasSubmitted.value) {
    return '';
  }

  if (result.value.success) {
    return '';
  }

  return result.value.error.issues[0]?.message ?? '';
});

function handleInput() {
  hasInteracted.value = true;
}

function submit() {
  hasSubmitted.value = true;

  const submitResult = schema.safeParse(form);

  if (!submitResult.success) {
    return;
  }

  console.log('submit success:', submitResult.data);
}
</script>

<template>
  <div class="space-y-4 p-4 font-mono">
    <div class="space-y-2">
      <input v-model="form.text" @input="handleInput" autocomplete="off" class="w-full rounded border px-2 py-1" type="text" />
      <div class="min-h-6 text-sm text-red-500">{{ errorMessage }}</div>
    </div>

    <button @click="submit" class="cursor-pointer rounded bg-neutral-200 px-3 py-1 duration-200 hover:bg-neutral-300">Submit</button>

    <pre>{{ form }}</pre>
    <pre>{{ result.success }}</pre>
  </div>
</template>
