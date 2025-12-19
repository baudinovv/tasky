<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FormsInput from '../components/UI/FormsInput.vue'
import { useUserStore } from '../App/store/useUsersStore';

const { user } = useUserStore();
</script>
<template>
  <header class="flex px-10 mt-5 items-center max-w-[1920px] m-auto">
    <RouterLink to="/" class="w-[18%]">
      <span class="font-bold text-2xl">TAS</span>
      <span class="font-bold text-2xl text-amber-400">KY.</span>
    </RouterLink>
    <div class="w-[82%] flex justify-end gap-5">
      <div class="w-[45%] relative">
        <FormsInput placeholder="Search for a project ..." class="px-5 py-2" />
        <img
          class="absolute top-1/3 right-2 size-4"
          src="../assets/header/search.png"
          alt=""
        />
      </div>
      <div class=""></div>
      <div class="flex gap-3 items-center">
        <div class="text-center flex flex-col">
          <h1 class="">{{ user?.email }}</h1>
          <span class="text-xs text-gray-600">Software Engineer</span>
        </div>
        <div class="size-9">
          <img class="rounded-3xl" src="../assets/header/avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>
