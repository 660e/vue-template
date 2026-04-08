<script setup>
import { Camera } from '@lucide/vue';

import { randomuser } from '@/api/example';
import { is } from '@/utils/is';

const env = import.meta.env;
const data = ref({});

onMounted(async () => {
  data.value = await randomuser();
});
</script>

<template>
  <div class="space-y-4 p-4 font-mono">
    <div>
      <Camera />
    </div>
    <ComponentExampleA />
    <ComponentExampleB />
    <div>
      <div>{{ is.array([1, 2, 3]) }} {{ is.array(undefined) }}</div>
      <div>{{ is.author('660e') }} {{ is.author(undefined) }}</div>
      <div>{{ is.bigint(123n) }} {{ is.bigint(undefined) }}</div>
      <div>{{ is.boolean(true) }} {{ is.boolean(undefined) }}</div>
      <div>{{ is.date(new Date()) }} {{ is.date(undefined) }}</div>
      <div>{{ is.function(() => {}) }} {{ is.function(undefined) }}</div>
      <div>{{ is.map(new Map()) }} {{ is.map(undefined) }}</div>
      <div>{{ is.null(null) }} {{ is.null(undefined) }}</div>
      <div>{{ is.number(1) }} {{ is.number(undefined) }}</div>
      <div>{{ is.object({}) }} {{ is.object(undefined) }}</div>
      <div>{{ is.set(new Set()) }} {{ is.set(undefined) }}</div>
      <div>{{ is.string('') }} {{ is.string(undefined) }}</div>
      <div>{{ is.symbol(Symbol()) }} {{ is.symbol(undefined) }}</div>
      <div>{{ is.undefined(undefined) }}</div>
    </div>
    <pre>{{ env }}</pre>
    <pre>{{ data.info }}</pre>
  </div>
</template>
