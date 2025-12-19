<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeIcon from '../components/icons/HomeIcon.vue'
import ReportIcon from '../components/icons/ReportIcon.vue'
import SettingsIcon from '../components/icons/SettingsIcon.vue'
import FormsButton from '../components/UI/FormsButton.vue';
import { useUserStore } from '../App/store/useUsersStore';

const {logout} = useUserStore()

</script>

<template>
  <aside class="">
    <nav class="px-10 flex flex-col justify-between">
      <ul class="flex flex-col gap-3">
        <RouterLink
          to="/"
          :class="`${
            $route.path === '/' ? 'bg-black text-white' : ''
          } px-9 py-4 rounded-xl flex gap-5`"
        >
          <home-icon :mode="$route.path === '/' ? 'dark' : 'light'" />
          <h4>Dashboard</h4>
        </RouterLink>
        <RouterLink
          to="/tasks"
          :class="`${
            $route.path === '/tasks' ? 'bg-black text-white' : ''
          } px-9 py-4 rounded-xl flex gap-5`"
        >
          <report-icon :mode="$route.path === '/tasks' ? 'dark' : 'light'" />
          <h4>Tasks</h4>
        </RouterLink>
        <RouterLink
          to="/settings"
          :class="`${
            $route.path === '/settings' ? 'bg-black text-white' : ''
          } px-9 py-4 rounded-xl flex gap-5`"
        >
          <settings-icon
            :mode="$route.path === '/settings' ? 'dark' : 'light'"
          />
          <h4>Settings</h4>
        </RouterLink>
      </ul>
      <FormsButton @click="logout" class="w-full mt-5 bg-red-500 hover:border-red-500 hover:text-red-500">Sign out</FormsButton> 
    </nav>
  </aside>
</template>
