<script setup lang="ts">

const props = defineProps(['title','value','img', 'class'])


</script>

<template>
  <div :class='"p-5 bg-white rounded-xl w-full " + props.class'>
    <div class="p-5 bg-white rounded-xl w-full">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-medium">{{ props.title }}</h1>
        <span class="text-xl font-medium py-2 px-4 rounded-[10%] transition cursor-pointer hover:bg-gray-100">:</span>
      </div>
      <div v-if="$slots.default" class="">
        <slot></slot>
      </div>
      <section v-else class="flex justify-between items-center mt-2">
        <h2 class="text-2xl font-bold">{{ props.value }}</h2>
        <div class="p-5 bg-amber-400/15 rounded-2xl">
          <img class="size-10" :src="props.img" alt="">
        </div>
      </section>
    </div>
  </div>
</template>