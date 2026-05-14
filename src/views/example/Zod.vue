<script setup>
import { z } from 'zod';

const schema = z.string().min(5, 'Text must be at least 5 characters long');
const text = ref('');
const result = computed(() => schema.safeParse(text.value));

function submit() {
  if (result.value.success) {
    console.log(result.value.data);
  } else {
    console.log(result.value);
    console.log(result.value.error.message);
    console.log(result.value.error.issues);
    console.log(z.treeifyError(result.value.error));
  }
}
</script>

<template>
  <div class="space-y-4 p-4 font-mono">
    <div class="flex gap-4">
      <input v-model="text" autocomplete="text" class="rounded border px-2 py-1" type="text" />
      <button @click="submit" class="cursor-pointer rounded bg-neutral-200 px-2 duration-200 hover:bg-neutral-300">Submit</button>
    </div>

    <pre>{{ result.success }}</pre>
    <pre>{{ result.error }}</pre>
    <pre>{{ z.treeifyError(result.error) }}</pre>
  </div>
</template>
