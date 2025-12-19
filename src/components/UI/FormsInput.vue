<script setup lang="ts">
  const model = defineModel()
</script>

<template>
  <input
    v-model="model"
    type="text"
    class="rounded-xl outline-none bg-gray-100 w-full"
  />
</template>
