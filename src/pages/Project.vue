<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '../App/store/useUsersStore';
import stopwatch from '../components/Stopwatch.vue';
import { useProjects } from '../composables/useProjects';
import { useRoute } from 'vue-router';
import NotFound from './NotFound.vue';
import SpinnerLoader from '../components/UI/SpinnerLoader.vue';

const { fetchMainProject, mainProject, loading, error, updateProject } = useProjects();
const { user } = useUserStore();

const route = useRoute();

onMounted(async () => {
  await fetchMainProject(user?.id || "", route.params.title as string)
  console.log((mainProject.time));
});

</script>

<template>
  <section v-if="loading" class="w-full h-[80vh] flex justify-center items-center">
    <spinner-loader />
  </section>

  <section v-else-if="error">
    <not-found />
  </section>
  <section v-else class="w-full h-[80vh] flex justify-center items-center">
    <section>
      <div class="m-auto text-5xl text-center">
        This is <span class="text-amber-400 font-bold">{{ $route.params.title }}</span>
      </div>
      <stopwatch @upd="(updTime) => updateProject(mainProject.id, updTime)" :initial="Number(mainProject.time)" class="mt-5" :disabled="false" />
    </section>
  </section>
</template>