<script setup lang="ts">
import cCard from '../components/Card.vue';
import imgArrow from '../assets/homeCard/arrows.png'
import imgClock from '../assets/homeCard/clock.png'
import imgFolder from '../assets/homeCard/folder.png'
import cLi from '../components/ListItem.vue';
import stopwatch from '../components/Stopwatch.vue';

const formatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone: 'Asia/Almaty'
});

const projects = [
  { id: 1, title:"Project one", time:"00:40:00" },
  { id: 2, title:"Project two", time:"00:32:23" },
] 

const nowTime = new Date();



</script>

<template>
  <section class="flex max-w-[1920px] m-auto mt-20 h-screen">
    <aside class="">
      <nav class="px-10 justify-center">
        <ul class="flex flex-col gap-3">
          <li class="bg-black text-white px-9 py-4 rounded-xl flex gap-5">
            <img src="../assets/dashboard.png" alt="">
            <h4>Dashboard</h4>
          </li>
          <li class=" px-9 py-4 rounded-xl flex gap-5">
            <img src="../assets/timesheets.png" alt="">
            <h4>Timesheets</h4>
          </li>
          <li class=" px-9 py-4 rounded-xl flex gap-5">
            <img src="../assets/report.png" alt="">
            <h4>Report</h4>
          </li>
          <li class=" px-9 py-4 rounded-xl flex gap-5">
            <img src="../assets/settings.png" alt="">
            <h4>Settings</h4>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="w-full rounded-3xl bg-gray-100 p-10">
      <section class="flex justify-between">
        <div class="">
          <h1 class="text-4xl mb-2 font-medium mt-5">Today</h1>
          <h2 class="font-medium"> {{ formatter.format(nowTime) }} </h2>
        </div>
        <stopwatch />
      </section>
      <section class="flex gap-10 mt-5">
        <c-card 
          :img="imgArrow"
          title="Week Activity"
          value="0%"
        />
        <c-card 
          :img="imgClock"
          title="Hours Worked"
          value="40:00:00"
        />
        <c-card 
          :img="imgFolder"
          title="Project worked"
          value="2"
        />
      </section>
      <c-card class="mt-12" title="Projects">
        <ul class="flex flex-col gap-4 mt-5">
          <li 
            v-for="project in projects"
            @click="$router.push('/' + project.title)" 
          >
            <c-li 
              :img="imgFolder"
              :title="project.title"
              :time="project.time"
            />
          </li>
        </ul>
      </c-card>
    </main>
  </section>
</template>
