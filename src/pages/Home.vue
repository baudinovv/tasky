<script setup lang="ts">
import cCard from '../components/Card.vue'
import imgArrow from '../assets/homeCard/arrows.png'
import imgClock from '../assets/homeCard/clock.png'
import imgFolder from '../assets/homeCard/folder.png'
import ListItem from '../components/ListItem.vue'
import stopwatch from '../components/Stopwatch.vue'

import Modal from '../components/Modal.vue'
import { computed, onMounted, Transition } from 'vue'

import { formatter } from '../utils/formatter'
import { useModal } from '../composables/useModal'
import { useProjects } from '../composables/useProjects'
import { useUserStore } from '../App/store/useUsersStore'

import SpinnerLoader from '../components/UI/SpinnerLoader.vue'
import { formatTime } from '../utils/formatTime'

const { projects, fetchProjects, loading } = useProjects()
const { user } = useUserStore()

onMounted(() => fetchProjects(user.id))

const nowTime = new Date()

const summedTime = computed(() => {
  let res = 0;
  for(let proj of projects.value){
    res += Number(proj.time);
  }
  return res;
})

const { isModalOpen, openModal, closeModal } = useModal()
</script>

<template>
  <section v-if="!loading">
    <section class="flex justify-between">
      <div class="">
        <h1 class="text-4xl mb-2 font-medium mt-5">Today</h1>
        <h2 class="font-medium">{{ formatter.format(nowTime) }}</h2>
      </div>
      <div class="w-84">
        <img src="../assets/cat.png" alt="" />
      </div>
      <stopwatch :initial="0" @click="openModal" :disabled="true" />
    </section>
    <section class="flex gap-10 mt-5">
      <c-card :img="imgArrow" title="Week Activity" value="0%" />
      <c-card :img="imgClock" title="Hours Worked" :value="formatTime(summedTime)" />
      <c-card :img="imgFolder" title="Project worked" :value="projects.length" />
    </section>
    <c-card class="mt-12 mb-5" title="Projects">
      <ul
        class="flex flex-col gap-4 mt-5"
        v-for="project in projects"
        @click="$router.push('/' + project.name)"
      >
        <list-item
          :img="imgFolder"
          :title="project.name"
          :time="formatTime(Number(project.time))"
        />
      </ul>
    </c-card>
  </section>
  <section class="w-full h-[80vh] flex justify-center items-center" v-else>
    <SpinnerLoader />
  </section>
  <!-- Modal -->
  <Transition>
    <modal v-if="isModalOpen" @close-modal="closeModal">
      <c-card class="max-w-[60%]" title="Choose your project">
        <ul
          class="flex flex-col gap-4 mt-5"
          v-for="project in projects"
          :key="project.id"
          @click="
            () => {
              $router.push('/' + project.name)
              closeModal()
            }
          "
        >
          <list-item
            :img="imgFolder"
            :title="project.name"
            :time="formatTime(Number(project.time))"
          />
        </ul>
      </c-card>
    </modal>
  </Transition>
</template>
