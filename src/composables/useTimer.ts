import { h, ref } from "vue"

export function useTimer() {

  const seconds = ref(0);
  const minutes = ref(0);
  const hours = ref(0);
  const days = ref(0);

  let interval: number
  let isRunning = ref(false)

  function update() {
    if (seconds.value === 59) {
      seconds.value = 0;
      minutes.value++;
    }
    if (minutes.value === 59) {
      minutes.value = 0;
      hours.value++;
    }
    if (hours.value === 24) {
      hours.value = 0;
      days.value++;
    }
    seconds.value++;
  }

  function start() {
    isRunning.value = true;
    interval = setInterval(update, 1000);
  }

  function stop() {
    isRunning.value = false;
    clearInterval(interval);
  }

  const toggle = () => {
    if (isRunning.value) stop();
    else start();
  }

  return { toggle , isRunning , days, hours, minutes, seconds };
}
