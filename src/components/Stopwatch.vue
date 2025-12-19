<script setup lang="ts">
import { useTimer } from '../composables/useTimer'
import { formatTime } from '../utils/formatTime';
import { watch } from 'vue';
const props = defineProps({
  disabled: {
    type: Boolean, 
    default : false
  },
  initial : {
    type: Number,
  }
})


const { isRunning, totalSeconds, toggle, update } = useTimer(props.initial);

const emit = defineEmits(['upd'])

watch(totalSeconds, () => {
  if(totalSeconds.value % 2 === 0){
    emit('upd', totalSeconds.value);
  }
})

</script>

<template>
  <button
    @click="!disabled ? toggle(): null"
    class="bg-white flex items-center  transition justify-center rounded-3xl gap-5 cursor-pointer px-10 py-8"
    type="button"
  >
    <h1 class="text-2xl font-bold w-[250px] text-center">
      {{
        formatTime(totalSeconds)
      }}
    </h1>
    <section
      :class="
        'transition rounded-xl p-4 ' +
        (disabled ? 'bg-gray-200' :
        (isRunning ? 'bg-red-500' : 'bg-amber-400'))
      "
    >
      <img v-if="!isRunning" class="size-4" src="../assets/play.png" alt="" />
      <div v-else class="size-4 bg-black rounded-xs"></div>
    </section>
  </button>
</template>
