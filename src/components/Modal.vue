<script setup lang="ts">
import { Transition } from 'vue'

const props = defineProps({
  closeModal: {
    type: Function,
    default: (): void => {},
  },
})
</script>

<template>
  <Transition>
    <div
      class="bg-black/60 fixed top-0 left-0 w-full h-full flex justify-center items-center"
      @click.self="$emit('closeModal')"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
