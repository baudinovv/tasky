<script setup lang="ts">
  import { computed, ref } from 'vue';
import FormsInput from '../../components/UI/FormsInput.vue';
import FormsButton from '../../components/UI/FormsButton.vue';
import { useUserStore } from '../../App/store/useUsersStore';

const email = ref();
const password = ref();
const isError = ref(false);
const { login } = useUserStore();

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
  } catch (error) {
    isError.value = true;
    console.log(error)
  }
};
</script>

<template>
  <section class="w-full h-full flex">
    <section class="w-1/2 h-screen flex items-center justify-center">
      <section class="max-w-100 w-full flex flex-col gap-5">
        <h1 class="text-3xl font-bold">Welcome back! </h1>
        <h1 class="text-md">Login to your account</h1>
        <FormsInput v-model="email" type="email" class="px-7 py-4" placeholder="Email" />
        <FormsInput v-model="password" class="px-7 py-4" placeholder="Password"  type="password" />
        <FormsButton @click="handleLogin">Sign in</FormsButton>
        <section v-show="isError" class=" bg-red-500/30 p-5 rounded-2xl text-red-500">
          Your password or login is wrong, please try again
        </section>
      </section>
    </section>
    <section class="w-1/2 h-screen bg-sky-500 flex items-center justify-center flex-col">
      <section>
        <span class="font-bold text-5xl text-white">TAS</span>
        <span class="font-bold text-5xl text-amber-400">KY.</span>
      </section>
      <img class="max-w-144" src="../../assets/catPlaying.png" alt="">
      <span class="text-3xl text-white">No More Paw-crastination. Let's Get Tasky!</span>
    </section>
  </section>
</template>
