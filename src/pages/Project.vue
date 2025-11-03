<script setup ts="lang">
import stopwatch from '../components/Stopwatch.vue';
</script>

<template>
  <section class="absolute top-1/3 right-1/3">
    <div class="m-auto text-5xl">
      This is <span class="text-amber-400 font-bold">{{ $route.params.title }}</span>
    </div>
    <stopwatch />
  </section>
</template>