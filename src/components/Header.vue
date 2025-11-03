<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<template>
  <header class="flex px-10 mt-5 items-center max-w-[1920px] m-auto">
    <RouterLink to="/" class="w-[18%]">
      <span class=" font-bold text-2xl ">TAS</span>
      <span class=" font-bold text-2xl text-amber-400">KY.</span>
    </RouterLink>
    <div class="w-[82%] flex justify-end gap-5">
      <div class="w-[45%] relative">
        <input type="text" placeholder="Search for a project ..." class=" rounded-xl outline-none bg-gray-100 px-5 py-2 w-full">
        <img class="absolute top-1/4 right-2 size-4" src="../assets/header/search.png" alt="">
      </div>
      <div class=""></div>
      <div class="flex gap-3 items-center">
        <div class="text-center flex flex-col">
          <h1 class="">Alisher Baudinov</h1>
          <span class="text-xs text-gray-600">Software Engineer</span>
        </div>
        <div class="size-9">
          <img class="rounded-3xl" src="../assets/header/avatar.jpg" alt="">
        </div>
      </div>
    </div>
  </header>
</template>