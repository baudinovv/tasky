import { ref, watch } from "vue"
import type { Ref } from "vue"

export function useModal() {
  let isModalOpen: Ref<boolean> = ref(false)

  function openModal(): void {
    isModalOpen.value = true
  }

  function closeModal(): void {
    isModalOpen.value = false
  }

  watch(isModalOpen, () => {
    if(isModalOpen.value) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  })

  return { isModalOpen, openModal, closeModal }
}