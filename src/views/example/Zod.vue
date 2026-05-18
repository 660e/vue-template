<script setup>
import { z } from 'zod';

const schema = z.object({
  text: z.string().min(1, '请输入内容').min(6, '字符长度必须大于5个'),
  text2: z.string().min(1, '请输入内容').min(6, '字符长度必须大于5个'),
});

const form = reactive({
  text: '',
  text2: '',
});

const result = computed(() => schema.safeParse(form));
const hasSubmitted = ref(false);
const touchedFields = reactive({
  text: false,
  text2: false,
});

const errorMessages = computed(() => {
  const errors = {
    text: '',
    text2: '',
  };

  if (result.value.success) {
    return errors;
  }

  for (const issue of result.value.error.issues) {
    const fieldName = issue.path[0];

    if (typeof fieldName !== 'string' || errors[fieldName]) {
      continue;
    }

    if (!hasSubmitted.value && !touchedFields[fieldName]) {
      continue;
    }

    errors[fieldName] = issue.message;
  }

  return errors;
});

function handleInput(fieldName) {
  touchedFields[fieldName] = true;
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
      <input v-model="form.text" @input="handleInput('text')" autocomplete="off" class="w-full rounded border px-2 py-1" type="text" />
      <div class="min-h-6 text-sm text-red-500">{{ errorMessages.text }}</div>
    </div>

    <div class="space-y-2">
      <input v-model="form.text2" @input="handleInput('text2')" autocomplete="off" class="w-full rounded border px-2 py-1" type="text" />
      <div class="min-h-6 text-sm text-red-500">{{ errorMessages.text2 }}</div>
    </div>

    <button @click="submit" class="cursor-pointer rounded bg-neutral-200 px-3 py-1 duration-200 hover:bg-neutral-300">Submit</button>

    <pre>{{ form }}</pre>
    <pre>{{ result.success }}</pre>
  </div>
</template>
