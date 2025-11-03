<script setup lang="ts">
import { useTimer } from '../composables/useTimer'

const initial = 'Start Time Tracker'

const { toggle, isRunning, days, hours, minutes, seconds } = useTimer()

</script>

<template>
  <section
    @click="toggle"
    class="bg-white flex items-center justify-center rounded-3xl gap-5 cursor-pointer px-10 py-8"
  >
    <h1 class="text-2xl font-bold w-[250px] text-center">
      {{
        seconds == 0
          ? initial
          : `${days > 9 ? '' : '0'}${days}:${hours > 9 ? '' : '0'}${hours}:${
              minutes > 9 ? '' : '0'
            }${minutes}:${seconds > 9 ? '' : '0'}${seconds}`
      }}
    </h1>
    <!-- <button class="rounded-xl bg-amber-400 p-4"> -->
    <button
      :class="
        'transition rounded-xl p-4 ' +
        (isRunning ? 'bg-red-500' : 'bg-amber-400')
      "
    >
      <img v-if="!isRunning" class="size-4" src="../assets/play.png" alt="" />
      <div v-else class="size-4 bg-black rounded-xs"></div>
    </button>
  </section>
</template>
