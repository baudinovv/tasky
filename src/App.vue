<script setup lang="ts">
import { RouterView } from 'vue-router'
import cHeader from './widgets/Header.vue'
import NavMenu from './widgets/NavMenu.vue';

</script>

<template>
  <section v-if="!$route.path.includes('/login') && !$route.path.includes('/reg') ">
    <c-header />
    <section class="bg-color-bg flex w-full pt-15 max-w-[1920px] m-auto" >
      <NavMenu  />
      <Transition>
        <section class="flex max-w-[1920px] justify-center m-auto w-full px-5">
          <main class="w-full rounded-3xl bg-gray-100 p-10 pb-0">
            <RouterView />
          </main>
        </section>
      </Transition>
    </section>
  </section>
  <section v-else>
    <RouterView />
  </section>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>