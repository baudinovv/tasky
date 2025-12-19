import { ref , computed, watch, defineEmits } from "vue"
export function useTimer(initial : number) {
  const totalSeconds = ref(initial);
  let interval: number;
  let isRunning = ref(false);
  // Computed properties for time units
  const days = computed(() => Math.floor(totalSeconds.value / 86400));
  const hours = computed(() => Math.floor((totalSeconds.value % 86400) / 3600));
  const minutes = computed(() => Math.floor((totalSeconds.value % 3600) / 60));
  const seconds = computed(() => totalSeconds.value % 60);

  function update() {
    totalSeconds.value++;
  }

  function start() {
    isRunning.value = true;
    interval = setInterval(update, 1000);
  }

  function stop() {
    isRunning.value = false;
    clearInterval(interval);
  }

  function toggle() {
    if (isRunning.value) stop();
    else start();
  }

  function reset(newValue: number) {
    stop();
    
    totalSeconds.value = newValue;
    console.log("timer reseted to", newValue)
  }


  return {
    days, hours, minutes, seconds, update, start, stop, toggle, isRunning, reset, totalSeconds
  }

}
