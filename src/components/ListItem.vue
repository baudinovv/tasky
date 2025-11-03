<script setup langs="ts">
const props = defineProps(['img', 'title', 'time']);
</script>

<template>
   <li
      class="border-1 border-gray-300 px-5 py-5 rounded-2xl flex justify-between cursor-pointer hover:bg-gray-100 transition"
   >
      <section class="flex items-center gap-4">
         <div class="p-2 bg-amber-400/15 rounded-xl">
            <img class="size-5" :src="img" alt="" />
         </div>
         <h1 class="font-bold">{{ props.title }}</h1>
      </section>
      <section>
         <div class="py-2 px-5 bg-amber-400/15 rounded-xl">{{ props.time }}</div>
      </section>
   </li>
</template>
