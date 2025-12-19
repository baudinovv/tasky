import { onMounted, onUnmounted } from 'vue';

export function useGlobalKeydown(handler: (ev: KeyboardEvent) => void) {
  onMounted(() => {
    window.addEventListener('keydown', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handler);
  });
}