<script setup lang="ts">
  import { ref } from 'vue';
import FormsInput from '../../components/UI/FormsInput.vue';
import FormsButton from '../../components/UI/FormsButton.vue';
import { useUserStore } from '../../App/store/useUsersStore';

const email = ref();
const password = ref();
const isError = ref(false);
const { login } = useUserStore();


</script>

<template>
  <section class="w-full h-full flex">
    <section class="w-1/2 h-screen bg-sky-500 flex items-center justify-center flex-col">
      <section>
        <span class="font-bold text-5xl text-white">TAS</span>
        <span class="font-bold text-5xl text-amber-400">KY.</span>
      </section>
      <img class="max-w-144" src="../../assets/catPurr.png" alt="">
      <span class="text-3xl text-white">Purr-fectly Plan Your Projects.</span>
    </section>
    <section class="w-1/2 h-screen flex items-center justify-center">
      <section class="max-w-100 w-full flex flex-col gap-5">
        <h1 class="text-3xl font-bold">Manage your time.</h1>
        <h1 class="text-md">Create your Tasky account</h1>
        <FormsInput v-model="email" type="email" class="px-7 py-4" placeholder="Email" />
        <FormsInput v-model="email" type="text" class="px-7 py-4" placeholder="First name" />
        <FormsInput v-model="email" type="text" class="px-7 py-4" placeholder="Last name" />
        <FormsInput v-model="email" type="text" class="px-7 py-4" placeholder="Role: e.g Frontend Developer" />
        <FormsInput v-model="password" class="px-7 py-4" placeholder="Password"  type="password" />
        <FormsButton @click="login(email, password).catch(() => isError = true)">Create accout</FormsButton>
        <section v-show="isError" class=" bg-red-500/30 p-5 rounded-2xl text-red-500">
          Your password or login is wrong, please try again
        </section>
      </section>
    </section>
  </section>
</template>
